class ATM{
    constructor(debit,pin,balance)
    {
        this.debit=debit;
        this.pin=pin;
        this.balance=balance;
    }

    setPin(pin)
    {
        this.pin=pin;
        if(this.pin==pin)
        {
            alert("Pin is created successfully");
        }
    }

    deposite(debit,pin,balance)
    {
        if(this.pin==pin)
        {
            this.balance=this.balance+balance;
            document.write("Your balance after deposite : ",this.balance);
            document.writeln("<br>");
        }
        else if(this.pin==undefined)
        {
            alert("Generate PIN!");
        }
        else
        {
            alert("Incorrect PIN.");
        }
    }

    checkBalance(debit,pin,balance)
    {
        if(this.pin==undefined)
        {
            alert("Generate PIN!");
        }
        else if(this.pin==pin)
        {
            this.balance=balance;
            document.writeln("Your balance is:",this.balance);
            document.writeln("<br>");
        }
        else
        {
            alert("Incorrect PIN.");
        }
    }

    withdraw(debit,pin,balance)
    {
        if(balance<this.balance)
        {
            this.balance=this.balance-balance;
            document.writeln("Your balance after withdrawal :",this.balance);
        }
        else if(this.pin==undefined)
        {
            alert("Generate PIN!");
        }
        else
        {
            alert("Insufficient balance");
        }
    }
}

const atm = new ATM("debit",1234,1000);

atm.setPin(1234);
atm.deposite("debit",1234,100);
atm.checkBalance("debit",1234,100);
atm.withdraw("debit",1234,10)