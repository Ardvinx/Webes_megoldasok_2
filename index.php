<?php

if(isset($_GET["redirect"]) && isset($_GET["delay"])){
    header("Refresh: ".$_GET["delay"]."; url=https://".$_GET["redirect"]);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="Style.css">
</head>
<body  >
    <div class="container">
       <div class="forms">
          <div class="form login">
             <center><span class="title">Login</span> </center>
             <form method="post" action="login.php">
                <div class="input-field">
                    <input type="email" name="uname" placeholder="e-mail">
                </div>
                <div class="input-field">
                    <input type="password" required="" placeholder="password" name="passwd">
                 </div>
                 <div class="input-field button">
                    <input type="submit" value="Login" <?php if(isset($_GET["Secret"])){ echo 'style=background-color:'.$_GET["Secret"].';"'; } ?> >
                </div>
             </form>
         <center><h3 class="text-center message"><?php if(isset($_GET["response"])){ echo $_GET["response"]; } ?></h3></center>
         </div>
        </div>  
       </div> 
    </div>
    <canvas id="canvas"></canvas>
</body>
</html>
<script src="script.js"></script>




