var container = document.querySelector('#container');
var botao = document.createElement('button');
botao.textContent = 'Inicie o Desafio';
botao.addEventListener('click', function() {
    //alert('Botão com borda clicado!');
    var n1 = prompt('Qual o seu nome?')
    var n2 = prompt(`Olá ${n1}! Qual a sua idade?`)
    var res = n1 + n2;  alert(`Acabei de conhecer ${n1}, que tem ${n2} anos de idade!`)
});

container.appendChild(botao);
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