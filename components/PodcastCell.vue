<template>
    <NuxtLink to="player">
    <article class="cellpodcast"> 
        <div class="imagenpodcast">
            <img :src="'/Oye.jpg'" alt="">
        </div>
        <div class="textopodcast">
            <p class="p1">Nombre Podcast</p>
            <p class="p2">Nombre Locutor</p>
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
.p1{
    font-weight: bold;
    font-size: 24px;
}
.p2{
    font-size: 20px;
}

@media screen and (max-width: 800px) {
    .cellpodcast{
        width: 325px;
        height: 130px;
    }
    .textopodcast{
        line-height: 30px;
    }
    .p1{
        font-size: 15px;
    }
    .p2{
        font-size: 15px;
    }
    .imagenpodcast{
        width: 110px;
        height: 110px;
        margin-left: 5px;
    }
}
</style>