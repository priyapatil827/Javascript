class ATM{ // create ATM name class.
    constructor(debit,pin,balance) //create constructor with parameters (debit,pin,balance) have been passed to it.
    {
        this.debit=debit; //assign the value of local variable to global variable with (this.) keyword.//this keyword is used for global variable.
        this.pin=pin; //assign the value of local variable to global variable with (this.) keyword.//this keyword is used for global variable.
        this.balance=balance; //assign the value of local variable to global variable with (this.) keyword.//this keyword is used gor global variable.
    }

    setPin(pin) // a method setPin create with a parameter (pin) is passed to it.
    {
        this.pin=pin; //assign the value of local variable to global variable with (this.) keyword.//this keyword is used for global variable.
        if(this.pin==pin) //  compare global variable pin with local variable pin using if keyword.
        {
            alert("Pin is created successfully"); // show a popup message Pin is created successfully.
        }
    }

    deposite(debit,pin,balance) // a method deposite create with a parameter (debit,pin,balance) is passed to it.
    {
        if(this.pin==pin) // compare global variable pin with local variable pin using if keyword.
        {
            this.balance=this.balance+balance; //add deposite amount to current balance.
            document.writeln("Your balance after deposite : ",this.balance+"<br>"); // print the message and show your current balance after desposite amount.
        }
        else if(this.pin==undefined) // check global variable pin is undefined or not then run this block.
        {
            alert("Generate PIN!"); // show a popup message Generate PIN.
        }
        else // when none of conditions are true then the else block will run. 
        {
            alert("Incorrect PIN."); // show a popup message Incorrect PIN.
        }
    }

    checkBalance(debit,pin,balance) // a method checkBalance create with parameter (debit,pin,balance) is passed to it.
    {
        if(this.pin==undefined) // check global variable pin is undefined or not then run this block.
        {
            alert("Generate PIN!"); // show a popup message Generate PIN.
        }
        else if(this.pin==pin) // compare global variable pin with local variabl pin using else if keyword.
        {
            document.writeln("Your balance is:",this.balance+"<br>"); // print the message Your balance is.
        }
        else // when none of conditions are true then the else block will run.
        {
            alert("Incorrect PIN."); // show a popup message Incorrect PIN.
        }
    }

    withdraw(debit,pin,balance) // a method withdraw is create with parameter (debit,pin,balance) is passed to it.
    {
        if(balance<this.balance)//compare global variable balance with local variable(this.balance) using if keyword check you have sufficent balance to withdraw money.
        {
            this.balance=this.balance-balance; // subtract withdraw amount to current balance
            document.writeln("Your balance after withdrawal :",this.balance); //print the message Your balance after withdrawal.
        }
        else if(this.pin==undefined) // check global variable pin is undefined or not then run this block.
        {
            alert("Generate PIN!");// show a popup message Generate PIN.
        }
        else // when none of conditions are true then the else block will run.
        {
            alert("Insufficient balance");// show a popup message Insufficient balance.
        }
    }
}

const atm = new ATM("debit",1234,1000); // create a new object atm using ATM class and passed 3 value. 

atm.setPin(1234); // object with method setPin with pin(1234) with new pin.
atm.deposite("debit",1234,100); // object with method deposite debit,pin,balance to deposite amount.
atm.checkBalance("debit",1234); // object with method checkBalance debit,pin to checkBalance amount.
atm.withdraw("debit",1234,100);//object with method withdraw debit,pin,balance to withdrawal amount.
