// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let area_of_rectangle = (a, b) => a * b;
// console.log(area_of_rectangle(10, 5));


// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// let area_of_circle = (r) => Math.PI * r * r;
// console.log(area_of_circle(5));


// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let area_of_cylinder = (h, r) => Math.PI * r * r * h;
// console.log(area_of_cylinder(10, 5));


// // - створити функцію яка приймає масив та виводить кожен його елемент
// let each_element = (arr) => {
//     for (const el of arr) {
//         console.log(el)
//     }
// }
// let arr = [1, 2, 3, 'okten', true];
// each_element(arr);
// // or
// arr.forEach(el => console.log(el));


// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let create_p = (str) => document.write(str);
// create_p('Andriy like to play football.');


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let create_ul_with_li = (tex_to_li) => {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${tex_to_li}</li>`)
//
//     }
//     document.write('</ul>')
// }
//
// create_ul_with_li('Some text for this function');


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let create_ul_with_li = (text_to_li, quantity) => {
//     document.write('<ul>')
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${text_to_li}</li>`)
//
//     }
//     document.write('</ul>')
// }
//
// create_ul_with_li('Some text', 5);


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let create_list_from_array = (arr) => {
//     document.write(`<ol>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// create_list_from_array([1, 2, '3', true, false]);


// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// //  Для кожного об'єкту окремий блок.
// let log_from_array = (arr_of_obj) => {
//     for (const obj of arr_of_obj) {
//         document.write('<div>')
//         for (const objKey in obj) {
//             document.write(`<span>${obj[objKey]} </span>`)
//         }
//         document.write('</div>')
//     }
// }
//
// let arr_of_obj = [
//     {id: 1, name: "Ivan", age: 25},
//     {id: 2, name: "Stepan", age: 20},
//     {id: 3, name: "Vasya", age: 28}];
// log_from_array(arr_of_obj);


// // - створити функцію яка повертає найменьше число з масиву
// let find_min_el = (arr) => arr.sort()[0];
// let numbers = [4, 7, 2, 9, 1, 5, 0, -5, 9];
// console.log(find_min_el(numbers));
// let find_min_el_2 = (arr) => {
//     let min = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min
// }
// console.log('Min number in this array is: ', find_min_el(numbers));


// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// // Приклад sum([1,2,10]) //->13
// let sun_of_numbers = (arr) => {
//     let sum = 0;
//     for (let el of arr) {
//         sum += el
//     }
//     return sum
// }
// console.log(sun_of_numbers([1, 2, 10]));


// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr, index1, index2) => {
//     let temp_v = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp_v;
//     return arr
// }
// console.log(swap([11, 22, 33, 44], 0, 1));


// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     let temp_value
//     for (const obj_currency of currencyValues) {
//         if (obj_currency['currency'] === exchangeCurrency) {
//             temp_value = obj_currency['value']
//         }
//     }
//     if (!temp_value) {
//         console.log(`Currency like "${exchangeCurrency}" is not found!`);
//         return;
//     }
//     return sumUAH / temp_value
// }
//
// let value_of_exchange = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
// console.log(exchange(1000, value_of_exchange, 'USD'));
// console.log(exchange(1000, value_of_exchange, 'US'));
