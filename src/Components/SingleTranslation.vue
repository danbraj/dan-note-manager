<template>
    <div class="single-translation">
        <p>{{ translation.original }}</p>
        <p>{{ translation.translated }}</p>
    </div>
</template>

<script>
// TODO: dodanie numerowania zdań
export default {
  props: ["translation"]
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  font-size: 1.2em;
  text-align: left;
  padding: 8px;
}
.single-translation {
  margin: 8px 0;
  &:hover {
    background-color: #f0e68c;
    cursor: pointer;
  }
}
</style>
