<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>


<!DOCTYPE html>
<html>
	<head>
            <meta charset="UTF-8">
		<title>Inscription</title>
		<link rel="stylesheet" type="text/css" href="<?php echo DEB_URL.POSITION_STYLE_CSS; ?>">
	</head>
	<body>
	<div class="inscription">
            <form action="<?php echo DEB_URL.POSITION_RECUP_INSCRIPTION; ?>" method="post">
			<table style="color:white;">
				<tr>
					<td>Saisissez votre nom : </td>
					<td><input type="text" name="nom" class="nom"></td>
				</tr>
				<tr>
					<td>Saisissez votre prénom : </td>
					<td><input type="text" name="prenom" class="prenom"></td>
				</tr>
				<tr>
					<td>Saisissez votre date de naissance : </td>
					<td><input type="date" name="datenaissance" class="datenaissance"></td>
				</tr>
				<tr>
					<td>Saisissez votre pseudonyme :</td>
					<td><input type="pseudonyme" name="pseudo" placeholder="Ex : Zozor" class="pseudo" required="required"></td>
				</tr>
				<tr>
					<td>Saisissez votre adresse mail : </td>
					<td><input type="email" name="adresse_mail" class="mail" placeholder="Machinax@gmail.com" required="required"></td>
				</tr>
				<tr>
					<td>Saisissez votre mot de passe : </td>
					<td><input type="password" name="passwd" class="mdp" required="required"></td>
				</tr>
				<tr>
					<td>Saisissez une nouvelle fois votre mot de passe : </td>
					<td><input type="password" name="passwd2" class="mdp" required="required"></td>
				</tr>
				<tr>
					<td>Choisissez votre catégorie :</td>
					<td><SELECT name="categ" size="1">
						<OPTION>Élève
						<OPTION>Enseignant
					</SELECT></td>
				</tr>
                                <tr>
					<td>Choisissez la classe :</td>
					<td><SELECT name="classe" size="1">
						<OPTION>3emeC
						<OPTION>Seconde11
					</SELECT></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name="" value="Valider"></td>
				</tr>
			</table>
		</form>
	</body>
</html>