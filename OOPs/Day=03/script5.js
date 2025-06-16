//Module=05(Q.1)
//Create a class `Laptop` with private attributes `name`, `price`, `processor`, and a parameterized constructor.
//Demonstrate the instantiation of objects using this constructor.

class Laptop //create a class name Laptop
{
    #name;//create a private attribute name.
    #price;//create a private attribute price.
    #processor;//create a private attribute processor.

    constructor(name,price,processor)//create constructor with parameter (name,price,processor) passed to it.
    {
        this.#name=name;//assign the value of local variable name to global private variable name with (this.) keyword.//this keyword is using for global variable.
        this.#price=price;//assign the value of local variable price to global private variable price with (this.) keyword.//this keyword is using for global variable.
        this.#processor=processor;//assign the value of local variable processor to global private variable processor with (this.) keyword.//this keyword is using for global variable.
    }

    display()//create a method display
    {
        document.writeln("<b>Name</b> : "+this.#name+"<br>");//print the message Name of laptop.
        document.writeln("<b>Price</b>:"+this.#price+"<br>");//print the message Price of laptop.
        document.writeln("<b>Processor</b> : "+this.#processor+"<br>");//print the message Processor of laptop.
        document.writeln("<br>");//print the message to move content to the next line.
    }
}

let laptop1 = new Laptop("Dell Inspiron", 55000, "Intel i5");//create a new object laptop1 using the class Laptop and set the value(name,price,processor).
let laptop2 = new Laptop("HP Pavilion", 62000, "Intel i7");//create a new object laptop2 using the class Laptop and set the value(name,price,processor).
let laptop3 =  new Laptop("Lenovo ThinkPad", 58000, "AMD Ryzen 5");//create a new object laptop3 using the class Laptop and set the value(name,price,processor).
let laptop4 = new Laptop("Asus Vivobook 15",48000,"Intel i3");//create a new object laptop4 using the class Laptop and set the value(name,price,processor).
let laptop5 = new Laptop("Apple MacBook Air",92000,"Apple M1");//create a new object laptop5 using the class Laptop and set the value(name,price,processor).

laptop1.display();//call display method of laptop1 object to show laptop data.
laptop2.display();//call display method of laptop2 object to show laptop data.
laptop3.display();//call display method of laptop3 object to show laptop data.
laptop4.display();//call display method of laptop4 object to show laptop data.
laptop5.display();//call display method of laptop5 object to show laptop data.