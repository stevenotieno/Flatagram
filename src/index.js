// write your code
// declaring variables
const FlatagramAPI = "http://localhost:3000/images/1";
const cardImage = document.getElementById("card-image");
const cardTitle = document.getElementById("card-title");
const likeCount = document.getElementById("like-count");
const commentsList = document.getElementById("comments-list");
let likes;
// eventlistener for likes button
    el("like-button").addEventListener("click", () => {
        likes += 1;
        renderLikes();
    });
//eventlistener for post button
    el("comment-form").addEventListener('submit', addComment)

// fetch data from server
fetch (FlatagramAPI)
    .then((res) => res.json())
    .then(renderGram);

// load likes, image and title
function renderGram(data){
    likes = data.likes
    cardImage.src = data.image;
    cardTitle.textContent = data.title
    renderLikes()
    
    renderComments(data.comments);
}

// display likes, instead of "0" from server, have "${likes} likes"
function renderLikes(){
    document.getElementById("like-count").textContent = `${likes} likes`;
}

// sets existing li items as empty strings
function renderComments(comments){
    commentsList.innerHTML = '';
    comments.forEach(renderComment);
}

//renders comments from server 
function renderComment (comment){
    const li = document.createElement("li");
    li.textContent = comment.content;
    commentsList.append(li);
}

// renders comments in the input field with ID of comment
function addComment(event){
    event.preventDefault();
    const commentText = event.target.comment.value;
    renderComment({content : commentText});

    event.target.reset();
}

// gets elements with args id
function el(id){
    return document.getElementById(id);
}