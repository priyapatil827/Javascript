//Module=04(Q.1).
//Create a class `Student` with private attributes `name`, `rollNumber`, and a parameterized constructor. 
// Demonstrate the instantiation of objects using this constructor with help of array.

class Student // create a class name Student.
{
    #name;//create a private attribute name.
    #rollNumber;//create a private attribute rollNumber.

    constructor(name,rollNumber)//create constructor with parameter (name,rollNumber) passed to it.
    {
        this.#name=name;//assign the value of local variable name to global private variable name with (this.) keyword.//this keyword is used for global variable.
        this.#rollNumber=rollNumber;//assign the value of local variable rollNumber to global private variable rollNumber with (this.) keyword.//this keyword is used for global variable.
    }

    display()//create a method display.
    {
        document.writeln("<b>Name</b> : "+this.#name+"<br>");//print the message Name of student.
        document.writeln("<b>Roll Number</b> : "+this.#rollNumber+"<br>");//print the message rollNumber of student.
        document.writeln("<br>");//print the message to move the content to the next line.
    }
}

let Students=[ // create an array name Students to store multiple student object data.
    new Student("Prita",1),//create a student object and store it in array.  
    new Student("Megha",2),//create another student object and store it in array. 
    new Student("Dhruvika",3),//create another student object and store it in array. 
    new Student("Aarvi",4),//create another student object and store it in array. 
    new Student("Dhruvi",5)//create another student object and store it in array. 
]

for(let i=0; i<Students.length;i++)//using loop to display student data.
{
    Students[i].display();//call display method.
}