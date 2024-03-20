// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function createTable(nameOfForm, toDomElement) {
    let form = document.forms[nameOfForm];
    form.onsubmit = function create_table(e) {
        e.preventDefault();
        let data = {
            countOfRow: parseInt(this.countOfRow.value),
            countOfItems: parseInt(this.countOfItems.value),
            content: this.content.value.split(';')
        };
        if (data.countOfRow * data.countOfItems !== data.content.length) {
            alert(`Input ${data.countOfItems * data.countOfRow} fields through ';'`);
            location.reload();
            return
        }


        let table = document.createElement('table');

        let point = 0;
        for (let i = 0; i < data.countOfRow; i++) {
            let row = document.createElement('tr');
            table.appendChild(row)
            for (let j = 0; j < data.countOfItems; j++) {
                let item = document.createElement('td');
                item.style.border = '1px solid black'
                item.style.padding = '5px'
                item.innerText = data.content[point];
                row.appendChild(item);
                point = point * i
                point = point + j + 1
            }
        }
        toDomElement.appendChild(table)
    }
}

createTable('form3', document.body);

