// /* Lembrando que não consegui testar os códigos, vou testar na sala, pfv procurem as imagens para fazermos os carrossel :) */

// /* Pfv, nn esquecam de colocar o ID idêntico ao do JS */

// const track = document.getElementById('carrosselImagens');

// const items = document.querySelectorAll('.div-container1');
// let index = 0;

// /* Função que vai passar as próximas imagens */
// function animacaoCarrossel() {
//     index++; /* Elemento usado para avançar uma imagem */

//     if (index >= itens.length -1) {
//         setTimeout(() =>{
//             track.style.transition = 'none'; /* Removendo animação */
//             index = 0; /* Voltando a primeira imagem */
//             track.style.transform = `translateX(0)`; /* Movendo para a primeira imagem */
//         }, 500); /* Tempo suficiente para completar a volta */
//     }
//     else {
//         track.style.transition = 'transform 1.0 ease';
//         track.style.transform = `translateX(-${index *100}%)`;
//     }

// };

// setInterval(animacaoCarrossel, 4000); 


$(document).ready(function(){
 
    //Seleciona o contêiner .carousel e aplica a função slick()
    //que ativa o carrossel com as configurações abaixo
    $('.section1').slick({

      //slidesToshow: número se cards exibidos ao mesmo tempo no carrosel
      slidesToShow: 3, //Exibe 3 cards ao mesmo tempo

      //slidesToScroll: define quantos cards serão deslizados ao mover o carrossel
      slidesToScroll: 1, //Move 1 card por vez ao deslizar

      //infinite: quando true, carrossel retorna ao inicio automaticamente
      infinite: true, //Mantém o carrossel em rotação continua

      //dost: quando true, ativa os pontos de navegação abaixo do carrosel
      dots: true, //Adiciona pontos de navegação para os usuários

      //arrows: exibe setas de navegação nas laterais do carrosel.
      arrows: true //Ativa as setas para navegar entre os cards
    }) 


})