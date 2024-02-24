// Масиви та об'єкти:


// /*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
// let arr_10 = [1, -20, true, {name: "Ivan", age: 25}, "Audi", "Mercedes", [], [1, 0], false, 100];
// console.log('length_arr_10 =', arr_10.length);
// arr_10.forEach(element => console.log(element));


// /*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
// let book1 = {
//     title: "Fluent Python",
//     pageCount: "500",
//     genre: "programing languages",
//     authors: [{name: "Author1", age: 45}, {name: "Author2", age: 50}, {name: "Author3", age: 55}]
// };
// let book2 = {
//     title: "Mathematical Algorithms",
//     pageCount: "320",
//     genre: "math",
//     authors: [{name: "Author1", age: 45}, {name: "Author2", age: 50}]
// };
// let book3 = {
//     title: "HTML & CSS",
//     pageCount: "290",
//     genre: "programing",
//     authors: [{name: "Author1", age: 45}, {name: "Author2", age: 50}]
// };
// console.log(book1, book2, book3)


// /*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//   Вивести в консоль пароль кожного користувача.*/
// let users = [
//     {name: "User1", username: "Username1", password: "321"},
//     {name: "User2", username: "Username2", password: "123"},
//     {name: "User3", username: "Username3", password: "1234"},
//     {name: "User4", username: "Username4", password: "231"},
//     {name: "User5", username: "Username5", password: "12345"},
//     {name: "User6", username: "Username6", password: "123456"},
//     {name: "User7", username: "Username7", password: "1234567"},
//     {name: "User8", username: "Username8", password: "12345678"},
//     {name: "User9", username: "Username9", password: "123456789"},
//     {name: "User10", username: "Username10", password: "xxxx"}
// ];
// users.forEach(user => console.log("password:", user.password))


// /*- Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
// let x = +prompt('input number');
// if (x !== 0) {
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }


// /*- Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).*/
// let x = +prompt('input a number between 0 and 59');
// if (x >= 0 && x < 15 || x === 60) {
//     console.log("I part")
// } else if (x >= 15 && x < 30) {
//     console.log("II part")
// } else if (x >= 30 && x < 45) {
//     console.log("III part")
// } else if (x >= 45 && x < 60) {
//     console.log("IV part")
// } else {
//     console.log("Another part")
// }


// /*- У змінній day дано якесь число від 1 до 31.
//   Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
// let day = +prompt("input number of day");
// if (0 < day && day < 11) {
//     console.log("I part")
// } else if (11 <= day && day < 21) {
//     console.log("II part")
// }
// if (21 <= day && day <= 31) {
//     console.log("III part")
// } else {
//     console.log("Incorrect type")
// }


// /*- Скласти розклад на тиждень за домопоги switch.
//   Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//   (можна замість плану на день, назву дня англійською).*/
// switch (+prompt("input number of the week")) {
//     case (1):
//         console.log('do 1')
//         break
//     case (2):
//         console.log('do 2')
//         break
//     case (3):
//         console.log('do 3')
//         break
//     default:
//         console.log('check your day')
//         break
// }


// /*- Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.*/
// let a = +prompt("input first number");
// let b = +prompt("input second number");
// if (a < b) {
//     console.log(`${a} > ${b}`)
// } else if (a > b) {
//     console.log(`${a} < ${b}`)
// } else {
//     console.log(`${a} = ${b}`)
// }


// /*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)*/
// let x = prompt();
// if (x === 'null' || x === 'undefined' || x === 'false' || x === '0' || x === 'NaN' || x === 'none') {
//     console.log(false)
// } else {
//     console.log("x =", x)
// }


// /*- З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//   За допомоги іф перевірити кожен його елемент на тривалість навчання.
//   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.forEach(course => {
//     if (course.monthDuration > 5) {
//         console.log(`Super! ${course.title} lasts more than 5 months`);
//     }
// })