const links = document.querySelectorAll(".header-menu__item a")

seamless.polyfill()


links.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        e.preventDefault()
        
        const id = elem.getAttribute('href').substring(1)
        const section = document.getElementById(id)
        
        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }

    })
})