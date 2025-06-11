// create class for ATM, with checkBalance, withdraw, deposit.

class ATM{
    debit;
    pin;
    balance=5000;

    deposit(debit,pin,balance)
    {
        this.debit=debit;
        this.pin=pin;
        this.balance=this.balance+balance;
    }

    checkbalance(pin,debit)
    {
        this.pin=pin;
        this.debit=debit;
        document.writeln("Your balance is:",this.balance+"<br>");
    }

    withdraw(debit,pin,balance)
    {
        this.debit=debit;
        this.pin=pin;
        this.balance=this.balance-balance;
        document.writeln("Your balance is after withdraw:",this.balance);
    }
}

const vesu=new ATM();
vesu.deposit("VISA", 1234,2000);
vesu.checkbalance("VISA",1234);
vesu.withdraw("VISA",1234,1000);