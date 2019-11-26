<template>
    <div class="font-sans border-b border-lgray-400">
        <navbar/>
        <div ref="mapAndProfileContainer" class="xl:flex overflow-hidden">
            <div ref="mapContainer" 
                id="map" 
                class="w-full xl:w-2/3 h-full">
            </div>
            <div ref="countryProfile" 
                class="z-10 w-full xl:w-1/3 bg-white shadow-lg p-4 overflow-auto">
                <a href="#" @click="resetMap">back</a>
                <h2 class="font-medium text-3xl mb-2">{{ stateRegsInfo.country }}</h2>
                <div v-if="stateRegsInfo.country === 'Select a country...'">
                    <ul>
                        <li>
                            <a href="#" @mouseenter="menterState('DE')" @mouseleave="mleaveState('DE')" @click="showStateRegulations('DE')">
                                Germany
                            </a>
                        </li>
                        <li>
                            <a href="#" @mouseenter="menterState('FR')" @mouseleave="mleaveState('FR')" @click="showStateRegulations('FR')">
                                France
                            </a>
                        </li>
                        <li>
                            <a href="#" @mouseenter="menterState('IT')" @mouseleave="mleaveState('IT')" @click="showStateRegulations('IT')">
                                Italy
                            </a>
                        </li>
                        <li>
                            <a href="#" @mouseenter="menterState('GB')" @mouseleave="mleaveState('GB')" @click="showStateRegulations('GB')">
                                United Kingdom
                            </a>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <p class="flex justify-between border-t border-b border-lgray-500 bg-lgray-100 font-medium text-center mb-4">
                        <a href="#" class="w-1/3 py-1">WEEE</a>
                        <a href="#" class="w-1/3 py-1">Batteries</a>
                        <a href="#" class="w-1/3 py-1">Packaging</a>
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
                    <a href="#" 
                        class="inline-block w-full bg-sphera-green-500 hover:bg-sphera-green-700 border border-sphera-green-600 text-white text-center py-2 px-4">
                        Get the full regulatory profile
                    </a>
                </div>
            </div>
        </div>
        <p class="mt-12 p-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis sit reiciendis, inventore beatae animi expedita labore ullam modi dolorem voluptatibus consequuntur vitae facere quia dolor suscipit quo eos, rerum placeat.</p>
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
                settings: {
                    showCountryProfile: false
                },
                stateRegsInfo: {
                    country: 'Select a country...',
                }
            }
        },

        mounted() {
            simplemaps_select.map = simplemaps_worldmap;
            simplemaps_select.max = 1;

            simplemaps_worldmap.hooks.click_state = this.showStateRegulations;
            simplemaps_worldmap.hooks.back = this.resetMap;

            window.addEventListener('resize', this.handleResize);

            console.log('Zoom Level: ' + simplemaps_worldmap.zoom_level);
            console.log('Mobile Device: ' + simplemaps_worldmap.mobile_device);
            simplemaps_worldmap.hooks.complete = () => console.log('Loading Complete');
            simplemaps_worldmap.hooks.zooming_complete = () => console.log('Zoom Complete');

            simplemaps_worldmap.plugin_hooks.over_state.push((id) => console.log('Over State: ', id));
        },

        methods: {
            menterState(stateCode) {
                console.log(stateCode);

                simplemaps_select.select(stateCode);
            },

            mleaveState(stateCode) {
                console.log(stateCode);

                simplemaps_select.deselect(stateCode);
            },

            showStateRegulations(id) {
                this.stateRegsInfo.country = simplemaps_worldmap_mapdata.state_specific[id].name;

                this.handleResize();
            },

            resetMap() {
                simplemaps_worldmap.region_zoom(2);

                simplemaps_select.deselect_all();

                this.stateRegsInfo.country = 'Select a country...';
            },

            handleResize() {
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
