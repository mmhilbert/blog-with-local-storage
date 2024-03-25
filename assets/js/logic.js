// logic for toggle

const darkmodeToggle = document.getElementById("darkmode-toggle")

darkmodeToggle.addEventListener('change', function() {
    let body = document.querySelector('body')
    body.classList.toggle('darkmode')
})