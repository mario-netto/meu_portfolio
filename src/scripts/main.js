document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.querySelector('.header__about__text')
    const aboutLinks = document.querySelector('.header__about__links')
    const videoPortfolio = document.querySelectorAll('.portfolio-video')

    showCuphead()
    showUmso()
    showAppTimer()
    showArchanjo()
    showForm()
    

    // if (window.innerWidth >= 767) {

    // } 
//---------------------------------------------------------------------------
    function showCuphead () {
        const elementButton = document.querySelector('.cuphead')
        const elementVideo = document.querySelector('.portfolio-video-cuphead')
        const linkPortfolio = document.querySelector('.portfolio')

        if (window.innerWidth >= 767) {
             //Mouse in
            elementButton.addEventListener('mouseover', function() {
                startVideo(elementVideo)
                movePortfolio()
                //hide about
                aboutText.classList.add('opacity-none')
                aboutLinks.classList.add('opacity-none')
                //show portfolio
                elementVideo.classList.remove('opacity-none')
                elementVideo.classList.add('portfolio-video--show')

                //mouse out
                elementButton.addEventListener('mouseout', function() {
                    //show about
                    aboutText.classList.remove('opacity-none')
                    aboutLinks.classList.remove('opacity-none')
                    //hide portfolio
                    elementVideo.classList.add('opacity-none')
                    elementVideo.classList.remove('portfolio-video--show')
                })
            })
        } else {
            linkPortfolio.classList.add('disable-link')
        }
    }

    function showUmso () {
        const elementButton = document.querySelector('.appTimer')
        const elementVideo = document.querySelector('.portfolio-video-appTimer')
        
        if (window.innerWidth >= 767) {
            //Mouse in
            elementButton.addEventListener('mouseover', function() {
                startVideo(elementVideo)
                movePortfolio()
                //hide about
                aboutText.classList.add('opacity-none')
                aboutLinks.classList.add('opacity-none')
                //show portfolio
                elementVideo.classList.remove('opacity-none')
                elementVideo.classList.add('portfolio-video--show')

                //mouse out
                elementButton.addEventListener('mouseout', function() {
                    //show about
                    aboutText.classList.remove('opacity-none')
                    aboutLinks.classList.remove('opacity-none')
                    //hide portfolio
                    elementVideo.classList.add('opacity-none')
                    elementVideo.classList.remove('portfolio-video--show')
                })
            })
        }
    }

    function showAppTimer () {
        const elementButton = document.querySelector('.umso')
        const elementVideo = document.querySelector('.portfolio-video-umso')
        
        if (window.innerWidth >= 767) {
            //Mouse in
            elementButton.addEventListener('mouseover', function() {
                startVideo(elementVideo)
                movePortfolio()
                //hide about
                aboutText.classList.add('opacity-none')
                aboutLinks.classList.add('opacity-none')
                //show portfolio
                elementVideo.classList.remove('opacity-none')
                elementVideo.classList.add('portfolio-video--show')

                //mouse out
                elementButton.addEventListener('mouseout', function() {
                    //show about
                    aboutText.classList.remove('opacity-none')
                    aboutLinks.classList.remove('opacity-none')
                    //hide portfolio
                    elementVideo.classList.add('opacity-none')
                    elementVideo.classList.remove('portfolio-video--show')
                })
            })
        }
    }

    function showArchanjo () {
        const elementButton = document.querySelector('.archanjo')
        const elementVideo = document.querySelector('.portfolio-video-archanjo')
        
        if (window.innerWidth >= 767) {
            //Mouse in
            elementButton.addEventListener('mouseover', function() {
                startVideo(elementVideo)
                movePortfolio()
                //hide about
                aboutText.classList.add('opacity-none')
                aboutLinks.classList.add('opacity-none')
                //show portfolio
                elementVideo.classList.remove('opacity-none')
                elementVideo.classList.add('portfolio-video--show')

                //mouse out
                elementButton.addEventListener('mouseout', function() {
                    //show about
                    aboutText.classList.remove('opacity-none')
                    aboutLinks.classList.remove('opacity-none')
                    //hide portfolio
                    elementVideo.classList.add('opacity-none')
                    elementVideo.classList.remove('portfolio-video--show')
                })
            })
        }
    }

    function showForm () {
        const elementButton = document.querySelector('.form')
        const elementVideo = document.querySelector('.portfolio-video-form')
        
        if (window.innerWidth >= 767) {
            //Mouse in
            elementButton.addEventListener('mouseover', function() {
                startVideo(elementVideo)
                movePortfolio()
                //hide about
                aboutText.classList.add('opacity-none')
                aboutLinks.classList.add('opacity-none')
                //show portfolio
                elementVideo.classList.remove('opacity-none')
                elementVideo.classList.add('portfolio-video--show')

                //mouse out
                elementButton.addEventListener('mouseout', function() {
                    //show about
                    aboutText.classList.remove('opacity-none')
                    aboutLinks.classList.remove('opacity-none')
                    //hide portfolio
                    elementVideo.classList.add('opacity-none')
                    elementVideo.classList.remove('portfolio-video--show')
                })
            })
        }
    }

    function movePortfolio() {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.pageX
            const mouseY = e.pageY

            videoPortfolio.forEach(function(e) {
                e.style.left = `${mouseX / 60 - 5}%`
                e.style.top = `${(mouseY / 60) + 10}%`
            })
        })
    }

    function startVideo(video) {
        video.currentTime = 0
        // video.play();
    }

})