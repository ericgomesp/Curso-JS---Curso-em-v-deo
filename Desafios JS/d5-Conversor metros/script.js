function converter() {
    // Obter o valor em metros
    var metros = parseFloat(document.getElementById('metros').value);

    // Verificar se o valor inserido é válido
    if (isNaN(metros) || metros <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um número válido.";
        return;
    }

    // Converter para outras unidades
    var km = metros / 1000;
    var hm = metros / 100;
    var dam = metros / 10;
    var dm = metros * 10;
    var cm = metros * 100;
    var mm = metros * 1000;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `
        <p>${metros} metros é igual a:</p>
        <p>${km} km</p>
        <p>${hm} hm</p>
        <p>${dam} Dam</p>
        <p>${dm} dm</p>
        <p>${cm} cm</p>
        <p>${mm} mm</p>
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