var botaoAdd = document.querySelector('#adicionar-paciente')
botaoAdd.addEventListener('click', function (event) {
  event.preventDefault()

  /*                     Extraindo info do form                 */
  //Atribuindo valores
  var form = document.querySelector('#form-add') //form é um objeto que tem propriedades(input: nome, peso, altura e etc.)

  var paciente = obtendoInfoPaciente(form)

  /*                    Novo Paciente                 */

  //var novoPacienteTr = montaTr(paciente)
  
  var erros = validaPaciente(paciente)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros)

    return
  }

  /*                    Filhamento                 */

  // Inserindo no body
  //var novaTabela = document.querySelector('#tabela-pacientes')
  //novaTabela.appendChild(novoPacienteTr)
  /* ===============================================*/
  adicionaPaciente(paciente)
  form.reset()

  var mensagensDeErros = document.querySelector('#mensagensDeErros')
  mensagensDeErros.innerHTML = '' // limpa todos os erros anteriores
})

/*                    FUNÇOES                 */

/*                    OBTER INFO DO PACIENTE DO FORMULÁRIO                 */

function obtendoInfoPaciente(form) {
  //utilizar os parametros de onde vc quer pegar as informacóes
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente // retornar sempre a var
}

/*                    CRIAR PACIENTE                 */

function montaTr(paciente) {
  //utilizar os parametros de onde vc quer pegar as informacóes
  //Cria uma ul
  var novoPacienteTr = document.createElement('tr') // var tr: cria uma ul no meu html
  novoPacienteTr.classList.add('paciente')
  // '.info-nome': valor atribuido pro parametro de classe | paciente.nome: valor definido pro parâmetro de dados.
  novoPacienteTr.appendChild(criaTd('info-nome', paciente.nome))
  novoPacienteTr.appendChild(criaTd('info-peso', paciente.peso))
  novoPacienteTr.appendChild(criaTd('info-altura', paciente.altura))
  novoPacienteTr.appendChild(criaTd('info-gordura', paciente.gordura))
  novoPacienteTr.appendChild(criaTd('info-imc', paciente.imc))

  return novoPacienteTr
}

function criaTd(classe, dados) {
  var criaTd = document.createElement('td')
  criaTd.classList.add(classe) //Valor de parametro não definido.
  criaTd.textContent = dados // Valor de parametro não definido.

  return criaTd
}

/*                    VALIDAÇAO DE PACIENTE                 */

function validaPaciente(paciente) {
  var erros = []

  if (paciente.nome.length == 0) {
    erros.push('Campo nome é um campo obrigatório')
  }

  if (paciente.peso.length == 0) {
    erros.push('Campo peso é um campo obrigatório')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso inválido')
  }

  if (paciente.altura.length == 0) {
    erros.push('Campo altura é um campo obrigatório')
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('Altura inválida')
  }

  if (paciente.gordura.length == 0) {
    erros.push('Campo Gordura é um campo obrigatório')
  }

  return erros
}

/*                    MENSAGEM DE ERRO                 */

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagensDeErros')
  ul.innerHTML = '' // vai limpar os erros anteriores, porém sempre ficara com algum erro aparecendo.
  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}

function adicionaPaciente(paciente) {
  var novoPacienteTr = montaTr(paciente)
  var novaTabela = document.querySelector('#tabela-pacientes')
  novaTabela.appendChild(novoPacienteTr)
}
