<template>
  <div id="app">
    <h4>Users</h4>
    <ul>
      <li v-for="user in users" :key="`user_${user.id}`">
        <pre>{{ user }}</pre>
      </li>
    </ul>
    <h4>Roles</h4>
    <ul>
      <li v-for="role in roles" :key="`role_${role.id}`">
        <pre>{{ role }}</pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    models() {
      return this.$store.$db().models();
    },
    users() {
      return this.models.users.all();
    },
    roles() {
      return this.models.roles.all();
    }
  },
  created() {
    this.models.users.insert({
      data: [{ id: 1, roles: [{ id: 111 }] }, { id: 2, roles: [{ id: 222 }] }]
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h4 {
  color: #42b983;
}
</style>
