<?php
/* Displays user information and some useful messages */
session_start();

// Check if user is logged in using the session variable
if ( $_SESSION['logged_in'] != 1 ) {
  $_SESSION['message'] = "You must log in before viewing your profile page!";
  header("location: error.php");    
}
else {
    // Makes it easier to read
    $first_name = $_SESSION['first_name'];
    $last_name = $_SESSION['last_name'];
    $email = $_SESSION['email'];
    $active = $_SESSION['active'];
}
?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Welcome <?= $first_name.' '.$last_name ?></title>
  <?php include 'css/css.html'; ?>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<style>
body { padding: 30px; background-color: black; }
form { display: block; margin: 20px auto; background: #fffa02; border-radius: 10px; padding: 15px }

.progress { position:relative; width:400px; border: 1px solid #ddd; padding: 1px; border-radius: 3px; }
.bar { background-color: #B4F5B4; width:0%; height:20px; border-radius: 3px; }
.percent { position:absolute; display:inline-block; top:3px; left:48%; }
  h3 {
    color: white;
}
</style>
</head>

<body>
  <div class="form">

          <h1>Welcome</h1>
          
          <p>
          <?php 
     
          // Display message about account verification link only once
          if ( isset($_SESSION['message']) )
          {
              echo $_SESSION['message'];
              
              // Don't annoy the user with more messages upon page refresh
              unset( $_SESSION['message'] );
          }
          
          ?>
          </p>
          
          <?php
          
          // Keep reminding the user this account is not active, until they activate
          if ( !$active ){
              echo
              '<p>                     
              
              </p>
              <div class="info">
              Account is unverified, please confirm your email by clicking
              on the email link!
              </div>';
          }
          
          ?>
          
          <h2><?php echo $first_name.' '.$last_name; ?></h2>
          <p><?= $email ?></p>
          
    <a href="logout.php"><button class="button button-block" name="logout"/>Log Out</a>

    </div>
    
<h3>Image Upload</h3>
	
    <form method="post" enctype="multipart/form-data" name="formUploadFile">
        <input type="file" name="files[]" multiple="multiple"><br>
        Description: <input type="text" name="desc">
        <input type="submit" value="English" name="btnSubmiteng">
      <input type="submit" value="Physics" name="btnSubmitphy">
      <input type="submit" value="Chemistry" name="btnSubmitche">
      <input type="submit" value="Maths" name="btnSubmitmat">
      <input type="submit" value="Computer Science" name="btnSubmitcsc ">
    </form>
    
    <div class="progress">
        <div class="bar"></div >
        <div class="percent">0%</div >
    </div>
    
    <div id="status"></div>
    <?php
			if(isset($_POST["btnSubmiteng"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpeg","jpg","png","gif");
				$bytes = 51200;
				$KB = 51200;
				$totalBytes = $bytes * $KB;
				$UploadFolder = "../gallery/English";
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
						echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
            
            
            
            
            if(isset($_POST["btnSubmitphy"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpeg","jpg","png","gif");
				$bytes = 51200;
				$KB = 51200;
				$totalBytes = $bytes * $KB;
				$UploadFolder = "../gallery/Physics";
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
						echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
            
            
            
            
            if(isset($_POST["btnSubmitche"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpeg","jpg","png","gif");
				$bytes = 51200;
				$KB = 51200;
				$totalBytes = $bytes * $KB;
				$UploadFolder = "../gallery/Chemistry";
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
						echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
            
            
            
            
            
            
            
            
            if(isset($_POST["btnSubmitmat"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpeg","jpg","png","gif");
				$bytes = 51200;
				$KB = 51200;
				$totalBytes = $bytes * $KB;
				$UploadFolder = "../gallery/Maths";
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
						echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
            
            
            
            
            if(isset($_POST["btnSubmitcsc"]))
			{
				$errors = array();
				$uploadedFiles = array();
				$extension = array("jpeg","jpg","png","gif");
				$bytes = 51200;
				$KB = 51200;
				$totalBytes = $bytes * $KB;
				$UploadFolder = "../gallery/csc";
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
						echo "</ul><br/>";
						
						echo count($uploadedFiles)." file(s) are successfully uploaded.";
					}								
				}
				else{
					echo "Please, Select file(s) to upload.";
				}
			}
		?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.js"></script>
<script src="http://malsup.github.com/jquery.form.js"></script>
<script>
(function() {
    
var bar = $('.bar');
var percent = $('.percent');
var status = $('#status');
   
$('form').ajaxForm({
    beforeSend: function() {
        status.empty();
        var percentVal = '0%';
        bar.width(percentVal)
        percent.html(percentVal);
    },
    uploadProgress: function(event, position, total, percentComplete) {
        var percentVal = percentComplete + '%';
        bar.width(percentVal)
        percent.html(percentVal);
		//console.log(percentVal, position, total);
    },
    success: function() {
        var percentVal = '100%';
        bar.width(percentVal)
        percent.html(percentVal);
    },
	complete: function(xhr) {
		status.html(xhr.responseText);
	}
}); 

})();       
</script>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
<script type="text/javascript">
_uacct = "UA-850242-2";
urchinTracker();
</script>

              

<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="js/index.js"></script>
</body>
</html>