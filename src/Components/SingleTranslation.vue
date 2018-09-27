<template>
    <div class="single-translation">
      <p class="number">{{ translation.idx }}</p>
      <p class="original">{{ translation.original }}</p>
      <p class="translated">{{ translate }}</p>
    </div>
</template>

<script>
export default {
  props: ["translation"],
  computed: {
    translate() {
      return this.translation.translated == '' ? '<< potrzebne tłumaczenie >>' : this.translation.translated
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/base/variables';
.single-translation {
  background-color: lighten($primary-color, 30%);
  display: grid;
  grid-template: 1fr 1fr / 80px 1fr;
  &:hover {
    background-color: $secondary-color;
    cursor: pointer;
  }
  border-bottom: 2px $primary-color solid;
}
.translations {
  font-size: 1.2em;
}
.original,
.translated {
  text-align: left;
  margin: 0;
  padding: 8px;
}
.number {
  grid-area: 1 / 1 / 3 / 2;
  margin: auto;
  font-size: 2em;
  font-weight: 600;
}
.original {
  grid-area: 1 / 2;
}
.translated {
  grid-area: 2 / 2;
}
</style>
