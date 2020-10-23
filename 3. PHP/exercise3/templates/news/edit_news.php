<form action="action_edit_news.php" method="post">
    <h2>Edit</h2>
    <input type="hidden" name="id" value="<?=$id?>">
    <label>Title
        <input type="text" name="title">
    </label>
    <label>Introduction
    <input type="textarea" name="introduction">
    </label>
    <label>Fulltext
    <input type="textarea" name="fulltext">
    </label>
    <input type="submit" value="Submit">
</form>