<?php
class Database{
	private $con;
	private $table;
	private function connect(){
		require 'data.php';
		$con = mysqli_connect(
			DATABASE_HOST,
			DATABASE_USER,
			DATABASE_PASSWORD
		) or die('Ошибка подключения');
		mysqli_select_db($con,DATABASE_NAME);
		mysqli_set_charset($con,'utf8');
		$this->con = $con;
	}
	function setTable($newtable){
		$this->table = $newtable;
	}
	function getTable(){
		return $this->table;
	}
	function __destruct(){
		mysqli_close($this->con);
	}
	function __construct($table){
		$this->table = $table;
		$this->connect();
	}
	function select($where='',$select='*'){
		if($where!='')
			$where = ' where '.$where;
		$query = 'select '
			.$select.
			' from '
			.$this->table.
			$where;
		$result = mysqli_query($this->con,$query) or die('Ошибка запроса');
		if(!$result || 
			mysqli_num_rows($result) == 0)
			return false;
		return $result;
	}
	function update($set,$where){
		if(isset($where))
			$where = ' where '.$where;
		$query = 'update '
			.$this->table.
			' set '
			.$set.
			$where;
		mysqli_query($this->con,$query) 
		or die('Ошибка запроса');
	}
	function insert($query){
		
	}
}