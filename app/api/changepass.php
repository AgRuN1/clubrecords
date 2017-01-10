<?php
header('Content-Type: text/html; charset=utf-8');
if(
	isset($_GET['newpass']) &&
	isset($_GET['oldpass'])
){
	require '../contorllers/checkSession.php';
	$id = $_SESSION['id'];
	$newpass = $_GET['newpass'];
	$oldpass = $_GET['oldpass'];
	require '../models/User.class.php';
	$user = new User();
	if($user->getUserById($id) === false)
		die('Ошибка сессии');
	if(password_verify(
		$oldpass,
		$user->getPassword()
		)
	){
		$result = 
		$user->changePassword($id,$newpass);
		if($result === false){
			die('Ошибка запроса');
		}else{
			die('1');
		}
	}else{
		die('Неправильный пароль');
	}
}
echo 'Неизвестная ошибка';
