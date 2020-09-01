<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>


﻿<!DOCTYPE html>

<html>

<head>
<meta charset="utf-8">
<link rel="stylesheet" href="<?php echo DEB_URL.POSITION_STYLE_CSS; ?>"/>
	<title>Règles du jeu</title>
</head>

<body>
	<div class="retourAccueil"><a href="<?php echo DEB_URL.POSITION_INDEX; ?>">RETOUR</a></div>
	<h1>Règles - Machina X</h1>
	<p class="introRegles">
		Pour ce jeu de plateau, il s'agit de construire la plus longue chaîne de cases contenant les valeurs calculées à partir d'égalités du type y = ax + b ou y = ax² + b. 
	
	<div class="regles">
		</p>
		<h2>Matériel</h2>
		<p>Le jeu est composé de 44 cartes machine et d'un
		plateau en nid d'abeille de 91 cases.
		Des surligneurs de couleurs différentes sont nécessaires
		(une couleur par joueur).
		</p>

		<h2>But</h2>
		<p>Gagner des cases pour construire la plus longue chaîne
		possible.</p>

		<h2>Nombre de joueurs</h2>
		<p>2 ou 3 joueurs, en comptant une IA potentielle ou 2 équipes de deux joueurs.</p> 

		<h2>Mécanisme</h2>

			<h3>Génération d'un nombre</h3>
			<p>Le nombre entouré sur le plateau est
			utilisé comme valeur de x dans la
			formule de la carte machine pour
			calculer y (on dit qu'on a généré y) ou
			comme valeur de y pour calculer x (on
			dit qu'on a généré x).</p>

			<h3>Gain d'une case</h3>
			<p>Tout nombre généré permet d'entourer ce
			même nombre dans une seule case libre. </p>

		<h2>Déroulement d'une partie</h2>
			<p> - Pour démarrer, chaque joueur (ou équipe) pioche 2
				cartes puis entoure de sa couleur un nombre de son
				choix dans une case du plateau.<br><br>
				- Les joueurs jouent simultanément. Il n'y a pas de notion de tour.<br><br>
				- Le joueur utilise son nombre
				entouré et l'une de ses deux cartes machine
				pour essayer de gagner une nouvelle case.<br>
				<p>- Si le joueur trouve une case à gagner :<br>
					. il colorie entièrement son nombre entouré ;<br>
					. il entoure le nombre de sa case gagnée ; <br>
					. il pose la carte machine utilisée en défausse, face visible ;<br>
					. il termine son tour en piochant une nouvelle carte.<br></p>
				- Si le joueur ne trouve pas de case à gagner :<br>
					. il peut, s'il le veut, se défausser d'une carte et en piocher une autre ;<br>
					. il passe son tour.<br><br>
				-Au lieu de piocher, il est possible d'échanger sa carte défaussée avec la carte visible de la défausse.<br><br>
				- La partie s'arrête lorsque la pioche ne contient plus de carte, ou lorsque le jeu est bloqué, ou lorsqu'une boucle est réalisée.<br><br>
			</p>
	</div>
</body>
</html>

