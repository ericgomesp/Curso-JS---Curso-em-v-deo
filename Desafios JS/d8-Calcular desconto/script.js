function calcularDesconto(valor) {
    const desconto = valor * 0.10;
    const valorComDesconto = valor - desconto;
    return valorComDesconto;
}

// Adicionando um listener ao botão para acionar o cálculo de desconto
document.getElementById('botaoDesconto').addEventListener('click', function() {
    // 1º Pergunta sobre o produto
    const pedido = prompt("Qual o produto que você está comprando?");
    
    // 2º Pergunta sobre o preço, com verificação para garantir que o valor seja um número válido
    let precoOriginal = parseFloat(prompt(`Qual é o preço do ${pedido}?`));
    
    // Verificar se o preço é válido
    if (isNaN(precoOriginal) || precoOriginal <= 0) {
        alert("Por favor, insira um valor de preço válido.");
        return;
    }

    // Calcular o preço com desconto
    let precoComDesconto = calcularDesconto(precoOriginal);
    
    // Exibir o preço com desconto
    alert(`O preço com desconto do ${pedido} é: R$ ${precoComDesconto.toFixed(2)}`);
});
