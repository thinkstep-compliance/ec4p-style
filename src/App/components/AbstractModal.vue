<template>
    <portal to="modals" v-if="show">
        <div class="fixed inset-0 flex items-center overflow-auto bg-smoke z-50" v-show="show">
            <div class="leading-normal bg-white rounded-sm shadow-lg mx-auto p-6"
                :class="widthClassList">
                <h1 class="font-century text-2xl mb-4" 
                    :class="danger ? 'text-red' : 'text-grey-darkest'">
                    <slot name="title"/>
                </h1>
                <slot/>
            </div>
        </div>
    </portal>
</template>

<script>
    export default {
        props: {
            show: {
                required: true,
                type: Boolean,
                default: false
            },

            danger: {
                type: Boolean,
                default: false
            },

            widthType: {
                type: String,
                default: null
            }
        },

        computed: {
            widthClassList() {
                if (!this.widthType) {
                    return 'sm:w-1/2 lg:w-2/5 xl:w-1/4';
                }
                
                if (this.widthType == 'large') {
                    return 'sm:w-4/5 lg:w-2/3 xl:w-1/2';
                }
            }
        },

        created() {
            this.registerEscEvent();
        },

        methods: {
            registerEscEvent() {
                const escapeHandler = e => {
                    if (e.key === "Escape" && this.show) {
                        this.dismiss();
                    }
                }

                document.addEventListener("keydown", escapeHandler);

                this.$once("hook:destroyed", () => {
                    document.removeEventListener("keydown", escapeHandler);
                });
            },

            dismiss() {
                this.$emit("close");
            }
        }
    }
</script>
