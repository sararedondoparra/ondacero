<template>
    <img class="banner-image" :src="source" alt="imagen de prueba">
</template>
<script>
export default {
    props: ['source']
}
</script>

<style lang="postcss">
.banner-image{
    @apply w-full;
}
</style>