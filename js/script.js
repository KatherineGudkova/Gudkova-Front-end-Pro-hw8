//task 1

let arrayOne = [];

for (let i = 10; i <= 20; i++){
    arrayOne.push(i);
}

//console.log(arrayOne);
alert(`------------ Task 1 ------------
${arrayOne}`);

//task 2

let arrayTwo = [];

for (let i = 10; i <= 20; i++){
    let square = i ** 2;
    arrayTwo.push(`
    ${i}^2 = ${square}`);
}

//console.log(arrayTwo);
alert(`------------ Task 2 ------------ ${arrayTwo}`);

//task 3

let arrayThree = [];

for (let i = 1; i <= 10; i++){
    let multBySeven = i * 7;
    arrayThree.push(`
    ${i} * 7 = ${multBySeven}`);
}

//console.log(arrayThree);
alert(`------------ Task 3 ------------ ${arrayThree}`);

//task 4

let sumFour = 0;

for (let i = 1; i <= 15; i++){
    sumFour += i;
}

//console.log(sumFour);
alert(`------------ Task 4 ------------
1 + 2 + ... + 14 + 15 = ${sumFour}`);

//task 5

let multFive = 1;

for (let i = 15; i <= 35; i++){
    multFive *= i;
}

//console.log(multFive);
alert(`------------ Task 5 ------------
15 * 16 * ... * 34 * 35 = ${multFive}`);

//task 6

let sumElementsSix = 0;
let sumSix = 0;

for (let i = 1; i <= 500; i++){
    sumElementsSix++;
    sumSix += i;
}

const averageSix = sumSix / sumElementsSix;

//console.log(sumElementsSix, sumSix, averageSix);
alert(`------------ Task 6 ------------
The arithmetic mean of all integers from 1 to 500 is ${averageSix}`);

//task 7

let sumSeven = 0;

for (let i = 30; i <= 80; i++){
    if (i % 2== 0) {
        sumSeven += i;
    }
}

//console.log(sumSeven);
alert(`------------ Task 7 ------------
The sum of even numbers in the range from 30 to 80 is ${sumSeven}`);

//task 8

let arrayEight = [];

for (let i = 100; i <= 200; i++){
    if (i % 3 == 0) {
        arrayEight.push(i);
    }
}

//console.log(arrayEight);
alert(`------------ Task 8 ------------
${arrayEight}`);

//task 9

const num = Number(prompt(`---------- Task 9-11 ----------
Enter the number:`));

let arrayNine = [];

for (let i = 1; i <= num; i++){
    if (num % i == 0) {
        arrayNine.push(i);
    }
}

//console.log(arrayNine);
alert(`------------ Task  9------------
Divisors of ${num}: ${arrayNine}`);

//task 10

let arrayTen = [];

for (let i = 1; i <= num; i++){
    if ((num % i == 0) && (i % 2 == 0)) {
        arrayTen.push(i);
    }
}

console.log(arrayTen);
alert(`------------ Task 10 ------------
Paired divisors of ${num}: ${arrayTen}`);

//task 11

let sumDivEleven = 0;

for (let i = 1; i <= num; i++){
    if ((num % i == 0) && (i % 2 == 0)) {
        sumDivEleven += i;
    }
}

//console.log(sumDivEleven);
alert(`------------ Task 11 ------------
Sum of paired divisors of ${num}:
${arrayTen.join(" + ")} = ${sumDivEleven}`);

//task 12

for (let i = 1; i <= 10; i++){
    let arrayTwelve = [];
    for (let j = 1; j <= 10; j++){
        let mult = i * j;
        arrayTwelve.push(`
        ${i} * ${j} = ${mult}`);
    }
    console.log(arrayTwelve);
    alert(`----------- Task 12.${i} -----------
    ${arrayTwelve}`);
}