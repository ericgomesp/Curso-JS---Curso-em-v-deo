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

function info() {
    let agora = new Date();
    // Formatar a data com dia da semana em português
    let agoraFormatada = agora.toLocaleString('pt-BR', {
        weekday: 'long',   // Exibe o nome completo do dia da semana (ex: "segunda-feira")
        year: 'numeric',   // Exibe o ano com 4 dígitos
        month: 'long',     // Exibe o mês por extenso (ex: "março")
        day: 'numeric',    // Exibe o dia do mês (ex: 19)
        hour: 'numeric',   // Exibe a hora
        minute: 'numeric', // Exibe os minutos
        second: 'numeric'  // Exibe os segundos
    });

    let saida = document.getElementById('saida');
    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agoraFormatada}</mark></p>`;
}