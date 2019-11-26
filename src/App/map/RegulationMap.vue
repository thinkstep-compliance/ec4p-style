<template>
    <div class="font-sans border-b border-lgray-400">
        <navbar/>
        <div class="flex justify-between items-center px-6 py-4 shadow-lg bg-dgray-800">
            <p class="text-lgray-500 font-medium text-xl">Recycling regulation map</p>
            <input type="text" 
                class="w-1/4 rounded-full border-2 border-lgray-700 bg-lgray-400 px-4 py-px outline-none"
                placeholder="Search country or region...">
        </div>
        <!-- <div class="relative overflow-hidden">
            <div id="map"></div>
            <div class="absolute top-0 right-0 bg-white w-1/3 h-full p-4 shadow-lg">
                Country info goes here
            </div>
        </div> -->
        <div class="flex overflow-hidden">
            <div id="map" class="w-2/3"></div>
            <div class="bg-lgray-300 w-1/3 h-100 p-4 shadow-lg">
                <h2 class="font-medium text-3xl mb-2">{{ stateRegsInfo.country }}</h2>
                <div v-show="stateRegsInfo.country != 'Select a country...'">
                    <p class="flex justify-between border-t border-b border-lgray-500 bg-lgray-100 font-medium mb-4">
                        <a href="#" class="px-12 py-1">WEEE</a>
                        <a href="#" class="px-12 py-1">Batteries</a>
                        <a href="#" class="px-12 py-1">Packaging</a>
                    </p>
                    <div class="w-full bg-white border border-lgray-500 px-3 py-2 mb-4">
                        <p class="font-medium text-lg mb-4">Registration Info</p>
                        <p>Brief info with marks out of five for:</p>
                        <ul>
                            <ol>Ease of registration</ol>
                            <ol>Cost of registration</ol>
                        </ul>
                    </div>
                    <div class="w-full bg-white border border-lgray-500 px-3 py-2 mb-4">
                        <p class="font-medium text-lg mb-4">Reporting Info</p>
                        <p>Brief info with marks out of five for:</p>
                        <ul>
                            <ol>Reporting format complexity</ol>
                            <ol>Cost of recycling</ol>
                        </ul>
                    </div>
                    <a href="#" class="inline-block w-full bg-sphera-green-500 hover:bg-sphera-green-700 border border-sphera-green-600 text-white text-center py-2 px-4">
                        Get the full regulatory profile
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';

    export default {
        components: {
            Navbar
        },

        data() {
            return {
                loading: true,
                stateRegsInfo: {
                    country: 'Select a country...',
                }
            }
        },

        mounted() {
            // simplemaps_select.map = simplemaps_worldmap;
            // simplemaps_select.max = 1;
            simplemaps_worldmap.hooks.click_state = this.showStateRegulations;

            simplemaps_worldmap.hooks.back = this.resetMap;
        },

        methods: {
            showStateRegulations(id) {
                this.stateRegsInfo.country = simplemaps_worldmap_mapdata.state_specific[id].name;
            },

            resetMap() {
                this.stateRegsInfo.country = 'Select a country...';
            }
        }
    }
</script>
