console.log("P1 - Hrátky s roboty");

const task = data => {
    let allRobots = data.robots;
    let squares = data["printer-squares"];
    let printString = '';
    const maxX = 100;
    const maxY = 100;
    let rob4 = true; // up;
    let rob5 = 0;
    const notMoving = [];
    let lastPos;
    let i = 0;
    while (true) {
        i++;
        console.log("Step " + i);
        if (allRobots.toString() === lastPos) return printString;
        lastPos = allRobots.toString();
        let robotN = 0;
        for (const robot of allRobots) {
            robotN = (robotN + 1) % 5;
            let actX = robot[0];
            let actY = robot[1];
            switch (robotN) {
                case 1:
                    actX++;
                    break;
                case 2:
                    actY++;
                    break;
                case 3:
                    actX--;
                    actY++;
                    break;
                case 4:
                    if (rob4) actY--;
                    else actX--;
                    rob4 = !rob4;
                    break;
                case 0:
                    switch (rob5) {
                        case 0:
                            actY--;
                            break;
                        case 1:
                            actX--;
                            break;
                        case 2:
                            actY++;
                            break;
                        case 3:
                            actX--;
                            break;
                    }
                    rob5 = (rob5 + 1) % 4;
                    break;
            }
            let free = true;
            for (const robot of allRobots) 
                if (actX === robot[0] && actY === robot[1]) free = false;
            if (!free) notMoving.push(robotN);
            if (actX > 0 && actY > 0 && actX <= maxX && actY <= maxY && free && !notMoving.includes(robotN)) {
                robot[0] = actX;
                robot[1] = actY;
            }
            for (const square of squares) 
                if (square[0] === robot[0] && square[1] === robot[1] && !notMoving.includes(robotN)) {
                    if (robotN === 2) console.log(square, robot)
                    if (robotN === 0) printString += "5";
                    else printString += robotN;
                }
        }
        //console.table(allRobots)
        console.log(printString)
    }
};

//console.time("Task");
console.log("Task: " + task(inputdata));
//console.timeEnd("Task");

console.log("");