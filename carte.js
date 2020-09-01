function cliqueSurLaCarte() {
	if (document.getElementById("nbrCartesPacket").innerHTML != 0) {
		if ($('#equationUne').text() == ""){
			$('.equationUne').css('display','block');
			document.getElementById("nbrCartesPacket").innerHTML = enleverCarte();
			var equation = new Equation();
			$('#equationUne').text(equation.giveEquation())
			$('.equationUne').css('background','#2ecc71');
			$( ".equationUne" ).draggable({ revert: true });
		}else if ($('#equationDeux').text() == "") {
			$('.equationDeux').css('display','block');
			document.getElementById("nbrCartesPacket").innerHTML = enleverCarte();
			var equation = new Equation();
			$('#equationDeux').text(equation.giveEquation());

			$('.equationDeux').css('background','#2ecc71');

			$( ".equationDeux" ).draggable({ revert: true });
		}
	}
} 

function ajouterCarteDetruit() {

	$('.packetDetruit').css('background',"#e74c3c");
	

			// <p id="nbrCartesDetruites">0</p>
}

function vider() {

	if ($('#equationUne').text() != ""){
		$('#nbrCartesDetruites').text( parseInt( parseInt($('#nbrCartesDetruites').text()) + 1));
	}
	if ($('#equationDeux').text() != ""){
		$('#nbrCartesDetruites').text( parseInt( parseInt($('#nbrCartesDetruites').text()) + 1));
	}

	$('#equationDeux').text("");
	$('.equationDeux').css('background','white');
	$('#equationUne').text("");
	$('.equationUne').css('background','white');
}

function remplir() {
	$('#nbrCartesPacket').text("12");
}

function enleverCarte() {
	var nombreCarte = document.getElementById("nbrCartesPacket").innerHTML
	if (nombreCarte > 0){
		nombreCarte--;
	}
	return nombreCarte;
}

class Equation {
	constructor() {
		this.a = Math.floor(Math.random() * 20);
		this.b = Math.floor(Math.random() * 20);
	}
	get getA() {
    	return this.a;
  	}
  	get getB() {
    	return this.b;
  	}
  	giveEquation() {
  		if (this.b > 0 ){	
  			return " Y  = " + this.a + " X  + " + this.b;
  		} else if (this.b == 0) {
  			return " Y  = " + this.a + " X ";
  		} else if (this.b < 0) {
  			return " Y  = " + this.a + " X  " + this.b;
  		} else {
  			return "Y = X";
  		}
  	}
};



$(document).ready(function() {

	$( ".col2" ).droppable({

	  	accept: ".equationUne, .equationDeux",
	  	drop: function( event, ui ) {
        $( this ).html( $(ui.draggable).text() );
        $(ui.draggable).find("#equationUne").text("");
        $(ui.draggable).find("#equationDeux").text("");
        $(ui.draggable).css('display','none');
        $( this ).droppable( "option", "disabled", true );
      }

    });
	$( ".packetDetruit" ).droppable({

	  	accept: ".equationUne, .equationDeux",
	  	drop: function( event, ui ) {
        $(ui.draggable).find("#equationUne").text("");
        $(ui.draggable).find("#equationDeux").text("");
        $(ui.draggable).css('display','none');
        var nombresCartesDetruites=$("#nbrCartesDetruites").text();
        nombresCartesDetruites++;
        $("#nbrCartesDetruites").text(nombresCartesDetruites);
      }

    });
	// $( ".equationUne" ).click(function() {
	//   var eq = $('#equationUne').text();
	//   var i=1;
	//   var x=$('#'+i).text();
	//   // alert(x);
	//   if(eq!=''){
	//   	while(x!=''){
	//   		x=$('#i').text();
	//   		i++;
	//   	}
	//   	$('#'+i).text(eq);
	//   }
});

