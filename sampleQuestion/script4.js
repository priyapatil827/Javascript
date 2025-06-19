//Create a Calculator class that hides the internal result property (e.g., using #result). Add methods to add(num), subtract(num), and getResult().

class Calculator
{
    #result;

    constructor(result)
    {
        this.#result=result;
    }

    add(num1,num2)
    {
        this.#result=num1+num2;
    }


    sub(num1,num2)
    {
       this.#result=num1-num2;
    }

    getFinal()
    {
        document.writeln("Result is:"+this.#result+"<br>");
    }
}

const c1 = new Calculator();
c1.add(10,20);
c1.getFinal();
c1.sub(30,40);
c1.getFinal();

