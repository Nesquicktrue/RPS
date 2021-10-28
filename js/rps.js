let skoreHrac = 0;   
let skorePC = 0;
let mojeVolba;
let cisloKola = 0;  
let vysledekKola;
let pocetKol = 5;       

const tlacitkoNuzky = document.querySelector(".nuzky");  //definuji tlačítka
const tlacitkoPapir = document.querySelector(".papir");
const tlacitkoKamen = document.querySelector(".kamen");
const divTlacitka = document.querySelector(".tlacitka");
const divKdoVyhral = document.querySelector("#kdoVyhral");
const divSkore = document.querySelector("#skore");

const divAnimace = document.querySelector(".animace");   // definuji div pro animaci   
const gif = document.createElement("img");   // GIF

const divSkoreMoje = document.querySelector(".skoreMoje");  // definuji div pro výsledky a čítač kol
const divSkorePC = document.querySelector(".skorePC");
const divVysledek = document.querySelector(".vysledek");
const divVysledekSchovat = document.querySelector("#vysledek-schovat");
const divKolo = document.querySelector(".kolo");

// Tlačítka začnou hru
tlacitkoNuzky.addEventListener("click", () => {
    mojeVolba = "Nůžky";
    divVysledek.textContent = ("");
    hrajem ();
});

tlacitkoKamen.addEventListener("click", () => {
    mojeVolba = "Kámen";
    divVysledek.textContent = ("");
    hrajem ();
});

tlacitkoPapir.addEventListener("click", () => {
    mojeVolba = "Papír";
    divVysledek.textContent = ("");
    hrajem ();
});

// Hra začíná na počet kol = pocetKol
function hrajem () {
    cisloKola++;
    divKolo.textContent = (cisloKola + " / " + pocetKol);

    if (divSkore.classList.value == "neviditelny") {    // hra začala prvním tahem, odkrývám pole s výsledky
        divSkore.classList.remove("neviditelny");
        divVysledekSchovat.classList.remove("neviditelny");
    }        
    pcVolba = computerHraje();              // PC volí svůj tah
    kolo(mojeVolba,pcVolba);                // Vyhodnocení
    setTimeout(zobrazSkore, 1000);          // prodleva pro dokončení animace    
    if (cisloKola >= pocetKol) {                        
        divTlacitka.classList.toggle("neviditelny");   // hra skončila - schovávám tlačítka
        setTimeout(konec, 1000);
    } 
}

// PC volí svůj tah
function computerHraje() {
    let nahodneCislo = Math.random();
    if (nahodneCislo <= 0.3) {
        return "Kámen";
    } else if (nahodneCislo > 0.3 && nahodneCislo <= 0.6) {
        return "Nůžky"
    } else {
        return "Papír";
    }
}

// Vyhodnocení vítěze kola
function kolo(hrac,pc) {
    switch (hrac) {
        case "Kámen":
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/rem.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "remiza";
                    break; 
                case "Nůžky":
                    gif.setAttribute("src", "gif/kn.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "vyhra";
                    ++skoreHrac;
                    break;
                default:
                    gif.setAttribute("src", "gif/kp.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "prohra";
                    ++skorePC;
                    break;
            }
            break;

        case "Nůžky":
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/nk.gif");
                    divAnimace.appendChild(gif);                    
                    vysledekKola = "prohra";
                    ++skorePC
                    break;
                case "Nůžky":
                    gif.setAttribute("src", "gif/rem.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "remiza";
                    break;
                default:
                    gif.setAttribute("src", "gif/np.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "vyhra";
                    ++skoreHrac;
                    break;
            }
            break;

        default:
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/pk.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "vyhra";
                    ++skoreHrac;
                    break; 
                case "Nůžky":
                    gif.setAttribute("src", "gif/pn.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "prohra";
                    ++skorePC;
                    break;
                default:
                    gif.setAttribute("src", "gif/rem.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "remiza";
                    break;
            }
            break;            
            
    }
}

// Zobrazí výherce kola a průběžné body
function zobrazSkore () {
    switch(vysledekKola) {
        case "vyhra":
            divVysledek.textContent = ("Vyhráváš");
            break;
        case "prohra":
            divVysledek.textContent = ("Prohráváš");
            break;
        default:
            divVysledek.textContent = ("Remíza");
            break;
    }
    divSkoreMoje.textContent = skoreHrac;
    divSkorePC.textContent = skorePC;
    }

// Hra končí, schovám tlačítka a oznámím celkového výherce
function konec() {
    
    if (skoreHrac > skorePC) {
            divKdoVyhral.textContent=("VYHRÁL JSI HRU SE SKÓRE " + skoreHrac + " : " + skorePC);
        } else if (skoreHrac === skorePC) {
            divKdoVyhral.textContent=("REMÍZOVAL JSI HRU SE SKÓRE " + skoreHrac + " : " + skorePC);
        } else {
            divKdoVyhral.textContent=("PROHRÁL JSI HRU SE SKÓRE " + skoreHrac + " : " + skorePC);
    }

    divKdoVyhral.classList.toggle("neviditelny");  // odkrývám výherce

};  
