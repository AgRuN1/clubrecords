<?php
$title = 'CLub Records';
$description = 'Музыкальный портал с наикрутейшей музыкой на любой вкус';
require 'html/head.html';
$redirect = !isset($_GET['login']) ? '' : $_GET['login'];
require 'html/main.html';
$script = 'main';
require 'html/script.html';