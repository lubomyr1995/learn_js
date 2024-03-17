// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let htmlDivElement = document.createElement('div');
// htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
// htmlDivElement.style.backgroundColor = 'silver';
// htmlDivElement.style.color = 'red';
// htmlDivElement.style.fontSize = '27px';
// htmlDivElement.innerText = 'Hi okten'
// document.body.appendChild(htmlDivElement);
//
// let clone = htmlDivElement.cloneNode(true);
// document.body.appendChild(clone)


// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
//
// let ulBlock = document.createElement('ul')
// arr.forEach(el => {
//     let liBlock = document.createElement('li');
//     liBlock.innerText = `${el}`;
//     ulBlock.appendChild(liBlock);
// });
//
// document.body.appendChild(ulBlock);


// // - Є масив coursesAndDurationArray
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let coursesBlock = document.createElement('div');
// coursesBlock.classList.add('courses');
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let courseBlockDiv = document.createElement('div');
//     courseBlockDiv.classList.add('course');
//     let courseH3Block = document.createElement('h3');
//     courseH3Block.innerText = `Course: ${coursesAndDurationArrayElement.title}`;
//     let coursePBlock = document.createElement('p');
//     coursePBlock.innerText = `Duration: ${coursesAndDurationArrayElement.monthDuration}`
//     courseBlockDiv.append(courseH3Block, coursePBlock);
//     coursesBlock.appendChild(courseBlockDiv);
// }
// document.body.appendChild(coursesBlock);


// // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// let simpsonsBlock = document.createElement('div');
// simpsonsBlock.classList.add('simpsons');
//
// for (const simpson of simpsons) {
//     let simpsonBlock = document.createElement('div');
//     simpsonBlock.classList.add('member');
//     let simsonHeaderBlock = document.createElement('h3');
//     let simpsonInfoBlock = document.createElement('p');
//     let imgBlock = document.createElement('img');
//     simsonHeaderBlock.innerText = `${simpson.name} ${simpson.surname} - ${simpson.age}`;
//     simpsonInfoBlock.innerText = `${simpson.info}`;
//     imgBlock.src = simpson.photo;
//     imgBlock.alt = simpson.name;
//     imgBlock.style.width = '200px';
//     simpsonBlock.append(simsonHeaderBlock, simpsonInfoBlock, imgBlock);
//     simpsonsBlock.appendChild(simpsonBlock);
// }
// document.body.appendChild(simpsonsBlock);