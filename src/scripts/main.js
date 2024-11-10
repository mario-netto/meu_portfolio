const elemento = document.querySelector('.portfolio')
const x = document.querySelector('.test')

elemento.addEventListener('mouseover', function() {
    x.classList.add('test--mostra')
})

elemento.addEventListener('mouseout', function() {
    x.classList.remove('test--mostra')
})
