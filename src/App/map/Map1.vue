<template>
    <div class="font-sans border-b border-lgray-400">
        <navbar/>
        <div ref="mapAndProfileContainer" class="2xl:flex overflow-hidden">
            <div ref="mapContainer" id="map" class="w-full 2xl:w-2/3 h-full"></div>
            <div ref="countryProfile" class="z-10 w-full 2xl:w-1/3 bg-lgray-300 shadow-lg p-4 overflow-auto">
                <a href="#" @click="startFromEurope">back</a>
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
            simplemaps_worldmap.hooks.click_state = this.showStateRegulations;

            simplemaps_worldmap.hooks.back = this.resetMap;

            window.addEventListener('resize', this.handleResize);

            console.log('Zoom Level: ' + simplemaps_worldmap.zoom_level);
            console.log('Mobile Device: ' + simplemaps_worldmap.mobile_device);
            simplemaps_worldmap.hooks.complete = () => console.log('Loading Complete');
            simplemaps_worldmap.hooks.zooming_complete = () => console.log('Zoom Complete');
        },

        methods: {
            showStateRegulations(id) {
                this.stateRegsInfo.country = simplemaps_worldmap_mapdata.state_specific[id].name;

                this.handleResize();
            },

            resetMap() {
                this.stateRegsInfo.country = 'Select a country...';
            },

            startFromEurope() {
                simplemaps_worldmap.region_zoom(2);
                // Or simplemaps_worldmap.hooks.back(); ?
                this.resetMap();
            },

            handleResize() {
                // Set profile to height of map
                // this.$nextTick(() => {
                //     this.$refs.countryProfile.style.height = this.$refs.mapContainer.clientHeight + "px";
                // });

                setTimeout(() => {
                    this.$refs.countryProfile.style.height = this.$refs.mapContainer.clientHeight + "px";
                }, 500);
            }
        }
    }
</script>

<style>
    #map_outer {
        display: none !important;
    }

    .tt_name_sm {
        @apply font-sans;
    }
</style>
