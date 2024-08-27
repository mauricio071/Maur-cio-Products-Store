<template>
    <div>
        <div class="produto">
            <img :src="produto.image" :alt="produto.title">
            <div class="produto-detalhes">
                <div class="flex items-center justify-between w-full">
                    <h3>{{ produto.title }}</h3>
                    <i @click="remover(produto.id)" class="material-icons mb-2 cursor-pointer">delete</i>
                </div>
                <p>{{ produto.description }}</p>
                <p>Preço: ${{ produto.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { produtosStore } from '~/store/produtosStore';

const { $toast } = useNuxtApp()

const { produto } = defineProps(["produto"])

const store = produtosStore()

const remover = (id) => {
    try {
        store.removerProduto(id)
    } catch (error) {
        $toast.error("Erro ao remover o produto")
    }
}

</script>

<style scoped>
@media(min-width: 768px) {
    .produto {
        display: flex;
        gap: 1rem;
    }

    .produto img {
        margin: 2rem !important;
    }
}

.produto img {
    margin: auto;
    max-width: 150px;
}

.produto-detalhes h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
}

.produto-detalhes p {
    font-weight: 600;
    margin-bottom: 1rem;
}
</style>