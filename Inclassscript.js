
//1. create a form with an id of your choice.
//2. create 2 text inputs inside that form. add eventlistener to get the input of each.
// one input should be for the title, one for the body. Create two variables to store the data of each,
// for example, postTitle and postText
//3. use the inputs from step 2 to create an object of this form:
// {body:postText, title: postTitle, userId:11}
//4. create eventlistener for form - submit event - and POST that object from step 3 to the api. Log out the result
//5. BONUS: create a function to display newly-created post on the webpage.

const titleInput = document.getElementById("title-text");
const bodyInput = document.getElementById("body-text");
const postForm =  document.getElementById("create-post");
const postsList = document.getElementById("postsLists")

let titleText, bodyText;
const newPost = {};

async function addPost (post){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            body:JSON.stringify(post),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        const json = await res.json();
        console.log(json);
    } catch (err){
        console.log(err);
    }
}

titleInput.addEventListener("input", function (e) {
    titleText = e.target.value;
    console.log(titleText);
});

bodyInput.addEventListener("input", function (e) {
    bodyText = e.target.value;
    console.log(bodyText);
});

postForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const newPost = {body:bodyText, title: titleText, userId: 11};
    console.log(newPost);
    const result = await addPost(newPost);
    addPosttoUI(result);
});


function addPosttoUI(post){
    const newTitle = document.createElement("h2");
    newTitle.innerText = post.title;
    const newBody = document.createElement("p");
    newTitle.innerText = post.body;
postsList.appendChild(newTitle);
postsList.appendChild(newBody);
}
