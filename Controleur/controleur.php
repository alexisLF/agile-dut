<?php session_start();



//define('UTILISATEUR', 'yves.lemitouard');
//define('UTILISATEUR', 'alexis.lefort');
//define('UTILISATEUR', 'colin.thorel');
//define('UTILISATEUR', 'harvey.roberts');
//define('UTILISATEUR', 'hugo.grainville');
//define('UTILISATEUR', 'jeremy.puertolas');
//define('UTILISATEUR', 'julien.pelletey');
//define('UTILISATEUR', 'louis.guillou');
//define('UTILISATEUR', 'mathis.delaunay');
//define('UTILISATEUR', 'simon.brehier');
//define('UTILISATEUR', 'projet.agile1');

//define('DEB_CHEM', '/home/users/info1/'.NOM.'/public_html/dut1818-agile1');
define('DEB_CHEM', 'C:/wamp/www/dut1818-agile1');


//define('DEB_URL', 'https://spartacus.iutc3.unicaen.fr/~'.UTILISATEUR.'/dut1818-agile1');
define('DEB_URL', '/dut1818-agile1');

define('POSITION_CONFIGURATION', '/Controleur/configuration.php');
define('POSITION_RECUP_CONNEXION', '/Controleur/recup_connexion.php');
define('POSITION_RECUP_INSCRIPTION', '/Controleur/recup_inscription.php');

define('POSITION_JQUERY', '/Modele/jquery-ui/external/jquery/jquery.js');
define('POSITION_IMG1_JQUERY', '/Modele/jquery-ui/images/ui-icons_444444_256x240.png');
define('POSITION_IMG2_JQUERY', '/Modele/jquery-ui/images/ui-icons_555555_256x240.png');
define('POSITION_IMG3_JQUERY', '/Modele/jquery-ui/images/ui-icons_777620_256x240.png');
define('POSITION_IMG4_JQUERY', '/Modele/jquery-ui/images/ui-icons_777777_256x240.png');
define('POSITION_IMG5_JQUERY', '/Modele/jquery-ui/images/ui-icons_cc0000_256x240.png');
define('POSITION_IMG6_JQUERY', '/Modele/jquery-ui/images/ui-icons_ffffff_256x240.png');

define('POSITION_JQUERY_CSS', '/Modele/jquery-ui/jquery-ui.css');
define('POSITION_JQUERY_JS', '/Modele/jquery-ui/jquery-ui.js');
define('POSITION_JQUERY_MIN_CSS', '/Modele/jquery-ui/jquery-ui.min.css');
define('POSITION_JQUERY_MIN_JS', '/Modele/jquery-ui/jquery-ui.min.js');
define('POSITION_JQUERY_STRUCTURE_CSS', '/Modele/jquery-ui/jquery-ui.structure.css');
define('POSITION_JQUERY_STRUCTURE_MIN_CSS', '/Modele/jquery-ui/jquery-ui.structure.min.css');
define('POSITION_JQUERY_THEME_CSS', '/Modele/jquery-ui/jquery-ui.theme.css');
define('POSITION_JQUERY_THEME_MIN_CSS', '/Modele/jquery-ui/jquery-ui.theme.min.css');
define('POSITION_JQUERY_PACKAGE_JSON', '/Modele/jquery-ui/package.json');


define('POSITION_CALCUL', '/Modele/calcul.js');
define('POSITION_CARTE_JS', '/Modele/carte.js');
define('POSITION_P5', '/Modele/p5.js');
define('POSITION_P5_MIN', '/Modele/p5.min.js');
define('POSITION_REGLES_CSS', '/Vue/CSS/regles.css');
define('POSITION_STYLE_CSS', '/Vue/CSS/style.css');
define('POSITION_TABLEAU_CSS', '/Vue/CSS/tableau.css');
define('POSITION_CARTE_PHP', '/Vue/carte.php');
define('POSITION_CONNEXION', '/Vue/connexion.php');
define('POSITION_HEX_PHP', '/Vue/hex.php');
define('POSITION_HEXAGON_JS', '/Vue/hexagon.js');
define('POSITION_HEXAGONS_JS', '/Vue/hexagons.js');
define('POSITION_HEXS_PHP', '/Vue/hexs.php');
define('POSITION_INDEX', '/Vue/index.php');
define('POSITION_INSCRIPTION', '/Vue/inscription.php');
define('POSITION_PARTIE', '/Vue/partie.php');
define('POSITION_REGLE_MACHINAX', '/Vue/reglemachinax.pdf');
define('POSITION_REGLES_PHP', '/Vue/regles.php');
define('POSITION_TABLEAU_PHP', '/Vue/tableau.php');




require_once(DEB_CHEM.POSITION_CONFIGURATION);

$_SESSION['BDD'] = new PDO('mysql:host=localhost;dbname=projet_agile', 'root', '');
//$_SESSION['BDD'] = new PDO('mysql:host=spartacus;charset=UTF8', 'projet_agile1', 'ei1wiRai');


?>