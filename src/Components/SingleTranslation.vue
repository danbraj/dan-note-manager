<template>
    <tr>
        <td>{{ translation.original }}</td>
        <td>{{ translation.translated }}</td>
    </tr>
</template>

<script>
export default {
    props: ['translation']
};
</script>

<style lang="scss" scoped>

</style>
