class Equation {
  constructor() {
    var degree = Math.random() >= 0.5;
    // C'est une fonction affine
    if (degree) { 
      this.degree = 1;

      this.a = Math.random() >= 0.5 ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * -4) ;
      this.b = Math.random() >= 0.5 ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * -4) ;
    } 
    //C'est une fonction du second degré
    else {
      this.degree = 2;
      this.a = Math.random() >= 0.5 ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * -4) ;
      this.b = Math.random() >= 0.5 ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * -4) ;
    }
  }

  resoudre (x,y) {
    if (this.degree == 2){
       return y == this.a * (x * x) + this.b;
    } else {
      return y == this.a * x + this.b;
    }
  }

  get getDegree() {
    return this.degree;
  }
  get getA() {
    return this.a;
  }
  get getB() {
    return this.b;
  }
  giveEquation() {
    var degree_x = this.degree == 1 ? "X" : "X^2"
    var returnStatment = "Y = ";
    if (this.a > 0 || this.a < 0) {
      if (this.a == 1){
        returnStatment += degree_x; 
      } else if ( this.a == -1 ){
        returnStatment += "-" + degree_x; 
      } else {
        returnStatment += this.a + degree_x; 
      }
    } else if (this.a == 0){
      returnStatment += " "; 
    } 

    if (this.b > 0 ){
      returnStatment += " + " + this.b;
    } else if (this.b < 0 ){
      returnStatment += " " + this.b;
    }

    if (this.a == 0 || this.b == 0){
      this.a = 1;
      this.b = 1;
      return "Y = X + 1";
    }
    return returnStatment;
  }
};


