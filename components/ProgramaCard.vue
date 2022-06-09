<template>
    <NuxtLink to="player">
    <article class="cellcard"> 
        <div class="horario">
            <p class="textohorario">12:30-14:30</p>
        </div>
        <div class="cardprograma">
            <div class="textoprograma">
                <p class="nombreprograma">Nombre Programa</p>
                <p class="textocard">Lorem ipsum dolor sit amet,<br>adipiscing elit, sed<br>do eiusmod tempor incididunt ut<br>labore et dolore magna aliqua. Ut<br>enim ad minim veniam, quis<br>nostrud exercitation ullamco<br>laboris nisi ut aliquip ex ea<br>commodo consequat. </p>
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
    font-weight: bold;
    font-size: 24px;
}
.textocard{
    font-size: 14px;
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
.textohorario{
    font-weight: bold;
    font-size: 20px;
}
@media screen and (max-width: 800px){
    .cellcard{
        width: 325px;
        height: 220px;
        border-radius: 40px;
    }
    .horario{
        width: 325px;
        height: 40px;
    }
    .horario p{
        padding-top: 13px;
        padding-left: 25px;
    }
    .imagenprograma{
        width: 149px;
        height: 235px;
        padding: 0px;
        margin-left: 0px;
        margin-right: 0px;
    }
    
    .cardprograma .textoprograma{
        padding-left: 25px;
        margin-top: -50px;
    }
    .nombreprograma{
        line-height: 30px;
        font-size: 15px;
    }
    .textocard{
        font-size: 9px;
    }
    .textohorario{
        font-size: 12px;
    }
}
</style>