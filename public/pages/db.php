<?php
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'oficina');
define('DB_PORT', 3306);

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conexion = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
    $conexion->set_charset("utf8mb4");

} catch (mysqli_sql_exception $e) {
    die("Error crítico de conexión: " . $e->getMessage());
}
?>