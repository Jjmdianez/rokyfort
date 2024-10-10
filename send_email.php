<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $carta = $_POST['carta'];
    $precio = $_POST['precio'];
    $referencia = $_POST['referencia'];

    $to = "jjmdianez@gmail.com";
    $subject = "Nuevo Pedido: $carta";
    $message = "Nombre: $nombre\nCorreo: $correo\nCarta: $carta\nPrecio: $precio\nReferencia: $referencia";
    $headers = "From: $correo";

    if (mail($to, $subject, $message, $headers)) {
        echo "Pedido enviado correctamente.";
    } else {
        echo "Error al enviar el pedido.";
    }
}
?>
