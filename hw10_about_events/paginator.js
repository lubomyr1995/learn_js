// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
console.log('pagination');

function generator_array(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push({id: i, name: `Name${i}`})
    }
    return array
}

let array = generator_array(100) || [];

const boxDiv = document.getElementById('box');
paginator(array, boxDiv, 10);

function paginator(array, block, countOfItems = 2, currentPage = 0) {
    if (array.length > countOfItems) {
        let itemsDiv = document.createElement('div');

        function displayData() {
            itemsDiv.innerHTML = '';

            // Виведення об'єктів поточної сторінки
            const startIndex = currentPage * countOfItems;
            const endIndex = startIndex + countOfItems;
            const currentPageItems = array.slice(startIndex, endIndex);

            currentPageItems.forEach(item => {
                const div = document.createElement('div');
                div.textContent = `${item.id}: ${item.name}`;
                itemsDiv.appendChild(div);
            });
        }

        let prevBtn = document.createElement('button');
        prevBtn.innerText = 'prev page';
        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                displayData();
            }
        });

        let nextBtn = document.createElement('button');
        nextBtn.innerText = 'next page';
        nextBtn.addEventListener('click', () => {
            if (currentPage < Math.ceil(array.length / countOfItems) - 1) {
                currentPage++;
                displayData();
            }
        });
        block.append(itemsDiv, prevBtn, nextBtn)
        displayData();
    }
}