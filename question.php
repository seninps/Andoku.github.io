<?php

	$to = 'info@r-snack.ru';
	$subject = 'R-snack Question';
	$message = '
Имя: '.$_REQUEST['name']."<br>".'
E-mail: '.$_REQUEST['email']."<br>".'
Текст вопроса: '.$_REQUEST['message'];
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	mail($to, $subject, $message, $headers);
	
?>
