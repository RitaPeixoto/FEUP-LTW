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
}
function receiveComments(){
    response = JSON.parse(this.responseText)
    comments = document.querySelector('#comments')

    response.forEach( function(comment) {
        const comment_id = comment['id'];
        const username = comment['username']
        const text = comment['text']
        const date = comment['published']

        let newComment = document.createElement('article')
        newComment.setAttribute('class', 'comment')
        newComment.setAttribute('data-id', comment_id)

        let userSpan = document.createElement('span')
        userSpan.setAttribute('class', 'user')
        userSpan.innerText = username

        let dateSpan = document.createElement('span')
        dateSpan.setAttribute('class', 'date')
        dateSpan.innerText = date

        let textP = document.createElement('p')
        textP.innerText = text

        userSpan.append(dateSpan)
        newComment.append(userSpan)
        newComment.append(textP)

        comments.insertBefore(newComment, commentForm)
    })

}
