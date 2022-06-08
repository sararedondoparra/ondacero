<template>
    <NuxtLink to="player">
    <article class="cellcard"> 
        <div class="horario">
            <p style="font-weight: bold; font-size: 20px">12:30-14:30</p>
        </div>
        <div class="cardprograma">
            <div class="textoprograma">
                <p class="nombreprograma" style="font-weight: bold; font-size: 24px">Nombre Programa</p>
                <p style="font-size: 14px">Lorem ipsum dolor sit amet,<br>adipiscing elit, sed<br>do eiusmod tempor incididunt ut<br>labore et dolore magna aliqua. Ut<br>enim ad minim veniam, quis<br>nostrud exercitation ullamco<br>laboris nisi ut aliquip ex ea<br>commodo consequat. </p>
            </div>
            <div class="imagenprograma">
                <img :src="'/fondopodcast.webp'" alt="">
            </div>
        </div>
    </article>
    </NuxtLink>
</template>

<style>
.cellcard{
    width: 522px;
    height: 341px;
    background-color: #48ab34;
    border-radius: 60px;
    color: white;
    overflow: hidden;
    margin: 0;
}
.cardprograma{
    display: flex;
    align-items: center;
    height: 100%;
}
.cardprograma .textoprograma{
  padding-left: 50px;
  margin-top: -70px; 
   
}
.nombreprograma{
    line-height: 50px;
}
.imagenprograma{
    width: 209px;
    height: 288px;
    padding: 10px;
    margin-right: 10px;
    margin-left: 10px;
}
.imagenprograma img{
    width: 100%;
    object-fit: cover;
}
.horario{
    width: 522px;
    height: 63px;
    background-color: black;
    color: white;
}
.horario p{
    padding-top: 20px;
    padding-left: 50px;
}

</style>