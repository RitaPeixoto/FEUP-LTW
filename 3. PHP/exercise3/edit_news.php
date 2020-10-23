<?php
  session_start();  
  include_once('database/connection.php'); // connects to the database
  include_once('database/news.php');       // loads the functions 
                                           
    if (!array_key_exists('username',$_SESSION) || empty($_SESSION['username']))
      header("Location: list_news.php");
  
    $id = $_GET['id'];
    $article = getArticle($id);

  include('templates/common/header.php');  // initial part of the HTML document is printed
  include('templates/news/edit_news.php'); // the list of news in HTML is printed
  include('templates/common/footer.php');  // final part of the HTML document is printed

?>