const elemento = document.querySelector('.portfolio')
const x = document.querySelector('.test')

elemento.addEventListener('mouseover', function() {

    x.classList.add('test--mostra')
    console.log(x)
})
