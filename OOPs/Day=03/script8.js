//Module=03(Q.2)
//Define a class `Person` with private attributes `name`, `age`, and `address`. 
// Encapsulate these attributes using getter and setter methods. 
// Implement a parameterized constructor for the `Person` class. 
// Create N number of objects using this constructor and display the details.

class Person//create a class name person.
{

    #name;//create a private attribute name.
    #age;//create a private attribute age.
    #address;//create a private attribute address.

    constructor(name,age,address) //create a constructor with parameter (name,age,address) passed to it.
    {
        this.#name=name;//assign the value of local variable name to global private variable of name with (this.) keyword.//this keyword is used for global variable.
        this.#age=age;///assign the value of local variable age to global private variable of age with (this.) keyword.//this keyword is used for global variable.
        this.#address=address;//assign the value of local variable address to global private variable of address with (this.) keyword.//this keyword is used for global variable.
    }

    set(name,age,address)//create a method set with paramter (name,age,address) passed to it.
    {
        this.#name=name;///assign the value of local variable name to global private variable of name with (this.) keyword.//this keyword is used for global variable.
        this.#age=age;//assign the value of local variable age to global private variable of age with (this.) keyword.//this keyword is used for global variable.
        this.#address=address;//assign the value of local variable address to global private variable of address with (this.) keyword.//this keyword is used for global variable.
    }

     get()//create a method get.
    {
        return;//
    }
    

    display()//create a method display to display person details.
    {
        document.writeln("<b>Name is </b>:"+this.#name+"<br>");//print person name.
        document.writeln("<b>Age </b>:"+this.#age+"<br>");//print person age.
        document.writeln("<b>Address</b> :"+this.#address+"<br>");//print person address.
    }
}

const p1 = [ // create an array of 5 person 
    new Person("priya",20,"Surat"),//create 1 object with values.
    new Person("riya",18,"Surat"),
    new Person("muskan",19,"Surat"),
    new Person("megha",20,"Surat"),
    new Person("dhruvika",18,"Surat")

];

for(let i=0; i<p1.length;i++)// using a for loop to display all object from array.
{
    document.writeln("<br>");//print to move the content to the next line.
    p1[i].display();//call the method display for each object.
}
