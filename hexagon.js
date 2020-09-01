// Hex math defined here: http://blog.ruslans.com/2011/02/hexagonal-grid-math.html
var number = new Array("-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5");

function HexagonGrid(canvasId, radius) {
    var i= 0;
    this.radius = radius;

    this.height = Math.sqrt(3) * radius;
    this.width = 2 * radius;
    this.side = (3 / 2) * radius;

    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');

    this.canvasOriginX = 0;
    this.canvasOriginY = 0;
    this.id = i++;
    
    this.canvas.addEventListener("mousedown", this.clickEvent.bind(this), false);
    
};


/*HexagonGrid.prototype.drawHexGrid = function (rows, cols, originX, originY) {
    this.canvasOriginX = originX;
    this.canvasOriginY = originY;
    
    var currentHexX;
    var currentHexY;
    

    var offsetColumn = false;

    for (var col = 0; col < cols; col++) {
        for (var row = 0; row < rows; row++) {

            if (!offsetColumn) {
                currentHexX = (col * this.side) + originX;
                currentHexY = (row * this.height) + originY;
            } else {
                currentHexX = col * this.side + originX;
                currentHexY = (row * this.height) + originY + (this.height * 0.5);
            }


            this.drawHex(currentHexX, currentHexY, "#ddd", debugText);
        }
        offsetColumn = !offsetColumn;
    }
};*/

HexagonGrid.prototype.drawHexAtColRow = function(column, row) {
    var drawy = column % 2 == 0 ? (row * this.height) + this.canvasOriginY : (row * this.height) + this.canvasOriginY + (this.height / 2);
    var drawx = (column * this.side) + this.canvasOriginX;
    
    var color = "#FFFFFF";
    var text = number[Math.floor(Math.random() * 11) + 0 ];
    this.drawHex(drawx, drawy, color, text);
};

HexagonGrid.prototype.drawHex = function(x0, y0, fillColor, text) {
    this.context.strokeStyle = "#000";
    this.context.beginPath();
    this.context.moveTo(x0 + this.width - this.side, y0);
    this.context.lineTo(x0 + this.side, y0);
    this.context.lineTo(x0 + this.width, y0 + (this.height / 2));
    this.context.lineTo(x0 + this.side, y0 + this.height);
    this.context.lineTo(x0 + this.width - this.side, y0 + this.height);
    this.context.lineTo(x0, y0 + (this.height / 2));

    if (fillColor) {
        this.context.fillStyle = fillColor;
        this.context.fill();
    }

    this.context.closePath();
    this.context.stroke();

    if (text) {
        this.context.font = "8px";
        this.context.fillStyle = "#000";
        this.context.fillText(text, x0 + (this.width / 2) - (this.width/4), y0 + (this.height - 5));
    }
};

//Recusivly step up to the body to calculate canvas offset.
HexagonGrid.prototype.getRelativeCanvasOffset = function() {
	var x = 0, y = 0;
	var layoutElement = this.canvas;
    if (layoutElement.offsetParent) {
        do {
            x += layoutElement.offsetLeft;
            y += layoutElement.offsetTop;
        } while (layoutElement = layoutElement.offsetParent);
        
        return { x: x, y: y };
    }
}

//Uses a grid overlay algorithm to determine hexagon location
//Left edge of grid has a test to acuratly determin correct hex
HexagonGrid.prototype.getSelectedTile = function(mouseX, mouseY) {

	var offSet = this.getRelativeCanvasOffset();

    mouseX -= offSet.x;
    mouseY -= offSet.y;

    var column = Math.floor((mouseX) / this.side);
    var row = Math.floor(
        column % 2 == 0
            ? Math.floor((mouseY) / this.height)
            : Math.floor(((mouseY + (this.height * 0.5)) / this.height)) - 1);


    //Test if on left side of frame            
    if (mouseX > (column * this.side) && mouseX < (column * this.side) + this.width - this.side) {


        //Now test which of the two triangles we are in 
        //Top left triangle points
        var p1 = new Object();
        p1.x = column * this.side;
        p1.y = column % 2 == 0
            ? row * this.height
            : (row * this.height) + (this.height / 2);

        var p2 = new Object();
        p2.x = p1.x;
        p2.y = p1.y + (this.height / 2);

        var p3 = new Object();
        p3.x = p1.x + this.width - this.side;
        p3.y = p1.y;

        var mousePoint = new Object();
        mousePoint.x = mouseX;
        mousePoint.y = mouseY;

        if (this.isPointInTriangle(mousePoint, p1, p2, p3)) {
            column--;

            if (column % 2 != 0) {
                row--;
            }
        }

        //Bottom left triangle points
        var p4 = new Object();
        p4 = p2;

        var p5 = new Object();
        p5.x = p4.x;
        p5.y = p4.y + (this.height / 2);

        var p6 = new Object();
        p6.x = p5.x + (this.width - this.side);
        p6.y = p5.y;

        if (this.isPointInTriangle(mousePoint, p4, p5, p6)) {
            column--;

            if (column % 2 == 0) {
                row++;
            }
        }
    }

    return  { row: row, column: column };
};


