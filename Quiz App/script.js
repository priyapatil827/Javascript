const mcqlist = [
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Jupiter", "Venus"],
    "answer": "Mars"
  },
  {
    "question": "Who wrote the play 'Romeo and Juliet'?",
    "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    "answer": "William Shakespeare"
  },
  {
    "question": "What is the capital of Australia?",
    "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "answer": "Canberra"
  },
  {
    "question": "Which gas do plants absorb from the atmosphere?",
    "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "answer": "Carbon Dioxide"
  },
  {
    "question": "Who was the first person to walk on the Moon?",
    "options": ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    "answer": "Neil Armstrong"
  },
  {
    "question": "What is the largest mammal in the world?",
    "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    "answer": "Blue Whale"
  },
  {
    "question": "Which country is known as the Land of the Rising Sun?",
    "options": ["China", "Japan", "Thailand", "South Korea"],
    "answer": "Japan"
  },
  {
    "question": "How many continents are there on Earth?",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  },
  {
    "question": "What is H2O more commonly known as?",
    "options": ["Hydrogen", "Salt", "Water", "Oxygen"],
    "answer": "Water"
  },
  {
    "question": "Which is the longest river in the world?",
    "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "answer": "Nile"
  }
];

const answer=[
  "Mars",
  "William Shakespeare",
  "Canberra",
  "Carbon Dioxide",
  "Neil Armstrong",
  "Blue Whale",
  "Japan",
  "7",
  "Water",
  "Nile",
];
const inputs=document.querySelectorAll(".form-check-input");
const options=document.querySelectorAll(".option");
const question=document.querySelector("#question");
const btn=document.querySelector("#btn");
const score=document.querySelector("#score");

let currentIndex=0;
let count=0;
let userAns=[];

function showQuestion(index)
{
    question.textContent="Q"+(index+1)+" "+mcqlist[index].question
    options.forEach((options,i)=>{
    options.textContent=mcqlist[index].options[i];
});
}


function checkQuestion(index)
{
  inputs.forEach((input,i)=>{
    if(input.checked)
    {
      userAns.push(mcqlist[index].options[i]);
    }
  })
}





function countScore()
{
  for(let i=0; i<mcqlist.length;i++)
  {
    if(answer[i]==userAns[i])
    {
      count++;
    }
  }
}



btn.addEventListener('click',()=>{
    if(currentIndex<mcqlist.length)
    {
      checkQuestion(currentIndex);
      currentIndex+=1;
      if(currentIndex<mcqlist.length)
      {
        showQuestion(currentIndex);
      }
    }

    if(currentIndex==mcqlist.length)
    {
      countScore();
      score.textContent="Score : " + count+"/10";
      currentIndex++;
    }
});


showQuestion(currentIndex);
