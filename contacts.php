<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Contacts</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script async src="js/main.js"></script>
</head>

<body>
<a class="back_to_top">&#9650;</a>

<?php
    if(isset($_COOKIE['user']) == ""){
?>
<div class="signUp">
    <button id="backSignUp">Back</button>
    <div class="formSignUp">
        <form action="authAndReg/reg.php" method="post">
            <p>Sign Up</p><br>
            <input class="inputSignUp" type="text" name="login" id="login" placeholder="Enter your username"><br>
            <input class="inputSignUp" type="text" name="name" id="name" placeholder="Enter your name"><br>
            <input class="inputSignUp" type="password" name="pass" id="pass" placeholder="Come up with a password"><br>
            <div class="buttonform"><button type="submit">Sign Up</button><button type="button" id="logIn">Log In</button></div>
        </form>
    </div>
</div>
<div class="logIn">
    <button id="backLogIn">Back</button>
    <div class="formLogIn">
        <form action="authAndReg/auth.php" method="post">
            <p>Log In</p><br>
            <input class="inputLogIn" type="text" name="login" id="login" placeholder="Enter your username"><br>
            <input class="inputLogIn" type="password" name="pass" id="pass" placeholder="Come up with a password"><br>
            <button type="submit">Submit</button><br>
        </form>
    </div>
</div>
<?php } ?>
<!--if($_COOKIE['user'] == ''):-->
<header class="headerContacts">
    <div class="header_menu">
        <div class="header_name" id="me"><a>D.Vilnyanskiy</a></div>
        <nav>
            <div class="top_nav" id="my_top_nav">
                <a href="index.php">MAIN</a>
                <a href="myCompany.php" id="my_company">MYCOMPANY</a>
                <a href="media.php" id="media">MEDIA</a>
                <a href="contacts.php" id="contacts">CONTACTS</a>
                <button href="#" id="signUp">
                    <?php  if(isset($_COOKIE['user']) == ""){ ?>
                        Sign Up
                    <?php } else { ?><?=$_COOKIE['user']?>
                    <a href="exit.php">Exit</a>
                    <?php }; ?>
                </button>
                <a href="" id="menu" class="icon">&#9776;</a>
            </div>
        </nav>
    </div>
    <!--<div class="welcome" id="welcomeid">
        <p id="w"></p>
    </div>-->
</header>

<main class="mainContactsHtml" id="scrollBy">
    <div class="divMainContacts">
        <div class="mainContacts" id="height">
            <p id="p">Contacts</p>
            <div class="grid">
                <div class="ContactsName">
                    <p>Here you can view any of my contacts and written or call me.</p>
                    <form method="post" action="check.php">
                        <p>Your can write to me there:<br></p>
                        <input type="email" name="email" id="inputEmail" placeholder="Email" required>
                        <input type="text" name="message" id="inputWriteToMe" placeholder="Your text" required>
                        <button type="submit" name="send" id="submit">Send</button>
                    </form>
                </div>
                <div class="gridContacts">
                    <a class="boxContacts" href="https://vk.com/vilnyansky"> <img src="images/icons/vk.png" alt="VKontakte"> </a>
                    <a class="boxContacts" href="https://www.instagram.com/d_vilnyansky/"> <img src="images/icons/instagram.png" alt="Instagram"></a>
                    <a class="boxContacts" href="#"> <img src="images/icons/facebook.png" alt="Facebook"></a>
                    <a class="boxContacts" href="https://t.me/DaniilVilnyansky"> <img src="images/icons/telegram.png" alt="Telegram"></a>
                    <a class="boxContacts" href="https://api.whatsapp.com/send?phone=79221192462&Здравствуйте!"> <img src="images/icons/whatsapp.png" alt="Whatsapp"></a>
                </div>
            </div>
        </div>
        <div class="footerContacts">
            <div class="divFooterContacts">
                <p><strong>Vilnyanskiy D.G. / 2022</strong></p>
                <p>Russia, Yekaterinburg</p>

            </div>
        </div>
    </div>

</main>
<!--<footer class="footerContacts">
    <div class="divFooterContacts">
        <p>Vilnyanskiy D.G. / 2022</p>

    </div>
</footer>-->

<script src="js/main.js"></script>
</body>

</html>