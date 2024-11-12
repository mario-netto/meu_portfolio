

document.addEventListener('DOMContentLoaded', function() {
    const aboutText = document.querySelector('.header__about__text')
    const aboutLinks = document.querySelector('.header__about__links')
    const linkPortfolio = document.querySelector('.portfolio')
    const videoPortfolio = document.querySelectorAll('.portfolio-video')
    const blur = document.querySelector('.blur')
    const close = document.querySelector('.close')

    document.addEventListener('fullscreenchange', function () {
        if (document.fullscreenElement) {
            // Sai do modo tela cheia automaticamente
            document.exitFullscreen();
            alert("Modo tela cheia desativado para este vídeo.");
        }
    });
    
    // window.addEventListener('resize', aplicarResponsividade);
    // aplicarResponsividade(); // Chamada inicial ao carregar a página



    // window.addEventListener('resize', function() {
    //     if (window.innerWidth >= 767) {
    //         showCuphead()
    //     } else {
    //         showCupheadMobile()
    //     }
    // })

    showCuphead()
    showCupheadMobile()
    // showUmso()
    // showAppTimer()
    // showArchanjo()
    // showForm()

//---------------------------------------------------------------------------

// function aplicarResponsividade() {
//     const largura = window.innerWidth

//     if (largura < 768) {
//         showCupheadMobile()
//     } else if (largura < 1024) {
//         showCuphead()
//         console.log("Tablet")
//     } else {
//         // Exemplo de código para desktops
//         console.log("Desktop")
//     }
// }


function preventLink(e) {
    e.preventDefault();
}

function handleMouseMove(e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    videoPortfolio.forEach(function(e) {
        e.style.left = `${mouseX / 60 - 5}%`
        e.style.top = `${(mouseY / 60) + 10}%`
    })
}

// Função para adicionar o evento de movimento
// function movePortfolio() {
//     document.addEventListener('mousemove', handleMouseMove)
// }

    function startVideo(video) {
        video.currentTime = 0
        // video.play();
    }

    function showCuphead() {
        const elementButton = document.querySelector('.cuphead')
        const elementVideo = document.querySelector('.portfolio-video-cuphead')
        
        
            if(window.innerWidth >= 767) {
                
                document.addEventListener('mousemove', handleMouseMove)
                elementButton.addEventListener('mouseover', mouseIn)
                elementButton.addEventListener('mouseout', mouseOut)
            } else {
                document.removeEventListener('mousemove', handleMouseMove)
                elementButton.removeEventListener('mouseover', mouseIn)
                elementButton.removeEventListener('mouseout', mouseOut)
            }
        
        
        
        function mouseIn() {
            startVideo(elementVideo)
            //hide about
            aboutText.classList.add('opacity-none')
            aboutLinks.classList.add('opacity-none')
            //show portfolio
            elementVideo.classList.remove('opacity-none')
            elementVideo.classList.add('portfolio-video--show')
        }

        function mouseOut() {
            //show about
            aboutText.classList.remove('opacity-none')
            aboutLinks.classList.remove('opacity-none')
            //hide portfolio
            elementVideo.classList.add('opacity-none')
            elementVideo.classList.remove('portfolio-video--show')
        }
    }

    // function showCuphead() {
    //     const elementButton = document.querySelector('.cuphead')
    //     const elementVideo = document.querySelector('.portfolio-video-cuphead')
    //          //Mouse in
    //     elementButton.addEventListener('mouseover', function() {
    //         startVideo(elementVideo)
    //         movePortfolio()
    //         //hide about
    //         aboutText.classList.add('opacity-none')
    //         aboutLinks.classList.add('opacity-none')
    //         //show portfolio
    //         elementVideo.classList.remove('opacity-none')
    //         elementVideo.classList.add('portfolio-video--show')

    //         //mouse out
    //         elementButton.addEventListener('mouseout', function() {
    //             //show about
    //             aboutText.classList.remove('opacity-none')
    //             aboutLinks.classList.remove('opacity-none')
    //             //hide portfolio
    //             elementVideo.classList.add('opacity-none')
    //             elementVideo.classList.remove('portfolio-video--show')
    //         })
    //     })
    // }

    function showUmso() {
        const elementButton = document.querySelector('.appTimer')
        const elementVideo = document.querySelector('.portfolio-video-appTimer')
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

    function showAppTimer() {
        const elementButton = document.querySelector('.umso')
        const elementVideo = document.querySelector('.portfolio-video-umso')
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

    function showArchanjo() {
        const elementButton = document.querySelector('.archanjo')
        const elementVideo = document.querySelector('.portfolio-video-archanjo')
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

    function showForm() {
        const elementButton = document.querySelector('.form')
        const elementVideo = document.querySelector('.portfolio-video-form')
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

    // mobile -------------------------------------------------------

    function showCupheadMobile() {
        const elementButton = document.querySelector('.cuphead');
        const elementVideo = document.querySelector('.portfolio-video-cuphead');
        const blur = document.querySelector('.blur')

        linkPortfolio.addEventListener('click', preventLink)

        elementButton.addEventListener('click', function() {
            startVideo(elementVideo)
            // Mostrar o vídeo
            elementVideo.classList.remove('opacity-none');
            elementVideo.classList.add('portfolio-video--show-mobile')
            close.classList.remove('opacity-none')
            blur.classList.add('blur--active');
            
            document.body.style.overflow = 'hidden'
    
            
            function closeVideo(e) {
                // Verifica se o clique foi fora do vídeo e do botão
                if (!elementVideo.contains(e.target) && e.target !== elementButton) {
                    // close video
                    elementVideo.classList.add('opacity-none');
                    elementVideo.classList.remove('portfolio-video--show-mobile')
                    close.classList.add('opacity-none')
                    blur.classList.remove('blur--active')
                    document.body.style.overflow = 'auto'
    
                    // Remove o evento para não ficar sendo acionado novamente
                    document.removeEventListener('click', closeVideo)
                }
            }
            document.addEventListener('click', closeVideo)
        })
    }    
})