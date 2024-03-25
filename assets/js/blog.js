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
}


getPostsFromLS()