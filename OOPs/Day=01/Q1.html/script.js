// create a class for Student with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.

class student{
    name;
    age;
    studentId;
    school;
    grade;

    students(name,age,studentId,school,grade)
    {
        this.name=name;
        this.age=age;
        this.studentId=studentId;
        this.school=school;
        this.grade=grade;

        document.writeln("Name is :",this.name+"<br>");
        document.writeln("Age is :",this.age+"<br>");
        document.writeln("StudentId is :",this.studentId+"<br>");
        document.writeln("School is :",this.school+"<br>");
        document.writeln("Grade is :",this.grade+"<br>");
    }
}

const megha=new student;
megha.students("Megha",19,4235,"sunrise","A+");
document.writeln("<br>");

const dhruvika=new student;
dhruvika.students("Dhruvika",10,8769,"vedant","A");
document.writeln("<br>");

const priya=new student;
priya.students("Priya",17,6543,"deep darshan","B+");
