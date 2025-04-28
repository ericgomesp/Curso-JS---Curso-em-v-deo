document.getElementById('botaoReajuste').addEventListener('click', function() {
    // 1. Pergunta sobre o nome do funcionário
    const nomeFuncionario = prompt("Qual é o nome do funcionário?");
    
    // Verificar se o nome foi preenchido
    if (!nomeFuncionario) {
        alert("Por favor, insira o nome do funcionário.");
        return;
    }

    // 2. Pergunta sobre o salário do funcionário
    let salarioAtual = parseFloat(prompt(`Qual é o salário de ${nomeFuncionario}?`));

    // Verificar se o salário é um número válido
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        alert("Por favor, insira um valor de salário válido.");Pesquise no Google ou digite um URL
        
        
        return;
    }

    // 3. Pergunta sobre o percentual de reajuste
    let percentualReajuste = parseFloat(prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?`));

    // Verificar se o percentual de reajuste é um número válido
    if (isNaN(percentualReajuste) || percentualReajuste <= 0) {
        alert("Por favor, insira um percentual de reajuste válido.");
        return;
    }

    // Calcular o valor do reajuste
    let reajuste = (salarioAtual * percentualReajuste) / 100;
    let salarioReajustado = salarioAtual + reajuste;

    // Exibir o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `O salário de ${nomeFuncionario} será reajustado para: R$ ${salarioReajustado.toFixed(2)} (Reajuste de R$ ${reajuste.toFixed(2)})`;
});
