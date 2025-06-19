//Create a Bird class with a method makeSound(). Then create Sparrow and Parrot classes that override the makeSound() method with their
//  unique sounds.

class Bird
{
    name;
    sound;

    constructor(name,sound)
    {
        this.name=name;
        this.sound=sound;
    }

    makeSound()
    {
        document.writeln("Name is  :"+this.name+"<br>");
        document.writeln("Sound is :"+this.sound+"<br>");
    }
}

class Sparrow extends Bird
{
    constructor(name,sound)
    {
        super(name,sound);
    }
}

class Parrot extends Bird
{
    constructor(name,sound)
    {
        super(name,sound);
    }
}    
   

const birds1 = new Sparrow("Sparrow","chi-chi-chi<br>");
birds1.makeSound();
const birds2= new Parrot("Parrot","mithu-mithu");
birds2.makeSound();