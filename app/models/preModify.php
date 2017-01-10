<?php
class PreModify{
	static function checkPass($pass){
		if(
			preg_match('@^[A-Za-z0-9\_\.\$\-\!]{6,20}$@',
			$pass)
		)
			return true;
		else
			return false;
	}
	static function checkCorrectLogin($login){
		if(
			preg_match('@^[A-Za-z0-9]{4,20}$@',
			$login))
			return true;
		else
			return false;
	}
	static function modifyPass($pass){
		$pass = trim($pass);
		if(!static::checkPass($pass))
			return false;
		$salt=mcrypt_create_iv(25);
		$pass=password_hash(
			$pass,
			PASSWORD_BCRYPT,
			['salt'=>$salt]
		);
		return $pass;
	}
}