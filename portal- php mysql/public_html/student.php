<?php 
include("exclusive/dbconnect.php");
session_start();
 $_SESSION["subject"] = "Maths";
if(isset($_POST["maths"])){
    $_SESSION["subject"] = "Maths";
    
}
if(isset($_POST["physics"])){
    $_SESSION["subject"] = "Physics";
   
}
if(isset($_POST["chemistry"])){
    $_SESSION["subject"] = "Chemistry";
}
if(isset($_POST["csc"])){
    $_SESSION["subject"] = "csc";
    
}
if(isset($_POST["english"])){
    $_SESSION["subject"] = "English";
    
}
if(isset($_POST["rem"])){
    $_SESSION["subject"] = "reminders";
}
if(isset($_POST["mex"])){
    $_SESSION["subject"] = "mex";
}
if(isset($_POST["wall"])){
    $_SESSION["subject"] = "wall";
}

if(isset($_POST["logbut"]))
{
    $_SESSION["userSession"] = "";
}

if(isset($_POST["addbut"]))
{
    $date=$_POST["date"];
    $title=$_POST["title"];
    $cont=$_POST["xar"];
    $error="";
    if($date==""){
        $error .= "Please enter a date!";
    }
     else if($title==""){
        $error .= "Please enter a title!";
    }
     else if($cont==""){
        $error .= $cont;
    }
    else{
        $query="INSERT INTO `reminders`(date, title, description)
VALUES ('".$date."', '".$title."', '".$cont."')";
        mysqli_query($DBcon, $query);
           
        
            
    
                     }
}
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="logoedited.ico" />
    
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "e5b28ca7-eba4-466f-84f4-37a609905281",
    });
  });
</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
    <style type="text/css">
        body{
            margin:0;
            padding:0;
            /* The image used */
    background-image: url("/webimages/bg.svg");

    /* Set a specific height */
    height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
        }
        #ongoing{
            position:relative;
            top:-45px;
        }
        .wrappe{
           
            margin:0 auto;
        }
        .btgr{
            margin:1px;
            display:block;
        }
        .dawg{
            margin-top:5px;
        }
        #whitenav{
            margin:0;
            
        }
        #blacknav{
            position:relative;
            top:-24px;
        }
        .wids{
            width:250px;
            text-align: center;
        }
        @media (min-width: 576px) { 
            .card{
                width: 500px;
                margin-top:15px;
                
            }
             .bar{
          text-align: center;
        }
            
        }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) { 
                     .card{
                width: 700px;
                margin-top:15px;
            }
            .bar{
           text-align: center;
        }
            
            
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) {
             .card{
                width: 900px;
                margin-top:10px;
            }
             .bar{
          text-align: center;
        }
           
            
        }

        // Extra large devices (large desktops, 1200px and up)
        @media (min-width: 1200px) {
             .card{
                width: 1000px;
                margin-top:10px;
                 
            }
             .bar{
          text-align: center;
        }
            
        }
      </style>

    <title>Student page</title>
  </head>
  <body >
    <nav class="navbar  navbar-light bg-light " id="white nav" style="background-color:#e8e8e8;">

    <span class="navbar-brand mb-0 h1"><i class="fas fa-cog fa-spin" style="font-size:3em; color:skyblue;"></i>The Portal</span>
      
        <!-- Button trigger modal -->
        <?php
        if($_SESSION["userSession"] == "")
        {
            echo'<button type="submit" class="btn btn-outline-secondary my-2 my-sm-0" >
              <a href="http://homeworkportal-com.stackstaging.com/exclusive/index_tempclose.php">Login</a>
            </button>';
        }
        else{
             echo'
             <form method="post">
             <button type="submit" name="logbut" class="btn btn-outline-secondary my-2 my-sm-0" >
             Logout
            </button>
            </form>';
        }

      
      ?>
      </nav>
   
<nav class="navbar navbar-dark bg-dark" id="blacknav">
                
                
                    <div class="wrappe" >
                      
                <form class="form-inline text-center bar" role="form" method="post" >
                  <button class="btn btn-secondary dropdown-toggle btgr" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Subjects
                  </button>
                    <div class="dropdown">
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <button type="submit" class="btn btn-secondary btgr"  name="maths" class = "subs">Maths</button>
                     <button type="submit" class="btn btn-secondary btgr"  name="csc" class = "subs">Computer science</button>
                    <button type="submit" class="btn btn-secondary btgr"  name="chemistry" class = "subs">Chemistry</button>
                    <button type="submit" class="btn btn-secondary btgr" name="physics" class = "subs">Physics</button>
                   
                    <button type="submit" class="btn btn-secondary btgr" name = "english" class = "subs">English</button>
                 </div>  
                    </div>
                    <a href="http://homeworkportal-com.stackstaging.com/chat/index.php"><input type="button" class="btn btn-secondary btgr" value="Chat"></a>
                    <button type="submit" class="btn btn-secondary btgr" name = "wall" class = "subs">Wall</button> 
                    <button type="submit" class="btn btn-secondary btgr" name = "rem" class = "subs">Reminders</button>
                  <a href="thewall/"><input type="button" class="btn btn-secondary btgr" value="Upload"></a>
                    <?php 
                       
                        if($_SESSION['userSession'] == "success")
                        
                        {
                            if($_COOKIE["tps"] == "HorseFireAnonymous4578")
                        
                            {
                            echo' <button type="submit" class="btn btn-secondary btgr" name = "mex" class = "subs">Math-exclusive</button>';
                            }
                        }
                    
                    ?>
          
    
                
      </form>
                            
                    
                    </div>
    </nav>
          

    <div id="erroresult" class="wrappe">
      <?php
        if($error!="")
        {
            echo'<div class="alert alert-danger" role="alert">
                  "'.$error.'"
                </div>';
        }
        ?>
      
      </div>
    <div id="ongoing"  >
                  
     </div>
    <script type="text/javascript">
     $(document).ready(function () {
      $.ajax({
        url:'getdata.php',
        type:'GET',
        success: function(data) {
            var content = $('<div>').append(data).find('#content');
            $('#ongoing').html( content );
            }
        });
    });
      </script>
       <script src="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></script>
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  
  </body>
  
</html>