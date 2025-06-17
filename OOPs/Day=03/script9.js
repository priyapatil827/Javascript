//Module=04 (Q.2).
//Define a class `Car` with private attributes `model`, `year`, and `speed`. 
//Encapsulate these attributes using appropriate access specifiers.
//Implement public member functions to set and get the values of these attributes. 
//Demonstrate encapsulation by accessing these attributes through the member functions.
 
class Car // create a class name car.
{
    #model;//create a private attribute model.
    #year;//create a private attribute year.
    #speed;//create a private attribute speed.

    set(model,year,speed)//create a method set with parameter (model,year,speed) passed to it.
    {
        this.#model=model;//assign the value to local variable model to global private variable model with (this.) keyword.//this keyword is used for global variable.
        this.#year=year;//assign the value to local variable year to global private variable year with (this.) keyword.//this keyword is used for global variable.
        this.#speed=speed;//assign the value to local variable speed to global private variable speed with (this.) keyword.//this keyword is used for global variable.
    }

    get()//create a method get
    {
        document.writeln("<b>Model :</b>",this.#model);//print car model.
        document.writeln("<br>");//move the content to the next line.
        document.writeln("<b>Year :</b>",this.#year);//print car year.
        document.writeln("<br>");//move the content to the next line.
        document.writeln("<b>Speed :</b>",this.#speed);//print car speed.
        document.writeln("<br>");//move the content to the next line.
    }
}

const car = new Car();//create a new object car using the class Car

car.set("Hyundai i20",2022,"170kmph");//call set method to set value.(name,year,speed).
car.get();//call get method to display car data.
