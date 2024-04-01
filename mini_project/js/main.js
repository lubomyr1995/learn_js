let usersBlock = document.getElementsByClassName('users')[0];
fetchUsers(usersBlock);

// Get all users
function fetchUsers(DOMElement) {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                renderUser(DOMElement, user);
            })
        })
        .catch(_ => console.error('There was a problem with the fetch operation: '))
}

// Show user block
function renderUser(DOMElement, user) {
    let userBlock = document.createElement('div');
    userBlock.classList.add('user-block');
    // Block info with id and name
    let blockInfo = document.createElement('h3');
    blockInfo.classList.add('user-info');
    blockInfo.innerText = `${user.id}. ${user.name.toUpperCase()}`;

    // Button block
    let buttonBlock = document.createElement('div');
    buttonBlock.classList.add('button-block');
    let button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Details';
    // event onclick
    button.onclick = function () {
        location.href = `user-details.html?user=${JSON.stringify(user)}`;
    }

    buttonBlock.appendChild(button);
    userBlock.append(blockInfo, buttonBlock);
    DOMElement.appendChild(userBlock)
}