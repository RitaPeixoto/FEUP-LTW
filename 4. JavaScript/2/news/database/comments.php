<?php
  function getCommentsByNewId($id) {
    global $db;
    $stmt = $db->prepare('SELECT * FROM comments LEFT JOIN users USING (username) WHERE news_id = ?');
    $stmt->execute(array($id));
    return $stmt->fetchAll();
  }


  function addComment($news_id,$username, $text){
    global $db;
    $stmt = $db->prepare('INSERT INTO comments Values(Null, ?,?,?,?)');
    $stmt->execute(array($news_id, $username,time(), $text));
  }

  function fetchComments($id, $comment_id){
    global $db;
    $stmt = $db->prepare('SELECT * FROM comments  WHERE news_id = ? AND id > ? ');
    $stmt->execute(array($news_id, $comment_id));
    return $stmt->fetchAll();
  }

?>
