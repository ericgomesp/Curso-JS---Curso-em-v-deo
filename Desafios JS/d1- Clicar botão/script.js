var botao1 = document.querySelector('.botao1');
var botao2 = document.querySelector('.botao2');
var botao3 = document.querySelector('.botao3');

// Adicionando o evento de clique para cada botão
if (botao1) {
    botao1.addEventListener('click', function() {
        alert('Botão 1 clicado');
            });
        }
if (botao2) {
    botao2.addEventListener('click', function() {
        alert('Botão 2 clicado');
    });
}

if (botao3) {
    botao3.addEventListener('click', function() {
        alert('Botão 3 clicado');
    });
}
// Adicionar um ouvinte de evento para detectar quando a tecla Enter for pressionada
document.getElementById('metros').addEventListener('keydown', function(event) {
    // Verificar se a tecla pressionada foi Enter (código 13)
    if (event.key === 'Enter') {
        // Impedir que o formulário seja enviado (se necessário)
        event.preventDefault();
        // Chamar a função de conversão
        converter();
    }
});