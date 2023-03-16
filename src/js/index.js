/*
Ao clicar no botão ele abrira a proxima imagem
*/

const bototoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

bototoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado(botao);
        esconderImagemAtiva(indice);
    })
})
function esconderImagemAtiva(indice) {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
    imagens[indice].classList.add('ativa');
}

function desativarBotaoSelecionado(botao) {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
    botao.classList.add('selecionado');
}

