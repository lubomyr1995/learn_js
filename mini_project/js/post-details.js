let post = new URL(location.href).searchParams.get('post');
let postDetailsBlock = document.getElementsByClassName('post-details')[0];
getDetails(post, postDetailsBlock);

// Main function which allow to receive details about current post
function getDetails(post_str = '', DOMElement) {
    let post = JSON.parse(post_str);
    goBackToUsers(DOMElement);
    goBackToPosts(DOMElement, post.userId);
    if (post) {
        renderPostDetails(post, DOMElement);
    } else {
        // If post was not founded. Was not passed.
        let postId = new URL(location.href).searchParams.get('id');
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(url)
            .then(response => response.json())
            .then(post => {
                renderPostDetails(post, DOMElement);
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

// function in order to navigate to previous posts/user-details page
function goBackToPosts(DOMElement, userId) {
    let btn = document.createElement('button');
    btn.classList.add('back-button-to-posts');
    btn.innerText = 'go to posts';
    btn.onclick = function () {
        location.href = `user-details.html?userId=${userId}`;
    }
    DOMElement.appendChild(btn);
}

// Display more details about current post
function renderPostDetails(post, DOMElement) {
    // Post details block
    let postDetailsBlock = document.createElement('div');
    postDetailsBlock.classList.add('post-details-block');
    let h4 = document.createElement('h4');
    h4.innerText = `id: ${post.id} user id: ${post.userId}.  ${post.title.toUpperCase()}`;
    let p = document.createElement('p');
    p.innerText = post.body;

    // Button block
    let buttonBlock = document.createElement('div');
    buttonBlock.classList.add('button-block');
    let commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.innerText = 'show comments';

    // Comments block
    let commentsBlock = document.createElement('div');
    // commentsBlock.classList.add('comments-block');

    buttonBlock.appendChild(commentsButton);
    postDetailsBlock.append(h4, p, buttonBlock);
    DOMElement.appendChild(postDetailsBlock);

    // event comment of current post
    commentsButton.onclick = function () {
        commentsBlock.innerHTML = '';
        if (commentsBlock.classList.contains('comments-block')) {
            commentsButton.innerText = 'show comments';
            commentsBlock.classList.remove('comments-block');
        } else {
            commentsButton.innerText = 'hidde comments';
            commentsBlock.classList.add('comments-block');
            DOMElement.appendChild(commentsBlock);
            getComments(post.id, commentsBlock);
        }

    };
}

// Get comments of current post
function getComments(postId, CommentElement) {
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    fetch(url)
        .then(response => response.json())
        .then(comments => {
            renderComments(comments, CommentElement);
        })
        .catch(_ => console.error('There was a problem with comments fetch operation: '))
}

// Comments display
function renderComments(comments, CommentElement) {
    comments.forEach(comment => {
        // Comment Block
        let commentBlock = document.createElement('div');
        commentBlock.classList.add('comment-block');
        let h4 = document.createElement('h4');
        h4.innerText = comment.email;
        let h5 = document.createElement('h5');
        h5.innerText = comment.name;
        let p = document.createElement('p');
        p.innerText = comment.body;
        let b = document.createElement('b');
        b.innerText = `id: ${comment.id}. postId: ${comment.postId}`;


        commentBlock.append(h4, h5, p, b);
        CommentElement.appendChild(commentBlock);
    })
}