// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let i = 0;
let result = '';
let dollar = 27;

for (i = 10; i <= 100; i += 10) {
    result = i * dollar;
    console.log(`${i} доларів = ${result} гривень`);
}