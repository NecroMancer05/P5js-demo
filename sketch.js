let numbers = [];
let count = 1;
let sequence = [];
let index = 0;

let arcs = [];

let biggest = 0;

class Arc {
  constructor(start, end, dir) {
    this.start = start;
    this.dir = dir;
    this.end = end;
  }

  show(){
    let diameter = abs(this.end - this.start);
    let x = (this.end + this.start) /2;

    stroke(255);
    noFill();

    if (this.dir == 0) {
      arc(x, height / 2, diameter, diameter, 0, PI);
    }else{
      arc(x, height / 2, diameter, diameter, PI, 0);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  numbers[index] = true;

  sequence.push(index);
}

function step(){

  let next = index - count;

  if (next < 0 || numbers[next]) {

    next = index + count;
  }
  numbers[next] = true;
  sequence.push(next);


  let a = new Arc(index, next, count % 2);
  arcs.push(a);

  index = next;

  if (index > biggest) {

    biggest = index
  }
  count++;
}

function draw() {
  step();
  translate(0 , height / 2);
  scale(width / biggest);
  background(0);

  for(let a of arcs){
    a.show();
  }
}
