//Create a BankAccount class where balance is private. Add deposit(amount), withdraw(amount), and getBalance() methods. Try to access balance directly (it should not work).

class BankAccount
{
    #balance;

    constructor(balance)
    {
        this.#balance=balance;
    }

    deposit(amount)
    {
        this.amount=amount;
        this.#balance=this.#balance+amount;
        document.writeln("Deposit Amount :" +this.#balance+"<br>");
    }

    withdraw(amount)
    {
        this.amount=amount;
        this.#balance=this.#balance-amount;
        document.writeln("Withdrawal Amount:"+this.#balance+"<br>");
    }

    getBalance()
    {
        document.writeln("Current balance:"+this.#balance+"<br>");
    }
}

const b1 = new BankAccount(3000);
b1.deposit(1000);
b1.withdraw(500);
b1.getBalance();