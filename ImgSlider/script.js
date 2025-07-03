const img = document.getElementById("img");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const auto = document.getElementById("auto");
const stop = document.getElementById("stop");
let index=0;
let id;

const images=[
    "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21ldGljfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1241597350/photo/set-of-cosmetics-on-shelves-in-beauty-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=OHeMsj7eIxMa0fF32EpNzi1zmH1xNvqUf7MNJjLIU1k=",
    "https://media.istockphoto.com/id/1408439145/photo/autumn-skincare-and-autumn-makeup-concept-with-beauty-products-on-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=TL9xbC2xlFdcwW4NnKpwkVQADj8PWQ9-dvlcNgXMfz4=",
    "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
];

function showImg()
{
    img.src = images[index];
}
showImg(index);

function nextImage()
{
    if(index<images.length-1)
    {
        index++;
    }
    else
    {
        index=0;
    }
    showImg(index);
}

function previousImage()
{
    if(index>0)
    {
        index--;
    }
    showImg(index);
}

function autoImage()
{
    id=setInterval(() => {
        nextImage();
    }, 1000);
}

function stopImage()
{
    clearInterval(id);
}

next.addEventListener('click',()=>{
    nextImage();
})

previous.addEventListener('click',()=>{
    previousImage();
})

auto.addEventListener('click',()=>{
    autoImage();
})

stop.addEventListener('click',()=>{
    stopImage();
});


