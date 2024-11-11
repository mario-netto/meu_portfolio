document.addEventListener('DOMContentLoaded', function() {


    showCuphead()
    showUmso()
    showAppTimer()
    showForm()

    movePortfolio()
    
    
})

function showCuphead () {
    const elementButton = document.querySelector('.cuphead')
    const elementVideo = document.querySelector('.portfolio-video-cuphead')
    const aboutText = document.querySelector('.header__about__text')
    const aboutLinks = document.querySelector('.header__about__links')
    
        //Mouse in
    elementButton.addEventListener('mouseover', function() {
        //hide about
        aboutText.classList.add('opacityNone')
        aboutLinks.classList.add('opacityNone')
        //show portfolio
        elementVideo.classList.remove('opacityNone')
        elementVideo.classList.add('portfolio-video--mostra')

        //mouse out
        elementButton.addEventListener('mouseout', function() {
            //show about
            aboutText.classList.remove('opacityNone')
            aboutLinks.classList.remove('opacityNone')
            //hide portfolio
            elementVideo.classList.add('opacityNone')
            elementVideo.classList.remove('portfolio-video--mostra')
        })
    })
}

function showUmso () {
    const elementButton = document.querySelector('.appTimer')
    const elementVideo = document.querySelector('.portfolio-video-appTimer')
    const aboutText = document.querySelector('.header__about__text')
    const aboutLinks = document.querySelector('.header__about__links')
    
        //Mouse in
    elementButton.addEventListener('mouseover', function() {
        //hide about
        aboutText.classList.add('opacityNone')
        aboutLinks.classList.add('opacityNone')
        //show portfolio
        elementVideo.classList.remove('opacityNone')
        elementVideo.classList.add('portfolio-video--mostra')

        //mouse out
        elementButton.addEventListener('mouseout', function() {
            //show about
            aboutText.classList.remove('opacityNone')
            aboutLinks.classList.remove('opacityNone')
            //hide portfolio
            elementVideo.classList.add('opacityNone')
            elementVideo.classList.remove('portfolio-video--mostra')
        })
    })
}

function showAppTimer () {
    const elementButton = document.querySelector('.umso')
    const elementVideo = document.querySelector('.portfolio-video-umso')
    const aboutText = document.querySelector('.header__about__text')
    const aboutLinks = document.querySelector('.header__about__links')
    
        //Mouse in
    elementButton.addEventListener('mouseover', function() {
        //hide about
        aboutText.classList.add('opacityNone')
        aboutLinks.classList.add('opacityNone')
        //show portfolio
        elementVideo.classList.remove('opacityNone')
        elementVideo.classList.add('portfolio-video--mostra')

        //mouse out
        elementButton.addEventListener('mouseout', function() {
            //show about
            aboutText.classList.remove('opacityNone')
            aboutLinks.classList.remove('opacityNone')
            //hide portfolio
            elementVideo.classList.add('opacityNone')
            elementVideo.classList.remove('portfolio-video--mostra')
        })
    })
}

function showForm () {
    const elementButton = document.querySelector('.form')
    const elementVideo = document.querySelector('.portfolio-video-form')
    const aboutText = document.querySelector('.header__about__text')
    const aboutLinks = document.querySelector('.header__about__links')
    
        //Mouse in
    elementButton.addEventListener('mouseover', function() {
        //hide about
        aboutText.classList.add('opacityNone')
        aboutLinks.classList.add('opacityNone')
        //show portfolio
        elementVideo.classList.remove('opacityNone')
        elementVideo.classList.add('portfolio-video--mostra')

        //mouse out
        elementButton.addEventListener('mouseout', function() {
            //show about
            aboutText.classList.remove('opacityNone')
            aboutLinks.classList.remove('opacityNone')
            //hide portfolio
            elementVideo.classList.add('opacityNone')
            elementVideo.classList.remove('portfolio-video--mostra')
        })
    })
}



function movePortfolio() {
    document.addEventListener('mousemove', function(e) {
        const cursorFollows = document.querySelectorAll('.move')
        const mouseX = e.pageX
        const mouseY = e.pageY

        cursorFollows.forEach(function(cursorFollow) {
            cursorFollow.style.left = `${mouseX / 60 - 10}%`
            cursorFollow.style.top = `${(mouseY / 60) + 10}%`
        });
    });
}

