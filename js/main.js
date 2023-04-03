var titulo = document.querySelector('.titulo')
titulo.textContent = 'Consultoria Nutricional Aparecida'

var pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector('.info-peso')
  var peso = tdPeso.textContent
  var pesoValido = validaPeso(peso)
  
  if (!validaPeso) { //'{' = Algo executavel
    pesoValido = false
    tdImc.textContent = 'Peso invalido!'
    tdImc.classList.add('campo-invalido')
  }

  var tdAltura = paciente.querySelector('.info-altura')
  var altura = tdAltura.textContent
  var alutraValida = validaAltura(altura)
  
  if (!validaAltura) {
    alutraValida = false
    tdImc.textContent = 'Altura invalida!'
    tdImc.classList.add('campo-invalido')
  }

  var tdImc = paciente.querySelector('.info-imc')

  if (pesoValido && alutraValida) {
  var imc = calculaImc(peso,altura) // Parametro peso e altura do objeto paciente criado
  tdImc.textContent = imc
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 600) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.00) {
    return true
  } else {
    return false
  }
}

function calculaImc(peso,altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}





