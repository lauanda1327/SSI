let nuvem = document.querySelector(".pop_up")
let painuvem = document.querySelector(".pop_up_pai")
let body = document.querySelector("body")
let click = 0

usuario_visitou_pela_primeira_vez =  localStorage.getItem("visitou") === null



if (usuario_visitou_pela_primeira_vez) {
    //mostre a pop_up de acesso
    nuvem.style.display = 'flex'
    body.style = "position:static;"
    painuvem.style = "z-index:1; position:absolute;background:#80808033;height:100%;width:100%;"
    localStorage.setItem("visitou", "true")
}
//pop_up pagina inicial
function fechar_nuvem(){
    nuvem.style.display = 'none'
    body.style = "position:relative;"
    painuvem.style = "display:none;"
}

function renderizar_nuvem(value){
    let titulo = document.getElementById("tituloMsg")
    let msg = document.getElementById("msg")
    let btnfechar = document.querySelector(".agoranao")
    let btn = document.querySelector(".vamosla")
    click = click + 1
    if(click == 1){
        titulo.innerHTML ="Navegação"
        msg.innerHTML = "Com os botôes de navegação você consegue acessar os mais diversos simuladores, conversores de medidas, informações teóricas e atualizações do site"
        btnfechar.innerHTML = "Já é o sufiente"
        btn.innerHTML = "Continuar"
    }
    if(click == 2){
        titulo.innerHTML ="Simuladores"
        msg.innerHTML = "Utilize os botões da aba de configuração para modificar a interação do simulador, em seguida aplique e veja as alterações"
        
    }
    if(click == 3){
        titulo.innerHTML ="Informações"
        msg.innerHTML = "Você pode  conferir informações relevantes e calcúlos matemáticos indo até a aba de informações"
        
    }
    if(click == 4){
        titulo.innerHTML ="Pronto!!"
        msg.innerHTML = "Você concluiu o tutorial inicial de aprendizado. Aproveite os simuladores."
        btn.innerHTML = "OK, até a próxima"
        btnfechar.innerHTML = "Certo"
    }
    if(click == 5){
        fechar_nuvem()
    }
}