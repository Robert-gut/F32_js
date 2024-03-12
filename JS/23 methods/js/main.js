const postsList = document.querySelector('.posts_list')
const getPostsBtn = document.querySelector('.posts_get-posts')

const postTitle = document.querySelector('.new-post_title')
const postBody = document.querySelector('.new-post_body')
const addNewPost = document.querySelector('.new-post_add')

const state = {
  posts: [],
  newPost:{
    title: '',
    body: ''
  },
  editPost: {},
}

const cleanData = () =>{
  state.newPost.title = ''
  state.newPost.body = ''

  postTitle.value = state.editPost.title
  postBody.value = state.editPost.body
}

const editPost = (index) =>{
  const idPost = state.posts[index]
  state.editPost = idPost

  postTitle.value = state.editPost.title
  postBody.value = state.editPost.body
}

const deletePost = (index) => {
  const idPost = state.posts[index]

  removePostRequest(idPost)

  state.posts.splice(index, 1)

  fillPostsList(state.posts)
}

const createPost = (post, index) => `
<div class='post'>
<div class="post_wrapper">
  <h5 class="wrapper_title">${post.title}</h5>
  <p class="wrapper_body">${post.body}</p>
</div>
<div class="post_buttons">
  <button class="buttons_edit" onclick="editPost(${index})">Edit</button>
  <button class="buttons_delete" onclick="deletePost(${index})">Delete</button>
</div>
</div>
`



const fillPostsList = (posts) => {
  postsList.innerHTML = ''

  if(posts.length){
    posts.forEach((post, index) => postsList.innerHTML += createPost(post, index));
  }
} 

postTitle.addEventListener('change', (e) => {
  if(!!state.editPost.title){
    return state.editPost.title = e.target.value
  }else{
    return state.newPost.title = e.target.value
  }
})

postBody.addEventListener('change', (e) => {
  if(!!state.editPost.body){
    return state.editPost.body = e.target.value
  }
  return state.newPost.body = e.target.value
})

addNewPost.addEventListener('click', async () => {
  if (!!state.editPost.title || !!state.editPost.body) {
    await updatePostRequest()
  } else {
    await createPostRequest()
  }

  cleanData()
  fillPostsList(state.posts)
})

getPostsBtn.addEventListener('click', async () => {
  await getPostsRequest()
  fillPostsList(state.posts)
})

function getPostsRequest() {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    method: 'GET',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => res.json())
  .then((posts) => state.posts = state.posts.concat(posts))
}

function createPostRequest() {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(state.newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => res.json())
  .then((post) => state.posts.push(post))
}

function updatePostRequest() {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${state.editPost.id}`, {
    method: 'PUT',
    body: JSON.stringify(state.editPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => res.json())
  .then((data) => data)
}

function removePostRequest(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
  method: 'DELETE',
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
  })
}