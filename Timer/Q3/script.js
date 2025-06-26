const main = $("#main");
const close = $("#closeBtn");

let isClose=false;

main.hide();

close.click(()=>{
    main.hide();
    isClose=true;
});

setTimeout(()=>{
    if(!isClose)
    {
        main.show();
    }
},3000);
