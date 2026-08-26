const projeto1 = document.getElementById("projeto-1");
const projeto2 = document.getElementById("projeto-2");

const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

setaDireita.addEventListener("click", () => {
    projeto1.style.display = "none";
    projeto2.style.display = "block";
});

setaEsquerda.addEventListener("click", () => {
    projeto2.style.display = "none";
    projeto1.style.display = "block";
});