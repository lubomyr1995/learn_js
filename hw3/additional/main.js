// // --створити масив з:
// //     - з 5 числових значень
// //     - з 5 стічкових значень
// //     - з 5 значень стрічкового, числового та булевого типу
// //     - та вивести його в консоль
// let num_values = [10, 20, 30, 40, 50];
// let str_values = ['apple', 'xiaomi', 'sony', 'google', 'samsung'];
// let dev_values = [1, 'two', true, 4.5, false];
// let all_values = [num_values, str_values, dev_values]
//
// for (const values of all_values) {
//     for (const v of values) {
//         console.log(v)
//     }
// }


// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr_main = [];
// arr_main[0] = 'Hello';
// arr_main[1] = 1;
// arr_main[2] = true;
// console.log(arr_main);


// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
// // 1. перебрати його циклом while
// // 2. перебрати його циклом for
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// // 7. замінити кожне число кратне 3 на слово "okten"
// // 8. вивести масив в зворотньому порядку.
//
// // console.log('1');
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// // let i = 0;
// // while (i < arr.length) {
// //     console.log(arr[i])
// //     i++
// // }
//
// // console.log('task_2');
// // for (let el of arr) {
// //     console.log(el)
// // }
//
// // j = 1
// // console.log('task_3');
// // while (j < arr.length) {
// //     console.log(arr[j])
// //     j = j + 2
// // }
//
// // console.log('task_4');
// // for (let i = 1; i < arr.length; i = i + 2) {
// //     console.log(arr[i]);
// // }
//
// // console.log('task_5');
// // let i = 0;
// // while (i < arr.length) {
// //     console.log(arr[i])
// //     i = i + 2
// // }
//
// // console.log('task_6');
// // for (let i = 0; i < arr.length; i = i + 2) {
// //     console.log(arr[i]);
// // }
//
// // console.log('task_7');
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 3 === 0) {
// //         arr[i] = 'okten'
// //     }
// // }
// // console.log(arr)
//
// // console.log('task_8');
// // for (let i = arr.length - 1; i >= 0; i--) {
// //     console.log(arr[i])
// // }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [10, 'hello', true, 'bmw', false, 20, 'audi', 30, false, 'volvo'];
//
// for (let element of arr) {
//     if (typeof element === 'boolean') {
//         console.log(element);
//     }
// }
// for (let element of arr) {
//     if (typeof element === 'number') {
//         console.log(element);
//     }
// }
// for (let element of arr) {
//     if (typeof element === 'string') {
//         console.log(element);
//     }
// }