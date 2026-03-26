<?php
$host = "localhost";
$user = "root";
$pass = ""; // Por defecto en XAMPP está vacío
$db   = "oficina";

$conexion = mysqli_connect($host, $user, $pass, $db);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
// echo "¡Conexión exitosa!"; 
?>