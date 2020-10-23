<?php
  session_start();  
  include_once('database/connection.php'); // connects to the database
  include_once('database/news.php');       // loads the functions 
     
    if (!array_key_exists('username',$_SESSION) || empty($_SESSION['username']))
      header("Location: list_news.php");

    $id = $_POST['id'];
    $title = $_POST['title'];
    $introduction = $_POST['introduction'];
    $fulltext = $_POST['fulltext']; 
 
    updateDatabase($id,$title, $introduction, $fulltext);

    header("Location:news_item.php?id=$id");

?>