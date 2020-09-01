// Hex math defined here: http://blog.ruslans.com/2011/02/hexagonal-grid-math.html
var number = new Array("-5", "-4", "-3", "-2", "-1", "0", "1", "2", "3", "4", "5");

function HexagonGrid(canvasId, radius) {
    this.radius = radius;

    this.height = Math.sqrt(3) * radius;
    this.width = 2 * radius;
    this.side = (3 / 2) * radius;

    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');

    this.canvasOriginX = 0;
    this.canvasOriginY = 0;
    
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
    var text = number[Math.floor(Math.random() * 11) + 0 ];
    var color = "#FFFFFF";
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
            this.drawHex(drawx, drawy - 6, "#660033");
           // this.drawCircle(drawx, drawy-6);
        }
    } 
    
};

/*
function drawCircle(x, y){
	var radius=1;
	this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = "black";
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = "black";
    this.context.stroke();
}*/

function main(){
var hexagonGrid = new HexagonGrid("HexCanvas", 25);

        hexagonGrid.drawHexAtColRow(0, 5);
        hexagonGrid.drawHexAtColRow(0, 6);
        hexagonGrid.drawHexAtColRow(0, 7);
        hexagonGrid.drawHexAtColRow(0, 8);
        hexagonGrid.drawHexAtColRow(0, 9);
        hexagonGrid.drawHexAtColRow(0, 10);

        hexagonGrid.drawHexAtColRow(1, 4);
        hexagonGrid.drawHexAtColRow(1, 5);
        hexagonGrid.drawHexAtColRow(1, 6);
        hexagonGrid.drawHexAtColRow(1, 7);
        hexagonGrid.drawHexAtColRow(1, 8);
        hexagonGrid.drawHexAtColRow(1, 9);
        hexagonGrid.drawHexAtColRow(1, 10);
        

        
        hexagonGrid.drawHexAtColRow(2, 4);
        hexagonGrid.drawHexAtColRow(2, 5);
        hexagonGrid.drawHexAtColRow(2, 6);
        hexagonGrid.drawHexAtColRow(2, 7);
        hexagonGrid.drawHexAtColRow(2, 8,);
        hexagonGrid.drawHexAtColRow(2, 9);
        hexagonGrid.drawHexAtColRow(2, 10);
        hexagonGrid.drawHexAtColRow(2, 11);
        

        hexagonGrid.drawHexAtColRow(3, 3);
        hexagonGrid.drawHexAtColRow(3, 4);
        hexagonGrid.drawHexAtColRow(3, 5);
        hexagonGrid.drawHexAtColRow(3, 6);
        hexagonGrid.drawHexAtColRow(3, 7);
        hexagonGrid.drawHexAtColRow(3, 8);
        hexagonGrid.drawHexAtColRow(3, 9);
        hexagonGrid.drawHexAtColRow(3, 10);
        hexagonGrid.drawHexAtColRow(3, 11);


        hexagonGrid.drawHexAtColRow(4, 3);
        hexagonGrid.drawHexAtColRow(4, 4);
        hexagonGrid.drawHexAtColRow(4, 5);
        hexagonGrid.drawHexAtColRow(4, 6);
        hexagonGrid.drawHexAtColRow(4, 7);
        hexagonGrid.drawHexAtColRow(4, 8);
        hexagonGrid.drawHexAtColRow(4, 9);
        hexagonGrid.drawHexAtColRow(4, 10);
        hexagonGrid.drawHexAtColRow(4, 11);
        hexagonGrid.drawHexAtColRow(4, 12);


        hexagonGrid.drawHexAtColRow(5, 2);
        hexagonGrid.drawHexAtColRow(5, 3);
        hexagonGrid.drawHexAtColRow(5, 4);
        hexagonGrid.drawHexAtColRow(5, 5);
        hexagonGrid.drawHexAtColRow(5, 6);
        hexagonGrid.drawHexAtColRow(5, 7);
        hexagonGrid.drawHexAtColRow(5, 8);
        hexagonGrid.drawHexAtColRow(5, 9);
        hexagonGrid.drawHexAtColRow(5, 10);
        hexagonGrid.drawHexAtColRow(5, 11);
        hexagonGrid.drawHexAtColRow(5, 12);


        
        
        hexagonGrid.drawHexAtColRow(6, 2);
        hexagonGrid.drawHexAtColRow(6, 3);
        hexagonGrid.drawHexAtColRow(6, 4);
        hexagonGrid.drawHexAtColRow(6, 5);
        hexagonGrid.drawHexAtColRow(6, 6);
        hexagonGrid.drawHexAtColRow(6, 7);
        hexagonGrid.drawHexAtColRow(6, 8);
        hexagonGrid.drawHexAtColRow(6, 9);
        hexagonGrid.drawHexAtColRow(6, 10);
        hexagonGrid.drawHexAtColRow(6, 11);
        hexagonGrid.drawHexAtColRow(6, 12);
        hexagonGrid.drawHexAtColRow(6, 13);
        
        hexagonGrid.drawHexAtColRow(12, 5);
        hexagonGrid.drawHexAtColRow(12, 6);
        hexagonGrid.drawHexAtColRow(12, 7);
        hexagonGrid.drawHexAtColRow(12, 8);
        hexagonGrid.drawHexAtColRow(12, 9);
        hexagonGrid.drawHexAtColRow(12, 10);

        hexagonGrid.drawHexAtColRow(11, 4);
        hexagonGrid.drawHexAtColRow(11, 5);
        hexagonGrid.drawHexAtColRow(11, 6);
        hexagonGrid.drawHexAtColRow(11, 7);
        hexagonGrid.drawHexAtColRow(11, 8);
        hexagonGrid.drawHexAtColRow(11, 9);
        hexagonGrid.drawHexAtColRow(11, 10);
        

        
        hexagonGrid.drawHexAtColRow(10, 4);
        hexagonGrid.drawHexAtColRow(10, 5);
        hexagonGrid.drawHexAtColRow(10, 6);
        hexagonGrid.drawHexAtColRow(10, 7);
        hexagonGrid.drawHexAtColRow(10, 8);
        hexagonGrid.drawHexAtColRow(10, 9);
        hexagonGrid.drawHexAtColRow(10, 10);
        hexagonGrid.drawHexAtColRow(10, 11);
        

        

        hexagonGrid.drawHexAtColRow(9, 3);
        hexagonGrid.drawHexAtColRow(9, 4);
        hexagonGrid.drawHexAtColRow(9, 5);
        hexagonGrid.drawHexAtColRow(9, 6);
        hexagonGrid.drawHexAtColRow(9, 7);
        hexagonGrid.drawHexAtColRow(9, 8);
        hexagonGrid.drawHexAtColRow(9, 9);
        hexagonGrid.drawHexAtColRow(9, 10);
        hexagonGrid.drawHexAtColRow(9, 11);


        hexagonGrid.drawHexAtColRow(8, 3);
        hexagonGrid.drawHexAtColRow(8, 4);
        hexagonGrid.drawHexAtColRow(8, 5);
        hexagonGrid.drawHexAtColRow(8, 6);
        hexagonGrid.drawHexAtColRow(8, 7);
        hexagonGrid.drawHexAtColRow(8, 8);
        hexagonGrid.drawHexAtColRow(8, 9);
        hexagonGrid.drawHexAtColRow(8, 10);
        hexagonGrid.drawHexAtColRow(8, 11);
        hexagonGrid.drawHexAtColRow(8, 12);


        hexagonGrid.drawHexAtColRow(7, 2);
        hexagonGrid.drawHexAtColRow(7, 3);
        hexagonGrid.drawHexAtColRow(7, 4);
        hexagonGrid.drawHexAtColRow(7, 5);
        hexagonGrid.drawHexAtColRow(7, 6);
        hexagonGrid.drawHexAtColRow(7, 7);
        hexagonGrid.drawHexAtColRow(7, 8);
        hexagonGrid.drawHexAtColRow(7, 9);
        hexagonGrid.drawHexAtColRow(7, 10);
        hexagonGrid.drawHexAtColRow(7, 11);
        hexagonGrid.drawHexAtColRow(7, 12);
        }
