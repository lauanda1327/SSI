//codigo javascript
//cor padrão da linha, tela e pendulo(objeto)
let corPadrao = "#efefef";
let background = "#8cb6e0";
// comprimento da corda
let corda = localStorage.getItem("corda");
// ângulo inicial
let ang0 = localStorage.getItem("ang0");
// Ponto onde a corda está presa
let xc = 400;
let yc = 15;
// coordenadas do pêndulo
let x;
let y;
let ang;
let d = corda * Math.sin((ang0 * Math.PI) / 180); // x máximo
// nº de posições intermédias por onde passa o pêndulo entre os extremos
let numPos = localStorage.getItem("numpos")
let incAng = Math.PI / numPos; // incremento angular (para angZ) de cada vez que o relógio dispara
let angZ = 0;
let ctx;
let larg, alt;
let bancoDeDadosNaoExiste = localStorage.getItem("corda") == null ||
    localStorage.getItem("ang0") === null ||
    localStorage.getItem("corfixo") === null ||
    localStorage.getItem("numpos") === null


if (bancoDeDadosNaoExiste) {
    //resete para os valores padrão
    localStorage.setItem("corda", "300");
    localStorage.setItem("ang0", "20");
    localStorage.setItem("numpos", "30");
    localStorage.setItem("corfixo", corPadrao);
}
//atribuindo os valores definidos pelo usuario no value de cada input
document.getElementById("tamCorda").value = localStorage.getItem("corda");
document.getElementById("angInicial").value = localStorage.getItem("ang0");
document.getElementById("corfixo").value = localStorage.getItem("corfixo");

function init() {
    let c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    larg = eval(c.getAttribute("width"));
    alt = eval(c.getAttribute("height"));
    ang = ang0;
    let tempo = 40;
    x = corda * Math.sin((ang * Math.PI) / 180) + xc;
    y = corda * Math.cos((ang * Math.PI) / 180) + yc;
    setInterval("animacao()", tempo);
}

function animacao() {
    angZ += incAng;
    let z = d * Math.cos(angZ)
    x = z
    ang = Math.asin(x / corda)
    y = corda * Math.cos(ang)

    x += xc
    y += yc

    // Desenhar
    ctx.fillStyle = background
    ctx.beginPath() //retira as bordas da janela
    ctx.rect(0, 0, larg, alt)
    ctx.fill()

    ctx.lineWidth = 3;
    let corfixo = localStorage.getItem("corfixo")
    desenharLinha(xc, yc, x, y, corfixo)
    desenharObj(corfixo)
}

function desenharObj(cor) {
    ctx.fillStyle = cor;
    ctx.beginPath()
    ctx.arc(x, y, 16, 0, 2 * Math.PI)
    //ctx.strokeRect(x-15,y,30,30)
    //ctx.fillRect(x-15,y,30,30)
    //ctx.drawImage(img, 10, 10, 150, 180);
    ctx.fill()
}

function desenharLinha(x1, y1, x2, y2, cor) {
    // ctx.strokeRect(300,y,30,30) - massa mola
    //desenhar a linha
    ctx.fillStyle = cor;
    ctx.strokeStyle = cor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    //desenhar local onde a linha esta presa
    ctx.fillStyle = cor;
    ctx.fillRect(xc - 90, yc - 5, 180, 7);
    ctx.fillRect(xc - 20, yc, 40, 12);
}

function desenharTela() {
    //captura valor dos campos de input
    let tamanhoCorda = document.getElementById("tamCorda");
    let anguloInicial = document.getElementById("angInicial");
    let corfixo = document.getElementById('corfixo');
    //jogar os valores no banco de dados
    localStorage.setItem("corda", tamanhoCorda.value);
    localStorage.setItem("ang0", anguloInicial.value);
    localStorage.setItem("corfixo", corfixo.value);
    //recarregar a página para que as alterações do usuario sejam atualizadas
    window.location.reload();
}
function resetar() {
    localStorage.setItem("corda", "300");
    localStorage.setItem("ang0", "20");
    localStorage.setItem("numpos", "30");
    localStorage.setItem("corfixo", corPadrao);
    //recarregar a página para que as alterações padrão sejam atualizadas
    window.location.reload();
}
//evento de escuta no teclado para ativar o botão enter e atualizar os dados
window.addEventListener("keydown", (event) => {
    let tecla = event.key;
    if (tecla == "Enter") {
        desenharTela();
    }
});

// avento de escuta nos buttons radio
const radioButtons = document.querySelectorAll('input[name="velocidade"]');
for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', showSelected);
}

function showSelected(e) {
    if (this.checked) {
        let a = this.value
        if (a == "normal") {
            localStorage.setItem("numpos", "30");
            desenharTela();
        }
        if (a == "devagar") {
            localStorage.setItem("numpos", "60");
            desenharTela();
        }
    }
}
function showVal(newVal){
    document.querySelector(".ap").innerHTML="Ângulo Inicial: " + newVal;
}
function showVal2(newVal){
    document.querySelector(".sp").innerHTML="Tamanho da corda: " + newVal;
}