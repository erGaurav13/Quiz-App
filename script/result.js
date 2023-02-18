console.log("result.js")

let result =JSON.parse(localStorage.getItem("result"))||[];
console.log(result)
let resultBox =document.querySelector("#result-box");

if(result.length==0){
     
    resultBox.innerHTML="Plz Attemp first"
}else{
    
    display(result);
}








function display(result){
    resultBox.innerHTML="";
    result.forEach((e) => {
       let div=document.createElement("div");
       let que=document.createElement("h3");
       que.innerText=e.question;
       let ans=document.createElement("p");
       ans.innerText=e.answer;
       let myans=document.createElement("p");
       myans.innerText=e.myans;
       div.append(que,ans,myans);
       resultBox.append(div); 
    });

}