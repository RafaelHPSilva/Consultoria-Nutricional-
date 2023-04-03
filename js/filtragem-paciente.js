var campofiltraPaciente = document.querySelector('#campo-filtro')

campofiltraPaciente.addEventListener('input', function () {
  console.log(this.value)
  var pacientes = document.querySelectorAll('.paciente')
  if (this.value.length > 0) {
    pacientes.forEach(pacientes => {
      var paciente = pacientes //paciente acessa tr paciente
      var tdNome = paciente.querySelector('.info-nome') // Da Tr paciente seleciona o elemento com clase info-nome
      var nome = tdNome.textContent // Nome: Pega o conteudo da td info-nome
      var expressao = new RegExp(this.value, 'i') // (parametro, segundo parâmetro são uma ou mais flags representando como queremos que a expressão regular busque)
      if (!expressao.test(nome)) {
        paciente.classList.add('invisivel')
      } else {
        paciente.classList.remove('invisivel')
      }
    })
  } else {
    pacientes.forEach(pacientes => {
      var paciente = pacientes
      paciente.classList.remove('invisivel')
    })
  }
})
