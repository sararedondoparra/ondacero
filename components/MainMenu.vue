<template>
    <nav class="barranavegacion">
        <ul>
            <img src="/ondacero.png" alt="">
            <li>
                <NuxtLink to="/">
                    <MlIconHeadphones class="podcast"/>
                    Podcast
                    </NuxtLink>
            </li>
            <li>
                <NuxtLink to="about">
                    <MlIconBookmark class="lista"/>
                    Mi lista
                    </NuxtLink>
            </li>
            <li>
                <MlIconAccount class="sesion"/>
                Iniciar sesión
            </li>
        </ul>
        <ul>   
            <li>
                <MlIconMagnify />
            </li>
            <li>
                <MlIconBellBadge />
            </li>
            <li class="user"
            @click="panelIsOpen = !panelIsOpen">
                    <MlIconCog />
            </li>
        </ul>

        <div 
            class="panel"
            v-show="panelIsOpen">
            <p>Ajustes de la cuenta</p>
            <p>Cerrar sesión</p>
            <p>Ayuda</p>
            <p>Sobre nosotros</p>
            </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                panelIsOpen: false
            }
        }
    }
</script>


<style lang="postcss">
nav{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    ul{
        align-items: center;
        display: flex;
        li{
            @apply p-5;
        }
        .podcast{
            display: none;
        }
        .lista{
            display: none;
        }
        .sesion{
            display: none;
        }
        img{
            width: 50px;
            height: 50px;
            margin-left: 20px;
            margin-top: 5px;
        }
    }
    .user{
        cursor: pointer;
    }
    .panel{
        @apply w-60 h-60 bg-white;
        position: absolute;
        top: 65px;
        right: 0;
        border-radius: 0 0 30px 30px;
        color: black;
        p{
            margin-top: 28px;
            margin-left: 30px;
        }
    }
}
.nuxt-link-exact-active{
    font-weight: bold;
}
</style>