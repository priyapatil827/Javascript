// create a class for Car with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.

class car{
    name;
    model;
    year;
    color;
    company;

    display(name,model,year,color,company)
    {
        this.name=name;
        this.model=model;
        this.year=year;
        this.color=color;
        this.company=company;

        
        document.writeln("Name is: ",this.name+"<br>");
        document.writeln("Model is: ",this.model+"<br>");
        document.writeln("Year is: ",this.year+"<br>");
        document.writeln("Color is: ",this.color+"<br>");
        document.writeln("Company is: ",this.company+"<br>");
    }
}

const car1 = new car();
car1.display("Alto", "VXR", 2018, "White", "Suzuki");
document.writeln("<br>");

const car2 = new car();
car2.display("Seltos", "EX", 2022, "Black", "Kia");
document.writeln("<br>");

const car3=new car();
car3.display("Model S", "Plaid", 2021, "Black", "Tesla");