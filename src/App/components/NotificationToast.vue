<!-- 
    http://vue-notification.yev.io/ https://github.com/euvl/vue-notification 
    Fire these notifications with basic text (also include HTML):
        this.$notify('EEE data report submitted');
    To require a user dismiss event, override duration with negative value:
        this.$notify({text: 'The world is going to end', duration: -1});
-->
<template>
    <notifications classes="ec4p-notification" position="bottom right" :duration="3000" :speed="200">
        <template slot="body" slot-scope="props">
            <div class="bg-dg-dark text-lg-lighter p-4 mr-6 mb-4">
            <!-- <div>
                    <div class="title" v-html="props.item.title"></div>
                </div> -->
                <div class="flex justify-between items-start">
                    <div v-html="props.item.text"></div>
                    <button class="focus:outline-none" @click="props.close">
                        <svg class="text-lg-base hover:text-white trans:text nc-icon grid-16 outline stroke-4">
                            <use xlink:href="/icons/sprite-outline.svg#nc-icon-simple-remove"/>
                        </svg>
                    </button>
                </div>
            </div>
        </template>
    </notifications>
</template>

<style>
    .ec4p-notification {
        @apply bg-gray-600 text-gray-200 p-4 mb-6 ml-6;
    }

    .ec4p-notification .notification-title {

    }

    .ec4p-notification .notification-content {

    }

    /*
     * Style for specific type of notification, will be applied when you
     * call notification with "type" parameter:
     * this.$notify({ type: 'my-type', message: 'Foo' })
     */
    .ec4p-notification .my-type {
        
    }
</style>
