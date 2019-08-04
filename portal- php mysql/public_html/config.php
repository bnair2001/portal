<?php
$servername = "shareddb-h.hosting.stackcp.net";
$username = "exclusiveaccess-3333ea4b";
$password = "euo8yfb5f9";

$link = mysqli_connect($servername, $username, $username, $password);


if (!$link) {
    echo "Connection failed: " . mysqli_connect_error();
}
echo "Connected successfully";
?>



