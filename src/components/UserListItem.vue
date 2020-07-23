<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox
        :input-value="user.active"
        color="primary"
        @click.stop="updateUserStatus"
      />
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>
        {{ user.name }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { User } from '@/types';

export default Vue.extend({
  name: 'UserListItem',

  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },

  methods: {
    updateUserStatus() {
      const { active } = this.user;
      this.$emit('update-user-status', !active);
    },
  },
});
</script>
