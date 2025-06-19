//Create a Vehicle class with a method move(). Then create a Bike class that extends Vehicle. Create an object of Bike and call the move() method.

class  Vehicle
{
    move()
    {
        document.writeln("Move is");
    }
}

class Bike extends Vehicle
{

}

const v1 = new Vehicle();
v1.move();