HexagonGrid.prototype.sign = function(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
};

//TODO: Replace with optimized barycentric coordinate method
HexagonGrid.prototype.isPointInTriangle = function isPointInTriangle(pt, v1, v2, v3) {
    var b1, b2, b3;

    b1 = this.sign(pt, v1, v2) < 0.0;
    b2 = this.sign(pt, v2, v3) < 0.0;
    b3 = this.sign(pt, v3, v1) < 0.0;

    return ((b1 == b2) && (b2 == b3));
};

HexagonGrid.prototype.clickEvent = function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    var localX = mouseX - this.canvasOriginX;
    var localY = mouseY - this.canvasOriginY;

    var tile = this.getSelectedTile(localX, localY);
    if (((tile.row >= 5 && tile.row <=10) && tile.column == 0) || ((tile.row >= 4 && tile.row <=11) && tile.column == 1) ||
        ((tile.row >= 4 && tile.row <=11) && tile.column == 2) || ((tile.row >= 3 && tile.row <=11) && tile.column == 3) ||
        ((tile.row >= 3 && tile.row <=12) && tile.column == 4) || ((tile.row >= 2 && tile.row <=12) && tile.column == 5) ||
        ((tile.row >= 2 && tile.row <=13) && tile.column == 6) || ((tile.row >= 2 && tile.row <=12) && tile.column == 7) ||
        ((tile.row >= 3 && tile.row <=12) && tile.column == 8) || ((tile.row >= 3 && tile.row <=11) && tile.column == 9) ||
        ((tile.row >= 4 && tile.row <=11) && tile.column == 10) || ((tile.row >= 4 && tile.row <=10) && tile.column == 11) ||
        ((tile.row >= 5 && tile.row <=10) && tile.column == 12)) {

        
        var drawy = tile.column % 2 == 0 ? (tile.row * this.height) + this.canvasOriginY + 6 : (tile.row * this.height) + this.canvasOriginY + 6 + (this.height / 2);
        var drawx = (tile.column * this.side) + this.canvasOriginX;

       if(confirm("voulez-vous vraiment séléctionner cette case ?")){
            //this.drawHex(drawx, drawy - 6, "#660033");
            this.drawCircle(drawx +27, drawy +18);
        }
    } 
    
};


HexagonGrid.prototype.drawCircle = function(x, y){

      this.context.beginPath();
      this.context.arc(x, y, 7, 0, 2 * Math.PI, false);
      this.context.fillStyle = 'blue';
      this.context.fill();
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#003300';
}

function main(){
    var hexagonGrid = new HexagonGrid("HexCanvas", 25);
    var ecart = 5;
    var chiffre = 10;
    var compteur = 0;
    var flag = true;
    var flag2 = true;
    var compteur13 = 0;
    for (var x = 0 ; x <= 12 ; x++) { 
        if (( compteur13 == 1) || chiffre < 13 ){
            for (var y = ( chiffre - ecart ) ; y <= chiffre  ; y++ ){
                hexagonGrid.drawHexAtColRow(x,y,"#FF0000");
            }
            ecart == 11 ? flag = false : null;
            flag ? ecart++ : ecart--;
        } else {
            x--;
        }
        chiffre >= 13 ? flag2 = false : null;
        flag2 ? ( compteur == 1 ? chiffre++ : null) : ( (compteur == 1) ?  chiffre-- : null );
        compteur < 1 ? compteur++ : compteur = 0; 
        chiffre == 13 ? compteur13++ : null;
    } 

    console.log(hexagonGrid);
}
