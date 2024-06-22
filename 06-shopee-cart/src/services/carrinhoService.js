// === casos de uso do carrinho ===

// adicionar item ao carrinho
async function addItemForCart(userCart, item) {
    userCart.push(item)
}

// calcularTotal
async function calculateTotal(userCart) {
    console.log(`Total R$: ${userCart.reduce((total, item) => total + item.subtotal(), 0)}`)
}

// remover item do carrinho
async function deleteItemForCart(userCart, nameItem){

}

// alterar quantidade do item
async function alterQtdForItem(useCart, nameItem, qtd) {

}

export {
    addItemForCart,
    calculateTotal,
    deleteItemForCart,
    alterQtdForItem
}