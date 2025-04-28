function mostrarSucessorAntecessor() {
    // Obtendo o valor do campo de entrada
    var numero = document.getElementById('numero').value;

    // Convertendo para número, caso o valor seja uma string
    numero = Number(numero);

    // Verificando se o número é válido
    if (isNaN(numero)) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite um número válido.';
    } else {
        // Calculando sucessor e antecessor
        var sucessor = numero + 1;
        var antecessor = numero - 1;

        // Exibindo o resultado
        document.getElementById('resultado').innerHTML = 
            `O sucessor de ${numero} é ${sucessor}.<br>O antecessor de ${numero} é ${antecessor}.`;
    }
}
// Adicionar um ouvinte de evento para detectar quando a tecla Enter for pressionada
document.getElementById('numero').addEventListener('keydown', function(event) {
    // Verificar se a tecla pressionada foi Enter (código 13)
    if (event.key === 'Enter') {
        // Impedir que o formulário seja enviado (se necessário)
        event.preventDefault();
        // Chamar a função de conversão
        converter();
    }
});