console.log("Interlos - P7");

const mapa = [ {}, {}, { los: true }, { move: 18 },
    { move: 1 },
    {},
    { move: 23 },
    {},
    {},
    {},
    {},
    { los: true },
    {},
    {},
    { los: true },
    { move: 30 },
    {},
    {},
    {},
    {},
    {},
    { los : true },
    { move: 7 },
    {},
    {},
    {},
    {},
    { move: 39 },
    {},
    { los: true },
    {},
    {},
    {},
    {},
    { move: 49 },
    { move: 19 },
    {},
    { los: true },
    { move: 53 },
    {},
    { move: 24 },
    {},
    {},
    {},
    {},
    { move: 42 },
    {},
    {},
    { move: 32 },
    {},
    { los: true },
    { los: true },
    {},
    {},
    {},
    { final: true },
];

const bfs = (mapa) => {
    stavy = [{
        policko: 0,
        limit: 1,
        kroku: 0,
        kroky: []
    }];
    let uspesne = [];
    naKonci = false;
    while (stavy.length > 0) {
        ja = stavy.shift();
        for (let posun = 1; posun <= ja.limit; posun++) {
            let policko = ja.policko + posun;
            if (policko > 55) continue;
            let limit = ja.limit;
            if ("los" in mapa[policko]) limit++;
            if ("move" in mapa[policko]) policko = mapa[policko].move;
            if ("final" in mapa[policko]) {
                naKonci = true;
                console.log("a", stavy);
                console.log(ja.kroku);
                stavy = stavy.filter( stav => stav.kroku < ja.kroku + 1);
                console.log("b", stavy);
                uspesne.push([...ja.kroky].concat(posun));
            } else {
                if (!naKonci)
                    stavy.push({
                        policko,
                        limit,
                        kroku: ja.kroku + 1,
                        kroky: [...ja.kroky].concat(posun)
                    });
            }
        }
    }
    return uspesne;
}

let best = bfs(mapa);

console.log(best);
console.log(best.map(d => d.sum()));
console.log(best[0].sum());