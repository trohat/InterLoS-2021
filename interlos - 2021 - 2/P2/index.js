console.log("Interlos - P3");

const zpracuj = (data) => {
    data = data.split("\n");
    data.shift();
    data = data.map(d => {
        d = d.split(",")
        d.shift();
        d = d.map(Number);
        return d;
    });
    return data;
};

const vycisti = data => {
    data = data.map(radek => radek.filter( n => n >= 4));
    return data.map(x => x.length);
}


console.log(vycisti(zpracuj(losi).rotateRight()));
console.log(vycisti(zpracuj(losice).rotateRight()));