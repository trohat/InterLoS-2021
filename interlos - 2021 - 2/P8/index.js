console.log("Interlos - P8 - Losí stroj");

const zpracuj = data => {
    data = data.split("\n");
    paska = [];
    for (let line of data) {
        if (line.trim() === "") continue;
        line = line.split(":");
        [state, first, second] = line[0].split(",");
        line[1] = line[1].trim().split(" ");
        paska.push({
            state: +state, first, second, result: line[1]
        })
    }
    return paska;
}

pravidla = zpracuj(programTest);
console.log(paska);

vstup = vstup.split("\n");

const spust = (pravidla, vstup) => {
    for (const pravidlo of pravidla) {
        if (pravidlo.state === vstup.state && (pravidlo.first === "*" || pravidlo.first === vstup.paska[vstup.first]) && (pravidlo.second === "*" || pravidlo.second === vstup.paska[vstup.second])) {
            let vysledek = pravidlo.result;
            if (vysledek.length === 1) return vysledek[0] === "a" ? true : false;
            
            break;
        }
    }
    
};

spust(paska, { state: 0, first: 0, second: 0, paska: ">aaa"});