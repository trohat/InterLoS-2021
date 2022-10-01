console.log("Interlos - P5 - Losnary");

let cisla = ["1", "2", "3"];

const pridelej = cisla => {
    let c = [...cisla];
    const delka = [...c].sort((a,b) => b.length - a.length)[0].length;
    c = c.map(d => d.padStart(delka, "1"));
    let b = [...c].reverse().map(d => "2" + d);
    c = c.map(d => "3" + d);
    return [ ...cisla, ...b, ...c];
}

const hledam = "331211312213212";

while (!cisla.includes(hledam))
    cisla = pridelej(cisla);

console.log("Hledané číslo je ", cisla.indexOf(hledam));