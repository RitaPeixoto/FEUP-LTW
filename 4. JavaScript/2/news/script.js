let commentForm = document.querySelector('#comments form')
 
commentForm.addEventListener('submit', submitComment)
function encodeForAjax(data) {
    return Object.keys(data).map(function(k){
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
  }
 
function submitComment(event){
    event.preventDefault()
    console.log("You have submited a comment")
 
    let id = document.getElementsByTagName('input')[0].value
    let comment_id = document.querySelector('#comments article:last-of-type').getAttribute('data-id')
    let username = document.getElementsByTagName('input')[1].value
    let text = document.getElementsByTagName('textarea')[0].value
 
 
    console.log(id, comment_id, username, text)
 
    let request = new XMLHttpRequest()
    request.addEventListener("load", receiveComments)
 
    request.open("post", "api_add_comment.php", true)
 
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
 
    request.send(encodeForAjax({id: id, username: username, comment_id:comment_id, text:text}))
 
    function receiveComments(){
        console.log('hi')
    }
 
 
}