// logic for toggle

const darkmodeToggle = document.getElementById("darkmode-toggle")

darkmodeToggle.addEventListener('change', function() {
    let body = document.querySelector('body')
    body.classList.toggle('darkmode')

    let isDarkMode = body.classList.contains("darkmode")
    localStorage.setItem('isDarkMode', isDarkMode)

})

let initDarkMode = function() {
    let isDarkMode = localStorage.getItem('isDarkMode')
    console.log(isDarkMode)
    if (isDarkMode == "true") {
        let body = document.querySelector('body')
        body.classList.add('darkmode')
        darkmodeToggle.setAttribute('checked', true)
    }
}

initDarkMode()