<?php
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'PHPMailer/PHPMailer.php';
// require 'PHPMailer/SMTP.php';
// require 'PHPMailer/Exception.php';

// if (isset($_POST['enviar'])) {
//     if (!empty($_POST['name'])
//         && !empty($_POST['email'])
//         && !empty($_POST['phone'])
//         && !empty($_POST['message'])) {
        
//         $name = $_POST['name'];
//         $email = $_POST['email'];
//         $phone = $_POST['phone'];
//         $message = $_POST['message'];
        
//         // Crear una instancia de PHPMailer
//         $mail = new PHPMailer(true);

//         try {
//             // Configurar el servidor SMTP
//             $mail->isSMTP();
//             $mail->Host = 'mail.parquepuentegrande.mx'; // Cambiar por el servidor SMTP que estés utilizando
//             $mail->SMTPAuth = true;
//             $mail->Username = 'puentediseno@parquepuentegrande.mx'; // Cambiar por tu dirección de correo
//             $mail->Password = 'Puentediseno*'; // Cambiar por tu contraseña
//             $mail->SMTPSecure = 'ssl'; // Cambiar según tu configuración
//             $mail->Port = 465; // Cambiar según tu configuración

//             // Configurar el correo remitente y destinatario
//             $mail->setFrom($email, $name);
//             $mail->addAddress('arteydiseno@grupo-vm.com.mx', 'Arte y Diseño');

//             // Configurar el contenido del correo
//             $mail->isHTML(true);
//             $mail->Subject = 'Mensaje de contacto Puente Grande';
//             $mail->Body = $message;
//             $mail->AltBody = $message;

//             // Enviar el correo
//             $mail->send();
//             header("Location: index.html");
//         } catch (Exception $e) {
//             echo "Error al enviar el correo: {$mail->ErrorInfo}";
//         }
//     }
// }
?>












