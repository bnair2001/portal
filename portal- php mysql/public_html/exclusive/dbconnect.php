<?php

	 $DBhost = "shareddb1e.hosting.stackcp.net";
	 $DBuser = "adbhsjadb123-2-3637ba96";
	 $DBpass = "tkonkpqmy6";
	 $DBname = "adbhsjadb123-2-3637ba96";
	 
	 $DBcon = new MySQLi($DBhost,$DBuser,$DBpass,$DBname);
    
     if ($DBcon->connect_errno) {
         die("ERROR : -> ".$DBcon->connect_error);
     }

?>
