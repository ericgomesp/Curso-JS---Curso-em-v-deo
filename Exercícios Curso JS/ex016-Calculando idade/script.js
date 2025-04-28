/*
    ## IMPORTANTE ##
    Você tem todo o direito de usar esse material 
    para seu próprio aprendizado. Professores também 
    podem ter acesso a todo o conteúdo e usá-los com 
    seus alunos. Porém todos os que usarem esse 
    material - seja para qual for a finalidade - deverão 
    manter a referência ao material original, disponível 
    em https://github.com/gustavoguanabara/javascript. Este 
    material não poderá ser utilizado em nenhuma hipótese 
    para ser replicada - integral ou parcialmente - 
    por autores/editoras/instituições para criar livros 
    ou apostilas, com finalidades de obter ganho financeiro 
    com ele.
*/

function calcidade() {
    let agora = new Date();
    let ano = agora.getFullYear();
    let mes = agora.getMonth() + 1; // Mês atual (0-11, então somamos 1 para ficar de 1-12)
    let dia = agora.getDate(); // Dia atual do mês

    // Pergunta o ano, mês (por extenso) e dia de nascimento
    let nascAno = Number(window.prompt('Em que ano você nasceu?'));
    let nascMes = window.prompt('Em que mês você nasceu?').toLowerCase();
    let nascDia = Number(window.prompt('Em que dia você nasceu?'));

    // Lista com os meses em português
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    // Converte o nome do mês para o número do mês (1-12)
    let mesNasc = meses.indexOf(nascMes) + 1;

    if (mesNasc === 0) {
        alert("Mês inválido! Por favor, insira o nome do mês corretamente.");
        return;
    }

    // Calcula a idade inicial
    let idade = ano - nascAno;

    // Verifica se o aniversário já passou neste ano
    if (mesNasc > mes || (mesNasc === mes && nascDia > dia)) {
        idade--; // Se o aniversário ainda não aconteceu neste ano, subtrai 1
    }

    // Exibe o resultado
    let saida = document.getElementById('saida');
    saida.innerHTML = `<p>Quem nasceu em ${nascDia} de ${nascMes} de ${nascAno} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`;
}

