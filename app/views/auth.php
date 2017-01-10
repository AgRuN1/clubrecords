<?php
if(
	isset($_POST['login']) 
		&& 
	isset($_POST['pass'])
){
	require '../models/User.class.php';
	$login = $_POST['login'];
	$pass = $_POST['pass'];
	$user = new User();
	$id = $user->authUser($login,$pass);
	if($id !== false){
		$_SESSION['id'] = $id;
		header('Location: ../'.$redirect);
	}
}
$title = 'Ошибка входа';
$description = '';
require 'html/head.html';
require 'html/auth.html';
$script = 'checkAuth';
require 'html/script.html';