const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item')
    const items = document.querySelectorAll('.characteristics__item .characteristics__description')

    const tabsClose = () => {
        items.forEach((el) => {
            el.classList.remove('open');
            el.style.height = '';
        });
    };

    chItems.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title')
        const chContent = item.querySelector('.characteristics__description')

        chButton.addEventListener('click', () => {   
            if (chContent.classList.contains('open')) {
                chContent.style.height = ''
            } else {
                tabsClose()
                chContent.style.height = chContent.scrollHeight + 'px'
            }

            chButton.classList.toggle('active')
            chContent.classList.toggle('open')
        })
    })
}

accordeon()