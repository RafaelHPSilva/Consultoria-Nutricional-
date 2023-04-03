var buscaPaciente = document.querySelector('#buscar-pacientes')

buscaPaciente.addEventListener('click', function (params) {

  var xhr = new XMLHttpRequest() // Objeto para fazer requisições.
  xhr.open('get', 'https://api-pacientes.herokuapp.com/pacientess') // Abre a requesição
  //      (Tipo de requisiçao(Get,input, etc..), o endereço desejado)

  xhr.addEventListener('load', function () {

    var erroAjax = document.querySelector('#erroAoBuscar')
    
    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel')

      var resposta = xhr.responseText
  
      var pacientes = JSON.parse(resposta)
  
      for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i]
  
        adicionaPaciente(paciente)
      }
    } else {
      erroAjax.classList.remove('invisivel')
    }
    
  })
  xhr.send()
})
