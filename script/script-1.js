//  Сделать собственные примеры методов применяемых для массивов.



const myArray = ['PHP', 'JavaScript', 'Java', 'Python', 'SQL', 'C++'];
  
// найти элемент массива по его индексу и удалить

console.log(myArray.indexOf('Python')); // 3
myArray.splice(3, 1); // начиная с индекса 3 удаляем 1 элемент

console.log(myArray);

// добавить элемент в конец списка массива

myArray.push('Python');
console.log(myArray);
      
// удалить последнй элемент из массива

myArray.pop(1);
console.log(myArray);

// создать новый массив из первых трех элементов массива myArray

const newArray = myArray.slice(0, 3); // начиная с индекса 0 до индекса 3 (не включительно)
console.log(newArray);

// проверить наличие элемента в массиве

console.log(newArray.includes('JavaScript')); //true

// удалить несколько элементов

myArray.splice(1, 3); // начиная с элемента с индексом 1 удаляем 3 элемента
console.log(myArray);

// преобразовать в строке пробелы используя методы массива

 const string = 'PHP JavaScript Java Python C++ С# Visual Basic SQL';
 const stringArray = string.split(" ").join('-');
 
 console.log(stringArray);


//  заменить элемент в массиве

console.log(myArray);
myArray.splice(1, 1, 'JavaScript', 'Java', 'Python', 'SQL'); // 1 - индекс, 1 - количество удаляемых, 
console.log(myArray);

// создать новый массив из двух и добавить еще массив

const concatenatedArray = myArray.concat(newArray, ['C++', 'Visual Basic']);
console.log(concatenatedArray);

// изменить порядок элементов
concatenatedArray.reverse();
console.log(concatenatedArray);

// отсортировать в алфавитном порядке

concatenatedArray.sort();
console.log(concatenatedArray);