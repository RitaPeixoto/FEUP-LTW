<?php
  include_once('database/connection.php'); // connects to the database
  include_once('database/news.php');       // loads the functions 
                                           
  $articles = getAllNews();                // gets all news from the database

  include('templates/common/header.php');  // initial part of the HTML document is printed
  include('templates/news/list_news.php'); // the list of news in HTML is printed
  include('templates/common/footer.php');  // final part of the HTML document is printed

?>