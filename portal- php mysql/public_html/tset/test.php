


<?php
//$files = array_filter($_FILES['upload']['name']); something like that to be used before processing files.
// Count # of uploaded files in array
if(isset($_POST["submit"]))
{
    $total = count($_FILES['upload']['name']);

    // Loop through each file
    for($i=0; $i<$total; $i++) {
      //Get the temp file path
      $tmpFilePath = $_FILES['upload']['tmp_name'][$i];

      //Make sure we have a filepath
      if ($tmpFilePath != ""){
        //Setup our new file path
        $newFilePath = "./uploads/" . $_FILES['upload']['name'][$i];

        //Upload the file into the temp dir
        if(move_uploaded_file($tmpFilePath, $newFilePath)) {

         echo"suc";
        }
          else{
              echo"fail";
          }
      }
    }
}






?>
<form method='post'>
    <input name="upload[]" type="file" multiple="multiple" />
    <input type="submit" value="submit" name="submit">
</form>

