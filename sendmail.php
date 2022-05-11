<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Excepction;

require 'phpmailer/src/Exception';
require 'phpmailer/src/PHPMailer';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/phpmailer.lang-ru.php');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('info@arron.md', 'Aaron service center');
//Кому отправить
$mail->addAddress('code@arron.md');
//Тема письма
$mail->Subject = 'Заявка';

//Тело письма
$body = '<h1>Вам письмо!</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
}

$mail->Body = $body;

//Отправляем
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>