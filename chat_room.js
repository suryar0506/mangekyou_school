// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-H5dZLdq476rXWLf4ymgYAK4iY1VRFqg",
  authDomain: "school-chat-baef4.firebaseapp.com",
  databaseURL: "https://school-chat-baef4-default-rtdb.firebaseio.com",
  projectId: "school-chat-baef4",
  storageBucket: "school-chat-baef4.appspot.com",
  messagingSenderId: "727326680460",
  appId: "1:727326680460:web:6a0ceaf0fe52f0fb8062a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
var student_name = localStorage.getItem("Chatter Name : ");
document.getElementById("hello_display").innerHTML = "<h2>" + "Welcome, " + student_name + "!" + "</h2>";

  function addRoom(){
    var room_name = document.getElementById("create_room_input").value;
    localStorage.setItem("Room Name : ",room_name);
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding classroom"
    });
    window.location = "chat_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("all_rooms_display_div").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
 //Start code
console.log("Room Names - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div></hr>";
document.getElementById("all_rooms_display_div").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("Room Name : ",name);
window.location = "chat_page.html";
}

function logOut(){
  localStorage.removeItem(room_name);
  localStorage.removeItem(student_name);
  window.location = "login.html";
}