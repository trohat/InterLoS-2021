console.log("Interlos - P1");

const vyjmenuj = (doKolika) => {
    let pole = [];
    for (let i = 1; i <= doKolika; i++) {
        let cislo = i;
        jmeno = "";
        if (cislo >= 2000) {
            jmeno += "dva tisice ";
            cislo -= 2000;
        }
        if (cislo === 1100) {
            jmeno += "jeden tisic sto";
            cislo -= 1100;
        }
        if (cislo >= 1000) {
            jmeno += "jeden tisic ";
            cislo -= 1000;
        }
        if (cislo >= 900) {
            jmeno += "devet set ";
            cislo -= 900;
        }
        if (cislo >= 800) {
            jmeno += "osm set ";
            cislo -= 800;
        }
        if (cislo >= 700) {
            jmeno += "sedm set ";
            cislo -= 700;
        }
        if (cislo >= 600) {
            jmeno += "sest set ";
            cislo -= 600;
        }
        if (cislo >= 500) {
            jmeno += "pet set ";
            cislo -= 500;
        }
        if (cislo >= 400) {
            jmeno += "ctyri sta ";
            cislo -= 400;
        }
        if (cislo >= 300) {
            jmeno += "tri sta ";
            cislo -= 300;
        }
        if (cislo >= 200) {
            jmeno += "dve ste ";
            cislo -= 200;
        }
        if (cislo > 100) {
            jmeno += "sto ";
            cislo -= 100;
        }
        if (cislo === 100) {
            jmeno += "jedno sto";
            cislo -= 100;
        }
        if (cislo >= 90) {
            jmeno += "devadesat ";
            cislo -= 90;
        }
        if (cislo >= 80) {
            jmeno += "osmdesat ";
            cislo -= 80;
        }
        if (cislo >= 70) {
            jmeno += "sedmdesat ";
            cislo -= 70;
        }
        if (cislo >= 60) {
            jmeno += "sedesat ";
            cislo -= 60;
        }
        if (cislo >= 50) {
            jmeno += "padesat ";
            cislo -= 50;
        }
        if (cislo >= 40) {
            jmeno += "ctyricet ";
            cislo -= 40;
        }
        if (cislo >= 30) {
            jmeno += "tricet ";
            cislo -= 30;
        }
        if (cislo >= 20) {
            jmeno += "dvacet ";
            cislo -= 20;
        }
        if (cislo === 19) {
            jmeno += "devatenact";
            cislo = 0;
        }
        if (cislo === 18) {
            jmeno += "osmnact";
            cislo = 0;
        }
        if (cislo === 17) {
            jmeno += "sedmnact";
            cislo = 0;
        }
        if (cislo === 16) {
            jmeno += "sestnact";
            cislo = 0;
        }
        if (cislo === 15) {
            jmeno += "patnact";
            cislo = 0;
        }
        if (cislo === 14) {
            jmeno += "ctrnact";
            cislo = 0;
        }
        if (cislo === 13) {
            jmeno += "trinact";
            cislo = 0;
        }
        if (cislo === 12) {
            jmeno += "dvanact";
            cislo = 0;
        }
        if (cislo === 11) {
            jmeno += "jedenact";
            cislo = 0;
        }
        if (cislo === 10) {
            jmeno += "deset";
            cislo = 0;
        }
        if (cislo === 9) {
            jmeno += "devet";
            cislo = 0;
        }
        if (cislo === 8) {
            jmeno += "osm";
            cislo = 0;
        }
        if (cislo === 7) {
            jmeno += "sedm";
            cislo = 0;
        }
        if (cislo === 6) {
            jmeno += "sest";
            cislo = 0;
        }
        if (cislo === 5) {
            jmeno += "pet";
            cislo = 0;
        }
        if (cislo === 4) {
            jmeno += "ctyri";
            cislo = 0;
        }
        if (cislo === 3) {
            jmeno += "tri";
            cislo = 0;
        }
        if (cislo === 2) {
            jmeno += "dva";
            cislo = 0;
        }
        if (cislo === 1) {
            jmeno += "jedna";
            cislo = 0;
        }
        
        pole.push({
            cislo: i,
            jmeno: jmeno.trim()
        })
    }
    return pole;
}


polePeti = vyjmenuj(5).sort((d1, d2) => (d1.jmeno > d2.jmeno) ? 1 : -1);

console.log(polePeti);

poleReseni = vyjmenuj(2618).sort((d1, d2) => (d1.jmeno > d2.jmeno) ? 1 : -1);

console.log(poleReseni);

const spocitej = (pole) => {
    let vysledek = "";
    pole.forEach((prvek, index) => {
        if (prvek.cislo === index + 1) {
            console.log("ok je", prvek.cislo);
            vysledek += prvek.cislo;
        }
    });
    return vysledek;
}

console.log(spocitej(polePeti));
console.log(spocitej(poleReseni));