const pecas = document.querySelectorAll(".img-peca");
const pecasPretas = document.querySelectorAll(".peca-preta");
const pecasBrancas = document.querySelectorAll(".peca-branca");

function verificaCasasDisponiveis(listaDeClasse) {
    if (listaDeClasse.contains("img-peao")) {
        alert(listaDeClasse);
    }
}

pecas.forEach(peca => {
    peca.addEventListener("click", () => {
        verificaCasasDisponiveis(peca.classList);
    })
});