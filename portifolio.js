// --- CARROSSEL DE PROJETOS ---
const projeto1 = document.getElementById("projeto-1");
const projeto2 = document.getElementById("projeto-2");

const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

function trocarCard(cardSaindo, cardEntrando, direcao) {
    if (direcao === 'direita') {
        cardSaindo.classList.add('saindo-esquerda');
    } else {
        cardSaindo.classList.add('saindo-direita');
    }

    setTimeout(() => {
        cardSaindo.style.display = 'none';
        cardSaindo.classList.remove('saindo-esquerda', 'saindo-direita');
        cardSaindo.classList.remove('ativo');
        
        cardEntrando.style.display = 'flex';
        void cardEntrando.offsetWidth; 
        cardEntrando.classList.add('ativo');
    }, 500);
}

// Seta Direita do carrossel (loop infinito)
if (setaDireita && setaEsquerda) {
    setaDireita.addEventListener("click", () => {
        if (projeto1.style.display !== "none" && projeto1.style.display !== "") {
            trocarCard(projeto1, projeto2, 'direita');
        } else {
            trocarCard(projeto2, projeto1, 'direita');
        }
    });

    // Seta Esquerda do carrossel (loop infinito)
    setaEsquerda.addEventListener("click", () => {
        if (projeto2.style.display === "flex") {
            trocarCard(projeto2, projeto1, 'esquerda');
        } else {
            trocarCard(projeto1, projeto2, 'esquerda');
        }
    });
}


