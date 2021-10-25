let skoreHrac = 0;   
let skorePC = 0;
let mojeVolba = "nic";          // string pro hráčův input
let spatneZadani;                   // boolean pro vyhodnocení hráčova inputu

// Nejdříve definuji funkce, které později využiji

// Upravuji tvar zadaného slova - pokud bylo vůbec zadáno
function upravSlovo(slovo) {
    if (slovo === null) {
        return "Prázdný";
    } else {
        return slovo[0].toUpperCase() + slovo.slice(1).toLowerCase();
    }
}

// Rozpoznávám regulérnost tahu hráče
function jeRegulerni(tah) {
    switch(mojeVolba) {
        case "Kámen" :
        case "Nůžky" :
        case "Papír" :
            spatneZadani = false;
            break;
        default:
            if (mojeVolba == null) {
                console.log("Zadání bylo prázdné.")
                mojeVolba = "Prázdné";
                spatneZadani = true;
                break;
                } else {
                console.log(mojeVolba + " bylo neplatné zadání.");
                spatneZadani = true;
                break;
            }
    }   
}

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
                    remiza();
                    break; 
                case "Nůžky":
                    vyhra()
                    break;
                default:
                    vyhra();
                    break;
            }
            break;

        case "Nůžky":
            switch (pc) {
                case "Kámen":                    
                    vyhra();
                    break; 
                case "Nůžky":
                    remiza();
                    break;
                default:
                    prohra();
                    break;
            }
            break;

        default:
            switch (pc) {
                case "Kámen":
                    prohra();
                    break; 
                case "Nůžky":
                    vyhra();
                    break;
                default:
                    remiza();
                    break;
            }
            break;            
            
    }
}

// Pro pět kol
function petKol() {
    for (let i = 1; i < 6; i++) {
       
        mojeVolba = window.prompt("Zadejte volbu");     // zadej svoji volbu
        mojeVolba = upravSlovo(mojeVolba);              // první písmeno velké
        jeRegulerni(mojeVolba);                         // kontrola na zadané slovo - vrací spatneZadani T/F
       
        switch (spatneZadani) {                         
           case false:
                console.log("Kolo číslo: " + i);        // kolo začíná   
                pcVolba = computerHraje();              // PC volí svůj tah
                console.log("Já hraji: " + mojeVolba); 
                console.log("PC hraje: " + pcVolba);

                kolo(mojeVolba,pcVolba);                // Vyhodnocení
        
                console.log("");                        // Mezera mezi tahy
                break;

            default:
                window.alert(`${mojeVolba} je nesprávné zadání, zkus to znovu.`)
                --i;
                break;
        }         
    }
}

petKol();

if (skoreHrac > skorePC) {
        console.log("Vyhrál jsi nad PC! Svět je zachráněn! Hurá! ...Hromadný sex? Ne? OK boomer...");
    } else if (skoreHrac === skorePC){
        console.log("Je to remíza. Stroje si vezmou půl světa, domu i tvé manželky...a to myslím tu lepší půlku...")
        }
       else{
        console.log("PC získal více bodů a vyhrál nad tebou. Ve své pouti jsi neobstál a svět bude zničen. Fakt díky moc...")
}   
