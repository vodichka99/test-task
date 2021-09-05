<template>
  <div class="confirmation">
    <span>Вы подтверждаете активацию вашего аккаунта?</span>
    <button @click="confirmUser">Подтверждаю</button>
  </div>
</template>

<script>
export default {
  methods: {
    confirmUser(){
      this.$store.dispatch('confirmUser')
      this.$router.push({name: 'userpage', params: { username: this.$store.getters.getUserName }})
    }
  }
}
</script>