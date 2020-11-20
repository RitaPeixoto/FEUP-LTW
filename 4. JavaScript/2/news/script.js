let commentForm = document.querySelector('#comments form')
 
commentForm.addEventListener('submit', submitComment)
 
function submitComment(event){
    event.preventDefault()
    console.log("You have submited a comment")
 
    let id = document.getElementsByTagName('input')[0].value
    let comment_id = document.querySelector('#comments article:last-of-type').getAttribute('data-id')
    let username = document.getElementsByTagName('input')[1].value
    let text = document.getElementsByTagName('textarea')[0].value
 
 
    console.log(id, comment_id, username, text)
 
 
}