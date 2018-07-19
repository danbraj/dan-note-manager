<template>
    <tr>
        <td>{{ translation.original }}</td>
        <td>{{ translation.translated }}</td>
    </tr>
</template>

<script>
export default {
  props: ["translation"]
};
</script>

<style lang="scss" scoped>
tr {
  font-size: 1.2em;
  text-align: left;
}
td {
  padding: 20px 40px;
}
</style>
