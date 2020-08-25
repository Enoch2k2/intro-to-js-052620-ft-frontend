
document.addEventListener('DOMContentLoaded', handleEvents);

function handleEvents() {
  // addHelloWorldToMain();
  loadBlogs();
}

function loadBlogs() {

  fetch('http://localhost:3000/blogs')
    .then(function (resp) {
      return resp.json();
    })
    .then(function (blogs) {
      blogs.forEach(function (blog) {
        displayBlog(blog);
      })
    })

}

function displayBlog(blog) {
  const main = document.querySelector('div#main')
  const div = document.createElement('div')
  div.innerHTML = `
    <h3>${blog.title}</h3>
    <p>${blog.content}</p>
  `
  main.appendChild(div);
}

function addHelloWorldToMain() {
  // const div = document.querySelector('div#main');

  // const h3 = document.createElement('h3')

  // h3.innerText = "hello world"

  // const link = "https://www.w3schools.com/tags/tag_p.asp"

  // div.innerHTML = `
  //   <p>
  //     This is a <a href="${link}">p tag</a>
  //   </p>
  // `
  // debugger;

  /*
    this is multi line comments

  */
  // div.appendChild(h3)

}