const inputBox=document.getElementById("input-box");
const input=document.getElementById("input");
const button=document.getElementById("btn");

const outputBox=document.getElementById("output-box");

let todos=["Wake up 5pm","Workout","Read book","Breakfast"];
function display()
{
    outputBox.innerHTML=" ";

    todos.forEach((todo,index)=>{
        const div=document.createElement("div");

        const p=document.createElement("p");
        const deleteButton=document.createElement("Delete");

        div.className="d-flex justify-content-between my-3";
        deleteButton.className="btn btn-danger";
        p.textContent=todo;
        deleteButton.textContent="Delete";
        div.appendChild(p);
        div.appendChild(deleteButton);
        outputBox.appendChild(div);
    })
}

button.addEventListener('click',()=>{
    const value=input.value;
    todos.push(value);
    display();
});

display();