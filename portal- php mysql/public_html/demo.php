<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script type="text/javascript" src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="../js/fresco/fresco.js"></script>
<link rel="stylesheet" type="text/css" href="../css/fresco/fresco.css" />
 <link rel="shortcut icon" href="logoedited.ico" />

<link rel="stylesheet" type="text/css" href="css/style.css" />
<meta name="robots" content="noindex,nofollow" />
    <title>THEPORTAL GALLERY&copy;</title>
    <style type="text/css">
        body{
            margin:0;
            padding: 0;
            /* The image used */
    background-image: url("./webimages/pic1.jpg");

    /* Set a specific height */
    height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    }
    </style>
  </head>
  <body>
    

    <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" ><i class="fas fa-cog fa-spin" style="font-size:3em; color:skyblue;"></i>The Portal</a>
</nav>
  <br />
  <br>
  <div class='demonstrations container'>
        
        <?php

        $directory = $_GET["fnmae"];
        
        foreach(scandir($directory) as $file)
        {
            if ('.' === $file) continue;
            if ('..' === $file) continue;
          echo "<a href='".$directory.$file."'
             class='fresco'
             data-fresco-group='example'
             data-fresco-caption='".$file."'>
            <img src='thumb.png' alt='' width='95'/>
          </a>
          ";
        }
        ?>
     


    </div>
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossorigin="anonymous"></script>
  
   
   
   
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
