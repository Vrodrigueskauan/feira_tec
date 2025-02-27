let index = 0;
const images = document.querySelectorAll(".fade-images img");
function changeImage() {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}
setInterval(changeImage, 2000);

const textos = ["Sustentabilidade", "Tecnologia", "Educação"];
let indice = 0;
const elemento = document.getElementById("texto");

function apagarTexto(texto, callback) {
    let i = texto.length;
    const intervalo = setInterval(() => {
        if (i > 0) {
            elemento.textContent = texto.slice(0, i - 1);
            i--;
        } else {
            clearInterval(intervalo);
            callback();
        }
    }, 100);
}

function escreverTexto(texto) {
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < texto.length) {
            elemento.textContent += texto[i];
            i++;
        } else {
            clearInterval(intervalo);
            setTimeout(alternarTexto, 3000);
        }
    }, 100);
}

function alternarTexto() {
    indice = (indice + 1) % textos.length;
    apagarTexto(elemento.textContent, () => escreverTexto(textos[indice]));
}

setTimeout(alternarTexto, 3000);
