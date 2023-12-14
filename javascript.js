let choices =  document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let comp_score = document.querySelector("#comp-score");
let your_score = document.querySelector("#user-score");
console.log(choices);
  
let user_score =0;
let com_score=0;
 function computer_assign(){
    let array = ["rock","paper","scissors"];
  let index =  Math.floor(Math.random()*3);
   
    return array[index];
  
 }


 function Result(id1){
 let assign =  computer_assign();
 
    if(id1 ==="rock" || id1==="scissors" && assign==="paper" ){
        if( id1!= assign){
        console.log("winner")
        message.innerText="winner is you";
        document.getElementById("msg").style.backgroundColor="green";
        your_score.innerText=  ++user_score;
        }
    
    else{
        console.log("looser")
        message.innerText="you lost to comp";
        comp_score.innerText=  ++com_score;
        document.getElementById("msg").style.backgroundColor="red";
    }
}
 }


choices.forEach((choice)=>choice.addEventListener("click",()=>{
   let id1 = choice.getAttribute("id");
   Result(id1);
}));

message.addEventListener("click",()=>{
    document.getElementById("msg").style.backgroundColor="blue";
   message.innerText="Play your move";
   user_score =0;
   com_score=0;
   your_score.innerText=user_score;
   comp_score.innerText=com_score;
});