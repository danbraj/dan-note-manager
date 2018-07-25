<template>
  <div id="app" class="application">
    <header>
      <img class="logo" src="./assets/logo.svg" />
      <h1 class="title">{{ title }}</h1>
    </header>
    <app-main></app-main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "My Vue.js app!"
    };
  }
};
</script>

<style lang="scss">
$primary-color: #6a84ca;

body {
  margin: 0;
  padding: 0;
}

header {
  height: 80px;
  background-color: $primary-color;
  position: relative;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.application {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  top: 7px;
  left: 7px;
  height: 66px;
  position: absolute;
}

.title {
  margin: 0 90px;
  line-height: 80px;
  display: inline-block;
}
</style>
