document.addEventListener('DOMContentLoaded', function(){
    
    showPortfolio ()

    // função mostra portfolio
    function showPortfolio () {
        const elementButton = document.querySelector('.portfolio')
        const elementVideo = document.querySelector('.portfolio-video')
        elementButton.addEventListener('mouseover', function() {
            elementVideo.classList.add('portfolio-video--mostra')
            elementButton.addEventListener('mouseout', function() {
                elementVideo.classList.remove('portfolio-video--mostra')
            })
        })
    }

    function movePortfolio () {
        
    }
})




