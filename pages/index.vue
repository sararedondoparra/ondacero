<template>
  <main>
  
    <div class="directo">
      <img src="" alt="">
      <div class="iconodirecto">
        <NuxtLink to="player">
              <MlIconPlay />
              </NuxtLink>
      </div>
      <h1> <p>ESCUCHA</p>  <p>EN DIRECTO</p></h1>
    </div>
    <section class="blanco">
      <h2>Podcast</h2>
      <article class="podcasts">
        <Podcast-Cell v-for="(item, index) in 8" :key="index" class="cell"/>
      </article>
      <h2>Programas</h2>
      <article class="programas">
        <Programa-Card v-for="(item, index) in 4" :key="index" class="card"/>
      </article>
    </section>
    <section class="gris">
      <h2 style="color: #48AB34"> CATEGORÍAS</h2>
      <h3>Deportes</h3>
      <article class="deportes"><Categoria-Card :source="'/nadal.png'" class="categoria"/> <Categoria-Card :source="'/realmadrid.png'" class="categoria"/></article>
      <h3>Noticias</h3>
      <article class="noticias"><Categoria-Card :source="'/estudiantes.png'" class="categoria"/> <Categoria-Card :source="'/pedro.png'" class="categoria"/></article>
      <h3>Actualidad</h3>
      <article class="actualidad"><Categoria-Card :source="'/comunidad.png'" class="categoria"/> <Categoria-Card :source="'/salud.png'" class="categoria"/></article>
      <h3>Programas para probar</h3>
      <article class="programasprueba"><Categoria-Card :source="'/twp.png'" style="background-color: #4C925C" class="categoria"/> <Categoria-Card :source="'/channel.png'" style="background-color: #5CB177" class="categoria"/></article>
    </section>
  </main>
</template>

<script>
import MainMenu from '../components/MainMenu.vue'
export default {
  components: { MainMenu },
  name: "IndexPage",
}
</script>

<style lang="postcss">
section {
  @apply p-20;
  h1 {
    @apply text-5xl;
  }
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
body{
  background: #F4F8F3;
  font-family: 'Montserrat';
}
h2{
  font-size: 25px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 25px;
}
h3{
  font-size: 25px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 25px;
  margin-left: 150px;
}
.directo{
  margin-top: 60px;
  width: 100%;
  height: 150px;
  background-color: #4c4c4c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
}
.iconodirecto{
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #48ab34;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
}
.iconodirecto svg{
  width: 50px;
  height: 50px;
}
.podcasts{
  width: 100%;
  display: flex;
  overflow-x: scroll;
  flex: none;
}
.podcast .cell{
  flex: none;
  margin-right: 20px;
}
.programas{
  width: 100%;
  display: flex;
  overflow-x: scroll;
  flex: none;
}
.programas .card{
  flex: none;
  margin-right: 20px;
}
.gris{
  background-color: #4c4c4c;
  color: white;
}
.deportes{
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.noticias{
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.actualidad{
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.programasprueba{
  display: flex;
  width: 80%;
  margin: 0 auto;
}

</style>