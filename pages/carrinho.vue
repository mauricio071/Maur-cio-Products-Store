<template>
    <div>
        <div v-if="qtdProdutos < 1" class="text-center" style="height: calc(100vh - 160px);">
            <div class="text-4xl mb-8">
                Seu carrinho está vazio!
            </div>
            <nuxt-link to="/produtos" class="text-2xl btn">
                Ver os produtos
            </nuxt-link>
        </div>
        <div v-else class="container flex flex-col lg:flex-row gap-4">
            <div class="space-y-4 lg:w-[70%]">
                <div class="carrinho-qtd">
                    <h1 class="lg:text-3xl font-bold mb-0">Carrinho de compras ({{ qtdProdutos }})</h1>
                </div>
                <div class="produtos">
                    <div v-for="produto in carrinho" :key="produto.id">
                        <ProdutoCard :produto="produto" />
                    </div>
                </div>
            </div>
            <div class="pagamento ">
                <h2 class="text-2xl font-semibold mb-4">Resumo</h2>
                <p>Total: ${{ valorTotal }}</p>
                <button @click="concluirCompra" class="btn w-full">Concluir a compra</button>
            </div>
        </div>
    </div>

</template>

<script setup>
import { produtosStore } from '~/store/produtosStore';
import { storeToRefs } from 'pinia'
const router = useRouter()
const { $toast } = useNuxtApp()

const store = produtosStore()

const { carrinho, qtdProdutos, valorTotal } = storeToRefs(store)

const concluirCompra = () => {
    try {
        store.finalizarCompra()
        $toast.success("Compra concluída")
        router.push({ path: "/produtos" })
    } catch (error) {
        $toast.error("Falha ao concluir a compra")
    }
}

</script>

<style lang="scss" scoped></style>