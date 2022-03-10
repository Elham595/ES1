class Shape {
    x;
    y;
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    calcArea(){
        return 0;
    }
    circum(){
        return 0;
    }

    log(){
        console.log(`x=${this.x},y=${this.y},area=${this.calcArea()}`)
    }
}
/////////////////////////////////////rectangel
class rectangle extends Shape{
    width;
    height;
    constructor(x,y,width,height){
        super(x,y);
        this.width=width;
        this.height=height;
    }
    calcArea(){
        return this.width*this.height;
    }
    circum(){
        return (this.width+this.height)*2;
    }
    log(){
        console.log(`width=${this.width},height=${this.height},area=${this.calcArea()},circum=${this.circum()}`)
    }
}
///////////////////////////////////square
class square extends rectangle{
    length;
    constructor(x,y,length){
        super(x,y);
        this.length=length
    }
    calcArea(){
        return this.length*this.length;
    }
    circum(){
        return (this.length+this.length)*2;
    }
    log(){
        console.log(`length=${this.length},area=${this.calcArea()},circum=${this.circum()}`)
    }
}
///////////////////////////////////oval
class oval extends Shape{
    width;
    height;
    constructor(x,y,width,height){
        super(x,y);
        this.width=width;
        this.height=height;
    }
    calcArea(){
        return this.width*this.height*3.14;
    }
    circum(){
        return (this.width+this.height)*3.14;
    }
    log(){
        console.log(`width=${this.width},height=${this.height},area=${this.calcArea()},circum=${this.circum()}`)
    }
}
///////////////////////////////////circle
class circle extends oval{
    diameter;
    constructor(x,y,diameter){
        super(x,y);
        this.diameter=diameter;
    }
    calcArea(){
        return this.diameter*this.diameter*3.14;
    }
    circum(){
        return this.diameter*3.14*2;
    }
    log(){
        console.log(`diameter=${this.diameter},area=${this.calcArea()},circum=${this.circum()}`)
    }
}
/////////////////////////////////////////////////////////////
/****obj from rectangle****/
console.log("********Rectangle********");
let rect = new rectangle(10,10,10,5);
         console.log(rect.calcArea());
          console.log(  rect.circum());
        console.log(rect.log());

/****obj from square****/
console.log("********Square********");
let square1 = new square(10,10,5);
    console.log(square1.calcArea());
    console.log(  square1.circum());
     console.log(square1.log());

/****obj from oval****/
console.log("********Oval********");
let oval1 = new oval(10,10,10,5);
         console.log(oval1.calcArea());
          console.log(  oval1.circum());
        console.log(oval1.log());

/****obj from circle****/ 
console.log("********Circle********");
let circ = new circle(10,10,5);
    console.log(circ.calcArea());
    console.log(  circ.circum());
    console.log(circ.log());