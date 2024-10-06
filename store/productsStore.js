import { defineStore } from "pinia";

export const productsStore = defineStore("products", {
    //state
    state: () => ({
        cart: []
    }),
    //action
    actions: {
        addProduct(product, amount) {
            const exist = this.cart.find((item) => item.id === product.id)

            if (!exist) {
                const data = {
                    ...product,
                    amount: amount ? amount : 1,
                    total: amount ? amount * product.price : product.price
                }
                this.cart.push(data)
            } else {
                exist.amount += amount ? amount : 1
                exist.total += amount ? amount * product.price : exist.price
            }
        },
        removeProduct(id) {
            this.cart = this.cart.filter((item) => item.id !== id)
        },
        removeUnit(id) {
            const product = this.cart.find((item) => item.id === id)
            if (product.amount > 1) {
                product.amount -= 1
                product.total -= product.price
            } else {
                this.removeProduct(id)
            }
        },
        checkout() {
            this.cart = []
        }
    },
    //getter
    getters: {
        productsAmount() {
            return this.cart.reduce((total, item) => total += item.amount, 0)
        },
        totalValue() {
            return this.cart.reduce((total, item) => total += item.total, 0).toFixed(2)
        },
    },
    persist: true,
})