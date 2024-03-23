// // - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// function showCarts(DOMElement, url) {
//     fetch(url)
//         .then(res => res.json())
//         .then(({carts}) => {
//             for (let cart of carts) {
//                 let cartBlock = document.createElement('div');
//                 let h3 = document.createElement('h4');
//                 let h4 = document.createElement('h3');
//                 let hr = document.createElement('hr');
//                 h3.innerText = `id: ${cart.id}; userId: ${cart.userId};`
//                 h4.innerText = `total: ${cart.total}; discountedTotal: ${cart.discountedTotal}; totalProducts: ${cart.totalProducts}; totalQuantity: ${cart.totalQuantity}`
//
//                 let commentsBlock = document.createElement('div');
//                 commentsBlock.innerText = 'Comments';
//                 for (let product of cart.products) {
//                     let commentBlock = document.createElement('div');
//                     let h4 = document.createElement('h4');
//                     let h5 = document.createElement('h5');
//                     let p = document.createElement('p');
//                     h4.innerText = `comment ${product.id}`;
//                     h5.innerText = `${product.title} - price: ${product.price}`;
//                     p.innerText = `quantity: ${product.quantity}; total: ${product.total}; thumbnail: ${product.thumbnail}; discountedPrice: ${product.discountedPrice}; discountPercentage: ${product.discountPercentage}`
//                     commentBlock.append(h4, h5, p);
//                     commentsBlock.appendChild(commentBlock);
//                 }
//
//                 cartBlock.append(h3, h4, commentsBlock, hr);
//                 DOMElement.appendChild(cartBlock);
//
//             }
//         });
// }
//
// let cartsBlock = document.getElementsByClassName('carts')[0];
// showCarts(cartsBlock, 'https://dummyjson.com/carts');


// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

function showALLRecipes(DOMElement, urlAddress, limit = 10, page = 1) {
    const skip = (page - 1) * limit;
    let url = new URL(urlAddress);
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('skip', skip.toString());
    // Request on server DUMMY
    fetch(url)
        .then(res => res.json())
        .then(response => {
            DOMElement.innerHTML = '';
            let {recipes, total} = response;
            for (const recipe of recipes) {
                displayRecipe(DOMElement, recipe);
            }
            // Updating data about our recipes
            updateRecipes(DOMElement, urlAddress, total, limit, page);
        })
        .catch(_ => {
            console.error('There was a problem with the fetch operation:');
        })

}

// Display data about one recipe
function displayRecipe(DOMElement, recipe) {
    // Recipe block
    let recipeBlock = document.createElement('div');
    // recipeBlock.innerHTML = ''; // буде добавляти до заданих, якщо в 52 рядку забрати очистку DOM

    // Title block
    let h2 = document.createElement('h2');
    h2.innerText = `${recipe.id}. ${recipe.name}.`;
    let h5 = document.createElement('h5');
    h5.innerText = `Rating: ${recipe.rating}   Review: ${recipe.reviewCount}   Type of meal: ${recipe.mealType}   Cuisine: ${recipe.cuisine}`;

    // Image block
    let imageElement = document.createElement('img');
    imageElement.classList.add('recipeImg');
    imageElement.setAttribute('loading', 'lazy');
    imageElement.src = recipe.image;
    imageElement.alt = recipe.name;

    // Ingredients block
    let h2IngredientsTitle = document.createElement('h2');
    h2IngredientsTitle.innerText = 'Ingredients';

    let ingredientsBlock = document.createElement('ul');
    ingredientsBlock.classList.add('ingredients');

    recipe.ingredients.forEach(ingredient => {
        let bIngredient = document.createElement('li');
        bIngredient.innerText = ingredient;
        ingredientsBlock.appendChild(bIngredient);
    })

    // Instructions block
    let h2InstructionsTitle = document.createElement('h2');
    h2InstructionsTitle.innerText = 'Instructions';

    let instructionsBlock = document.createElement('ul');
    instructionsBlock.classList.add('instructions');

    recipe.instructions.forEach(instruction => {
        let bInstruction = document.createElement('li');
        bInstruction.innerText = instruction;
        instructionsBlock.appendChild(bInstruction);
    })

    // Footer recipe block
    let footerBlockForRecipe = document.createElement('div');
    let b2Text = document.createElement('p');
    let b3Text = document.createElement('p');
    let b4Text = document.createElement('p');
    let b1Text = document.createElement('p');
    b1Text.innerText = `Created this meal: ${recipe.userId}.`;
    b2Text.innerText = `Prepared time: ${recipe.prepTimeMinutes}sec.  Cook time: ${recipe.cookTimeMinutes}sec`;
    b3Text.innerText = `Servings: ${recipe.servings}.`;
    b4Text.innerText = `Difficulty: ${recipe.difficulty}.`;
    footerBlockForRecipe.append(b1Text, b2Text, b3Text, b4Text);

    let hr = document.createElement('hr');

    recipeBlock.append(h2, h5, imageElement, h2IngredientsTitle, ingredientsBlock, h2InstructionsTitle, instructionsBlock, footerBlockForRecipe, hr);
    DOMElement.appendChild(recipeBlock);
}

// Function updating pagination parameters
function updateRecipes(DOMElement, urlAddress, total, limit, page) {
    // Created button block
    let buttonBlock = document.createElement('div');
    buttonBlock.classList.add('buttonBlock');

    let totalPages = Math.ceil(total / limit);

    // realize previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = '< Previous page';
    prevButton.addEventListener('click', () => {
        if (page > 1) {
            showALLRecipes(DOMElement, urlAddress, limit, page - 1);
            // window.scrollTo(0, 0);
            DOMElement.scrollIntoView({behavior: "smooth"}); // smooth scrolling to the top of the page
        }
    });

    // realize next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next page >';
    nextButton.addEventListener('click', () => {
        if (page < totalPages) {
            showALLRecipes(DOMElement, urlAddress, limit, page + 1);
            DOMElement.scrollIntoView({behavior: "smooth"});
        }
    });
    buttonBlock.append(prevButton, nextButton);
    DOMElement.appendChild(buttonBlock);
}


let recipesBlock = document.getElementsByClassName('recipes')[0];
let urlAddress = 'https://dummyjson.com/recipes';
let lim = 5;
showALLRecipes(recipesBlock, urlAddress, lim);
