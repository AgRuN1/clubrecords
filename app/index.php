<?php
session_start();
if(!isset($_SESSION['id'])){
require 'views/main.php';
}else{
	header('Location: ./profile/');
}