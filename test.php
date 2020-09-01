<?php try {
	$bdd = new PDO('mysql:host=spartacus;charset=UTF8', 'projet_agile1', 'ei1wiRai');
    } catch ( PDOException $e ) {
	new PDOException("Error  : ".$e->getMessage());
	print("Error : ".$e->getMessage()) ;
    }
?>