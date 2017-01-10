<?php
require 'models/Database.php';
$user = new Database('users');
$result = $user->select();
while($row = mysqli_fetch_array($result))
echo "<p>{$row['name']}</p>";
echo '<hr>';
echo $user->getTable();
echo '<hr>';
$user->setTable('songs');
echo $user->getTable();