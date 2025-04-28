function mostrarDivisores() {
    let num = document.getElementById('txtNumero').value;
    let lista = document.getElementById('listaDivisores');
    
    // Limpar a lista antes de mostrar os novos divisores
    lista.innerHTML = '';
    
    // Se o campo não tiver valor ou for zero, não faz nada
    if (num.length == 0 || num == 0) {
        return;
    }
    
    let n = Number(num);
    
    // Encontrar os divisores
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            let li = document.createElement('li');
            li.textContent = i;
            lista.appendChild(li);
        }
    }
}
