<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="h-48 w-full bg-gray-200 bg-cover bg-center" :style="{ backgroundImage: `url( ${user.image} )` }"></div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Image from "@/assets/img/card-top.jpg";

    export default {
        data : () => ({
          Image,
            user: {
              image: 'https://tailwindcss.com/img/card-top.jpg'
            }
        })
    }
</script>

<style scoped>
</style>
