<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>

<!DOCTYPE html>
<html>
<head>
	<title>Carte</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="<?php echo DEB_URL.POSITION_CARTE_JS; ?>"></script>
</head>
<body>

<!-- LES CARTES -->
	<div>
		<div class="equationUne">
			<p id="equationUne"></p>
		</div>
	</div>
	<div>
		<div class="equationDeux">
			<p id="equationDeux"></p>
		</div>
	</div>
	<div>
		<div class="packetDeCartes" onclick="cliqueSurLaCarte()"></div>
			<p id="nbrCartesPacket">12</p>
	</div>
	<div>
			<div class="packetDetruit"></div>
			<p id="nbrCartesDetruites">0</p>
	</div>


	<style type="text/css">
		.equationUne {
			border : 3px solid #2ecc71;
			width: 120px;
			border-radius: 5px;
			height: 50px;
		}

		.equationUne p {
			text-align: center;
			color : white;
		}

		.equationDeux {
			border : 3px solid #2ecc71;
			width: 120px;
			border-radius: 5px;
			height: 50px;
		}

		.equationDeux p {
			text-align: center;
			color : white;
		}

		.carte:focus {
			outline:0;
		}

		.carte {
			margin-left: 5px;
		}

		.packetDetruit {
			width: 120px;
			border-radius: 5px;
			height: 50px;
			background: white;
			border : 3px solid #e74c3c;
			margin-top: 50px;
		}

		.packetDeCartes  {
			width: 120px;
			border-radius: 5px;
			height: 50px;
			background: #2ecc71;
			border : 3px solid #2ecc71;
			margin-top: 50px;
		}



	</style>

</body>
</html>