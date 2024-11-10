document.addEventListener('DOMContentLoaded', function(){
    
    showPortfolio ()
    movePortfolio ()

    // função mostra portfolio
    function showPortfolio () {
        const elementButton = document.querySelector('.portfolio')
        const elementVideo = document.querySelector('.portfolio-video')
        const aboutText = document.querySelector('.header__about__text')
        const aboutLinks = document.querySelector('.header__about__links')

        elementButton.addEventListener('mouseover', function() {
            aboutText.classList.add('opacityNone')
            aboutLinks.classList.add('opacityNone')

            elementVideo.classList.add('portfolio-video--mostra')
            elementButton.addEventListener('mouseout', function() {
                aboutText.classList.remove('opacityNone')
                aboutLinks.classList.remove('opacityNone')
                elementVideo.classList.remove('portfolio-video--mostra')
            })
        })
    }

    function movePortfolio () {
        document.addEventListener('mousemove', function(e) {
            const cursorFollow = document.querySelector('.portfolio-video')
            const mouseX = event.pageX
            const mouseY = event.pageY
    
        cursorFollow.style.left = `${mouseX / 60}%`
        cursorFollow.style.top = `${(mouseY / 60) + 10}%`
        })
    }
})




