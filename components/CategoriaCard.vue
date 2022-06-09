<template>
    <NuxtLink to="player">
    <article class="categoriacard"> 
        <div class="imagencategoria">
            <img :src="source" alt="">
        </div>
    </article>
    </NuxtLink>
</template>

<style>
.categoriacard{
    width: 522px;
    height: 341px;
    border-radius: 60px;
    overflow: hidden;
    margin: 10px;
}
.imagencategoria {
    filter: grayscale(50%) brightness(60%) sepia(80%) hue-rotate(-280deg) saturate(200%) contrast(0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 800px) {
    .categoriacard{
        width: 200px;
        height: 130px;
        border-radius: 20px;
    }
    .imagencategoria img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>

<script>
export default {
    name: "CategoriaCard",
    props: ["source"]
}

</script>
