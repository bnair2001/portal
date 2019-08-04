<!DOCTYPE html>
<html>
<head>
<title>Upload</title>
<!-------Including jQuery from Google ------>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="script.js"></script>
<!------- Including CSS File ------>
<link rel="stylesheet" type="text/css" href="style.css">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </head>
<body>
  <div class="container">
<div id="maindiv">
<div id="formdiv">
<h2>Image Upload</h2>
<form enctype="multipart/form-data" action="" method="post">
<div id="filediv"><input name="file[]" type="file" id="file"/></div>
<input type="button" id="add_more" class="upload" value="Add More Files"/>
<input type="submit" value="Upload File" name="submit" id="upload" class="upload"/>
</form>
<!------- Including PHP Script here ------>
<?php include "upload.php"; ?>
</div>
</div>
  </div>
</body>
</html>