<?php
include("../procesos/conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $email = $conn->real_escape_string($_POST['email']);
    $password = $_POST['password'];
    $phone = $conn->real_escape_string($_POST['phone']);
    $cedula = $conn->real_escape_string($_POST['cedula']);

    // Encriptando la contraseña
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insertar el usuario en la base de datos sin la información de imagen
    $sql = "INSERT INTO tbl_users (username, password, email, phone, cedula) VALUES ('$username', '$hashedPassword', '$email', '$phone', '$cedula')";

    if ($conn->query($sql) === TRUE) {
        echo "Usuario registrado exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>



