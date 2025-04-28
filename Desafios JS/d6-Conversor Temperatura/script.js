function converter() {
    // Obter o valor em metros
    var celsius = parseFloat(document.getElementById('metros').value);

    // Verificar se o valor inserido é válido
    if (isNaN(celsius) || celsius <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido.";
        return;
    }
celsius
    // Converter para outras unidades
    var kelvin = celsius + 273.15;
    var fahrenheit = (celsius * 9/5) + 32;
    

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `
        <p>${celsius} Celsius é igual a:</p>
        <p>${kelvin} Kelvin</p>
        <p>${fahrenheit} Fahrenheit</p>
    `;
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