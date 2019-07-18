<template>
    <div>
        <div class="flex font-sans">
            <div class="w-auto h-screen brand-gradient md:px-4 px-2 py-4 border-r border-orange-600">
                <a href="#" class="block w-8 mt-2">
                    <img src="/img/logo-icon-gs.png" alt="Logo Icon" style="image-rendering: optimizeQuality">
                    <svg class="icon text-white">
                        <use href="/icons/sprite-guide.svg#icon-menu-6" xlink:href="/icons/sprite-guide.svg#icon-menu-6"/>
                    </svg>
                </a>
            </div>
            <div class="w-56 h-screen bg-gray-200 p-4 border-r border-gray-300">
                <a href="#" class="block flex bg-gray-400 text-xl text-white hover:text-gray-600 px-4 py-3 mb-6">
                    Brand
                </a>
                <a href="#" class="block hover:bg-gray-300 p-2 mb-2">
                    Colour
                </a>
                <a href="#" class="block hover:bg-gray-300 p-2 mb-2">
                    Typography
                </a>
                <a href="#" class="block hover:bg-gray-300 p-2 mb-2">
                    Logo
                </a>
                <a href="#" class="block hover:bg-gray-300 p-2 mb-2">
                    Illustration
                </a>
            </div>
            <div class="w-2/5 ml-48">
                <h1 class="font-regular text-2xl mt-8 mb-4">EC<span class="text-orange-600">4</span>P</h1>
                <h2 class="font-mono font-bold text-3xl mb-6">Brand guidelines</h2>
                <p class="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo soluta, voluptates porro vel libero autem aut accusantium enim, deserunt earum nam deleniti velit dicta fugiat quod saepe hic cumque eaque!</p>
            </div>
        </div>
        <!-- <navbar-aside/>
        <page-header/>
        <transition name="pages" mode="out-in">
            <router-view/>
        </transition> -->
        <!-- <notification-toast/> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .pages-enter { transform: translateY(6px); opacity: 0; }
    .pages-enter-to { transform: translateY(0); opacity: 1; }

    .pages-leave { transform: translateY(0); opacity: 1; }
    .pages-leave-to { transform: translateY(6px); opacity: 0; }

    .pages-enter-active,
    .pages-leave-active { transition: all 300ms ease-in-out }

    h2 { @apply text-2xl }
    h3 { @apply text-lg }
    h2, h3, h4 { @apply font-bold }
</style>
