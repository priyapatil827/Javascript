//Create a Person class with a method greet(). Create a Student class that extends Person and adds a method study(). 
// Use both methods on a Student object.

class Person
{
    greet()
    {
        document.writeln("Welcome to the School<br>");
    }
}

class Student extends Person
{
    study(name,age,standard)
    {
        super.greet();
        this.name=name;
        this.age=age;
        this.standard=standard;

        document.writeln("Name :"+this.name+"<br>");
        document.writeln("Age:"+this.age+"<br>");
        document.writeln("Standard:"+this.standard+"<br>");   
    }
}

const s1 = new Student();
s1.study("Priya",18,12);