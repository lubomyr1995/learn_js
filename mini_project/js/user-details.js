let user = new URL(location.href).searchParams.get('user');
let userDetailsBlock = document.getElementsByClassName('user-details')[0];
getDetails(user, userDetailsBlock);

function getDetails(user = '', DOMElement) {
    goBackToUsers(DOMElement);
    if (user) {
        renderUserDetail(JSON.parse(user), DOMElement);
    } else {
        // If user was not founded. Was not passed.
        let userId = new URL(location.href).searchParams.get('userId');
        let url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
            .then(response => response.json())
            .then(user => {
                renderUserDetail(user, DOMElement);
            })
            .catch(_ => console.error('There was a problem with users fetch operation: '))
    }
}

// function in order to navigate to previous users
function goBackToUsers(DOMElement) {
    let btn = document.createElement('button');
    btn.classList.add('back-button');
    btn.innerText = 'go to users';
    btn.onclick = function () {
        location.href = `index.html`;
    }
    DOMElement.appendChild(btn);
}

// Rendering user details by userdata
function renderUserDetail(data, DOMElement) {
    // Details block
    let detailsBlock = document.createElement('div');
    detailsBlock.classList.add('details-block');
    let infoBlock = document.createElement('div');
    infoBlock.classList.add('info-block');

    // show more info about current user
    for (const key in data) {
        infoBlock.appendChild(showInfo(key, data[key]));
    }

    // Button block
    let buttonBlock = document.createElement('div');
    buttonBlock.classList.add('button-block');
    let postsButton = document.createElement('button');
    postsButton.classList.add('posts-button');
    postsButton.innerText = 'post of current user';

    // Posts block
    let postsBlock = document.createElement('div');
    postsBlock.classList.add('posts-block');
    const nonePostsBlock = document.createElement('div')
    nonePostsBlock.classList.add('none-block');
    nonePostsBlock.appendChild(postsBlock);

    buttonBlock.appendChild(postsButton);
    detailsBlock.append(infoBlock, buttonBlock);
    DOMElement.appendChild(detailsBlock);

    // event post of current user
    postsButton.onclick = function () {
        postsButton.classList.toggle('btn-color');
        nonePostsBlock.classList.toggle('none-block');
        postsBlock.innerHTML = '';

        DOMElement.appendChild(nonePostsBlock);
        getPosts(data.id, postsBlock);
    };

    // Use Recursive principle
    function showInfo(key, value) {
        let fieldBlock = document.createElement('div');
        fieldBlock.classList.add('field');
        if (typeof value === "object") {
            fieldBlock.innerText = `${key.toUpperCase()}`;
            for (const innerKey in value) {
                fieldBlock.appendChild(showInfo(innerKey, value[innerKey]));
            }
        } else {
            fieldBlock.innerText = `${key} - ${value}`;
        }
        return fieldBlock;
    }
}

// Get posts of current user
function getPosts(userId, PostElement) {
    let url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    fetch(url)
        .then(response => response.json())
        .then(posts => {
            renderPosts(posts, PostElement);
        })
        .catch(_ => console.error('There was a problem with posts fetch operation: '))
}

// Posts display
function renderPosts(posts, PostElement) {
    posts.forEach(post => {
        // Post Block
        let postBlock = document.createElement('div');
        postBlock.classList.add('post-block');
        let h5 = document.createElement('h5');
        h5.innerText = post.title;
        let a = document.createElement('a');
        a.innerText = 'more details';

        // event more details about post
        a.onclick = function () {
            location.href = `post-details.html?post=${JSON.stringify(post)}`;
        }

        postBlock.append(h5, a);
        PostElement.appendChild(postBlock);
    })
}