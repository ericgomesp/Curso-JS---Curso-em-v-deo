function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Bebê - Menino.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'Adolescente - Homem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'Homem Meia Idade.png');
            } else {
                img.setAttribute('src', 'Idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Bebê - Menina.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'Adolescente - Mulher.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'Mulher Meia Idade.png');
            } else {
                img.setAttribute('src', 'idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}

// Separando a funcionalidade do "Enter" para um lugar fora da função verificar
const input = document.getElementById('myInput');
const button = document.getElementById('myButton');

function handleEnterPress(event) {
    if (event.key === 'Enter') {
        button.click();
    }
}

input.addEventListener('keydown', handleEnterPress);

button.addEventListener('click', function() {
    alert('Botão clicado!');
});
