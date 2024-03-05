// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let arr_of_str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// arr_of_str.forEach((v, index) => console.log(`length ${index}el =`, v.length));


// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let arr_of_str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// arr_of_str.forEach(v => console.log(v.toUpperCase()));


// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let arr_of_str_up = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// arr_of_str_up.forEach(v => console.log(v.toLowerCase()));


// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let new_str = str.replace("  ", ' ').trim();
// console.log(new_str);


// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let string_to_array = (str) => str.split(' ');
// let arr = string_to_array(str);
// console.log(arr);


// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let arr_to_str = arr.map(item => item.toString());
// console.log(arr_to_str);


// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// //     або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// let nums = [11, 21, 3];
// let sortNums = (nums, direction) => {
//     if (direction === 'ascending') {
//         return [...nums].sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         return [...nums].sort((a, b) => b - a)
//     } else {
//         console.log('Invalid direction')
//     }
//
// }
// console.log("sorted arr as ascending:", sortNums(nums, 'ascending')); // [3,11,21]
// console.log("sorted arr as descending:", sortNums(nums, 'descending')); // [21,11,3]


// // - є масив coursesAndDurationArray.
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sorted = [...coursesAndDurationArray].sort(
//     (a, b) =>
//         b.monthDuration - a.monthDuration)
// console.log("sorted in monthDuration descending order:", sorted);
//
// let filtered = coursesAndDurationArray.filter(value => value.monthDuration > 5)
// console.log("filtered which monthDuration > 5", filtered);
//
// let maped = coursesAndDurationArray.map((value, index) =>
//     (
//         {id: index + 1, title: value.title, monthDuration: value.monthDuration}
//     ))
// console.log("maped type like:", maped);


// // описати колоду карт (від 6 до туза без джокерів)
// let suits = ['spade', 'diamond', 'heart', 'clubs'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// let colors = {spade: 'black', diamond: 'red', heart: 'red', clubs: 'black'};
//
// let desk_of_cards = [];
//
// values.forEach(value => {
//     suits.forEach(suit => {
//         desk_of_cards.push({cardSuit: suit, value: value, color: colors[suit]});
//     });
// });
//
// console.log(desk_of_cards);

// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
// let desk_of_cards = [
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
// ];
// let find_spade_ace = desk_of_cards.find(card => card.value === 'ace' && card.cardSuit === 'spade');
// console.log('find_spade_ace:', find_spade_ace);
//
// let find_all_sixes = desk_of_cards.filter(card => card.value === '6');
// console.log('find_all_sixes:', find_all_sixes);
//
// let find_all_red_card = desk_of_cards.filter(card => card.color === 'red');
// console.log('find_all_red_card:', find_all_red_card);
//
// let find_all_diamond = desk_of_cards.filter(card => card.cardSuit === 'diamond');
// console.log('find_all_diamond:', find_all_diamond);
//
// let find_all_clubs_up9 = desk_of_cards.filter(card => card.cardSuit === 'clubs' && card.value >= '9');
// console.log('find_all_clubs_up9:', find_all_clubs_up9);


// // Взяти описану колоду карт desk_of_cards, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
// let desk_of_cards = [
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'diamond', value: '7', color: 'red'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'black'},
//     {cardSuit: 'diamond', value: '8', color: 'red'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'black'},
//     {cardSuit: 'diamond', value: '9', color: 'red'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'black'},
//     {cardSuit: 'diamond', value: '10', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: 'queen', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 'king', color: 'red'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
// ];
// let embedded_obj = {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// };
//
// let packed_cards = desk_of_cards.reduce((accumulator, card) => {
//     if (card.cardSuit === 'spade') {
//         accumulator.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         accumulator.diamonds.push(card);
//     } else if (card.cardSuit === 'heart') {
//         accumulator.hearts.push(card);
//     } else if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card);
//     }
//     return accumulator;
// }, embedded_obj);
//
// console.log(packed_cards);
//
//
// let packed_cards_v2 = desk_of_cards.reduce((accumulator, card) => {
//     let suit = card.cardSuit + 's'
//     if (suit in accumulator) {
//         accumulator[suit].push(card)
//     }
//     return accumulator;
// }, { spades: [], diamonds: [], hearts: [], clubs: [] });
//
// console.log(packed_cards_v2);


// // взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// // --написати пошук всіх об'єктів, в який в modules є sass
// // --написати пошук всіх об'єктів, в який в modules є docker
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// let find_obj_with_modules_sass = coursesArray.filter(course => course.modules.includes('sass'));
// let find_obj_with_modules_docker = coursesArray.filter(course => course.modules.includes('docker'));
//
// console.log('find_obj_with_modules_sass: ', find_obj_with_modules_sass);
// console.log('find_obj_with_modules_docker: ', find_obj_with_modules_docker);