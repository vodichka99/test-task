<template>
  <div class="home">
    <div id="nav">
      <router-link :to="{name: 'registration'}">Новый пользователь</router-link> |
      <router-link :to="{name: 'confirmation', params: { username: userName }}">Приглашенный пользователь</router-link> |
      <router-link :to="{name: 'userpage', params: { username: userName }}">Зарегистрированный пользователь</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userName: String
  },
}
</script>