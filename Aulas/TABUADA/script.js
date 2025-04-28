function tabuada() {
    var num = document.getElementById('txtn').value;
    var operation = document.getElementById('operation').value;
    var sel = document.getElementById('seltab');
    sel.innerHTML = ''; // Limpa o select antes de adicionar novos valores

    if (num.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option');
            switch(operation) {
                case 'x':
                    item.text = `${num} x ${i} = ${num * i}`; // Multiplicação
                    break;
                case '+':
                    item.text = `${num} + ${i} = ${parseInt(num) + i}`; // Adição
                    break;
                case '-':
                    item.text = `${num} - ${i} = ${num - i}`; // Subtração
                    break;
                case '/':
                    if (i !== 0) {
                        item.text = `${num} ÷ ${i} = ${(num / i).toFixed(2)}`; // Divisão (com duas casas decimais)
                    } else {
                        item.text = `${num} ÷ ${i} = Infinito`; // Evitar divisão por zero
                    }
                    break;
            }
            sel.appendChild(item);
        }
    }
}
