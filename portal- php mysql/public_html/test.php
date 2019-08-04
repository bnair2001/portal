<?php
   
    
    if($_SESSION["subject"] != "reminders" && $_SESSION["subject"] != "mex")
    {
    
    $directory = "gallery/".$_SESSION["subject"]."/";
    $subject = $_SESSION["subject"];
    if (! is_dir($directory)) 
    {
        exit('Invalid diretory path '.$_SESSION["subject"]);
    }
       
    foreach (scandir($directory) as $file) 
    {
        if ('.' === $file) continue;
        if ('..' === $file) continue;
        $gek=$directory . $file;
      
        if(! is_dir($gek))
        {
            echo'
            <div class="card rounded mx-auto d-block card" >
            <img class="card-img-top" src="'.$directory.$file.'" alt="Card iimage" href="'.$directory.$file.'">
            <div class="card-body">
            <h5 class="card-title">'.$subject.'</h5>
            <p class="card-text">'.$file.'</p>
            </div>
            </div>
            ';
        }
        else 
        {
           
            $direct =$directory . $file . '/';
            $fi = scandir ($direct);
            $firstFile= $direct . $fi[2];// because [0] = "." [1] = ".." 
            
           
            
            echo'
            <div class="card rounded mx-auto d-block card">
            <img class="card-img-top" src="'.$firstFile.'" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">'.$subject.'</h5>
            <p class="card-text">'.$file.'</p>
            <a href="demo.php?fnmae=' .$direct. '"><input type="button" class="btn btn-info" value="More"></a>
            </div>
            </div>
            ';
        }
    }
    
    }
    else if($_SESSION["subject"] == "reminders"){
        $n=1;
         echo '<div id="accordion">';
        $query = "SELECT * FROM `reminders`";
        if($sq=mysqli_query($DBcon, $query))
        {
            while($ro=mysqli_fetch_array($sq))
            {
                echo '<div class="card rounded mx-auto d-block card">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#'.$n.'" aria-expanded="false" aria-controls="'.$n.'">'.$ro['title'].'  Due on: '.date('F d, Y', strtotime($ro['date'])).
                '</button>
              </h5>
            </div>

            <div id="'.$n.'" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">'.$ro['description'].
            '</div>
            </div>
          </div>';
                $n =$n +1;
            }
        }
        }
   else if($_SESSION["subject"] == "wall"){
        $directory = "gallery/".$_SESSION["subject"]."/";
        $subject = "Public uploads";
        if (! is_dir($directory)) {
            exit('Invalid diretory path '.$_SESSION["subject"]);
        }
        foreach (scandir($directory) as $file) 
        {
            if ('.' === $file) continue;
            if ('..' === $file) continue;
            $gek=$directory . $file;

            if(! is_dir($gek)){
                echo'
                <div class="card rounded mx-auto d-block card" >
                <img class="card-img-top" src="'.$directory.$file.'" alt="Card iimage" href="'.$directory.$file.'">
                <div class="card-body">
                <h5 class="card-title">'.$subject.'</h5>
                <p class="card-text">'.$file.'</p>
                </div>
                </div>
                ';
            }
            else {

                $direct =$directory . $file . '/';
                $fi = scandir ($direct);
                $firstFile= $direct . $fi[2];// because [0] = "." [1] = ".." 



                echo'
                <div class="card rounded mx-auto d-block card">
                <img class="card-img-top" src="'.$firstFile.'" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">'.$subject.'</h5>
                <p class="card-text">'.$file.'</p>
                <a href="demo.php?fnmae=' .$direct. '"><input type="button" class="btn btn-info" value="More"></a>
                </div>
                </div>
                ';
            }
        }
     
     }
        else{
            echo"fail".mysqli_error();
        }
    if($_SESSION["subject"] == "Maths"){
        $directory = "mathexclusive/";
        $subject = "Maths-exclusive";
        if (! is_dir($directory)) {
            exit('Invalid diretory path '.$_SESSION["subject"]);
        }
        foreach (scandir($directory) as $file) 
        {
            if ('.' === $file) continue;
            if ('..' === $file) continue;
            $gek=$directory . $file;

            if(! is_dir($gek)){
                echo'
                <div class="card rounded mx-auto d-block card" >
                <img class="card-img-top" src="'.$directory.$file.'" alt="Card iimage" href="'.$directory.$file.'">
                <div class="card-body">
                <h5 class="card-title">'.$subject.'</h5>
                <p class="card-text">'.$file.'</p>
                </div>
                </div>
                ';
            }
            else {

                $direct =$directory . $file . '/';
                $fi = scandir ($direct);
                $firstFile= $direct . $fi[2];// because [0] = "." [1] = ".." 



                echo'
                <div class="card rounded mx-auto d-block card">
                <img class="card-img-top" src="'.$firstFile.'" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">'.$subject.'</h5>
                <p class="card-text">'.$file.'</p>
                <a href="demo.php?fnmae=' .$direct. '"><input type="button" class="btn btn-info" value="More"></a>
                </div>
                </div>
                ';
            }
        }
        
    }
        
   

   
		?>