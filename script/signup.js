console.log("signup.js");

import Navbar from "../Component/Navbar.js";

const navBox = document.querySelector("#nav");
navBox.innerHTML = Navbar();

let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handelSubmit();
});
const handelSubmit = () => {
  let username = form.username.value;
  let password = form.password.value;
  if (!username || !password) {
    alert("Please enter valid username and password");
    return;
  } else {
    let registered = checkuser(username, password);
    if (registered) {
      alert("Already Registered");
    } else {
      addUser(username, password);
    }
  }
  console.log(username, password);
};

const checkuser = (username) => {
  let usersDetails = JSON.parse(localStorage.getItem("usersDetails")) || [];
  let data = usersDetails.filter((e) => e.username == username);
  if (data.length > 0) {
    return true;
  }
  return false;
};

let addUser = (username, password) => {
  let usersDetails = JSON.parse(localStorage.getItem("usersDetails")) || [];
  usersDetails.push({ username: username, password: password });
  localStorage.setItem("usersDetails", JSON.stringify(usersDetails));
  alert("Signup successful");
};
