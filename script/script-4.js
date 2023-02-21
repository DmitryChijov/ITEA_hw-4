// Создать многомерный массив, размер массива получить от пользователя. 
// Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.






const arraySize = parseInt(prompt('Какой размер массива вы хотите создать?'));

const evenАrray = ['even', 'even', 'even'];
const oddArray = ['odd', 'odd', 'odd'];

const userArray = new Array(arraySize);

for (i = 0; i < userArray.length; i++) {

    if (i % 2) {
        userArray[i] = oddArray;
    } else {
        userArray[i] = evenАrray;
    }
    
}

console.log(userArray);