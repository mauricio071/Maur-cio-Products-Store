import { defineStore } from "pinia";

export const produtosStore = defineStore("produtos", {
    //state
    state: () => ({
        carrinho: []
    }),
    //action
    actions: {
        adicionarProduto(produto) {
            this.carrinho.push(produto)
        },
        removerProduto(id) {
            this.carrinho = this.carrinho.filter((item) => item.id !== id)
        },
        async finalizarCompra() {
            const config = useRuntimeConfig()

            const baseURL = config.public.baseURL

            await useFetch(`${baseURL}/compras`, {
                method: "POST",
                body: [...this.carrinho]
            })

            this.carrinho = []
        }
    },
    //getter
    getters: {
        qtdProdutos() {
            return this.carrinho.length
        },
        valorTotal() {
            return this.carrinho.reduce((total, item) => total += item.price, 0)
        }
    },
    persist: true,
})