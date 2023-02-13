<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const data = computed(() => store.getters.cartList)

const carItemCount = computed(() => store.getters.carItemCount)

</script>
<template>
    <div class="w-full">
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{{carItemCount}} Video</button>
        <ul class="w-80 space-y-2">
            <li v-for="item in data" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} - <a :href="item.url"><img :src="item.cover"></a> {{ item.description }}</span>
                <button class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                @click.prevent="store.commit('removeItemFromCart', item.id)"
                >Remove</button>
            </li>
        </ul>
    </div>
</template>