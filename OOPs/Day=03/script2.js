//Module=02 (Q.1).
//Create a class representing a `Movie` with attributes like `title`, `genre`, and `releasedYear`.
//Demonstrate the instantiation of objects using array and accessing their attributes.


class Movie{// create a Movie name class
    set(title,genre,releasedYear)//a method set create with parameter (title,genre,releasedYear) passed to it.
    {
        this.title=title;//assign the value of local variable to global variable with (this.) keyword.// this keyword is used for global variable.
        this.genre=genre;//assign the value of local variable to global variable with (this.) keyword.// this keyword is used for global variable.
        this.releasedYear=releasedYear;//assign the value of local variable to global variable with (this.) keyword.// this keyword is used for global variable.
    }
}

let movie1 = new Movie(); // create new object movie1 using the Movie class. 
movie1.set("The jungle book","Adventure, Fantasy, Family",2016);//assign the value(title,genre,releasedYear) of movie1 using set method.

let movie2 = new Movie();// create new object movie2 using the Movie class. 
movie2.set("The lion king","Animation, Drama, Adventure",2019);//assign the value(title,genre,releasedYear) of movie2 using set method.

let movie3 = new Movie();// create new object movie3 using the Movie class. 
movie3.set("Frozen","Animation, Musical, Family",2013);//assign the value(title,genre,releasedYear) of movie3 using set method.

let movie4 = new Movie();// create new object movie4 using the Movie class. 
movie4.set("Taare zameen par","Drama",2007);//assign the value(title,genre,releasedYear) of movie4 using set method.

let Movies=[movie1,movie2,movie3,movie4];// create an array name Movies to store mutliple movie object.

for(let i=0; i<Movies.length;i++) // using a loop to display all movie object data
{
    document.writeln("<b>Title</b> :"+Movies[i].title+"<br>");//print the message Title of movie.
    document.writeln("<b>Genre</b> :"+Movies[i].genre+"<br>");//print the message Genre of movie.
    document.writeln("<b>ReleasedYear</b> :"+Movies[i].releasedYear+"<br>");//print the message Releasedyear of movie.
    document.writeln("<br>");  //print the message to move the content to the next line
}



