<?php 
if(isset($_POST["subbut"]))
{
    if($_COOKIE["tps"]=="")
    {
        if($_COOKIE["topsecret"]=="HorseFireAnonymous4578")
            {
                setcookie("topsecret", "", time()-3600);

                setcookie("tps", "HorseFireAnonymous4578", time() + (1 * 365 * 24 * 60 * 60),'/');
                echo"<h1>Your account has been activated</h1>";

            }
    } 
    else{
        
        echo"<h1>Your account has aldready been activated</h1>";
    }
}

?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <style type='text/css'>
        
      .wrappe {
            text-align: center;
        }

        
      </style>
    <title>Activation</title>
  </head>
  <body>
     <form method="post">
     <div class="wrappe">
      <button type="submit" id ="but" class="btn btn-success" name='subbut'>Activate</button>
         </div>
      </form>
      
      <div class="wrappe">
          <p>Please activate your account by hitting the button above.
          -The portal team&copy;
          </p>
      </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>