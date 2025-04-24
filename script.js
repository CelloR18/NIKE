let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botao = document.querySelector(".botao-carrinho")

function mudarvisual(cor, imagem){
    body.style.background= cor
    tenis.src = imagem
    botao.style.background = cor
   

}
    