//Module=01(Q.2)
//Define a class named `Employee` with private attributes `name`, `salary`, and `designation`. 
//Encapsulate these attributes using appropriate access specifiers. 
//Implement public member functions to set and get the values of these attributes. 
//Demonstrate the encapsulation concept by accessing these attributes through the member functions.

class Employee //create a class name Employee
{
    #name;//create an private attribute name.
    #salaray;//create an private attribute salaray.
    #designation;//create an private attribute designation.

    set(name,salaray,designation)//create a method set with a parameter (name,salaray,designation) passed to it.
    {
        this.#name=name;//assign the value of local variable name to global private variable name with (this.) keyword.//this keyword is used for global variable.
        this.#salaray=salaray;//assign the value of local variable salaray to global private variable salaray with (this.) keyword.//this keyword is used for global variable.
        this.#designation=designation;//assign the value of local variable designation to global private variable salaray with (this.) keyword.//this keyword is used for global variable.
    }

    get()//create a method get to get value
    {
        document.writeln("<b>Employee Name</b> :"+this.#name+"<br>");//print the message Employee name.
        document.writeln("<b>Emoployee Salaray</b> :"+this.#salaray+"<br>");//print the message Employee Salaray.
        document.writeln("<b>Employee Designation</b> :"+this.#designation+"<br>");//print the message Employee Designation.
    }
}

const emp =  new Employee();//create a new object emp using the class Employee.

emp.set("Aarvi",10000,"Software engineering");//call set method to set value.(name,salaray,designation)
emp.get();//call get method to display the employee data.