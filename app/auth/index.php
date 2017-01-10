<?php
session_start();
$redirect = $_POST['redirect'];
if(
	$redirect != 'audio' &&
	$redirect != 'settings'
)
	$redirect = 'profile';
if(isset($_SESSION['id']))
	header('Location: ../'.$redirect);
require '../views/auth.php';