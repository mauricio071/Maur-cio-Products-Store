<template>
    <div class="card">
        <div class="sm:grid sm:grid-cols-2">
            <div class="sm:p-7">
                <img :src="product.image" :alt="product.description" class="max-h-[30rem] mx-auto mb-4">
            </div>
            <div class="sm:p-7">
                <h1 class="text-xl md:text-3xl">{{ product.title }}</h1>
                <div class="rating">
                    <IconsStar />
                    <p>{{ product.rating.rate }}</p>
                </div>
                <div class="flex justify-between items-baseline my-2">
                    <h2 class="text-lg md:text-xl font-bold mb-6">Price - ${{ product.price }}</h2>
                    <p class="text-lg font-semibold">{{ product.rating.count }} sold</p>
                </div>
                <div class="description space-y-4">
                    <h3 class="font-bold border-b-2 pb-2 mb-4">Product description:</h3>
                    <p>{{ product.description }}</p>
                    <div class="amounts">
                        <h3 class="font-bold">Amount:</h3>
                        <IconsMinus @click="removeUnitProduct" :class="{ 'text-gray-300': amount === 1 }"
                            class="max-w-[1.5rem] text-gray-500 cursor-pointer" />
                        <span class="font-semibold">{{ amount }}</span>
                        <IconsPlus @click="addUnitProduct" class="max-w-[1.5rem] text-gray-500 cursor-pointer" />
                    </div>
                    <button @click="addInCart" class="btn flex items-center gap-x-4">
                        <i class="material-icons">add_shopping_cart</i>
                        <span>Add in cart</span>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { productsStore } from '../store/productsStore'
import { storeToRefs } from 'pinia';

const store = productsStore()

const { $toast } = useNuxtApp()

const addProduct = store.addProduct

const router = useRouter()

const { id } = useRoute().params
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)

const amount = ref(1)

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: "Product not found!", fatal: true })
}

const removeUnitProduct = () => {
    if (amount.value > 1) {
        amount.value -= 1
    }
}

const addUnitProduct = () => {
    amount.value += 1
}

const addInCart = () => {
    try {
        addProduct(product.value, amount.value)
        $toast.success("Product added!")
        setTimeout(() => {
            router.push({ path: "/" })
        }, 1000)
    } catch (error) {
        $toast.error("There was an error processing your request")
    }
}
</script>

<style scoped>
.amounts {
    @apply flex items-center gap-2;
}
</style>