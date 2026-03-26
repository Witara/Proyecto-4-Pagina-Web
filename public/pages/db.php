<?php
// Configuración de parámetros
define('DB_HOST', '127.0.0.1'); // Usa IP para evitar latencia de resolución de nombre
define('DB_USER', 'root');      // Usuario de MySQL Workbench
define('DB_PASS', 'stucom');    // Tu contraseña de MySQL
define('DB_NAME', 'oficina');   // Nombre de la base de datos
define('DB_PORT', 3306);        // Puerto por defecto

// Habilitar el reporte de errores de mysqli para debugging
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    // Inicializar conexión
    $conexion = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);

    // Establecer el conjunto de caracteres a UTF-8 para evitar errores de tildes
    $conexion->set_charset("utf8mb4");

} catch (mysqli_sql_exception $e) {
    // En producción, no mostrar el mensaje $e->getMessage() al usuario final
    die("Error crítico de conexión: " . $e->getMessage());
}
?>