<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-toolbar
      color="blue-grey darken-4"
      dark
    >
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="showNewUserInput"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>
    <UsersList
      :users="users"
      :new-user-input-visible="newUserInputVisible"
      @update-user-status="updateUserStatus"
      @add-user="addUser"
    />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import UsersList from '@/components/UsersList.vue';

interface UserStatusUpdateEvent {
  index: number;
  active: boolean;
}

export default Vue.extend({
  name: 'Users',

  components: {
    UsersList,
  },

  data: () => ({
    newUserInputVisible: false,
    users: [
      { name: 'User 1', active: true },
      { name: 'User 2', active: false },
      { name: 'User 3', active: true },
      { name: 'User 4', active: false },
      { name: 'User 5', active: true },
    ],
  }),

  methods: {
    addUser(user: string) {
      this.users.push({ name: user, active: true });
      this.newUserInputVisible = false;
    },
    showNewUserInput() {
      this.newUserInputVisible = true;
    },
    updateUserStatus({ index, active }: UserStatusUpdateEvent) {
      const { [index]: user } = this.users;
      if (user) {
        user.active = active;
      }
    },
  },
});
</script>
