<!DOCTYPE html>
<html>
	<head>
		<title>Connexion</title>
		<meta charset "UTF-8">
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<h1 id="titreConnexion">Bienvenue sur Machina_X</h1>
		<div id="connexionDiv"> 

			<form action="recup_connexion.php" method="post">

					<input type="text" name="Adresse_mail" class="mail" placeholder="email">

					<input type="password" name="passwd" class="mdp" placeholder="Mot de passe">

					<input type="submit" name="" value="Se connecter">
					<input type="button" class="buttonInscrption" onclick="location.href='inscription.php';" value="Inscription" />
			</form>
		</div>
		<style type="text/css">
			
		
		</style>
	</body>
</html>