const telaCanva = document.querySelector("#canvas");
const elementoPaiDoCanva = document.querySelector(".container");
alturaPai = elementoPaiDoCanva.clientHeight
larguraPai = elementoPaiDoCanva.clientWidth
if(larguraPai < 600){
    telaCanva.setAttribute("height",alturaPai / 1.8);
}
      //cor padrão da linha, tela e pendulo(objeto)
  let corPadrao = "#000000";
  let background = "#f5e1f1";
  // comprimento da corda3
  let corda3 = localStorage.getItem("corda3");
  // ângulo inicial
  let ang03 = localStorage.getItem("ang03");
  // Ponto onde a corda3 está presa
  let xc = larguraPai/2;
  let yc = 15;
  // coordenadas do pêndulo
  let x; 
  let y;
  let ang;
  let d = corda3 * Math.sin((ang03 * Math.PI) / 180); // x máximo
    // nº de posições intermédias por onde passa o pêndulo entre os extremos
    let numPos = localStorage.getItem("numpos3")
    let incAng = Math.PI / numPos; // incremento angular (para angZ) de cada vez que o relógio dispara
    let angZ = 0;
    let ctx;
    let larg, alt;
let bancoDeDadosNaoExiste = localStorage.getItem("corda3") == null || localStorage.getItem("ang03") === null  ||
        localStorage.getItem("corLinha3") === null ||
        localStorage.getItem("corObj3") === null ||
        localStorage.getItem("corfixo3") === null ||
        localStorage.getItem("numpos3") === null


    if (bancoDeDadosNaoExiste) {
      //resete para os valores padrão
      localStorage.setItem("corda3", "300");
      localStorage.setItem("corLinha3",corPadrao);
      localStorage.setItem("corObj3",corPadrao);
      localStorage.setItem("ang03", "40");
      localStorage.setItem("numpos3", "30");
      localStorage.setItem("corfixo3",corPadrao);
    }
    //atribuindo os valores definidos pelo usuario no value de cada input
    document.getElementById("tamCorda3").value = localStorage.getItem("corda3");
    document.getElementById("angInicial3").value = localStorage.getItem("ang03");
    document.getElementById("corLinha3").value = localStorage.getItem("corLinha3");
    document.getElementById("corObj3").value = localStorage.getItem("corObj3");
    document.getElementById("corfixo3").value = localStorage.getItem("corfixo3");

    function init() {
      let c = document.getElementById("canvas2");
      ctx = c.getContext("2d");
      larg = eval(c.getAttribute("width"));
      alt = eval(c.getAttribute("height"));
      ang = ang03;
      let tempo = 40;
      x = corda3 * Math.sin((ang * Math.PI) / 180) + xc;
      y = corda3 * Math.cos((ang * Math.PI) / 180) + yc;
      setInterval("animacao()", tempo);
    }

    function animacao() {
      angZ += incAng;
      let z = d * Math.cos(angZ)
      x = z
      ang = Math.asin(x / corda3)
      y = corda3 * Math.cos(ang)

      x += xc
      y += yc

      // Desenhar
      ctx.fillStyle = background
      ctx.beginPath()
      ctx.rect(0, 0, larg, alt)
      ctx.fill()

      ctx.lineWidth = 3;
      let corLinha3 = localStorage.getItem("corLinha3")
      let corObj3 = localStorage.getItem("corObj3")
      let corfixo3 = localStorage.getItem("corfixo3")
      desenharMolaETeto(xc, yc, x, y, corLinha3,corfixo3)
      desenharObj(corObj3)
    }

    function desenharObj(cor) {
     // desenhar obj
      ctx.fillStyle = cor;
      ctx.strokeStyle = cor;
      ctx.strokeRect(larguraPai/2 - 15, y, 35,35)
      
      //ctx.strokeRect(x-15,y,30,30)
      //ctx.fillRect(x-15,y,30,30)
      //ctx.drawImage(img, 10, 10, 150, 180);
      
    }

    function desenharMolaETeto(x1, y1, x2, y2, cor,cor2) {
      //desenhar linha
      ctx.fillStyle = cor;
      ctx.strokeStyle = cor;
      ctx.beginPath();
      ctx.moveTo(xc, y1);
      ctx.lineTo(xc, y2);
      ctx.stroke();
      //desenhar local onde a linha esta presa
      ctx.fillStyle = cor2;
      ctx.fillRect(xc-25,yc - 5,50,7);
      ctx.fillRect(xc-25,yc - 5,7,750);
     
    }

    function desenharTela() {
      //captura valor dos campos de input
      let tamanhoCorda = document.getElementById("tamCorda3");
      let anguloInicial = document.getElementById("angInicial3");
      let corLinha3 = document.getElementById('corLinha3');
      let corObj3 = document.getElementById("corObj3");
      let corfixo3 = document.getElementById('corfixo3');
      //jogar os valores no banco de dados
      localStorage.setItem("corda3", tamanhoCorda.value);
      localStorage.setItem("ang03", anguloInicial.value);
      localStorage.setItem("corLinha3", corLinha3.value);
      localStorage.setItem("corObj3", corObj3.value);
      localStorage.setItem("corfixo3", corfixo3.value);
      //recarregar a página para que as alterações do usuario sejam atualizadas
      window.location.reload();
    }
    function resetar() {
      localStorage.setItem("corda3", "300");
      localStorage.setItem("ang03", "40");
      localStorage.setItem("corLinha3", corPadrao);
      localStorage.setItem("corObj3", corPadrao);
      localStorage.setItem("numpos3", "30");
      localStorage.setItem("corfixo3", corPadrao);
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

    // aevento de escuta nos buttons radio
        const radioButtons = document.querySelectorAll('input[name="velocidade"]');
        for(const radioButton of radioButtons){
            radioButton.addEventListener('change', showSelected);
        }        
        
        function showSelected(e) {
            if (this.checked) {
                let a = this.value
                if(a == "normal"){
                  localStorage.setItem("numpos3", "30");
                  desenharTela();
                }
                if (a == "devagar"){
                  localStorage.setItem("numpos3", "60");
                  desenharTela();
                }
            }
        }