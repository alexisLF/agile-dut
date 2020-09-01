<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>


<!DOCTYPE html>
<html lang="fr" class="index">
  <head>
  	<link rel="stylesheet" href="<?php echo DEB_URL.POSITION_STYLE_CSS; ?>"/>
    <meta charset="utf-8">
	<title>Machina X</title>
  </head>

	 <body >
		 <h1 class="titreDuJeu">Machina X</h1>
		 <div class="menu">
		 	<div class="boutonMenu"> 
		 		<a href="<?php echo DEB_URL.POSITION_HEX_PHP; ?>">NOUVELLE PARTIE</a><br />
			</div>
			<div class="boutonMenu"> 
				<a href="<?php echo DEB_URL.POSITION_REGLES_PHP; ?>">RÈGLES</a><br />
			</div>	
			<div class="boutonMenu"> 
				<a href="<?php echo DEB_URL.POSITION_CONNEXION; ?>">DÉCONNEXION</a><br />
		 	</div>
		 </div>
	 </body>
</html>
