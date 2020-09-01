<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Connexion</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="<?php echo DEB_URL.POSITION_STYLE_CSS; ?>">
	</head>
	<body>

		<h1 id="titreConnexion">Bienvenue sur Machina_X</h1>

		<br /><br /><br />

		<div id="connexionDiv"> 
			<form action="<?php echo DEB_URL.POSITION_RECUP_CONNEXION; ?>" method="post">
				<table>
					<tr>
						<td style="color:white;">Adresse mail : </td>
						<td><input type="mail" name="Adresse_mail" class="mail"></td>
					</tr>
					<tr>
						<td style="color:white;">Mot de passe : </td>
						<td><input type="password" name="passwd" class="mdp"></td>
					</tr>
					<tr>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td><input type="submit" name="" value="Se connecter"></td>
					</tr>
					<tr>
						<td></td>
						<td><a href="<?php echo DEB_URL.POSITION_INSCRIPTION; ?>">Créer un Compte</a></td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>