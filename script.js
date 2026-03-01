/* QUESTIONS */

const questionSets={

easy:[
{question:"HTML stands for?",answers:["Hyper Text Markup Language","High Tool Language","Home Tool Markup","None"],correct:0},
{question:"CSS used for?",answers:["Structure","Styling","Programming","Database"],correct:1},
{question:"JS runs in?",answers:["Browser","Server only","CPU","None"],correct:0},
{question:"Tag for image?",answers:["img","image","src","pic"],correct:0},
{question:"ID selector symbol?",answers:["#",".","*","@"],correct:0},
{question:"Hyperlink tag?",answers:["a","link","href","url"],correct:0},
{question:"CSS stands for?",answers:["Creative","Cascading Style Sheet","Color Sheet","None"],correct:1},
{question:"Browser example?",answers:["Chrome","Windows","Linux","Java"],correct:0},
{question:"JS is?",answers:["Language","Style","Database","None"],correct:0},
{question:"HTML is?",answers:["Markup","Language","Both","None"],correct:2}
],

moderate:[
{question:"React is?",answers:["Library","DB","Language","Server"],correct:0},
{question:"Node uses?",answers:["V8","Python","Java","C"],correct:0},
{question:"JSON parse?",answers:["Convert","Print","Delete","None"],correct:0},
{question:"DOM means?",answers:["Document Object Model","Data Object","None","Server"],correct:0},
{question:"NoSQL DB?",answers:["MongoDB","MySQL","Oracle","None"],correct:0},
{question:"HTTP send data?",answers:["POST","GET","PUT","DEL"],correct:0},
{question:"CSS color property?",answers:["color","text","font","shade"],correct:0},
{question:"JS constant?",answers:["const","var","let","static"],correct:0},
{question:"Table row tag?",answers:["tr","td","row","table"],correct:0},
{question:"Framework?",answers:["React","HTML","CSS","SQL"],correct:0}
],

hard:[
{question:"MERN includes?",answers:["Mongo","Express","React","Django"],correct:3},
{question:"React state hook?",answers:["useState","useRef","useMemo","useEffect"],correct:0},
{question:"404 means?",answers:["Not Found","Error","OK","Redirect"],correct:0},
{question:"REST means?",answers:["Representational State Transfer","Remote Server","None","API"],correct:0},
{question:"Install npm?",answers:["npm install","npm add","npm run","npm get"],correct:0},
{question:"Flex layout?",answers:["Flexbox","Grid","Float","Table"],correct:0},
{question:"Secure protocol?",answers:["HTTPS","HTTP","FTP","TCP"],correct:0},
{question:"SQL stands?",answers:["Structured Query Language","Server Query","None","Script"],correct:0},
{question:"JS async keyword?",answers:["async","await","sync","call"],correct:0},
{question:"React lifecycle after render?",answers:["componentDidMount","WillMount","Start","Run"],correct:0}
]
};

/* VARIABLES */

let questions=[],current=0,score=0,selected=null,userAnswers=[];
let studentName="",regNo="";

/* FUNCTIONS */

function showLevels(){
studentName=studentName=document.getElementById("studentName").value.trim();
regNo=document.getElementById("regNo").value.trim();

if(!studentName||!regNo){alert("Enter details");return;}

homePage.classList.add("hide");
levelPage.classList.remove("hide");
}

function startQuiz(level){
questions=questionSets[level];
current=0;score=0;userAnswers=[];

levelPage.classList.add("hide");
quizPage.classList.remove("hide");

loadQuestion();
}

function loadQuestion(){
selected=null;
let q=questions[current];

counter.innerText=`Question ${current+1} / ${questions.length}`;
question.innerText=q.question;

answers.innerHTML="";

q.answers.forEach((ans,i)=>{
let btn=document.createElement("button");
btn.innerText=ans;
btn.classList.add("answer-btn");

btn.onclick=()=>{
selected=i;
nextBtn.classList.remove("hide");
};

answers.appendChild(btn);
});
}

function nextQuestion(){
userAnswers.push(selected);
if(selected===questions[current].correct) score++;

current++;

if(current<questions.length){
loadQuestion();
nextBtn.classList.add("hide");
}else showResult();
}

/* RESULT */

function showResult(){
quizPage.classList.add("hide");
resultPage.classList.remove("hide");

studentInfo.innerText=`${studentName} | ${regNo}`;
score.innerText=`You answered ${score} / ${questions.length} correctly`;

let review=document.getElementById("reviewSection");
review.innerHTML="";

questions.forEach((q,index)=>{

let block=document.createElement("div");
block.classList.add("question-block");

block.innerHTML=`<h4>Question-${index+1}</h4><p>${q.question}</p>`;

q.answers.forEach((opt,i)=>{
let div=document.createElement("div");
div.innerText=opt;
div.classList.add("answer-btn");

if(i===q.correct) div.classList.add("correct");
if(userAnswers[index]===i && i!==q.correct) div.classList.add("wrong");

block.appendChild(div);
});

let correct=document.createElement("p");
correct.classList.add("correct-text");
correct.innerText="Correct Answer: "+q.answers[q.correct];

block.appendChild(correct);
review.appendChild(block);
});
}

function restartQuiz(){location.reload();}