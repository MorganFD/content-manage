<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
  text-decoration: none;
  font-size:.14rem;
  font-weight:normal;
  font-style:normal;
  box-sizing:border-box;
}
html{
  font-size:100px;
}
html,body{
  width:100%;
  height:100%;
}
#app{
  width:100%;
  height:100%;
  position:relative;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
