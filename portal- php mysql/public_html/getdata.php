<?php 
session_start();
include("exclusive/dbconnect.php");
?>
 <html>
  <head></head>
  <link rel="shortcut icon" href="logoedited.ico" />
  <body>
  
<div id='content' class="container" >
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
            <a class="card-text" href="'.$directory.$file.'" download>Download</a>
            </div>
            </div>
            ';
        }
        else 
        {
           
            $direct =$directory . $file . '/';
            $fi = scandir ($direct);
            $firstFile= $direct . $fi[2];// because [0] = "." [1] = ".." 
           
            $_POST[$direct];

            echo'
            <div class="card rounded mx-auto d-block card">
            <img class="card-img-top" src="'.$firstFile.'" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">'.$subject.'</h5>
            <p class="card-text">'.$file.'</p>
            <a href="demo.php?fnmae=' .$direct. '"><input type="button" class="btn btn-info" value="More"></a>
            <a href="zip.php?name='.$direct.'&title='.$file.'"><input type="submit" class="btn btn-info" value="Download"></a>
            </div>
            </div>
            ';
        }
    }
    
    }
    else if($_SESSION["subject"] == "reminders"){
        echo
            '<button class="btn btn-info container" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Add
          </button>
          <div class="collapse" id="collapseExample">
          <div class="card card-body container">
           <form method="post">
              <div class="form-group">
                <label for="ddate">Due Date:</label>
                <input type="date" class="form-control" name="date" id="ddate" placeholder="Enter DueDate">
                
              </div>
              
              <div class="form-group">
                <label for="c">Content</label>
                <input type="text" class="form-control" name="xar" id="c" placeholder="Content">
              </div>
              
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" name="title" id="title" placeholder="Title">
              </div>
              
              
              
              <button type="submit" name="addbut" class="btn btn-info">Submit</button>
            </form>
          </div>
        </div>
          ';
        
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
     echo' <form method="post" enctype="multipart/form-data" name="formUploadFile">
        <input type="file" name="files[]" multiple="multiple"><br>
        Description: <input type="text" name="desc">
        <input type="submit" value="Submit" name="btnSubmiteng">
      
    </form>';
     
     
     
     
     
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
    if($_SESSION["subject"] == "mex"){
        $directory = "matex/mex";
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

</div>
</body>
</html>


<?php
			if(isset($_POST["btnSubmiteng"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpeg","jpg","png","gif");
				$bytes = 51200;
				$KB = 51200;
				$totalBytes = $bytes * $KB;
				$UploadFolder = "gallery/thewall";
                $desc=$_GET["desc"];
				
				$counter = 0;
				
				foreach($_FILES["files"]["tmp_name"] as $key=>$tmp_name){
					$temp = $_FILES["files"]["tmp_name"][$key];
					$name = $_FILES["files"]["name"][$key];
					
					if(empty($temp))
					{
						break;
					}
					
					$counter++;
					$UploadOk = true;
					
					if($_FILES["files"]["size"][$key] > $totalBytes)
					{
						$UploadOk = false;
						array_push($errors, $name." file size is larger than the 50 MB.");
					}
					
					$ext = pathinfo($name, PATHINFO_EXTENSION);
					if(in_array($ext, $extension) == false){
						$UploadOk = false;
						array_push($errors, $name." is invalid file type.");
					}
					
					if(file_exists($UploadFolder."/".$name) == true){
						$UploadOk = false;
						array_push($errors, $name." file is already exist.");
					}
					
					if($UploadOk == true){
						move_uploaded_file($temp,$UploadFolder."/".$name);
						array_push($uploadedFiles, $name);
					}
				}
				
				if($counter>0){
					if(count($errors)>0)
					{
						echo "<b>Errors:</b>";
						echo "<br/><ul>";
						foreach($errors as $error)
						{
							echo "<li>".$error."</li>";
						}
						echo "</ul><br/>";
					}
					
					if(count($uploadedFiles)>0){
						echo "<b>Uploaded Files:</b>";
						echo "<br/><ul>";
						foreach($uploadedFiles as $fileName)
						{
							echo "<li>".$fileName."</li>";
						}
						//echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
      ?>