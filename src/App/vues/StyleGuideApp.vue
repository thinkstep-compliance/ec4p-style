<template>
    <div>
        <aside class="h-full fixed top-0 left-0 bg-lgray-600 border-r border-lgray-700 shadow-lg z-30 flex"
            :class="navbarOpen ? 'w-56' : 'w-16'">
            <div class="w-full h-32 p-3 flex justify-between">
                <a href="/" class="inline-block w-12">
                    <img src="/img/logo-icon-gs.png" alt="Logo Icon">
                </a>
                <transition name="fade-in">
                    <a href="#" 
                        class="inline-block text-lgray-300"
                        @click="navbarOpen = navbarOpenPlusDelay = false"
                        v-show="navbarOpenPlusDelay">
                        << link
                    </a>
                </transition>
            </div>
        </aside>
        <div id="MainContent" :class="navbarOpen ? 'pl-56' : 'pl-16'">
            <div v-show="!navbarOpen" class="px-2 md:px-4 pt-3 pb-4 md:py-4">
                <a href="#" 
                    class="inline-block text-lgray-500"
                    @click="openNavbar">
                    link >>
                </a>
            </div>
        </div>
        <!-- <page-header/>
        <transition name="pages" mode="out-in">
            <router-view/>
            <content1/>
        </transition> -->
    </div>
</template>

<script>
    import NavbarAside from './NavbarAside.vue';
    import Content1 from './Content1.vue';

    export default {
        components: {
            NavbarAside,
            Content1
        },

        data() {
            return {
                navbarOpen: true,
                navbarOpenPlusDelay: true
            }
        },

        methods: {
            openNavbar() {
                this.navbarOpen = true;

                setTimeout(() => this.navbarOpenPlusDelay = true, 300);
            }
        }
    }
</script>

<style>
    aside {
        transition: left .3s cubic-bezier(.215, .61, .355, 1), width .3s cubic-bezier(.215, .61, .355, 1);
    }

    #MainContent {
        transition: padding .3s cubic-bezier(.215, .61, .355, 1), width .3s cubic-bezier(.215, .61, .355, 1);
    }

    .pages-enter { transform: translateY(6px); opacity: 0; }
    .pages-enter-to { transform: translateY(0); opacity: 1; }

    .pages-leave { transform: translateY(0); opacity: 1; }
    .pages-leave-to { transform: translateY(6px); opacity: 0; }

    .pages-enter-active,
    .pages-leave-active { transition: all 300ms ease-in-out }
</style>
