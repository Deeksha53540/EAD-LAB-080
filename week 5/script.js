function attemptTracker(){

let attempts = 0;

return function(){

attempts++;

return attempts;

}

}

let trackAttempt = attemptTracker();

document.getElementById("loginBtn").addEventListener("click", function(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let message = document.getElementById("message");
let loginBtn = document.getElementById("loginBtn");

if(username === ""){
message.textContent = "Username cannot be empty";
return;
}

if(password.length < 6){
message.textContent = "Password must be at least 6 characters";
return;
}

let attempts = trackAttempt();

if(attempts <= 3){

if(username === "admin" && password === "123456"){
message.textContent = "Login Successful!";
}
else{
message.textContent = "Wrong credentials. Attempt " + attempts + " of 3";
}
}

if(attempts >= 3){
loginBtn.disabled = true;
message.textContent = "Account locked. Too many attempts.";
}

});