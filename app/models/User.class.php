<?php
require 'Database.php';
class User{
	private $name;
	private $login;
	private $password;
	private $user;
	function getUserById($id){
		$result = $this->user->select('id='.$id);
		if($result === false)
			return false;
		$row = mysqli_fetch_array($result);
		$this->name = $row['name'];
		$this->login = $row['login'];
		$this->password = $row['password'];
		return true;
	}
	function getPassword(){
		return $this->password;
	}
	function getName(){
		return $this->name;
	}
	function getLogin(){
		return $this->login;
	}
	function __construct(){
		$user = new Database('users');
		$this->user = $user;
	}
	function changePassword($id,$newpass){
		require '../models/preModify.php';
		$newpass = 
		PreModify::modifyPass($newpass);
		if($newpass === false)
			return false;
		$set = 'password="'.$newpass.'"';
		$where = 'id='.$id;
		$this->user->update($set,$where);
	}
	static function createUser($login,$pass){

	}
	function authUser($login,$pass){
		require '../models/preModify.php';
		$pass = trim($pass);
		$login = trim($login);
		if($pass === false || 
			PreModify::checkCorrectLogin($login)
			=== false)
		 	return false;
		 $where = 'login="'.$login.'"';
		 $result = $this->user->select($where);
		 if($result === false)
		 	return false;
		 $row = mysqli_fetch_array($result);
		 if(!password_verify(
		 	$pass,
		 	$row['password'])
		 )
 		 	return false;
		 return $row['id'];
	}
}