
<?php
require('fpdf.php');
$imagesDirectory = $_GET["name"];

if(is_dir($imagesDirectory))
{
	
  	foreach(scandir($imagesDirectory, 0) as $file)
        {
          
            if ('.' === $file) continue;
            if ('..' === $file) continue;
          	
         	$pdf = new FPDF();
			$pdf->AddPage();
			$pdf->Image($imagesDirectory.$file,60,30,90,0, 'JPG');
            
        }
    	$pdf->Output();
		
		//$imgFileType = pathinfo($image,PATHINFO_EXTENSION);
		
		//if(($imgFileType == 'jpg') || ($imgFileType == 'png'))
		//{
			//$pdf = new FPDF();
			//$pdf->AddPage();
			//$pdf->Image('".$imagesDirectory."/".$image."',60,30,90,0, 'JPG');
			
		//}
    
  
	
    
 
}
else{
  echo "error";
}
?>