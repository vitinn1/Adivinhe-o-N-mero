let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame() {
  window.location.reload()
}

function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1)
  //console.log(computerNumber)
}

function compareNumbers() {
  const userNumber = Number(document.getElementById('inputBox').value) //pega o valor da caixa e transoforma em número
  userNumbers.push(' ' + userNumber) //vai puxar de user number e adicionar na array da variável lá em cima userNumbers
  document.getElementById('guesses').innerHTML = userNumbers //vai retornar no HTML quais números já foram

  if (attempts < maxGuesses) {
    if (userNumber > computerNumber) {
      document.getElementById('textOutput').innerHTML =
        'Seu número é muito alto'
      document.getElementById('inputBox').value = ''
      attempts++
      document.getElementById('attempts').innerHTML = attempts
    } else if (userNumber < computerNumber) {
      document.getElementById('textOutput').innerHTML =
        'Seu número é muito baixo'
      document.getElementById('inputBox').value = ''
      attempts++

      document.getElementById('attempts').innerHTML = attempts
    } else {
      document.getElementById('textOutput').innerHTML = 'Parabéns gênio!!'
      attempts++
      document.getElementById('attempts').innerHTML = attempts
      document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
  } else {
    document.getElementById('textOutput').innerHTML =
      'Você perdeu! O número era: ' + computerNumber + '. Vai desistir?!'
  }
}
