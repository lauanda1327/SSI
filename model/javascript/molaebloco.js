const telaCanva = document.querySelector("#canvas");
const elementoPaiDoCanva = document.querySelector(".container");
alturaPai = elementoPaiDoCanva.clientHeight
larguraPai = elementoPaiDoCanva.clientWidth
telaCanva.setAttribute("width",larguraPai);
telaCanva.setAttribute("height",alturaPai/1.1);
if(larguraPai < 600){
    telaCanva.setAttribute("width",larguraPai);
    telaCanva.setAttribute("height",alturaPai / 1.8);
}
  //cor padrão da linha, tela e pendulo(objeto)
  let corPadrao = "#000000";
  let background = "#f5e1f1";
  // comprimento da corda2
  let corda2 = localStorage.getItem("corda2");
  // ângulo inicial
  let ang02 = localStorage.getItem("ang02");


  // Ponto onde a corda2 está presa
  let xc = 300;
  let yc = 35;
  // coordenadas do pêndulo
  let x; 
  let y;
  let ang;
  let d = corda2 * Math.sin((ang02 * Math.PI) / 180); // x máximo
    // nº de posições intermédias por onde passa o pêndulo entre os extremos
    let numPos = localStorage.getItem("numpos2")
    let incAng = Math.PI / numPos; // incremento angular (para angZ) de cada vez que o relógio dispara
    let angZ = 0;
    let ctx;
    let larg, alt;
let bancoDeDadosNaoExiste = localStorage.getItem("corda2") == null || localStorage.getItem("ang02") === null  ||
        localStorage.getItem("corLinha2") === null ||
        localStorage.getItem("corObj2") === null ||
        localStorage.getItem("corfixo2") === null ||
        localStorage.getItem("numpos2") === null


    if (bancoDeDadosNaoExiste) {
      //resete para os valores padrão
      localStorage.setItem("corda2", "300");
      localStorage.setItem("corLinha2",corPadrao);
      localStorage.setItem("corObj2",corPadrao);
      localStorage.setItem("ang02", "40");
      localStorage.setItem("numpos2", "30");
      localStorage.setItem("corfixo2",corPadrao);
    }
    //atribuindo os valores definidos pelo usuario no value de cada input
    document.getElementById("tamCorda").value = localStorage.getItem("corda2");
    document.getElementById("angInicial").value = localStorage.getItem("ang02");
    document.getElementById("corLinha2").value = localStorage.getItem("corLinha2");
    document.getElementById("corObj2").value = localStorage.getItem("corObj2");
    document.getElementById("corfixo2").value = localStorage.getItem("corfixo2");

    function init() {
      let c = document.getElementById("canvas");
      ctx = c.getContext("2d");
      larg = eval(c.getAttribute("width"));
      alt = eval(c.getAttribute("height"));
      ang = ang02;
      let tempo = 40;
      x = corda2 * Math.sin((ang * Math.PI) / 180) + xc;
      y = corda2 * Math.cos((ang * Math.PI) / 180) + yc;
      setInterval("animacao()", tempo);
    }

    function animacao() {
      angZ += incAng;
      let z = d * Math.cos(angZ)
      x = z
      ang = Math.asin(x / corda2)
      y = corda2 * Math.cos(ang)

      x += xc
      y += yc

      // Desenhar
      ctx.fillStyle = background
      ctx.beginPath()
      ctx.rect(0, 0, larg, alt)
      ctx.fill()

      ctx.lineWidth = 3;
      let corLinha2 = localStorage.getItem("corLinha2")
      let corObj2 = localStorage.getItem("corObj2")
      let corfixo2 = localStorage.getItem("corfixo2")
      desenharMolaETeto(xc, yc, x, y, corLinha2,corfixo2)
      desenharObj(corObj2)
    }

    function desenharObj(cor) {
     // desenhar obj
      ctx.fillStyle = cor;
      ctx.strokeStyle = cor;
      ctx.strokeRect(300 - 15, y, 30,30)
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
      ctx.fillRect(xc-90,yc - 5,180,7);
      ctx.fillRect(xc-20,yc,40,12);
    }

    function desenharTela() {
      //captura valor dos campos de input
      let tamanhoCorda = document.getElementById("tamCorda");
      let anguloInicial = document.getElementById("angInicial");
      let corLinha2 = document.getElementById('corLinha2');
      let corObj2 = document.getElementById("corObj2");
      let corfixo2 = document.getElementById('corfixo2');
      //jogar os valores no banco de dados
      localStorage.setItem("corda2", tamanhoCorda.value);
      localStorage.setItem("ang02", anguloInicial.value);
      localStorage.setItem("corLinha2", corLinha2.value);
      localStorage.setItem("corObj2", corObj2.value);
      localStorage.setItem("corfixo2", corfixo2.value);
      //recarregar a página para que as alterações do usuario sejam atualizadas
      window.location.reload();
    }
    function resetar() {
      localStorage.setItem("corda2", "300");
      localStorage.setItem("ang02", "40");
      localStorage.setItem("corLinha2", corPadrao);
      localStorage.setItem("corObj2", corPadrao);
      localStorage.setItem("numpos2", "30");
      localStorage.setItem("corfixo2", corPadrao);
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
                  localStorage.setItem("numpos2", "30");
                  desenharTela();
                }
                if (a == "devagar"){
                  localStorage.setItem("numpos2", "60");
                  desenharTela();
                }
            }
        }