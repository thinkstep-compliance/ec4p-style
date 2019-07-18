<template>
    <transition 
        name="expand" 
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave">
        <slot/>
    </transition>
</template>

<script>
    /**
     * This TransitionExpand component can be used anywhere to animate an accordian style
     * open and close state change. It was created from this tutorial: 
     * https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
     */
    export default {
        methods: {
            enter(element) {
                const width = getComputedStyle(element).width;

                console.log('Enter width ', width);

                element.style.width = width;
                element.style.position = 'absolute';
                element.style.visibility = 'hidden';
                element.style.height = 'auto';

                const height = getComputedStyle(element).height;

                element.style.width = null;
                element.style.position = null;
                element.style.visibility = null;
                element.style.height = 0;

                // Force repaint to make sure the
                // animation is triggered correctly.
                getComputedStyle(element).height;

                // Trigger the animation.
                // We use `setTimeout` because we need
                // to make sure the browser has finished
                // painting after setting the `height`
                // to `0` in the line above.
                setTimeout(() => {
                    element.style.height = height;
                }, 10);
            },

            afterEnter(element) {
                element.style.height = 'auto';

                // In order to make it work properly in IE
                // this change the parent height to be adaptative
                if (this.browserIsIe()) {
                    console.log("Using IE");
                    const parentHeight = parseInt(getComputedStyle(element.parentElement).height);
                    const childHeight = parseInt(getComputedStyle(element).height);
                    element.style.visibility = 'visible';
                    element.parentElement.style.height = `${parentHeight + childHeight + 24}px`;
                }
            },

            leave(element) {
                const height = getComputedStyle(element).height;

                console.log('Leave height ', height);

                element.style.height = height;

                // In order to make it work properly in IE
                // this change the parent height to be adaptative
                if (this.browserIsIe()) {
                    element.style.visibility = 'hidden';
                    element.parentElement.style.height = 'auto';
                }

                // Force repaint to make sure the
                // animation is triggered correctly.
                getComputedStyle(element).height;

                setTimeout(() => {
                    element.style.height = 0;
                }, 10);

            },

            browserIsIe() {
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");

                return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
            }
        }
    }
</script>

<style scoped>
    .expand-enter-active,
    .expand-leave-active {
        transition: height 300ms ease;
        overflow: hidden;
    }

    .expand-enter,
    .expand-leave-to {
        height: 0;
    }

    /*
     * Trick browser into using hardware acceleration.
     */
    * {
        will-change: height;
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
</style>
