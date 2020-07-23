# Notes

* Feel free to use any and all resources including, but not limited to:
    * [Vue docs](https://vuejs.org/v2/guide/)
    * [Google](https://google.com)
    * [Stackoverflow](https://stackoverflow.com/)
    * Me
    
* The project includes vuetify, so feel free to use any components or styling that comes with that library


# Exercises

1. Add an array of users to the vue instance that contains 5 fake users.  A user should contain the following properties:
    * Name (String)
    * Active (Boolean)
    
2. Dispay the list of user's and show the following information for each:
    * Name
    * Status checkbox
        * Should be checked if `active` is true
        * Should be unchecked otherwise

3. Add additional row to the bottom for adding new users
    * Add the new user when the "Save User" button is clicked
    * The user should default to inactive
       
4. Add a checkbox labelled "Show only active users"
    * When the checkbox is checked, display only the active users
    * When it is unchecked, display all users

5. Update the text color of the rows based on the user's status
    * If the user is active, change the font color to green
    * If the user is not active, change the font color to red
