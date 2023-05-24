<?php
// файлы php miller
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$title = "Тема письма";
$file = $_FILES['file'];

$c = true;
// формирование письма
$title = "Заголовок письма";
foreach( $_POST as $key => $value ) {
  if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color:#f8f8f8;">' ) . "
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><br>$key</br></td>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}
$body = "<table style='width: 100%;'>$body</table>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = true;


  // Настройка почты
  $mail->Host       = 'smtp.yandex.ru'; //SMTP сервера почты
  $mail->Username   = 'michael.ilchenko@yandex.ru';
  $mail->Password   = 'fsqotmompjkbkdkm';
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('michael.ilchenko@yandex.ru', 'Заявка с сайта Blanchard');// адрес самой почты и имя отправителя

  $mail->addAddress('makaryulia2296@mail.ru');// письмаолучатель письма
  $mail->addAddress('michael.ilchenko@yandex.ru');// письмаолучатель письма


  $mail->isHTML(true);
  $mail->Subject   = $title;
  $mail->Body   = $body;

  $mail->send();

} catch (Exception $e) {
$status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
