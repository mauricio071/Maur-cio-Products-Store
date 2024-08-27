<template>
    <div>
        <header class="shadow-md">
            <nav class="flex justify-between flex-wrap md:flex-nowrap container mx-auto p-8">
                <NuxtLink to="/" class="font-bold text-xl">Maurício Store</NuxtLink>
                <button @click="visivel = !visivel" class="md:hidden">
                    <IconsMenu />
                </button>
                <ul class="space-y-4 md:space-y-0 my-4 md:my-0 justify-between gap-4 w-full md:w-[unset] md:flex"
                    :class="{ 'block': visivel, 'hidden': !visivel }">
                    <li>
                        <NuxtLink to="/" class="text-xl" :class="{ 'text-[#12b488]': $route.path === '/' }">Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/sobre" class="text-xl" :class="{ 'text-[#12b488]': $route.path === '/sobre' }">
                            Sobre
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/produtos" class="text-xl btn">Produtos</NuxtLink>
                    </li>
                    <li class="relative">
                        <div v-if="qtdProdutos > 0" class="contador-produto">{{ qtdProdutos }}</div>
                        <nuxt-link to="/carrinho"><i class="material-icons">shopping_cart</i></nuxt-link>
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
import { produtosStore } from '../store/produtosStore'
import { storeToRefs, mapActions } from 'pinia';

const visivel = ref(false)

const store = produtosStore()

const { carrinho, qtdProdutos } = storeToRefs(store)

</script>

<style scoped>
.contador-produto {
    position: absolute;
    left: 10px;
    bottom: 20px;
    background-color: #12b488;
    color: white;
    border-radius: 50%;
    padding: 1px 6px;
    font-size: 10px
}
</style>