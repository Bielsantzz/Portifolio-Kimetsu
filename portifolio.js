// --- MENU DE HÂMBURGUER (MOBILE) ---
const menuToggle = document.getElementById('menu-toggle');
const menuLista = document.getElementById('menu-lista');

if (menuToggle && menuLista) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menuLista.classList.toggle('active');
    });

    // Fecha o menu automaticamente ao clicar em qualquer link da lista
    document.querySelectorAll('.menu-lista a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            menuLista.classList.remove('active');
        });
    });
}

// --- ANIMAÇÃO DE SCROLL (FADE-IN) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo-scroll');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- CARROSSEL DE PROJETOS ---
const projeto1 = document.getElementById("projeto-1");
const projeto2 = document.getElementById("projeto-2");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

let animando = false;

function trocarCard(cardSaindo, cardEntrando, direcao) {
    if (animando) return;
    animando = true;

    if (direcao === 'direita') {
        cardSaindo.classList.add('saindo-esquerda');
    } else {
        cardSaindo.classList.add('saindo-direita');
    }

    setTimeout(() => {
        cardSaindo.style.display = 'none';
        cardSaindo.classList.remove('saindo-esquerda', 'saindo-direita', 'ativo');
        
        cardEntrando.style.display = 'flex';
        void cardEntrando.offsetWidth; 
        cardEntrando.classList.add('ativo');
        
        animando = false;
    }, 600);
}

if (setaDireita && setaEsquerda) {
    setaDireita.addEventListener("click", () => {
        if (projeto1.classList.contains("ativo")) {
            trocarCard(projeto1, projeto2, 'direita');
        } else {
            trocarCard(projeto2, projeto1, 'direita');
        }
    });

    setaEsquerda.addEventListener("click", () => {
        if (projeto2.classList.contains("ativo")) {
            trocarCard(projeto2, projeto1, 'esquerda');
        } else {
            trocarCard(projeto1, projeto2, 'esquerda');
        }
    });
}

// --- BOTÃO DE HABILIDADES SUAVE ---
const btnToggle = document.getElementById('btn-toggle-skills');
const blocoHard = document.getElementById('bloco-hard');
const blocoSoft = document.getElementById('bloco-soft');

// Garante o estado inicial correto ao carregar a página
if (blocoHard && blocoSoft) {
    blocoHard.style.display = 'grid';
    blocoSoft.style.display = 'none';
}

let alternandoSkills = false;

if (btnToggle && blocoHard && blocoSoft) {
    btnToggle.addEventListener('click', () => {
        if (alternandoSkills) return;
        alternandoSkills = true;

        const mostrandoHard = blocoHard.style.display !== 'none';
        const saindo = mostrandoHard ? blocoHard : blocoSoft;
        const entrando = mostrandoHard ? blocoSoft : blocoHard;

        saindo.style.opacity = '0';
        saindo.style.transform = 'translateY(15px)';

        setTimeout(() => {
            saindo.style.display = 'none';
            
            entrando.style.display = 'grid';
            void entrando.offsetWidth; 
            
            entrando.style.opacity = '1';
            entrando.style.transform = 'translateY(0)';
            
            btnToggle.textContent = mostrandoHard ? 'Ver Hard Skills' : 'Ver Soft Skills';
            alternandoSkills = false;
        }, 350);
    });
}