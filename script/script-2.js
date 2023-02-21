//  Создать функцию для нахождения минимального и максимального элемента массива getMinAndMax(array).
// Результат должен выводиться в консоль.

// 1. предположим, что первый элемент массива минимальный / максимальный
// 2. создадим переменные, которым присвоим значение первого элемента массива
// 3. перебираем массив и сравниваем каждый элемент с первым 
// 4. если он меньше / больше нашего первоначального значения, то перезаписываем переменную

const arrayNumbers = [52, 4, 8, 12, 96, 64, 27, 13];
let minNumber = arrayNumbers[0];
let maxNumber = arrayNumbers[0];


function getMinAndMax(array) {

    for (number of array) {

        if (number < minNumber) {
            minNumber = number;
           
        } else if (number > maxNumber) {
            maxNumber = number;
        }
    }
    console.log(`Минимальное число: ${minNumber}`);
    console.log(`Максимальное число: ${maxNumber}`);
}

getMinAndMax(arrayNumbers);

