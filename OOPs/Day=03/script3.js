//Module=03(Q.1).
//Create a class representing a `Book` with attributes like `title`, `author`, and `publishedYear`. 
// Demonstrate the instantiation of objects using array and accessing their attributes.

class Book{// create a book name class.
    set(title,author,publishedYear)//a method set create with a parameters (title,author,publishedYear) passed to it.
    {
        this.title=title;//assign the value of local variable title to global variable title with (this.) keyword.//this keyword is used for global variable.
        this.author=author;//assign the value of local variable author to global variable author with (this.) keyword.//this keyword is used for global variable.
        this.publishedYear=publishedYear;//assign the value of local variable publishedyear to global variable publishedyear with (this.) keyword.//this keyword is used for global variable.
    }
}

let book1 = new Book(); // create new object book1 using the Book class.
book1.set("Wings of fire","A.P.J. Abdul Kalam",1999);//assign the value(title,author,publishedYear) of book1 using set method.

let book2 = new Book(); // create new object book1 using the Book class.
book2.set(1984,"George Orwell",1949);//assign the value(title,author,publishedYear) of book2 using set method.

let book3 = new Book(); // create new object book3 using the Book class.
book3.set("The 7 Habits of Highly Effective People","Stephen R. Covey",1989);//assign the value(title,author,publishedYear) of book3 using set method.

let book4 = new Book(); // create new object book4 using the Book class.
book4.set("The Diary of a Young Girl","Anne Frank",1947);//assign the value(title,author,publishedYear) of book4 using set method.

let Books=[book1,book2,book3,book4];//create an array name Books to store multiple book object.

for(let i=0; i<Books.length;i++)//using a loop to display book object data.
{
    document.writeln("<b>Title</b>: "+Books[i].title+"<br>");//print the message Title of books.
    document.writeln("<b>Author</b>: "+Books[i].author+"<br>");//print the message Author of books.
    document.writeln("<b>PublishedYear</b>: "+Books[i].publishedYear+"<br>");//print the message Publishedyear of books.
    document.writeln("<br>");//print the message to move the content to the next line.

}