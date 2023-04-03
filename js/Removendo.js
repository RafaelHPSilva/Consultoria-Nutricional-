var removerPaciente = document.querySelector('#tabela-pacientes')
removerPaciente.addEventListener('dblclick', function(event) {
  event.target.parentNode.classList.add('fadeOut')

setTimeout (function(params) {
  event.target.parentNode.remove()
},500)
})



