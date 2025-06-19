// /Create a Shape class with a method area(). Then create Circle and Square classes that extend Shape and implement their own area() logic.

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

const s1 = new Circle(2);
s1.displayArea();