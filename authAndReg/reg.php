<?php

$login = $_POST['login'];
$name = $_POST['name'];
$pass = $_POST['pass'];

if(mb_strlen($login) < 5 || mb_strlen($login) > 20) {
    echo "Login must be more than 5 or less than 20 characters";
    exit();
} else if (mb_strlen($name) < 3 || mb_strlen($name) > 20) {
    echo "Name must be more than 3 or less than 20 characters";
    exit();
} else if (mb_strlen($pass) < 6 || mb_strlen($name) > 30) {
    echo "Password must be more than 6 or less than 30 characters";
    exit();
}
$pass = md5($pass."erjgergjerg2131");

$mysql = new mysqli('localhost', 'root', '', 'register-bd');
$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`)
VALUES('$login', '$pass', '$name')");

$mysql->close();

header('Location: /contacts.php');

?>
