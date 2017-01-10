<?php
// include('../models/getId.php');
// $user = new getId($_SESSION['id']);
$title = 'Профиль';
$description = '';
require 'html/head.html';
require 'html/header.html';
?>
<section class="container">
<aside class="alert alert-info"><strong>Приветствуем вас на Club Record, <em></em>.</strong></aside>
<?php
// if($user->result['grants'] > 1)
echo '<aside class="alert alert-info"><strong>Поздравляем, вы успешно получили права администратора.</strong></aside>';
?>
</section>
<?php
	$script = '';
	require 'html/script.html';
?>