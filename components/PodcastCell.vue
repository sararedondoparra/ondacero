<template>
    <NuxtLink to="player">
    <article class="cellpodcast"> 
        <div class="imagenpodcast">
            <img :src="'/comunicaciona3.webp'" alt="">
        </div>
        <div class="textopodcast">
            <p style="font-weight: bold; font-size: 24px">Nombre Podcast</p>
            <p style="font-size: 20px">Nombre Locutor</p>
        </div>
    </article>
    </NuxtLink>
</template>

<style>
.cellpodcast{
    width: 430px;
    height: 190px;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #48ab34;
    border-radius: 200px;
    color: white;
    flex: none;
    margin-right: 20px;
}
.imagenpodcast{
    width: 140px;
    height: 140px;
    border-radius: 100%;
    padding: 10px;
    margin-right: 10px;
    margin-left: 20px;
}
.imagenpodcast img{
    border-radius: 100%;
}
.textopodcast{
    line-height: 50px;
}
</style>