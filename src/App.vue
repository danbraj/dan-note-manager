<template>
  <div class="application">
    <header>
      <img class="logo" src="./assets/logo.svg" />
      <h1 class="title" v-once>{{ title }}</h1>
    </header>
    <app-main></app-main>
    <footer class="footer">TranslationHelper | danbraj</footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "TranslationHelper"
    };
  }
};
</script>

<style lang="scss">
@import 'scss/main';
.footer {
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: $primary-color;
}
</style>