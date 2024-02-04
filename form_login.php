<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario CSS</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/anuncio.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- fevicon -->
      <link rel="icon" href="images/fevicon.png" type="image/gif" />
      <!-- Scrollbar Custom CSS -->
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
      <!-- Tweaks for older IEs-->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->

</head>

<body>

    <div class="contenedor-formulario contenedor">
        <div class="imagen-formulario">
        </div>

        <form action="./procesos/proceso_login.php" method="post" class="formulario">
            <div class="texto-formulario">
                <article>
                <img src="./images/logo.png" alt="logo" class="logo">
                </article>
                <p>Inicia sesión con tu cuenta</p>
            </div>

<br>
            <div class="user-input-box">
                <input placeholder="Ingresa tu nombre" type="text" id="username" name="username" required>
            </div>

            <div class="user-input-box">
                <input placeholder="Ingresa tu contraseña" type="password" id="contraseña" name="password" required>
            </div>


            <div class="password-olvidada">
                <!--<a href="#">¿Olvidaste tu contraseña?</a>-->
            </div>
            <div class="col-sm-12">
                <input class="send_btn" type="submit" value="Login">
            </div>

            <div class="password-olvidada">
                <a href="form_crear_user.php">Crear tu cuenta</a>
            </div>
        </form>
    </div>
    <script src="./js/anuncio.js"></script>
      <div id="anuncios-container"></div>

</body>

</html>