<template>
    <div>
        <div v-if="productsAmount < 1" class="text-center" style="height: calc(100vh - 160px);">
            <div class="text-4xl mb-8">
                Your cart is empty!
            </div>
            <nuxt-link to="/" class="text-2xl btn">
                See products
            </nuxt-link>
        </div>
        <div v-else class="container flex flex-col lg:flex-row gap-4">
            <div class="space-y-4 lg:w-[70%]">
                <div class="cart-amount">
                    <h1 class="lg:text-3xl font-bold mb-0">Shopping cart ({{ productsAmount }})</h1>
                </div>
                <div class="products">
                    <div v-for="product in cart" :key="product.id">
                        <ProductCard :product="product" />
                    </div>
                </div>
            </div>
            <div class="overview">
                <h2 class="text-2xl font-semibold mb-4">Overview</h2>
                <p class="font-bold text-2xl">Total price: ${{ totalValue }}</p>
                <button @click="completePurchase" class="btn w-full">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { productsStore } from '~/store/productsStore';
import { storeToRefs } from 'pinia'
const router = useRouter()
const { $toast } = useNuxtApp()

const store = productsStore()

const { cart, productsAmount, totalValue } = storeToRefs(store)

const completePurchase = () => {
    try {
        store.checkout()
        $toast.success("Purchase completed!")
        setTimeout(() => {
            router.push({ path: "/" })
        }, 1500)
    } catch (error) {
        $toast.error("There was an error processing your request")
    }
}
</script>

<style scoped>
.products {
    @apply flex flex-col gap-4;
}
</style>