<template>
    <NuxtLink to="player">
    <article class="cellplaylist"> 
        <div class="imagenplaylist">
            <img :src="'/Oye.jpg'" alt="">
        </div>
        <div class="textoplaylist">
            <p class="pp1">Nombre Playlist</p>
            <p class="pp2">Autor de la Playlist</p>
        </div>
    </article>
    </NuxtLink>
</template>

<style>
.cellplaylist{
    width: 930px;
    height: 190px;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: black;
    border-radius: 200px;
    color: white;
    flex: none;
    margin-right: 20px;
}
.imagenplaylist{
    width: 140px;
    height: 140px;
    border-radius: 100%;
    padding: 10px;
    margin-right: 10px;
    margin-left: 20px;
}
.imagenplaylist img{
    border-radius: 100%;
}
.textoplaylist{
    line-height: 50px;
}
.pp1{
    font-weight: bold;
    font-size: 24px;
}
.pp2{
    font-size: 20px;
}
@media screen and (max-width: 800px) {
    .cellplaylist{
        width: 410px;
        height: 130px;
    }
}
.pp1{
    font-size: 15px;
}
.pp2{
    font-size: 12px;
}
.textoplaylist{
    line-height: 30px;
}
.imagenplaylist{
    width: 110px;
    height: 110px;
    margin-left: 5px;
}
</style>