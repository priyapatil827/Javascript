
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
        const btnDiv=document.createElement("div");
        const p=document.createElement("p");
        const deleteButton=document.createElement("button");
        const editButton=document.createElement("button");

        div.className="d-flex justify-content-between my-3";
        deleteButton.className="btn btn-danger";
        editButton.className="btn btn-warning";
        
        p.textContent=todo;
        deleteButton.textContent="Delete";
        editButton.textContent="Edit";

        deleteButton.addEventListener('click',()=>{
          deleteTodo(index);
        });

        editButton.addEventListener('click',()=>{
          editTodo(index);
        })
        
        btnDiv.appendChild(deleteButton);
        btnDiv.appendChild(editButton);
        
        div.appendChild(p);
        div.appendChild(btnDiv);

        outputBox.appendChild(div);
    })
}

function deleteTodo(index)
{
  todos.splice(index,1);
  display();
}

function editTodo(index)
{
  input.value=todos[index];
  todos.splice(index,1);
}

button.addEventListener('click',()=>{
    const value=input.value;
    todos.push(value);
    display();
});

display();
