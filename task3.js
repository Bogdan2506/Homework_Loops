// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.


let N = parseInt(prompt("Введіть ціле число N:"));

console.log(`Цілі числа від 1 до 100, квадрат яких не перевищує  ${N} :`);
for (let i = 1; i <= 100; i++) {
    let square = i * i;
    if (square <= N) {
        console.log(i);
    } else {
        break;
    }
}