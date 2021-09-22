const slides = document.querySelectorAll('.slide')
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        slides.forEach(slideActive => {
            slideActive.classList.remove('active')
        })
        slide.classList.add('active')
    })
})