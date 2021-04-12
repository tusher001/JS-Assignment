//1. Convert Feet to Mile
function feetToMile(feet){
    const mile = 0.0001893939393939394;
    return feet*mile;
}
let yourFeet = 5280;
let result = feetToMile(yourFeet);
console.log(yourFeet, "Feet =", result, "Mile");

// 2. Calculate total wood
function woodCalculator(chair, table, bed){
    woodForChair = 1*chair;
    woodForTable = 3*table;
    woodForBed = 5*bed;
    return woodForChair + woodForTable + woodForBed;
}
const result2 = woodCalculator(2,2,2);
console.log("You need", result2, "KB feet wood.");

//3. Brick calculator
function brickCalculator(storey){
    let brickFor10th = 0;
    let brickFor20th = 0;
    let brickFor20thUp = 0;
    let forUnder20th = 0;
    let forGreaterThan20th = 0;
    for(let i=0; i<=storey; i++){
        if(i<=10){
            let neededFeet = i*15;
            brickFor10th = neededFeet*1000;
        }
        else if(i>10 && i<=20){
            forUnder20th = i - 10;
            let neededFeet = forUnder20th*12;
            brickFor20th = neededFeet*1000;
        }
        else{
            forGreaterThan20th = i - 20;
            let neededFeet = forGreaterThan20th*10;
            brickFor20thUp = neededFeet*1000;
        }
    }
    return brickFor10th + brickFor20th + brickFor20thUp;
}
const buldingStorey = 21;
const result3 = brickCalculator(buldingStorey);
console.log("For", buldingStorey, "storey bulding you need total", result3, "bricks.");

//4. Tiny friend
function tinyFriend(names){
    let tinyName = names[0];
    for(let i=1; i<names.length;i++){
        if(names[i].length < tinyName.length){
            tinyName = names[i];
        }
    }
    return tinyName;
}
const friendsName = ['Tusher', 'Ajoy', 'Shakil', 'Imtiaj', 'Pawan', 'Niloy', 'Pranto'];
const result4 = tinyFriend(friendsName);
console.log("Tiny friend is", result4);