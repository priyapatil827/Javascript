//Module=01 (Q.1).
//Define a class named Rectangle with private attributes length and width. 
//Implement public member functions to set and get the values of these attributes.
//Include a method to calculate the area of the rectangle. 
//Create an object of the Rectangle class and demonstrate the functionality of the implemented methods.

class rectangle //create a rectangle name class.
{
    #length; // create a private attribute length.
    #width; //create a private attribute width.

    set(length,width)// create method set with parameter (length,width) is passed to it.
    {
        this.#length=length;//assign the private value of local variable to global variable with (this.) keyword.
        this.#width=width;// assign the private value of local variable to global variable with (this.) keyword.
    }

    get()//create method get.
    {
        document.writeln("Length is :",this.#length+"<br>");//print the message length of rectangle.
        document.writeln("Width is :",this.#width+"<br>");//print the message width of rectangle.
    }

    calculateArea()//create method calculateArea.
    {
        document.writeln("Area of the reactangle :",this.#length*this.#width+"<br>");//print the message Area of the rectangle.
    }
}

const Rectangle =  new rectangle();//create a new object Reactangle using rectangle class.
Rectangle.set(2,4);//object with method set with length and width of rectangle.
Rectangle.get();//object with method get.
Rectangle.calculateArea();//object with calculateArea.