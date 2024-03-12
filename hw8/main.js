// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let u1 = new User(1, "Homer", "Simpson", "homer@gmail.com", "0930000001");
// let u2 = new User(2, "Marge", "Simpson", "marge@gmail.com", "0930000002");
// let u3 = new User(3, "Bart", "Simpson", "bart@gmail.com", "0930000003");
// let u4 = new User(4, "Lisa", "Simpson", "lisa@gmail.com", "0930000004");
// let u5 = new User(5, "Maggie", "Simpson", "maggie@gmail.com", "0930000005");
// let u6 = new User(6, "Grampa", "Simpson", "grampa@gmail.com", "0930000006");
// let u7 = new User(7, "Ned", "Flanders", "ned@gmail.com", "0930000007");
// let u8 = new User(8, "Apu", "Nahasap", "apu@gmail.com", "0930000008");
// let u9 = new User(9, "Comic", "Book", "comic@gmail.com", "0930000009");
// let u10 = new User(10, "Neison", "Muntz", "neison@gmail.com", "0930000010");
// let users = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10];
// console.log(users);
// users.forEach(user => console.log(user.email));
//
// let users_filter1 = users.filter(user => user.id % 2 === 0)
// console.log('2 task: ', users_filter1);
//
// let users_sorted = users.sort((a, b) => a.id - b.id)
// let users_sorted_revers = users.sort((a, b) => b.id - a.id)
// console.log('3 task: ', users_sorted);
// console.log('3 task additional: ', users_sorted_revers);


// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [];
//
// for (let i = 1; i <= 10; i++) {
//     let client = new Client(i, `Name_${i}`, `Surname_${i}`, `email${i}@gmail.com`, `093000000${i}`, [`product${i}.1`, `product${i}.2`, `product${i}.3`, `product${i}.4`]);
//     clients.push(client);
// }
//
// console.log(clients);
// let del_1 = clients[0].order.shift();
// console.log('deleted_product: ', del_1);
// clients[1].order.push('product2.5');
//
// let sorted_by_count_of_orders = clients.sort((a, b) => a.order.length - b.order.length);
// console.log('sorted_by_count_of_orders: ', sorted_by_count_of_orders);


// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// //   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufacturer, year, max_speed, engine_power) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine_power = engine_power;
//
//     this.drive = _ => console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//
//     this.info = _ => {
//         for (let key in this) {
//             if (typeof this[key] !== "function") {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     };
//
//     this.increaseMaxSpeed = new_speed => this.max_speed + new_speed;
//
//     this.changeYear = newValue => this.year = newValue;
//
//     this.addDriver = driver => {
//         this.driver = driver
//     };
// }
//
// let my_car = new Car('Peugeot', 'France', 2014, 240, 2.0);
// console.log('my_car: ', my_car);
// my_car.drive();
// my_car.info();
// my_car.increaseMaxSpeed(40);
// my_car.changeYear(2023);
// my_car.addDriver({name: 'Andriy', age: 18});
// console.log(my_car);
// console.log('added driver: ', my_car.driver);


// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, manufacturer, year, max_speed, engine_power) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine_power = engine_power;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`);
//     }
//
//     info() {
//         for (let key in this) {
//             if (typeof this[key] !== "function") {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.max_speed += newSpeed;
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let my_car = new Car('Peugeot', 'France', 2014, 240, 2.0);
// console.log('my_car: ', my_car);
// my_car.drive();
// my_car.info();
// my_car.increaseMaxSpeed(40);
// my_car.changeYear(2023);
// my_car.addDriver({name: 'Andriy', age: 18});
// console.log(my_car);
// console.log('added driver: ', my_car.driver);


// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Prince {
//     constructor(name, age, founded_shoe_size) {
//         this.name = name;
//         this.age = age;
//         this.founded_shoe_size = founded_shoe_size;
//     }
//
//     found_cinderella(cinderellas) {
//         for (const cinderella of cinderellas) {
//             if (cinderella.foot_size === this.founded_shoe_size) {
//                 return cinderella
//             }
//         }
//     }
// }
//
// class Cinderella {
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
//
// let cinderellas = [
//     new Cinderella('Vira1', 20, 31),
//     new Cinderella('Vira2', 21, 32),
//     new Cinderella('Vira3', 22, 33),
//     new Cinderella('Vira4', 23, 34),
//     new Cinderella('Vira5', 24, 35),
//     new Cinderella('Vira6', 25, 36),
//     new Cinderella('Vira7', 26, 37),
//     new Cinderella('Vira8', 27, 38),
//     new Cinderella('Vira9', 28, 39),
//     new Cinderella('Vira10', 30, 40),
// ];
// // console.log('cinderellas: ', cinderellas);
//
// let prince = new Prince('Stepan', 30, 34);
// // console.log('prince: ', prince);
// let founded_cinderella = prince.found_cinderella(cinderellas);
// console.log(`This is your cinderella: ${founded_cinderella.name}`);
//
// founded_cinderella_v2 = cinderellas.find(cinderella => cinderella.foot_size === prince.founded_shoe_size);
// console.log('This is your cinderella:', founded_cinderella_v2);
