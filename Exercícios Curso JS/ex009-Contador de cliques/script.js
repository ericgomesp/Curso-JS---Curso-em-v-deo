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

let contador = 0;
let res = document.querySelector('section#result');

// Função para contar os cliques
function contar() {
    contador++;  // Incrementa o contador em 1
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`;
}

// Função para zerar o contador
function zerar() {
    contador = 0;  // Zera o contador
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`;  // Exibe "0"
}
