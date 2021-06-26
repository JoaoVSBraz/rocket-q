import Modal from './modal.js'

const modal = Modal()

//Mapeando os elementos que serão alterados
let modalTitle = document.querySelector('.modal h2')
let modalDescription = document.querySelector('.modal p')
let modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

//Quando o botão de excluir for clicado, a modal será aberta
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "marcar como lida" : "excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}