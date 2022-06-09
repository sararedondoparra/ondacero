<template>
  <main>
    <div class="nomusuario">
      <img src="/usuario.png" alt="">
      <h1>Sara Redondo</h1>
    </div>
    <nav>
        <ul class="seccion">
            <li class="fav"> 
              <NuxtLink to="lista"> 
                Favoritos 
                </NuxtLink>
            </li>
            <li class="tarde">
              <NuxtLink to="mastarde"> 
                Escuchar más tarde 
                </NuxtLink>
            </li>
            <li class="lists" style="border-bottom: 5px solid green; margin-bottom: -2px;">
              <NuxtLink to="playlists"> 
                Playlist 
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <section class="listafavs">
      <article class="playlistsfavs">
        <Playlist-Cell v-for="(item, index) in 8" :key="index" class="cell"/>
      </article>
    </section>
  </main>
</template>

<style lang="postcss">
.nomusuario{
    margin-top: 130px;
    margin-left: 90px;
    display: flex;
    align-items: center;
    h1{
        margin-left: 50px;
        font-size: 25px;
        font-weight: bold;
    }
}
.seccion{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid gray;
    margin-top: 40px;
}   
.playlistsfavs{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}
.playlistsfavs .cell{
    padding-bottom: 20px;
}
.fav{
  margin-left: 100px;
}
.lists{
  margin-right: 140px;
}
@media screen and (max-width: 800px) {
  .nomusuario{
    margin-left: 50px;
  }
  .nomusuario img{
    width: 70px;
    height: 70px;
  }
  .fav{
    margin-left: 50px;
  }
  .lists{
    margin-right: 50px;
  }
}
</style>