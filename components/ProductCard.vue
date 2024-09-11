<template>
    <div>
        <div class="product">
            <img :src="product.image" :alt="product.title">
            <div class="product-details">
                <div class="flex items-center justify-between w-full">
                    <h3>{{ product.title }}</h3>
                    <i @click="remove(product.id)"
                        class="material-icons mb-2 cursor-pointer duration-300 hover:text-red-500">delete</i>
                </div>
                <p>{{ product.description }}</p>
                <p class="font-bold">Amount: {{ product.amount }}</p>
                <p class="text-xl font-semibold">Total price: ${{ product.total.toFixed(2) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { productsStore } from '~/store/productsStore';

const { $toast } = useNuxtApp()

const { product } = defineProps(["product"])

const store = productsStore()

const remove = (id) => {
    try {
        store.removeProduct(id)
    } catch (error) {
        $toast.error("There was an error processing your request")
    }
}
</script>

<style scoped>
.product {
    @apply bg-white shadow-md rounded-lg p-4 min-h-[15rem] md:flex md:gap-4;
}

.product img {
    @apply flex-grow m-auto max-w-[150px] max-h-[150px] md:m-8;
}

.product-details {
    @apply max-w-[45rem];
}

.product-details h3 {
    @apply text-[20px] font-bold mb-4;
}

.product-details p {
    @apply mb-4;
}
</style>