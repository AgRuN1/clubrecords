<?php
include('../models/User.class.php');
$user = new User();
$id = $user->getUserById($_SESSION['id']);
if($id === false)
	die('Error');
$name = $user->getName();
$title = $name;
$description = '';
require 'html/head.html';
require 'html/header.html';
require 'html/profile.html';
$script = 'profile';
require 'html/script.html';
?>