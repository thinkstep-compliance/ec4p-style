<template>
    <transition name="fade">
        <div v-show="showOverlay">
            <div class="flex items-center absolute w-full h-full left-0 top-0 z-30" style="background: rgba(0, 0, 0, 0.4);">
                <div class="sk-double-bounce">
                    <div class="sk-child sk-light sk-double-bounce1"></div>
                    <div class="sk-child sk-light sk-double-bounce2"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        showOverlay: {
            type: Boolean,
            required: true,
            default: true
        }
    }
}
</script>
