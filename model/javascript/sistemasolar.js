let nuvem_simuladores = document.querySelector(".pop_up_simuladores")/*==*/
let usuario_visitou_pela_primeira_vez_o_simulador =  localStorage.getItem("visitouSimuladorsolar") === null/*==*/
//functions dos planetas click
function sol(){
    const el = document.querySelector('.sol');
    if(el) el.click();
}

if (usuario_visitou_pela_primeira_vez_o_simulador) {/*==*/
    //mostre a pop_up de acesso
    nuvem_simuladores.style.display = 'flex'
    localStorage.setItem("visitouSimuladorsolar", "true")
}
//pup_up simuladores
function fechar_nuvem_simulador(){/*==*/
    nuvem_simuladores.style.display = 'none'
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

// --- Reimplementação: velocidade, unidades, estrelas e modal de planetas ---
document.addEventListener('DOMContentLoaded', ()=>{
    try{
        const specs = [
            {sel: '.sol', name: 'Sol', au: 0, days: 0, info: 'O Sol é a estrela central do nosso sistema solar.', diameterKm: 1392700, massKg: 1.9885e30, temperatureK: 5778, color: '#ffb347', moons: 0, fun: 'É uma estrela de classe G que mantém o sistema unido.'},
            {sel: '.mercurio', name: 'Mercúrio', au: 0.39, days: 88, info: 'Mercúrio é o menor planeta.', diameterKm: 4879, massKg: 3.3011e23, gravity: 3.7, moons: 0, color: '#8b8b8b', fun: 'Tem grandes variações de temperatura.'},
            {sel: '.venus', name: 'Vênus', au: 0.72, days: 225, info: 'Vênus tem uma atmosfera densa.', diameterKm: 12104, massKg: 4.8675e24, gravity: 8.87, moons: 0, color: '#e09b5f', fun: 'Vênus gira ao contrário em relação à maioria dos planetas.'},
            {sel: '.terra', name: 'Terra', au: 1, days: 365, info: 'A Terra, nosso planeta.', diameterKm: 12742, massKg: 5.972e24, gravity: 9.807, moons: 1, color: '#2f9fff', fun: 'Possui água líquida e vida.'},
            {sel: '.marte', name: 'Marte', au: 1.52, days: 687, info: 'Marte é conhecido como planeta vermelho.', diameterKm: 6779, massKg: 6.4171e23, gravity: 3.721, moons: 2, color: '#d14b2a', fun: 'Tem o maior vulcão do sistema solar, Olympus Mons.'},
            {sel: '.jupiter', name: 'Júpiter', au: 5.20, days: 4333, info: 'Júpiter é o maior planeta.', diameterKm: 139820, massKg: 1.898e27, gravity: 24.79, moons: 95, color: '#d9c79f', fun: 'Possui a Grande Mancha Vermelha, uma tempestade gigante.'},
            {sel: '.anel_de_saturno', name: 'Saturno', au: 9.58, days: 10759, info: 'Saturno possui anéis visíveis.', diameterKm: 116460, massKg: 5.683e26, gravity: 10.44, moons: 82, color: '#f5deb3', fun: 'Seus anéis são feitos de partículas de gelo e rocha.'},
            {sel: '.urano', name: 'Urano', au: 19.2, days: 30687, info: 'Urano é um gigante gasoso inclinado.', diameterKm: 50724, massKg: 8.681e25, gravity: 8.69, moons: 27, color: '#7fd2d2', fun: 'Roda praticamente de lado.'},
            {sel: '.netuno', name: 'Netuno', au: 30.05, days: 60190, info: 'Netuno é o planeta mais distante.', diameterKm: 49244, massKg: 1.024e26, gravity: 11.15, moons: 14, color: '#2b3cff', fun: 'Tem ventos mais rápidos do que qualquer outro planeta.'}
        ];

        const planets = specs.map(s => ({ el: document.querySelector(s.sel), spec: s })).filter(p => p.el);
        const scaleK = 50;

        let speedFactor = 1;
        const speedDisplay = document.getElementById('speedDisplay');
        const speedUp = document.getElementById('speedUp');
        const speedDown = document.getElementById('speedDown');
        const timeSlider = document.getElementById('timeSlider');
        const timeDisplay = document.getElementById('timeDisplay');
        const timeUnit = document.getElementById('timeUnit');

        function computeRadius(au){ return Math.sqrt(au) * scaleK; }

        function applySpeed(){
            const unitDaysPerSec = Number(timeUnit?.value || 1);
            const daysPerSec = unitDaysPerSec * speedFactor;
            planets.forEach(p => {
                const days = p.spec.days || 1;
                const duration = Math.max(0.01, days / daysPerSec);
                // definir tanto a variavel CSS quanto a propriedade animationDuration para garantir compatibilidade
                p.el.style.setProperty('--t', duration + 's');
                p.el.style.animationDuration = duration + 's';
                const r = computeRadius(p.spec.au || 0);
                p.el.style.setProperty('--r', r + 'px');
                p.el.style.animationPlayState = 'running';
            });
            if(speedDisplay) speedDisplay.textContent = speedFactor + 'x (' + (daysPerSec).toLocaleString() + ' d/s)';
        }

        function generateStars(count = 120){
            const box = document.getElementById('stars');
            if(!box) return;
            box.innerHTML = '';
            for(let i=0;i<count;i++){
                const s = document.createElement('span');
                s.style.left = (Math.random()*100) + '%';
                s.style.top = (Math.random()*100) + '%';
                const size = (Math.random()*2)+1;
                s.style.width = size + 'px'; s.style.height = size + 'px';
                s.style.opacity = (0.5 + Math.random()*0.6).toString();
                box.appendChild(s);
            }
        }

        function setTime(percent){
            planets.forEach(p => {
                const style = getComputedStyle(p.el);
                const durationStr = style.animationDuration || style.getPropertyValue('--t') || '1s';
                const duration = parseFloat(durationStr) || 1;
                p.el.style.animationPlayState = 'paused';
                p.el.style.animationDelay = '-' + (duration * (percent/100)) + 's';
            });
            if(timeDisplay) timeDisplay.textContent = Math.round(percent) + '%';
        }

        // modal
        const planetModal = document.getElementById('planetModal');
        const planetModalTitle = document.getElementById('planetModalTitle');
        const planetModalBody = document.getElementById('planetModalBody');
        const closePlanetModal = document.getElementById('closePlanetModal');
        function showPlanetInfo(spec){ 
            if(!planetModal) return; 
            planetModalTitle.textContent = spec.name; 
            const km = spec.au ? (spec.au * 149597870.7) : (spec.diameterKm || 0);
            const diameter = spec.diameterKm ? spec.diameterKm.toLocaleString() + ' km' : '—';
            const mass = spec.massKg ? spec.massKg.toExponential(2) + ' kg' : '—';
            const gravity = spec.gravity ? spec.gravity + ' m/s²' : '—';
            const moons = spec.moons != null ? spec.moons : '—';
            const temp = spec.temperatureK ? spec.temperatureK + ' K' : '—';
            const color = spec.color || '#ddd';
            planetModalBody.innerHTML = `
                <div class="planet-card">
                    <div class="planet-avatar" style="background:${color}"></div>
                    <div class="planet-info">
                        <h4>${spec.name}</h4>
                        <p><strong>Distância:</strong> ${spec.au} AU (${Math.round(km).toLocaleString()} km)</p>
                        <p><strong>Diâmetro:</strong> ${diameter}</p>
                        <p><strong>Massa:</strong> ${mass}</p>
                        <p><strong>Gravidade:</strong> ${gravity} • <strong>Luas:</strong> ${moons}</p>
                        <p><strong>Período orbital:</strong> ${spec.days ? spec.days + ' dias' : '—'}</p>
                        <p style="margin-top:6px;">${spec.fun || spec.info}</p>
                    </div>
                </div>
            `; 
            planetModal.style.display = 'flex'; 
        }
        if(closePlanetModal) closePlanetModal.addEventListener('click', ()=> planetModal.style.display = 'none');
        if(planetModal) planetModal.addEventListener('click', (e)=>{ if(e.target === planetModal) planetModal.style.display='none'; });

        planets.forEach(p => {
            p.el.style.cursor = 'pointer';
            p.el.addEventListener('click', (ev)=>{ ev.stopPropagation(); showPlanetInfo(p.spec); });
        });

        if(speedUp) speedUp.addEventListener('click', ()=>{ speedFactor = Math.min(speedFactor*2, 1024); applySpeed(); });
        if(speedDown) speedDown.addEventListener('click', ()=>{ speedFactor = Math.max(speedFactor/2, 1/1024); applySpeed(); });
        if(timeSlider){ timeSlider.addEventListener('input', (e)=>{ setTime(e.target.value); }); timeSlider.addEventListener('change', ()=>{ planets.forEach(p => p.el.style.animationPlayState = 'running'); }); }
        if(timeUnit){ timeUnit.addEventListener('change', applySpeed); }

        applySpeed(); generateStars(120);
    }catch(err){ console.error('Erro inic. simulador:', err); }
});