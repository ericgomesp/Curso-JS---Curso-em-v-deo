// script.js

// Variável global para armazenar o preço do dólar
var precoDolar = 0;

// Função para solicitar o valor do dólar antes de mostrar o conteúdo
function solicitarPrecoDolar() {
    precoDolar = parseFloat(prompt("Qual é o preço atual do dólar?"));

    // Verificar se o valor inserido para o preço do dólar é válido
    if (isNaN(precoDolar) || precoDolar <= 0) {
        alert("Por favor, insira um preço válido para o dólar.");
        return;
    }

    // Exibir o conteúdo da página após o valor do dólar ser fornecido
    mostrarConteudo();
}

// Função para exibir o conteúdo da página
function mostrarConteudo() {
    // Exibir o conteúdo da página
    document.getElementById('container').style.display = 'block';
}

// Função de conversão
function converter() {
    // Obter o valor em reais
    var reais = parseFloat(document.getElementById('real').value);

    // Verificar se o valor inserido em reais é válido
    if (isNaN(reais) || reais <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido de reais.";
        return;
    }

    // Converter o valor de reais para dólares
    var dolares = reais / precoDolar;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = 
        `<p>R$ ${reais} é igual a $${dolares.toFixed(2)} dólares.</p>`;
}

// Chamando a função para solicitar o preço do dólar quando a página for carregada
window.onload = solicitarPrecoDolar;
