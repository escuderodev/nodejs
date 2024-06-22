import createItem from "./services/itemService.js"
import * as cartService from "./services/carrinhoService.js"

const carrinho = []

console.log("Bem vindo ao seu Carrinho da Shopee!")

const item1 = await createItem('Bolo', 10.99, 3)
const item2 = await createItem('Bolo', 10.99, 1)

// console.log(`
//     Item: ${item1.name}
//     Preço: ${item1.price}
//     Quantidade: ${item1.qtd}
//     Subtotal R$: ${item1.subtotal()}
//     `)

await cartService.addItemForCart(carrinho, item1)
await cartService.addItemForCart(carrinho, item2)

console.log('=== Dados do Carrinho ===')
console.log(carrinho)
await cartService.calculateTotal(carrinho)