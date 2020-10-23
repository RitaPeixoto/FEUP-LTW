<?php
  include_once('database/connection.php'); // connects to the database
  include_once('database/news.php');       // loads the functions 
                                           
    $id = $_POST['id'];
    $title = $_POST['title'];
    $introduction = $_POST['introduction'];
    $fulltext = $_POST['fulltext']; 
 
    updateDatabase($id,$title, $introduction, $fulltext);

    header("Location:news_item.php?id=$id");

?>