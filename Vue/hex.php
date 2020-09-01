<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>


<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="<?php echo DEB_URL.POSITION_STYLE_CSS; ?>"/>
        <meta charset="utf-8">
        <title>HEX</title>
            <script src="<?php echo DEB_URL.POSITION_HEXAGON_JS; ?>"></script>

        <style type="text/css">
            canvas { 
                border:0;
                display:block;
                margin:0 auto;
            }
        </style>
    </head>
    <body>
        <div class="retourAccueil"><a href="<?php echo DEB_URL.POSITION_INDEX; ?>">RETOUR</a></div>
        <canvas id="HexCanvas" width="1000" height="700"></canvas>
    <script>
        main();

        
        //hexagonGrid.drawHexGrid(7, 10, 50, 50, true);
    </script>
    </body>
</html>