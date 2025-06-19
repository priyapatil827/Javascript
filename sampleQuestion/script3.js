//Create a User class where the password should be private. Add methods to changePassword() and checkPassword().

class User 
{
     #password;

    constructor(password)
    {
        this.#password=password;
    }

    changePassword(oldPassword,newPassword)
    {
        if(oldPassword==this.#password)
        {
            this.#password=newPassword;
            document.writeln("Change Password")
        }
        else
        {
            document.writeln("incorrect password");
        }
    }

    checkPassword(inputPassword)
    {
        if(inputPassword==this.#password)
        {
            document.writeln("Correct Password");
        }
        else
        {
            document.writeln("Incorrect Password");
        }
    }
}

const pass = new User(45678);
pass.changePassword(45678,12345);
pass.checkPassword(12345);
