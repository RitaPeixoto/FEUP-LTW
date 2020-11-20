let commentForm = document.querySelector('#comments form')

commentForm.addEventListener('submit', submitContent)

function submitContent(event){
    event.preventDefault()
    console.log("You have submitted a comment")
}