//Create an array of Shape objects (like Circle and Square) and use a forEach() loop to print the area of each shape. 
// This demonstrates polymorphism in action.


class Shape
{
    constructor(name,area)
    {
        
        this.name=name;
        this.area=area;
    }

    displayArea()
    {
        document.writeln("Shape name :"+this.name+"<br>");
        document.writeln("Area :"+this.area+"<br>");
    }
}

class Circle extends Shape
{
    constructor(radius)
    {
        super("Circle",3.14*radius*radius);
    }
}

class Square extends Shape
{
    constructor(side)
    {
        super("Square",side*side);
    }
}



const s1 = [
    new Square(2),
    new Circle(3)
]

s1.forEach((s)=>{
    s.displayArea()
})