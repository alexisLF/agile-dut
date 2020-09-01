<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>HEXS</title>
        <style type="text/css">
            canvas { 
                border:0;
                display:block;
                margin:0 auto;
            }
        </style>
    </head>
    <body>
        <canvas id="hexmap" width="660" height="624"></canvas>
        <script src="<?php echo DEB_URL.POSITION_HEXAGONS_JS; ?>"></script>
    </body>
</html>