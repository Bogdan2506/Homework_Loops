// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number = parseInt(prompt(`Введіть ваше ціле число:`));
let isPrime = true;

if (number <= 1) {
    console.log(number + " Не є простим числом.");
} else {
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number + " Є простим числом.");
    } else {
        console.log(number + " Не є простим числом.");
    }
}