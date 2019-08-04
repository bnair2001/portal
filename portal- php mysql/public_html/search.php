<?php
$dirname = 'gallery/';
$findme  = $_POST["search"];
$dirs    = glob($dirname.'*', GLOB_ONLYDIR);
$files   = array();
foreach( $dirs as $d ) {
    $f = glob( $d .'/'. $findme );
    if( count( $f ) ) {
        $files = array_merge( $files, $f );
    }
}
if( count($files) ) {
    foreach( $files as $f ) {
        echo "<a href='{$dirname}/{$f}'>{$f}</a><br>";
    }
} else {
    echo "Nothing was found.";
    
}
?>
<html>
  <head></head>
  <body>
<form method="post">
    Search: <input type="text" name="search">
    </form>
  </body>
</html>