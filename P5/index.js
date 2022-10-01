console.log("P5 - KoLOSálna oslava");

const splitLines = data => data.split(", ");

const prepare = data => data.map(x => +x).sort((a,b) => a-b);

let count = 0;

const task = ( data1, data2) => {
    const addNext = (i, from, fromSorted, to, toSorted) => {
        if (from.length === 0) {
            let s = "";
            for (const t of fromSorted) s += chr(t);
            console.log(s);
            count++;
            return;
        }
        for (const t of new Set(from)) {
            let newTable = t + i;
            if (to.includes(newTable)) {
                fromI = from.indexOf(t);
                toI = to.indexOf(newTable);
                let nextFromSorted = [...fromSorted];
                nextFromSorted.push(t);
                let nextToSorted = [...toSorted];
                nextToSorted.push(newTable);
                addNext(i+1, from.slice(0,fromI).concat(from.slice(fromI+1)), nextFromSorted, to.slice(0,toI).concat(to.slice(toI+1)), nextToSorted);
            }
        }
    }

    addNext(1, data1, [], data2, []);
};

inputdata = prepare(splitLines(inputdata));
inputdata2 = prepare(splitLines(inputdata2));

console.log(inputdata);
console.log(inputdata2);


console.log("");

console.time("test");
task([68,72,71], [74,73,70]);
console.timeEnd("test");
console.time("task");
task(inputdata, inputdata2);
console.timeEnd("task");
console.log(count);
