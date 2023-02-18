console.log("login js");
import Form from "../Component/form.js";
import Navbar from "../Component/Navbar.js";

const navBox = document.querySelector("#nav");
navBox.innerHTML = Navbar();
let formBox=document.querySelector("#form-box");
formBox.innerHTML=Form();


let form=document.querySelector("#form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username=form.username.value;
    let password=form.password.value;
    if(!username || !password){
        alert("Please enter a username and password")
        return 
    }
    handelSubmit(username,password)
})
 

const handelSubmit=(username,password)=>{
 let validate=check(username,password)
 if(validate){
   alert("Validation sucess")
 }else{
    alert("False validation sucess")
 }
}

const check=(username,password)=>{
    let usersDetails = JSON.parse(localStorage.getItem("usersDetails")) || [];
    console.log(usersDetails)
let data= usersDetails.filter((e)=>e.username==username&&e.password==password)
 if(data.length>0){
    return true
 }
 return false;
}