//Module=03(Q.2)
//Define a class `Person` with private attributes `name`, `age`, and `address`. 
// Encapsulate these attributes using getter and setter methods. 
// Implement a parameterized constructor for the `Person` class. 
// Create N number of objects using this constructor and display the details.

class Person
{

    #name;
    #age;
    #address;

    constructor(name,age,address) 
    {
        this.#name=name;
        this.#age=age;
        this.#address=address;
    }

    set(name,age,address)
    {
        this.#name=name;
        this.#age=age;
        this.#address=address;
    }

     get()
    {
        return;
    }
    

    display()
    {
        document.writeln("<b>Name is </b>:"+this.#name+"<br>");
        document.writeln("<b>Age </b>:"+this.#age+"<br>");
        document.writeln("<b>Address</b> :"+this.#address+"<br>");
    }
}

const p1 = [
    new Person("priya",20,"Surat"),
    new Person("riya",18,"Surat"),
    new Person("muskan",19,"Surat"),
    new Person("megha",20,"Surat"),
    new Person("dhruvika",18,"Surat")

];

for(let i=0; i<p1.length;i++)
{
    document.writeln("<br>");
    p1[i].display();
}