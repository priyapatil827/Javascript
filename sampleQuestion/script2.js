//Create a Person class that stores name and age. Make age private (use closure or #age) and provide methods to getAge() and setAge() safely.

class Person
{
    #age;

    constructor(name,age)
    {
        this.name=name;
        this.#age=age;
    }

    getAge()
    {
        document.writeln("Name:"+this.name+"<br>");
        document.writeln("Age:"+this.#age+"<br>");
    }
}

const p1 = new Person("priya",18);
p1.getAge();
