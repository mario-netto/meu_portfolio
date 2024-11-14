document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.querySelector('.header__about__text')
    const aboutLinks = document.querySelector('.header__about__links')
    const videoPortfolio = document.querySelectorAll('.portfolio-video')
    const linkPortfolio = document.querySelectorAll('.portfolio')
    const blur = document.querySelector('.blur')
    const close = document.querySelector('.close')
    const linkDeployAll = document.querySelectorAll('.header__menu__item__year')

    display()
    window.addEventListener('resize', display)
    
    
    function display(){
        if (window.innerWidth <= 990) {
            showCupheadMobile() 
            showUmsoMobile()
            showAppTimerMobile()
            showArchanjoMobile()
            showFormMobile()   
            linkDeployAll.forEach(element => {
                element.classList.add('opacity-none');
                element.style.opacity = '1'; // resolvendo bug texto visível
                element.style.visibility = 'visible';
                // element.style.color = '#000'; 
            })
        } else {
            linkDeployAll.forEach(element => {
                element.classList.remove('opacity-none')
                // element.style.color = '#ffffffbe'; 
            })
            showCuphead()
            showUmso()
            showAppTimer()
            showArchanjo()
            showForm()
        }
    }

//-----------------------tema----------------------------------------------------



//--------------------------------------------------------------------------

    function showCuphead () {
        const elementButton = document.querySelector('.cuphead')
        const elementVideo = document.querySelector('.portfolio-video-cuphead')

        
        elementButton.addEventListener('mouseover', mouseIn)
        elementButton.addEventListener('mouseout', mouseOut)
        window.addEventListener('resize', function(){
            if (window.innerWidth <= 990) {
                elementButton.removeEventListener('mouseover', mouseIn)
                elementButton.removeEventListener('mouseout', mouseOut)
            }
        })

        function mouseIn(){
            startVideo(elementVideo)
            movePortfolio()
            // hide about
            aboutText.classList.add('opacity-none')
            aboutLinks.classList.add('opacity-none')
            // show portfolio
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show')
        }

        function mouseOut(){
            //show about
            aboutText.classList.remove('opacity-none')
            aboutLinks.classList.remove('opacity-none')
            //hide portfolio
            elementVideo.classList.add('opacity-none')
            elementVideo.classList.remove('portfolio-video--show')
        }
    }

    function showUmso () {
        const elementButton = document.querySelector('.umso')
        const elementVideo = document.querySelector('.portfolio-video-umso')

        elementButton.addEventListener('mouseover', mouseIn)
        elementButton.addEventListener('mouseout', mouseOut)
        window.addEventListener('resize', function(){
            if (window.innerWidth <= 990) {
                elementButton.removeEventListener('mouseover', mouseIn)
                elementButton.removeEventListener('mouseout', mouseOut)
            }
        })

        function mouseIn(){
            startVideo(elementVideo)
            movePortfolio()
            // hide about
            aboutText.classList.add('opacity-none')
            aboutLinks.classList.add('opacity-none')
            // show portfolio
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show')
        }

        function mouseOut(){
            //show about
            aboutText.classList.remove('opacity-none')
            aboutLinks.classList.remove('opacity-none')
            //hide portfolio
            elementVideo.classList.add('opacity-none')
            elementVideo.classList.remove('portfolio-video--show')
        }
    }

    function showAppTimer () {
        const elementButton = document.querySelector('.appTimer')
        const elementVideo = document.querySelector('.portfolio-video-appTimer')

        elementButton.addEventListener('mouseover', mouseIn)
        elementButton.addEventListener('mouseout', mouseOut)
        window.addEventListener('resize', function(){
            if (window.innerWidth <= 990) {
                elementButton.removeEventListener('mouseover', mouseIn)
                elementButton.removeEventListener('mouseout', mouseOut)
            }
        })

        function mouseIn(){
            startVideo(elementVideo)
            movePortfolio()
            // hide about
            aboutText.classList.add('opacity-none')
            aboutLinks.classList.add('opacity-none')
            // show portfolio
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show')
        }

        function mouseOut(){
            //show about
            aboutText.classList.remove('opacity-none')
            aboutLinks.classList.remove('opacity-none')
            //hide portfolio
            elementVideo.classList.add('opacity-none')
            elementVideo.classList.remove('portfolio-video--show')
        }
    }

    function showArchanjo () {
        const elementButton = document.querySelector('.archanjo')
        const elementVideo = document.querySelector('.portfolio-video-archanjo')

        elementButton.addEventListener('mouseover', mouseIn)
        elementButton.addEventListener('mouseout', mouseOut)
        window.addEventListener('resize', function(){
            if (window.innerWidth <= 990) {
                elementButton.removeEventListener('mouseover', mouseIn)
                elementButton.removeEventListener('mouseout', mouseOut)
            }
        })

        function mouseIn(){
            startVideo(elementVideo)
            movePortfolio()
            // hide about
            aboutText.classList.add('opacity-none')
            aboutLinks.classList.add('opacity-none')
            // show portfolio
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show')
        }

        function mouseOut(){
            //show about
            aboutText.classList.remove('opacity-none')
            aboutLinks.classList.remove('opacity-none')
            //hide portfolio
            elementVideo.classList.add('opacity-none')
            elementVideo.classList.remove('portfolio-video--show')
        }
    }

    function showForm () {
        const elementButton = document.querySelector('.form')
        const elementVideo = document.querySelector('.portfolio-video-form')

        elementButton.addEventListener('mouseover', mouseIn)
        elementButton.addEventListener('mouseout', mouseOut)
        window.addEventListener('resize', function(){
            if (window.innerWidth <= 990) {
                elementButton.removeEventListener('mouseover', mouseIn)
                elementButton.removeEventListener('mouseout', mouseOut)
            }
        })

        function mouseIn(){
            startVideo(elementVideo)
            movePortfolio()
            // hide about
            aboutText.classList.add('opacity-none')
            aboutLinks.classList.add('opacity-none')
            // show portfolio
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show')
        }

        function mouseOut(){
            //show about
            aboutText.classList.remove('opacity-none')
            aboutLinks.classList.remove('opacity-none')
            //hide portfolio
            elementVideo.classList.add('opacity-none')
            elementVideo.classList.remove('portfolio-video--show')
        }
    }

    //-------------------------------------------------------------

    function movePortfolio() {
        
        document.addEventListener('mousemove', move)
        
        window.addEventListener('resize', function(){
            if (window.innerWidth <= 990) {
                document.removeEventListener('mousemove', move)
                videoPortfolio.forEach(function(e) {
                    e.style.left = '0'
                    e.style.top = '32vh'
                })
            }
        })

        function move(e) {
            const mouseX = e.pageX
            const mouseY = e.pageY

            videoPortfolio.forEach(function(e) {
                e.style.left = `${mouseX / 60 - 5}%`
                e.style.top = `${(mouseY / 60) + 10}%`
            })
        }
    }

    //-------------------------------------------------------------

    function startVideo(video) {
        video.currentTime = 0
        // video.play()
    }

    function preventLink(e) {
        e.preventDefault()
        // console.log("Link bloqueado")
    }
    

     // mobile -------------------------------------------------------

    function showCupheadMobile() {
        const elementButton = document.querySelector('.cuphead')
        const elementVideo = document.querySelector('.portfolio-video-cuphead')
        const linkDeploy = document.querySelector('.link-deploy-cuphead')

        elementButton.addEventListener('click', clickPortfolio)

        window.addEventListener('resize', function(){
            if (window.innerWidth >= 990) {
                elementButton.removeEventListener('click', clickPortfolio)  
            }
        })

        function clickPortfolio() {
            startVideo(elementVideo)
            // Mostrar o vídeo e botao
            linkDeploy.classList.remove('opacity-none')
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show-mobile')
            close.classList.remove('opacity-none')
            blur.classList.add('blur--active')
            
            document.body.style.overflow = 'hidden'

            document.addEventListener('click', closeVideo)
        }

        function closeVideo(e) {
            // Verifica se o clique foi fora do vídeo e do botão
            if (!elementVideo.contains(e.target) && e.target !== elementButton) {
                // close video
                linkDeploy.classList.add('opacity-none')
                elementVideo.classList.add('opacity-none')
                elementVideo.classList.remove('portfolio-video--show-mobile')
                close.classList.add('opacity-none')
                blur.classList.remove('blur--active')
                document.body.style.overflow = 'auto'

                // Remove o evento para não ficar sendo acionado novamente
                document.removeEventListener('click', closeVideo)
            }
        }
    }   
    
    function showUmsoMobile() {
        const elementButton = document.querySelector('.umso')
        const elementVideo = document.querySelector('.portfolio-video-umso')
        const linkDeploy = document.querySelector('.link-deploy-umso')

        elementButton.addEventListener('click', clickPortfolio)

        window.addEventListener('resize', function(){
            if (window.innerWidth >= 990) {
                elementButton.removeEventListener('click', clickPortfolio)  
            }
        })

        function clickPortfolio() {
            startVideo(elementVideo)
            // Mostrar o vídeo e botao
            linkDeploy.classList.remove('opacity-none')
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show-mobile')
            close.classList.remove('opacity-none')
            blur.classList.add('blur--active')
            
            document.body.style.overflow = 'hidden'

            document.addEventListener('click', closeVideo)
        }

        function closeVideo(e) {
            // Verifica se o clique foi fora do vídeo e do botão
            if (!elementVideo.contains(e.target) && e.target !== elementButton) {
                // close video
                linkDeploy.classList.add('opacity-none')
                elementVideo.classList.add('opacity-none')
                elementVideo.classList.remove('portfolio-video--show-mobile')
                close.classList.add('opacity-none')
                blur.classList.remove('blur--active')
                document.body.style.overflow = 'auto'

                // Remove o evento para não ficar sendo acionado novamente
                document.removeEventListener('click', closeVideo)
            }
        }
    }    

    function showAppTimerMobile() {
        const elementButton = document.querySelector('.appTimer')
        const elementVideo = document.querySelector('.portfolio-video-appTimer')
        const linkDeploy = document.querySelector('.link-deploy-AppTimer')

        elementButton.addEventListener('click', clickPortfolio)

        window.addEventListener('resize', function(){
            if (window.innerWidth >= 990) {
                elementButton.removeEventListener('click', clickPortfolio)  
            }
        })

        function clickPortfolio() {
            startVideo(elementVideo)
            // Mostrar o vídeo e botao
            linkDeploy.classList.remove('opacity-none')
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show-mobile')
            close.classList.remove('opacity-none')
            blur.classList.add('blur--active')
            
            document.body.style.overflow = 'hidden'

            document.addEventListener('click', closeVideo)
        }

        function closeVideo(e) {
            // Verifica se o clique foi fora do vídeo e do botão
            if (!elementVideo.contains(e.target) && e.target !== elementButton) {
                // close video
                linkDeploy.classList.add('opacity-none')
                elementVideo.classList.add('opacity-none')
                elementVideo.classList.remove('portfolio-video--show-mobile')
                close.classList.add('opacity-none')
                blur.classList.remove('blur--active')
                document.body.style.overflow = 'auto'

                // Remove o evento para não ficar sendo acionado novamente
                document.removeEventListener('click', closeVideo)
            }
        }
    }   

    function showArchanjoMobile() {
        const elementButton = document.querySelector('.archanjo')
        const elementVideo = document.querySelector('.portfolio-video-archanjo')
        const linkDeploy = document.querySelector('.link-deploy-archanjo')

        elementButton.addEventListener('click', clickPortfolio)

        window.addEventListener('resize', function(){
            if (window.innerWidth >= 990) {
                elementButton.removeEventListener('click', clickPortfolio)  
            }
        })

        function clickPortfolio() {
            startVideo(elementVideo)
            // Mostrar o vídeo e botao
            linkDeploy.classList.remove('opacity-none')
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show-mobile')
            close.classList.remove('opacity-none')
            blur.classList.add('blur--active')
            
            document.body.style.overflow = 'hidden'

            document.addEventListener('click', closeVideo)
        }

        function closeVideo(e) {
            // Verifica se o clique foi fora do vídeo e do botão
            if (!elementVideo.contains(e.target) && e.target !== elementButton) {
                // close video
                linkDeploy.classList.add('opacity-none')
                elementVideo.classList.add('opacity-none')
                elementVideo.classList.remove('portfolio-video--show-mobile')
                close.classList.add('opacity-none')
                blur.classList.remove('blur--active')
                document.body.style.overflow = 'auto'

                // Remove o evento para não ficar sendo acionado novamente
                document.removeEventListener('click', closeVideo)
            }
        }
    }   

    function showFormMobile() {
        const elementButton = document.querySelector('.form')
        const elementVideo = document.querySelector('.portfolio-video-form')
        const linkDeploy = document.querySelector('.link-deploy-form')

        elementButton.addEventListener('click', clickPortfolio)

        window.addEventListener('resize', function(){
            if (window.innerWidth >= 990) {
                elementButton.removeEventListener('click', clickPortfolio)  
            }
        })

        function clickPortfolio() {
            startVideo(elementVideo)
            // Mostrar o vídeo e botao
            linkDeploy.classList.remove('opacity-none')
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show-mobile')
            close.classList.remove('opacity-none')
            blur.classList.add('blur--active')
            
            document.body.style.overflow = 'hidden'

            document.addEventListener('click', closeVideo)
        }

        function closeVideo(e) {
            // Verifica se o clique foi fora do vídeo e do botão
            if (!elementVideo.contains(e.target) && e.target !== elementButton) {
                // close video
                linkDeploy.classList.add('opacity-none')
                elementVideo.classList.add('opacity-none')
                elementVideo.classList.remove('portfolio-video--show-mobile')
                close.classList.add('opacity-none')
                blur.classList.remove('blur--active')
                document.body.style.overflow = 'auto'

                // Remove o evento para não ficar sendo acionado novamente
                document.removeEventListener('click', closeVideo)
            }
        }
    }   
})