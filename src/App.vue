<template>
  <router-view :userName="userName" />
</template>
<script>
export default {
  mounted() {
    const arr = [
      { name: "Eugene", password: "123", token: "123", confirmed: true },
      { name: "Jack", password: "123", token: "321", confirmed: false },
    ];
    localStorage.setItem('token', '123')
    localStorage.setItem("users", JSON.stringify(arr));
    this.$store.dispatch('authUser')
  },
  computed: {
    userName(){
      return this.$store.getters.getUserName
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
