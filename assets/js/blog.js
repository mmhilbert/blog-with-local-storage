const blogListSection = document.getElementById("blog-list")
blogListSection.innerHTML = ''


const getPostsFromLS = function() {
    const blogArrayString = localStorage.getItem("blogArray")

    if (blogArrayString === null) {
        return
    }
    const blogArray = JSON.parse(blogArrayString)
    console.log(blogArray)

    /* Loop over blog array to post on webpage 
        create blog post element for each post in the loop
        add to blog-list section in the loop
    */
   for (const blogPost of blogArray) {
    console.log(blogPost)
    addBlogPostToBlogList(blogPost)
   }
}

const addBlogPostToBlogList = function(blogPostObject) {
    let blogListDiv = document.createElement("div")
    blogListDiv.classList.add('blog-post')
    const h3 = document.createElement('h3')
    const pContent = document.createElement('p')
    const pUsername = document.createElement('p')

    h3.innerText = `Title: ${blogPostObject.title}`
    pContent.innerText = `Content: ${blogPostObject.content}`
    pUsername.innerText = `Posted By: ${blogPostObject.username}`

    blogListDiv.appendChild(h3)
    blogListDiv.appendChild(pContent)
    blogListDiv.appendChild(pUsername)

    blogListSection.appendChild(blogListDiv)
}

getPostsFromLS()