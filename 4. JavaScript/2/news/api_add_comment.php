<?php
    header('Content-Type: application/json');
    include_once('database/comments.php');
    include_once('database/connection.php');

    $id = $_POST['id'];
    $username = $_POST['username'];
    $text = $_POST['text'];
    $comment_id = $_POST['comment_id'];

    addComments($id, $username, $text);

    $comments = fetchComments($id, $comment_id);

    foreach($comments as $c => $comment){
        $comments[$c]['published'] = date('Y-m-d H:i:s', $comments[$c]['published']);
    }
    echo json_encode($comments);

?>