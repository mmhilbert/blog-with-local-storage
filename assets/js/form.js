const getFormInput = function() {
    
    let usernameEl = document.getElementById("username-field")
    let titleEl = document.getElementById("title-field")
    let contentEl = document.getElementById("content-field")


    if (usernameEl.value && titleEl.value && contentEl.value) {
        const formData = {
            username: usernameEl.value.trim(),
            title: titleEl.value.trim(),
            content: contentEl.value.trim(),
        }
        return formData
    } else {
        return {
            error: true,
            message: "Please enter all fields."
        }
    }
}

const addBlogPostToLS = function(blogPost) {
    // check if blog list esists, if so get blog list, parse JSON, then unshift() new blog post to array, then stringify it and save to local storage. Else, create array, add element, and save. 
    console.log("blogPost")
    console.log(blogPost)

    let blogArray = localStorage.getItem("blogArray")
    console.log("blogArray", blogArray)
    if (blogArray !== null) {
        blogArray = JSON.parse(blogArray)
    } else {
        blogArray = []
    }

    console.log("blogArray", blogArray)
    blogArray.unshift(blogPost)
    localStorage.setItem("blogArray", JSON.stringify(blogArray))
}

const saveBlogPost = function(event) {
    event.preventDefault()
    const formData = getFormInput()
    
    if (formData.error){
        alert(formData.message)
        return
    }

   addBlogPostToLS(formData)
   window.location.href = window.location.href + "/blog.html"
}

 

const submitBtn = document.getElementById("blog-submit")
submitBtn.addEventListener("click", saveBlogPost)