<template>
  <div class="info-bar">
    <img class="vue-logo" alt="Vue logo" src="../assets/logo.png">
    <div v-if="clickedCoords" class="click-address">Адресс клика: {{clickedCoords}}</div>
    <div v-else class="click-info">Кликните на карту, чтобы увидеть адрес клика</div>
  </div>
</template>

<script>
  export default {
    name: 'info-bar',
    props: ['clickedCoords']
  }
</script>

<style scoped>
  .info-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .vue-logo {
    margin-right: 40px;
  }
</style>
