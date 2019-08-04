<?php
    $directory = 'gallery/';

    if (! is_dir($directory)) {
        exit('Invalid diretory path');
    }

    $files = array();

    foreach (scandir($directory) as $file) {
        if ('.' === $file) continue;
        if ('..' === $file) continue;

        $files[] = $file;
    }

    foreach ($files as $image){
        echo "<img src='gallery/".$image."'>";
    }  

?>