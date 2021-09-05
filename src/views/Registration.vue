<template>
  <div class="registration">
    <h3>Регистрация</h3>
    <form @submit.prevent>
      <input type="text" placeholder="Введите ваше имя" v-model="name" />
      <input
        type="password"
        placeholder="Придумайте пароль"
        v-model="password"
      />
      <button @click="addUser">Продолжить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser", {
        name: this.name,
        password: this.password,
      });
      this.$router.push({
        name: "confirmation",
        params: { username: this.name },
      });
    },
  },
};
</script>
