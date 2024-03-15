function sol(){
    alert("sol")
}
/*button do paint do sistema solar*/
function button(){
    let cor = "#c488ff"
    let element = document.body
    let a1 = document.querySelector(".a1")
    let a2 = document.querySelector(".a2")
    let a3 = document.querySelector(".a3")
    let log = document.querySelector(".logo")
    
    element.classList.toggle("dark-mode")

    clickThemeButton += 1
    if(clickThemeButton == 0){
        a1.style.background = 'none'
        a2.style.background = 'none'
        a3.style.background = 'none'
    }

    if(clickThemeButton == 1){
        a1.style.background = cor
        a2.style.background = cor
        a3.style.background = cor
        
    }

    if(clickThemeButton == 2){
        a1.style.background = 'none'
        a2.style.background = 'none'
        a3.style.background = 'none'
        clickThemeButton = 0
    }
}

/*button de informações*/
let clickThemeButton = 0
let clicks = 0

function informacoes(){
    let bi = document.querySelector(".blocoDeInformacao")
    clicks += 1
    if(clicks == 0){
        bi.style.display = 'none'
    }

    if(clicks == 1){
        bi.style.display = 'flex'
    }

    if(clicks == 2){
        bi.style.display = 'none'
        clicks = 0
    }
    
}
function mostrarnomeplaneta(){
    let sol = document.querySelector(".solInfo")
    let mercurio = document.querySelector(".mercurioInfo")
    let venus = document.querySelector(".venusInfo")
    let terra = document.querySelector(".terraInfo")
    let marte = document.querySelector(".marteInfo")
    let jupiter = document.querySelector(".jupiterInfo")
    let saturno = document.querySelector(".saturnoInfo")
    let urano = document.querySelector(".uranoInfo")
    let netuno = document.querySelector(".netunoInfo")
    
    
    clicks += 1
    if(clicks == 0){
        sol.style.display = 'none'
        mercurio.style.display = 'none'
        venus.style.display = 'none'
        saturno.style.display = 'none'
        terra.style.display = 'none'
        marte.style.display = 'none'
        jupiter.style.display = 'none'
        urano.style.display = 'none'
        netuno.style.display = 'none'
    }

    if(clicks == 1){
        sol.style.display = 'flex'
        mercurio.style.display = 'flex'
        saturno.style.display = 'flex'
        venus.style.display = 'flex'
        terra.style.display = 'flex'
        marte.style.display = 'flex'
        jupiter.style.display = 'flex'
        urano.style.display = 'flex'
        netuno.style.display = 'flex'
    }

    if(clicks == 2){
        sol.style.display = 'none'
        mercurio.style.display = 'none'
        saturno.style.display = 'none'
        venus.style.display = 'none'
        terra.style.display = 'none'
        marte.style.display = 'none'
        jupiter.style.display = 'none'
        urano.style.display = 'none'
        netuno.style.display = 'none'
        clicks = 0
    }
}