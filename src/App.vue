<template>
  <div class="application">
    <header>
      <img class="logo" src="./assets/logo.svg" />
      <h1 class="title" v-once>{{ title }}</h1>
    </header>
    <app-main></app-main>
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
</style>