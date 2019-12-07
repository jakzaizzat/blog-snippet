
<template>
    <div
            class="overlay"
    >
        <div class="modal">
            <div class="modal__title">
                <span>Session Expired</span>
            </div>
            <div class="p-3">
                <p>You have left this browser idle for 10 minutes.</p>
                <p>10 second left</p>
            </div>
        </div>
    </div>
</template>

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

    .modal__title {
        color: #38404f;
        @apply flex items-center justify-between p-3 font-bold;
    }

</style>
