let skoreHrac = 0;   
let skorePC = 0;
let mojeVolba;
let cisloKola = 1;         

const tlacitkoNuzky = document.querySelector(".nuzky");
const tlacitkoPapir = document.querySelector(".papir");
const tlacitkoKamen = document.querySelector(".kamen");
const divAnimace = document.querySelector(".animace");
const gif = document.createElement("img");



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

// Pro zobrazení výhry/prohry a připočtení bodů
function vyhra() {
    ++skoreHrac;
    console.log("Vyhráváš! Skóre:  Ty: " + skoreHrac + " | PC: " + skorePC);
}

function prohra() {
    ++skorePC;
    console.log("Vyhrává PC. Skóre:  Ty: " + skoreHrac + " | PC: " + skorePC);
}

function remiza() {
    console.log("Je to remíza! Skóre zůstává:  Ty: " + skoreHrac + " | PC: " + skorePC);
}

// Vyhodnocení kola
function kolo(hrac,pc) {
    switch (hrac) {
        case "Kámen":
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/rem.gif");
                    divAnimace.appendChild(gif);
                    remiza();
                    break; 
                case "Nůžky":
                    gif.setAttribute("src", "gif/kn.gif");
                    divAnimace.appendChild(gif);
                    vyhra()
                    break;
                default:
                    gif.setAttribute("src", "gif/kp.gif");
                    divAnimace.appendChild(gif);
                    vyhra();
                    break;
            }
            break;

        case "Nůžky":
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/nk.gif");
                    divAnimace.appendChild(gif);                    
                    prohra();
                    break;
                case "Nůžky":
                    gif.setAttribute("src", "gif/rem.gif");
                    divAnimace.appendChild(gif);
                    remiza();
                    break;
                default:
                    gif.setAttribute("src", "gif/np.gif");
                    divAnimace.appendChild(gif);
                    vyhra();
                    break;
            }
            break;

        default:
            switch (pc) {
                case "Kámen":
                    gif.setAttribute("src", "gif/pk.gif");
                    divAnimace.appendChild(gif);
                    vyhra();
                    break; 
                case "Nůžky":
                    gif.setAttribute("src", "gif/pn.gif");
                    divAnimace.appendChild(gif);
                    prohra();
                    break;
                default:
                    gif.setAttribute("src", "gif/rem.gif");
                    divAnimace.appendChild(gif);
                    remiza();
                    break;
            }
            break;            
            
    }
}

function hrajem () {     
        console.log("Kolo číslo: " + cisloKola);        // kolo začíná   
        pcVolba = computerHraje();              // PC volí svůj tah
        console.log("Já hraji: " + mojeVolba); 
        console.log("PC hraje: " + pcVolba);

        kolo(mojeVolba,pcVolba);                // Vyhodnocení
        cisloKola ++;
        console.log("");                        // Mezera mezi tahy
}


tlacitkoNuzky.addEventListener("click", () => {
    mojeVolba = "Nůžky";
    hrajem ();
});

tlacitkoKamen.addEventListener("click", () => {
    mojeVolba = "Kámen";
    hrajem ();
});

tlacitkoPapir.addEventListener("click", () => {
    mojeVolba = "Papír";
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
