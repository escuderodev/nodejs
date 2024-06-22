// === casos de uso dos itens ===

// criar item com subtotal calculado
async function createItem(name, price, qtd) {
    return {
        name,
        price,
        qtd,
        subtotal: () => price * qtd,
    }
}

export default createItem