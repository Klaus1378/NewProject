<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const filteredPost = computed(() => store.getters.filteredPost)
const search = ""
const ChangeSearch = (e) => store.commit('ChangeSearch', e.target.value)



const store = useStore()

</script>
<template>
    <div class="w-full">
        <ul class="w-80 space-y-2">
            <input type="text" v-model="search" @input="ChangeSearch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <li v-for="item in filteredPost" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} <a :href="item.url"><img :src="item.cover"></a> {{ item.description }}</span>
                <button 
                    class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    @click.prevent="store.dispatch('addItemToCartAction', item.id)"
                >Save</button>
                <router-link :to="{ name: 'info', params: { id: item.id}}" >
                    <button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Info </button>
                </router-link>
            </li>
        </ul>
    </div>
</template>
