<template>
  <div class="user">User Page</div>
</template>
<script>
export default {
  mounted(){
    console.log(this.$store.getters.getUserData);
  }
}
</script>