// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area_rectangle(a, b) {
//     return a * b
// }
//
// f = area_rectangle(2, 10);
// console.log(f);\


// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area_of_circle(r) {
//     return r * r * Math.PI
// }
//
// console.log(area_of_circle(5 / Math.sqrt(Math.PI)))


// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area_of_cylinder(h, r) {
//     return Math.PI*r*r*h
// }


// // - створити функцію яка приймає масив та виводить кожен його елемент
// function element_of_array(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
//
// function element_of_array_v2(arr) {
//     arr.forEach(i => console.log(i))
// }
//
// element_of_array([2, 17, 13, 6, 22, 31, 45, 66, 100, -18]);


// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function create_p(str) {
//     document.write(`${str}`)
// }
//
// create_p('Andriy like to play football.');


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function create_ul_with_li(lis) {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${lis}</li>`)
//
//     }
//     document.write('</ul>')
// }
//
// create_ul_with_li('I created this function');


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// //     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function create_ul_with_li(lis, quantity) {
//     document.write('<ul>')
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${lis}</li>`)
//
//     }
//     document.write('</ul>')
// }
//
// create_ul_with_li('I created this function', 5);


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function create_list_from_array(arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<ol>${arrElement}</ol>`)
//     }
//     document.write(`</ul>`)
// }
//
// create_list_from_array([1000, 'hello', true, false]);


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// // 'Для кожного об'єкту окремий блок.
// function doc_write_from_array(arr_of_obj) {
//     for (const obj of arr_of_obj) {
//         document.write('<div>')
//         for (const objKey in obj) {
//             document.write(`<span>${obj[objKey]} </span>`)
//         }
//         document.write('</div>')
//     }
// }
//
// let arr_of_obj = [{id: 1, name: "Ivan", age: 25}, {id: 2, name: "Stepan", age: 20}, {id: 3, name: "Vasya", age: 28}];
// doc_write_from_array(arr_of_obj);


// // - створити функцію яка повертає найменьше число з масиву
// function find_min_num(array) {
//     let min = array[0]
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min
// }
//
// let numbers = [4, 7, 2, 9, 1, 5, 0, -5, 9];
// console.log(find_min_num(numbers));


// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// //     Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement
//     }
//     return sum;
// }
//
// function sum_v2(arr) {
//     let sum = 0;
//     arr.forEach(el => sum += el)
//     return sum;
// }
//
// console.log(sum([1, 2, 10]));


// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     let temp_value = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp_value;
//     return arr
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));


// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const obj_currency of currencyValues) {
//         if (obj_currency['currency'] === exchangeCurrency) {
//             return sumUAH / obj_currency['value']
//         }
//     }
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));