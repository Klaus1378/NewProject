<script setup>
import { computed,onMounted } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute()
const router = useRouter()

const store = useStore()

const product = computed(() => {
    store.commit('GET_PRODUCT_BY_ID', +route.params.id)
    return store.getters.getactiveProduct
})

onMounted(() => {
    
})

</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mg-left">
  <img class="w-full" :src="product.cover">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{ product.name }}</div>
    <p class="text-gray-700 text-base">
     {{ product.description }}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#სათაგადასავლო</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#მძაფრსიუჟეტიანი</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#სერიალი</span>
  </div>
</div>
</template>