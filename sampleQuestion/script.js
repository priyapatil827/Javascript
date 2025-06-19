//Create a Car class that has brand and model properties. Use a constructor to initialize them. 
//Create a method getDetails() that returns the full name of the car.

class Car
{
    constructor(brand,model)
    {
        this.brand=brand;
        this.model=model;
    }

    getDetails()
    {
        document.writeln("Car Brand :"+this.brand+"<br>");
        document.writeln("Car Model :"+this.model+"<br>");
        document.writeln("Full Name :"+this.brand+""+this.model+"<br>");
    }
}

const car = new Car("Toyota","Corolla");
car.getDetails();