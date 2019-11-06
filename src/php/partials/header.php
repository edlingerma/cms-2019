<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=News+Cycle&display=swap" rel="stylesheet">
    <script src="index.js"></script>
    <title><?php echo $pagetitle ?></title>
</head>
<body class="<?php echo $headerclass?>">
    <header id="banner">
        <nav>
            <h1><a href=#>Alex Mayer</a></h1>
            
            <input type="checkbox" id="activate-nav">
            <label for="activate-nav" id="menu-icon">
                <!-- <img src="../img/menu.svg" alt="Menu Burger icon"> -->
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </label>
            <ul id="menu">
                <li><a id="menu-index" href=index.html>Start</a></li>
                <li><a href=#>Leistung</a></li>
                <li><a href=#>Blog</a></li>
                <li><a id="menu-about" href=about.html>Über mich</a></li>
                <li><a href=#>Kontakt</a></li>
            </ul>
        </nav>
        <h2><span class="highlight">Glänzende Ideen für leuchtende Augen</span></h2>
        <button>Angebot einholen</button>
    </header>
    <!-- <script>
    
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.'));
    
    var banner = document.getElementById('banner');
    banner.classList.add(filename);
    console.log(filename);
    </script> -->