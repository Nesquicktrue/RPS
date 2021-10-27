let skoreHrac = 0;   
let skorePC = 0;
let mojeVolba;
let cisloKola = 1;  
let vysledekKola;       

const tlacitkoNuzky = document.querySelector("#nuzky");  //definuji tlačítka
const tlacitkoPapir = document.querySelector(".papir");
const tlacitkoKamen = document.querySelector(".kamen");

const divAnimace = document.querySelector(".animace");   // definuji div pro animaci   
const gif = document.createElement("img");   // GIF

const divSkoreMoje = document.querySelector(".skoreMoje");  // definuji div pro výsledky a čítač kol
const divSkorePC = document.querySelector(".skorePC");
const divVysledek = document.querySelector(".vysledek");
const divKolo = document.querySelector(".kolo");

// Tah PC
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

// Zobrazí výherce kola a body
function zobrazSkore () {
    switch(vysledekKola) {
        case "vyhra":
            ++skoreHrac;
            divVysledek.textContent = ("Toto kolo jsi vyhrál!");
            break;
        case "prohra":
            ++skorePC;
            divVysledek.textContent = ("Toto kolo vyhrál PC");
            break;
        default:
            divVysledek.textContent = ("Toto kolo skončilo remízou");
            break;
    }
    divSkoreMoje.textContent = skoreHrac;
    divSkorePC.textContent = skorePC;
    divKolo.textContent = ("Kolo " + cisloKola + " / 5");
}

// Vyhodnocení kola
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
                    break;
                default:
                    gif.setAttribute("src", "gif/kp.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "prohra";
                    break;
            }
            break;

        case "Nůžky":
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/nk.gif");
                    divAnimace.appendChild(gif);                    
                    vysledekKola = "prohra";
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
                    break;
            }
            break;

        default:
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/pk.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "vyhra";
                    break; 
                case "Nůžky":
                    gif.setAttribute("src", "gif/pn.gif");
                    divAnimace.appendChild(gif);
                    vysledekKola = "prohra";
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

function hrajem () {     
        pcVolba = computerHraje();              // PC volí svůj tah
        kolo(mojeVolba,pcVolba);                // Vyhodnocení
        console.log(vysledekKola);
        setTimeout(zobrazSkore, 1000);
        cisloKola ++;
}

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



// if (skoreHrac > skorePC) {
//         console.log("Vyhrál jsi nad PC! Svět je zachráněn! Hurá! ...Hromadný sex? Ne? OK boomer...");
//     } else if (skoreHrac === skorePC){
//         console.log("Je to remíza. Stroje si vezmou půl světa, domu i tvé manželky...a to myslím tu lepší půlku...")
//         }
//        else{
//         console.log("PC získal více bodů a vyhrál nad tebou. Ve své pouti jsi neobstál a svět bude zničen. Fakt díky moc...")
// }   
