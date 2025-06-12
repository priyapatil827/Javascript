const note = document.getElementById("note");
const title = document.getElementById("title");
const add = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const outputBox = document.getElementById("outputBox");

let note_list=[];
let title_list=[];

function display()
{
  outputBox.innerHTML="";
  note_list.forEach((note,index)=>{
    let Div=document.createElement("div");
    let h3=document.createElement("h3");
    let p=document.createElement("p");
    let btnDiv=document.createElement("div");
    let editBtn=document.createElement("button");
    let deleteBtn=document.createElement("button");

    h3.textContent=title_list[index];
    p.textContent=note;
    editBtn.textContent="Edit";
    deleteBtn.textContent="Delete";

    editBtn.className="btn-danger me-3";
    btnDiv.className="d-flex justify-content-center";
    deleteBtn.className="btn btn-success";
    Div.className=" border border-3 border-secondary rounded bg-white d-inline-block p-4 mb-4 me-3";
    outputBox.className="d-flex w-75 mx-auto flex-wrap mb-3";

    editBtn.addEventListener('click',()=>{
      edit(index);
    });

    deleteBtn.addEventListener('click',()=>{
      cancel(index);
    })

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(deleteBtn);

    Div.appendChild(h3);
    Div.appendChild(p);
    Div.appendChild(btnDiv);

    outputBox.appendChild(Div);

    });
};

function edit(index)
{
  note.value=note_list[index];
  title.value=title_list[index];
  note_list.splice(index,1);
  title_list.splice(index,1); 
  display();
}

function cancel(index)
{
  note_list.splice(index,1);
  title_list.splice(index,1);
  display();
}

add.addEventListener('click',()=>{
  let newtext = note.value;
  let titleValue=title.value;
  
  title_list.push(titleValue);
  note_list.push(newtext);
  
  display();
  
  note.value="";
  title.value="";
});
