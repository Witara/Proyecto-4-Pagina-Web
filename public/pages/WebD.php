<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Main - Conexión a BD</title>
  <link rel="stylesheet" href="../style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
<style>
  /* Estilos para la tabla */
.tabla-moderna {
      width: 90%;
      margin: 20px auto; 
      border-collapse: collapse;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      font-family: 'Roboto', sans-serif;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  .tabla-moderna th {
      background-color: #ffcc00;
      color: black;
      padding: 12px;
      text-align: left;
      text-transform: uppercase;
  }
  .tabla-moderna td {
      padding: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .tabla-moderna tr:hover {
      background-color: rgba(255, 204, 0, 0.1);
  }
  h2 { text-align: center; color: white; margin-top: 30px; text-transform: uppercase; }

  /* Nuevo estilo para el selector */
  .selector-container {
      text-align: center;
      margin-bottom: 20px;
      z-index: 20;
      position: relative;
  }
  .select-css {
      padding: 10px 20px;
      background: #ffcc00;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
  }
</style>
</head>
<body>
  <div class="container">
    <div id="nav-placeholder"></div>

    <section class="background">
      <img src="../assets/background.png" alt="Landing" class="background-img" />
    </section>
    <div class="background-overlay"></div>
    
    <div id="overlay" class="overlay hidden"></div>
    <div id="login-form" class="form-wrapper hidden">
      <button id="close-login" class="close-btn">&times;</button>
      <h1 class="logo">Placeholder Text</h1>
      <p class="subtitle">Placeholder Text</p>

      <input type="text" id="inputField3" placeholder="Email" />
      <input type="text" id="inputField" placeholder="Username" />
      <input type="password" id="inputField2" placeholder="Password" />

      <button onclick="registerUser()" class="registerButton">Register</button>
      <p id="message" class="message"></p>
    </div>
        <h2>Datos de Empleados</h2>
    <?php 
      $tabla_seleccionada = isset($_GET['categoria']) ? $_GET['categoria'] : 'empleados';
      echo "<h2>Datos de: " . ucfirst($tabla_seleccionada) . "</h2>";
    ?>

    <div class="selector-container">
        <form method="GET" action="">
            <select name="categoria" class="select-css" onchange="this.form.submit()">
                <option value="empleados" <?php if($tabla_seleccionada == 'empleados') echo 'selected'; ?>>Empleados</option>
                <option value="empleados.bcn" <?php if($tabla_seleccionada == 'empleados.bcn') echo 'selected'; ?>>Empleados de Barcelona</option>
                <option value="proyectos" <?php if($tabla_seleccionada == 'proyectos') echo 'selected'; ?>>Proyectos</option>
                <option value="nominas" <?php if($tabla_seleccionada == 'nominas') echo 'selected'; ?>>Nóminas</option>
                <option value="nominas.total" <?php if($tabla_seleccionada == 'nominas.total') echo 'selected'; ?>>Nóminas: Total Pagado</option>
                <option value="nominas.IRPF" <?php if($tabla_seleccionada == 'nominas.IRPF') echo 'selected'; ?>>IRPF Ultimo Mes</option>
                <option value="nominas.SS" <?php if($tabla_seleccionada == 'nominas.SS') echo 'selected'; ?>>SS Pagado Este Año</option>
            </select>
        </form>
    </div>

    <?php  
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    require_once 'db.php'; 

    try {
        if ($tabla_seleccionada == 'empleados.bcn') {
            $consulta = $conexion->query("SELECT * FROM empleados WHERE lugar_nac = 'Barcelona'"); 

        } else if ($tabla_seleccionada == 'empleados') {
            $consulta = $conexion->query("SELECT * FROM empleados ORDER BY ape1 ASC");

        } else if ($tabla_seleccionada == 'nominas.total') {
            $consulta = $conexion->query("SELECT COALESCE(SUM(Salario_neto), 0) AS Total_Pagado_Historico FROM nominas");

        } else if ($tabla_seleccionada == 'nominas.IRPF') {
            $consulta = $conexion->query("SELECT SUM(IRPF) AS Total_IRPF_Ultimo_Mes_Registrado FROM nominas WHERE DATE_FORMAT(fecha, '%Y-%m') = (SELECT MAX(DATE_FORMAT(fecha, '%Y-%m')) FROM nominas)");

        } else if ($tabla_seleccionada == 'nominas.SS') {
            $consulta = $conexion->query("SELECT SUM(deducciones_SS + Aportaciones_SS) AS Total_SS_2024 FROM nominas WHERE YEAR(fecha) = 2024");

        } else {
            // Ejecución por defecto para tablas base sin subcategorías
            $consulta = $conexion->query("SELECT * FROM $tabla_seleccionada");
        }
        
        if ($consulta->num_rows > 0) {
            echo '<table class="tabla-moderna"><thead><tr>';
            
            // LÓGICA INTERACTIVA: Obtenemos los nombres de las columnas automáticamente
            $campos = $consulta->fetch_fields();
            foreach ($campos as $campo) {
                echo '<th>' . ucfirst($campo->name) . '</th>';
            }
            echo '</tr></thead><tbody>';

            // Mostramos los datos
            while($registro = $consulta->fetch_assoc()) { 
                echo '<tr>';
                foreach ($registro as $valor) {
                    echo '<td>' . $valor . '</td>';
                }
                echo '</tr>'; 
            }
            echo '</tbody></table>';
        } else {
            echo "<p style='text-align:center; color:white;'>La tabla está vacía.</p>";
        }
    } catch (mysqli_sql_exception $e) {
        echo "<p style='text-align:center; color:red;'>Error: " . $e->getMessage() . "</p>";
    }
    $conexion->close();
    ?>

  </div>
  <script src="../script.js"></script>
</body>
</html>