<template>
    <div class="overlay">
        <div class="modal">
            <div class="flex items-center justify-between p-3 font-bold">
                <span>{{ title }}</span>
                <button @click.prevent="close">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                    >
                        <path
                                class="heroicon-ui"
                                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                        />
                    </svg>
                </button>
            </div>
            <div class="p-3">
                <div class="mb-4">
                    <slot></slot>
                </div>
                <button @click.prevent="close" class="bg-blue-500 text-white p-2 text-sm rounded">
                    Confirm
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            close() {
                this.$emit('toggle-modal');
            }
        }

    }
</script>


<style lang="postcss" scoped>
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal {
        width: 500px;
        box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);
        border-radius: 4px;
        @apply bg-white p-2;
    }
</style>
