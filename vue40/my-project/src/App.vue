<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-component />
    <p>Prop验证</p>
    <example :msg_null="123+456" msg_string="this is string" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
