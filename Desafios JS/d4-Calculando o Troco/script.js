// Solicitar o valor do produto
var valorProduto = parseFloat(prompt("Digite o valor do produto em reais:"));

// Verificar se o valor inserido é válido
if (isNaN(valorProduto) || valorProduto <= 0) {
    alert("Por favor, insira um valor válido para o produto.");
} else {
    // Solicitar o valor pago pelo cliente
    var valorPago = parseFloat(prompt("Digite o valor pago em reais:"));

    // Verificar se o valor inserido é válido
    if (isNaN(valorPago) || valorPago <= 0) {
        alert("Por favor, insira um valor válido para o pagamento.");
    } else {
    
        // Calcular o troco
        var troco = valorPago - valorProduto;

        if (troco < 0) {
            alert("O valor pago é insuficiente.");
        } else {
            // Exibir o troco
            alert("O troco a ser devolvido é: R$ " + troco.toFixed(2));
        }
    }
}
// Adicionar um ouvinte de evento para detectar quando a tecla Enter for pressionada
document.getElementById('valorPago').addEventListener('keydown', function(event) {
    // Verificar se a tecla pressionada foi Enter (código 13)
    if (event.key === 'Enter') {
        // Impedir que o formulário seja enviado (se necessário)
        event.preventDefault();
        // Chamar a função de conversão
        converter();
    }
});
