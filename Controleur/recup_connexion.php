<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>


<!DOCTYPE html>

<html lang="fr">
    
    <head>
        <meta charset="utf-8">
        <title>Vérification de la connexion</title>
    </head>
    
    <body>

<?php

    try {
	$bdd = new PDO('mysql:host=localhost;dbname=projet_agile', 'root', '');
    } catch ( PDOException $e ) {
	new PDOException("Error  : ".$e->getMessage());
	print("Error : ".$e->getMessage()) ;
    }
    if(isset($_POST['Adresse_mail'])){
        $flag= utilisateurExiste();
        if(isset($_POST['passwd']) && $flag){
            $flag1= mdpCorrect();
            if($flag1){
                echo 'Connexion realisee avec succes !<br>';
            }
            else{
                echo 'Votre mot de passe n\'est pas correct !<br>';
            }
        }
        else{
            echo 'Un problème est survenu lors de l\'envoi du formulaire ou l\'utilisateur est inexistant !';
        }
    }

    
    function utilisateurExiste(){
        $bdd = new PDO('mysql:host=localhost;dbname=projet_agile', 'root', '');
     $resultat = $bdd->prepare("select adresse_mail from utilisateur");
      $resultat->execute();
      while($donnees = $resultat->fetch()){
          if($donnees[0]==$_POST['Adresse_mail']){
              return true;
          }
      }   
      return false;
    }
    
    
    function mdpCorrect(){
     $bdd = new PDO('mysql:host=localhost;dbname=projet_agile', 'root', '');
     $resultat = $bdd->prepare("select mdp from utilisateur where adresse_mail='".$_POST['Adresse_mail']."'");
     $resultat->execute();
     while($donnees = $resultat->fetch()){
          if($donnees[0]==$_POST['passwd']){
              return true;
          }
      }
      return false;
    }
    
?>
    </body>
 </html>
 
 <?php //header('location:index.php'); ?>