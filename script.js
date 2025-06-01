const pecas = document.querySelectorAll(".img-peca");
const pecasPretas = document.querySelectorAll(".peca-preta");
const pecasBrancas = document.querySelectorAll(".peca-branca");
const casasDisponiveis = document.querySelectorAll(".casa-disponivel");

function verificaPeca(peca) {
    if (peca.classList.contains("img-peao")) {
        verificaCasasPeao(peca);
    }
}

function verificaCasasPeao(peca) {
    if (peca.classList.contains("peca-branca")) {
        if (peca.classList.contains("casa-inicial")) {
            const coluna = peca.parentNode.classList[1];
            const linha = peca.parentNode.parentNode;

            const casaDisponivel1 = linha.previousElementSibling;
            const elementoCasaDisponivel1 = casaDisponivel1.querySelector(`.${coluna} .casa-disponivel`);

            const casaDisponivel2 = linha.previousElementSibling.previousElementSibling;
            const elementoCasaDisponivel2 = casaDisponivel2.querySelector(`.${coluna} .casa-disponivel`);

            if (!elementoCasaDisponivel1.parentNode.querySelector("i") && !elementoCasaDisponivel2.parentNode.querySelector("i")) {
                elementoCasaDisponivel1.style.display = "block";
                elementoCasaDisponivel2.style.display = "block";

                elementoCasaDisponivel1.addEventListener("click", () => {
                    movimentaPeca(peca, elementoCasaDisponivel1);
                });
                elementoCasaDisponivel2.addEventListener("click", () => {
                    movimentaPeca(peca, elementoCasaDisponivel2);
                });
            }

        } else {
            const coluna = peca.parentNode.classList[1];
            const linha = peca.parentNode.parentNode;

            const casaDisponivel1 = linha.previousElementSibling;
            const elementoCasaDisponivel1 = casaDisponivel1.querySelector(`.${coluna} .casa-disponivel`);

            if (!elementoCasaDisponivel1.parentNode.querySelector("i")) {
                elementoCasaDisponivel1.style.display = "block";

                elementoCasaDisponivel1.addEventListener("click", () => {
                    movimentaPeca(peca, elementoCasaDisponivel1);
                });
            }
        }
    }
}

function movimentaPeca(peca, casa) {
    const colunaDisponivel = casa.parentNode;

    peca.classList.remove("casa-inicial");

    colunaDisponivel.appendChild(peca);
    limpaCasasDisponiveis();
}

function limpaCasasDisponiveis() {
    casasDisponiveis.forEach((casa) => {
        casa.style.display = "none";
    })
}

pecas.forEach(peca => {
    peca.addEventListener("click", () => {
        limpaCasasDisponiveis();
        verificaPeca(peca);
    })
});