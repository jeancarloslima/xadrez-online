const pecas = document.querySelectorAll(".img-peca");
const pecasPretas = document.querySelectorAll(".peca-preta");
const pecasBrancas = document.querySelectorAll(".peca-branca");

function verificaPeca(peca) {
    if (peca.classList.contains("img-peao")) {
        verificaCasasPeao(peca);
    }
}

function verificaCasasPeao(peca) {
    if (peca.classList.contains("peca-branca")) {
        if (peca.classList.contains("casa-inicial")) {
            let coluna = peca.parentNode.classList[1];
            let linha = peca.parentNode.parentNode;

            let casaDisponivel1 = linha.previousElementSibling;
            let elementoCasaDisponivel1 = casaDisponivel1.querySelector(`.${coluna} .casa-disponivel`);

            let casaDisponivel2 = linha.previousElementSibling.previousElementSibling;
            let elementoCasaDisponivel2 = casaDisponivel2.querySelector(`.${coluna} .casa-disponivel`);
            
            elementoCasaDisponivel1.style.display = "block";
            elementoCasaDisponivel2.style.display = "block";
        }
    }
}

pecas.forEach(peca => {
    peca.addEventListener("click", () => {
        verificaPeca(peca);
    })
});