<?php
session_start();
if(!isset($_SESSION['id'])){
	$query_string = $_SERVER['REQUEST_URI'];
	$query_string = preg_replace(
		'@[^a-z]@', 
		'', 
		$query_string
	);
	if(
		$query_string != 'audio' &&
		$query_string != 'settings'
	)
		$query_string = 'profile';
	header('Location: ../?login='.$query_string);
}