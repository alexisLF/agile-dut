<?php
    if(!isset($_POST['BDD'])){
        require_once('../Controleur/controleur.php');
    }
?>



<?php

    if(isset($_POST['nom'])){
        
    }
    if(isset($_POST['prenom'])){
        
    }
    if(isset($_POST['datenaissance'])){
        
    }
    if(isset($_POST['pseudo'])){
        
    }
    if(isset($_POST['adresse_mail'])){
        
    }
    if(isset($_POST['passwd'])){
        
    }
    if(isset($_POST['passwd2'])){
        
    }
    if(isset($_POST['categ'])){
        
    }
    if(isset($_POST['classe'])){
        
    }
    
    $bdd = new PDO('mysql:host=localhost;dbname=projet_agile', 'root', '');
    $bdd->prepare("insert into utilisateur values (1, '".$_POST['nom']."', '".$_¨POST['prenom']."', '".$_¨POST['datenaissance']."', '".$_¨POST['pseudo']."'"
            . ", '".$_¨POST['adresse_mail']."', '".$_¨POST['passwd']."', '".$_¨POST['passwd2']."', '".$_¨POST['categ']."', '".$_¨POST['classe']."')"
            );
    $bdd->execute();

?>