function recordUser(){
    user_name = document.getElementById("user_name").value;
    if(user_name == ""){
alert("At least type nameless!");
    } else {
        localStorage.setItem("Chatter's Name",user_name);
        window.location = "chat_room.html";
    }
}