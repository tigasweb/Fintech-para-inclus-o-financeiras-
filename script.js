/* Lembrando que não consegui testar os códigos, vou testar na sala, pfv procurem as imagens para fazermos os carrossel :) */

/* Pfv, nn esquecam de colocar o ID idêntico ao do JS */

const track = document.getElementById(carrosselImagens);

const itens = document.querySelectorAll(carrosselItens);
let index = 0;

/* Função que vai passar as próximas imagens */
function animacaoCarrossel() {
    index++; /* Elemento usado para avançar uma imagem */

    if (index >= itens.length - 1) {
        setTimeout(() => {
            track.style.transition = 'none'; /* Removendo animação */
            index = 0; /* Voltando a primeira imagem */
            track.style.transform = `translateX(0)`; /* Movendo para a primeira imagem */
        }, 500); /* Tempo suficiente para completar a  */
    }
    else {
        track.style.transition = 'transform 1.0 ease';
        track.style.transform = `translateX(-${index *100}%)`;
    }

};

setInterval(animacaoCarrossel, 4000); 