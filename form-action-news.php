<?php

//Dados vindos do formulario
$nomeremetente = $_POST['name'];
$emailremetente = "contato@ablab.com.br";
$telefone = $_POST['tel'];
$mensagem = "Novo pedido de contato";
$assunto = 'Contato Pela Nova Landing Page - Ligar';

//Emails de destino
$emaildestinatario = 'contato@institutomaxilofacial.com.br; '; // Digite seu e-mail aqui, lembrando que o e-mail deve estar em seu servidor web
$emailablab = 'giovanna@ablab.com.br';


/* Montando a mensagem a ser enviada no corpo do e-mail. */
$mensagemHTML = '<P>FORMULARIO PREENCHIDO NO SITE</P>
    <p><b>Nome:</b> ' . $nomeremetente . '
    <p><b>E-Mail:</b> ' . $emailremetente . '
    <p><b>Telefone:</b> ' . $telefone . '
    <p><b>Mensagem:</b> ' . $mensagem . '</p>
    <hr>';
// O remetente deve ser um e-mail do seu domÃ­nio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $emailremetente\r\n"; // remetente
$headers .= "Bcc: $emailablab \r\n"; // return-path
$headers .= "Return-Path: $emaildestinatario \r\n"; // return-path

$envio = mail($emaildestinatario, $assunto, $mensagemHTML, $headers);
if ($envio) {
    echo "1";
//    $connect = mysqli_connect('localhost', 'root', 'root', 'instit_form');
//    $query = "INSERT INTO leads VALUES (null,'".$nomeremetente."','".$emailremetente."','".$telefone."','".$mensagem."',null);";
//    $result = mysqli_query($connect, $query);
//    mysqli_close($connect);
} else {
    echo '2';
}