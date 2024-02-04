<!DOCTYPE html>
<html lang="en">
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>Bingo</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" href="css/style.css">
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
   <!-- body -->
   <body class="main-layout">
      <!-- loader  -->
      <div class="loader_bg">
         <div class="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>
      <div class="wrapper">
         <!-- end loader -->
         <div class="sidebar">
            <!-- Sidebar  -->
            <nav id="sidebar">
               <div id="dismiss">
                  <i class="fa fa-arrow-left"></i>
               </div>
               <ul class="list-unstyled components">
                  <li class="active">
                     <a href="index.html">Home</a>
                  </li>
                  <li>
                     <a href="index.html">Acerca de</a>
                  </li>
                  <li>
                     <a href="index.html">Juega y gana</a>
                  </li>
                  <li>
                     <a href="index.html">Our customer</a>
                  </li>
                  <li>
                     <a href="index.html">Contactenos</a>
                  </li>
               </ul>
            </nav>
         </div>
         <div id="content">
            <!-- header -->
            <header>
               <!-- header inner -->
               <div class="head_top">
                  <div class="header">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-3 logo_section">
                              <div class="full">
                                 <div class="center-desk">
                                    <div class="logo">
                                       <a href="index.html"><img src="images/logo.png" alt="#"></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-9">
                              <div class="right_header_info">
                                 <ul>
                                    <li class="menu_iconb">
                                       <a href="form_login.php">Login</a>
                                    </li>
                                    <li>
                                       <button type="button" id="sidebarCollapse">
                                       <img src="images/menu_icon.png" alt="#" />
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <!-- end header inner -->
            <!-- end header -->
            <section class="slider_section">
               <div class="banner_main">
                  
         <!-- reqeste -->
         <div id="contact" class="reqeste">
            <div class="container-fluid mt-2">
               <div class="row">
                  <div class="col-md-12">
                     <div class="titlepage">
                        <h2>Registrate y Gana</h2>
                        <span></span>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-6 offset-md-3">
                  <form action="./procesos/proceso_Crear_login.php" method="post" enctype="multipart/form-data" id="cochang" class="form_main">
                        <div class="row">
                           <div class="col-md-12">
                           <input class="form_control" placeholder="Ingresa tu Nombre de usuario" type="text" id="username" name="username" required>
                           </div>
                           <div class="col-md-12">
                              <input class="form_control" placeholder="Ingresa tu Numero de telefono" type="text" id="phone" name="phone" required>
                           </div>
                           <div class="col-md-12">
                              <input class="form_control" placeholder="Ingresa tu Correo Electronico" type="email" id="email" name="email" required>
                           </div>
                           <div class="col-md-12">
                              <input class="form_control" placeholder="Ingresa tu Cedula" type="text" id="cedula" name="cedula" required>
                           </div>
                           <div class="col-md-12">
                              <input class="form_control" placeholder="Ingresa tu contraseña" type="password" id="password" name="password" required>
                           </div>
                           <div class="col-md-12">
                              <button class="send_btn">Registrar</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <!-- end reqeste -->
         <!--  footer -->
         <footer>
            <div class="footer">
               <div class="copyright">
                  <div class="container">
                     <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
                  </div>
               </div>
            </div>
         </footer>
         <!-- end footer -->
                  </div>
               </div>
            </section>
         <!-- Categories -->

      </div>
      <div class="overlay"></div>
      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <!-- sidebar -->
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
       <script src="js/custom.js"></script>
      <script type="text/javascript">
         $(document).ready(function() {
             $("#sidebar").mCustomScrollbar({
                 theme: "minimal"
             });
         
             $('#dismiss, .overlay').on('click', function() {
                 $('#sidebar').removeClass('active');
                 $('.overlay').removeClass('active');
             });
         
             $('#sidebarCollapse').on('click', function() {
                 $('#sidebar').addClass('active');
                 $('.overlay').addClass('active');
                 $('.collapse.in').toggleClass('in');
                 $('a[aria-expanded=true]').attr('aria-expanded', 'false');
             });
         });
      </script>
      <script>
         $(document).ready(function() {
             $(".fancybox").fancybox({
                 openEffect: "none",
                 closeEffect: "none"
             });
         
             $(".zoom").hover(function() {
         
                 $(this).addClass('transition');
             }, function() {
         
                 $(this).removeClass('transition');
             });
         });
      </script>


<script src="./js/anuncio.js"></script>
      <div id="anuncios-container"></div>
     
   </body>
</html>

