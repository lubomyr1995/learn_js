// // Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// // та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// console.log('task1');
// let form1 = document.forms['form1'];
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     let data = {name: this.name.value, surname: this.surname.value, age: this.age.value};
//     // let data = {
//     //     name: e.target.name.value,
//     //     surname: e.target.surname.value,
//     //     age: e.target.age.value
//     // };
//     let userDiv = document.getElementsByClassName('user')[0];
//     userDiv.innerText = JSON.stringify(data);
// };
// console.log('********')


// //є сторінка, на якій є блок, в якому знаходиьтся цифра.
// // написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let num_div = document.getElementsByClassName('number')[0];
// let number_with_store = localStorage.getItem('number');
// number_with_store = number_with_store ? parseInt(number_with_store) : parseInt(num_div.textContent);
// number_with_store++
// num_div.innerText = number_with_store
// localStorage.setItem('number', number_with_store);


// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// // в масив sessions зберігається інформація про дату та час відвідування сторінки.
// // Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// // відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
// sessions.push({date: new Date()});
// localStorage.setItem('sessions', JSON.stringify(sessions))
// console.log(sessions)


// // - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// //   щоб при натисканні на кнопку зникав елемент з id="text".
// //   Але зробив дещо модифіковану кнопку
// let textBlock = document.getElementById('text');
// let btn = document.getElementById('button');
// btn.onclick = function () {
//     if (textBlock.style.display === 'none') {
//         textBlock.style.display = 'block';
//         btn.innerText = 'hide'
//     } else {
//         textBlock.style.display = 'none';
//         btn.innerText = 'show'
//     }
// };


// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// //   інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form2 = document.forms['form2'];
// form2.onsubmit = function (e) {
//     e.preventDefault()
//     if (this.age_form2.value < 18) {
//         alert('You are baby')
//     } else {
//         console.log('You can carry on with your way!')
//     }
// }


