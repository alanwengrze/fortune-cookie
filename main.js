const phrases = [
  "A solidão é a sorte de todos os espíritos excepcionais.",
  "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
  "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
  "A sorte favorece a mente bem preparada.",
  "A sorte do egoísta é viver sem preocupações; o seu castigo é morrer sem afetos.",
  "A maior de todas as torres começa no solo.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O riso é a menor distância entre duas pessoas."
]

let closedBiscuit = document.querySelector(".closedBiscuit")
let openBiscuit = document.querySelector(".openBiscuit")
const imgBiscuit = document.querySelector("#imgBiscuit")
const buttonNewBiscuit = document.querySelector("#newBiscuit")
let phrase = document.querySelector(".openBiscuit p")
let randomNumber = Math.floor(Math.random() * phrases.length)

imgBiscuit.addEventListener("click", biscuitToggle)
buttonNewBiscuit.addEventListener("click",openNewBiscuit)

function biscuitToggle(){
  closedBiscuit.classList.toggle("hide")
  openBiscuit.classList.toggle("hide")
}


function openNewBiscuit(){
  biscuitToggle()
  randomNumber = Math.floor(Math.random() * phrases.length)
  randomPhrase()
}

function randomPhrase(){
    phrase.innerText = `${phrases[randomNumber]}`
    console.log(randomNumber)
}