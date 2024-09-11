<template>
    <div>
        <header class="shadow-md">
            <nav class="flex justify-between flex-wrap md:flex-nowrap container mx-auto p-8">
                <NuxtLink to="/" class="font-bold text-xl flex gap-2 items-center">
                    <LazyIconsShopping class="rotate-[-20deg]" />
                    Products Store
                </NuxtLink>
                <button @click="visible = !visible" class="md:hidden">
                    <IconsMenu />
                </button>
                <ul class="space-y-4 md:space-y-0 my-4 md:my-0 justify-between gap-4 w-full md:w-[unset] md:flex"
                    :class="{ 'block': visible, 'hidden': !visible }">
                    <li>
                        <NuxtLink to="/" class="text-xl btn">Products</NuxtLink>
                    </li>
                    <li class="relative">
                        <div v-if="productsAmount > 0" class="product-counter">{{ productsAmount }}</div>
                        <nuxt-link to="/cart"><i class="material-icons">shopping_cart</i></nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-8">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { productsStore } from '../store/productsStore'
import { storeToRefs } from 'pinia';

const visible = ref(false)

const store = productsStore()

const { cart, productsAmount } = storeToRefs(store)

</script>

<style scoped>
.product-counter {
    @apply absolute left-[10px] bottom-[20px] bg-[#12b488] text-white rounded-[50%] py-[1px] px-[6px] text-[10px];
}
</style>