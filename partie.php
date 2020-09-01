<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"/>
        <meta charset="utf-8">
        <title>Machina-X</title>
        <script src="hexagon.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="regle.js"></script>
        <link href="jquery-ui/jquery-ui.css" rel="stylesheet">
    </head>
    <body style="overflow: hidden">
    <button id="buttonHelp" onclick="showHelp()">AIDE</button>
        <div class="retourAccueilP"><a href="index.php">RETOUR</a></div>
        
        <div id="help">
        INSTRUCTIONS
        <br> <br>
         Choisis un nombre sur le plateau.

         <br>
         Pioche deux cartes. 

         <br>
         Glisse une carte dans le tableau. 

         <br>
         Entre les valeurs dans le tableau.

         <br>
         Valide. 

         <br>
         Clique sur une case disponible. 

         <br>
         Pioche une carte.

         <br> <br>
         BUT DU JEU

         <br> <br>
         Trouve les solutions aux equations pour remplir un maximum de cases. 

         


         
        </div>
        <canvas id="HexCanvas" width="500" height="605"></canvas>
       <div id="tableau">

           <div id="ligne1">
                <div id="case">
                   CASE
                </div>
                <div id="machine">
                   MACHINE
                </div>
                <div id="x">
                   X
               </div>
                <div id="y">
                   Y
               </div> 
           </div>
            <div class="ligne l1">
                <div class="col1">
                   
                </div>
                <div class="col2">
                   
                </div>
                <div class="col3">

                    <input type="text" name="x">
                   
               </div>
                <div class="col4">
                   <input type="text" name="y">
                   
               </div> 
           </div>
            <div class="ligne l2">
                <div class="col1">
                   
                </div>
                <div class="col2">
                   
                </div>
                <div class="col3">

                    <input type="text" name="x">
                   
               </div>
                <div class="col4">
                   <input type="text" name="y">
                   
               </div> 
           </div>
            <div class="ligne l3">
                <div class="col1">
                   
                </div>
                <div class="col2">
                   
                </div>
                <div class="col3">

                    <input type="text" name="x">
                   
               </div>
                <div class="col4">
                   <input type="text" name="y">
                   
               </div> 
           </div>
            <div class="ligne l4">
                <div class="col1">
                   
                </div>
                <div class="col2">
                   
                </div>
                <div class="col3">

                    <input type="text" name="x">
                   
               </div>
                <div class="col4">
                   <input type="text" name="y">
                   
               </div> 
           </div>
       </div>

        <div id="points1">
            0
        </div>
        <div id="points2">
            0
        </div>

<!-- LES CARTES -->
        <div id="ecranMilieu">
            <div id="contenaireBoutons">
                <button id="boutonValider" onclick="valider()">VALIDER</button> 
            </div>
            <div id="contenairesEq">
            
                <div class="contenaireEquation">
                    <div class="equationUne" style="border:1px solid #2ECC71">
                        <p id="equationUne"></p>
                    </div>
                </div>
                <div class="contenaireEquation">
                    <div class="equationDeux" style="border:1px solid #2ECC71">
                        <p id="equationDeux"></p>
                    </div>
                </div>

            </div>



        </div>

<div id="ecranBas">
    
    <div id="screen">
        
    </div>

    <div id="contenairePackets">
    <div>
        <div class="packetDeCartes" onclick="cliqueSurLaCarte()"></div>
        <p id="nbrCartesPacket">12</p>
    </div>
    <div id="contenairePacketDetruit">
        <div class="packetDetruit"></div>
        <p id="nbrCartesDetruites">0</p>
    </div> 

</div>
    </div>


    <script>
        faireDesHexa();

        
        //hexagonGrid.drawHexGrid(7, 10, 50, 50, true);
    </script>
         <script src="carte.js"> </script>
     <script src="jquery-ui/jquery-ui.js"> </script>

    
        
    </body>
</html>