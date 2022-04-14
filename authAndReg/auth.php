<?php

$login = $_POST['login'];
$pass = $_POST['pass'];

$pass = md5($pass."erjgergjerg2131");

$mysql = new mysqli('localhost', 'root', '', 'register-bd');
$result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `pass` = '$pass'");
$user = $result->fetch_assoc();
if(count($user) == 0) {
    echo "Such a user was not found";
    exit();
}
    setcookie('user', $user['name'], time() + 3600, "/");


    $mysql->close();

    header('Location: /contacts.php');
?>