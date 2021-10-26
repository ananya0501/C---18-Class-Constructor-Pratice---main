var student1;

function setup() {
  createCanvas(400,400);
  student1 = new Student("Chiya", 13, 7);
}

function draw() 
{
  background(30);
  
  student1.show();
}

/*touches = [(23,45),(56,78), (45,67)]
touches = [(x1,y1),(x2,y2)]
touches[0]
x1,y1     23,45   

touches. length

3
position of touch in terms of coordinates
student[0]/2
student[sudent.length-1]
student[i]
i=  0
i = student.lentgth-2*/