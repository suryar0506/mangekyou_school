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

  student_name = localStorage.getItem("Chatter Name : ");
  room_name = localStorage.getItem("Room Name : ");

  function send(){
      message = document.getElementById("message_input").value;

      firebase.database().ref(room_name).push({
        name: student_name,
        msg: message,
        likes: 0
      });

      document.getElementById("message_input").value = "";
  }

  function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("message_holder_div").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if(childKey != "purpose") { 
        firebase_message_id = childKey; 
        message_data = childData; 
      //Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['msg'];
like = message_data['likes'];
name_with_tag = "<h4>" + name + "<img style = 'width:50px; height:50px;' class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id = '" + firebase_message_id + "' value = '" + like + "' onclick = 'updateLikes(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up-'>Like: " + like + "</span></button><hr>";
row = "<br>" + name_with_tag + message_with_tag + like_button + span_with_tag + "<br>";
document.getElementById("message_holder_div").innerHTML += row;
      //End code 
    } }); }); } 
    getData();

    function updateLikes(message_id) {
      console.log("Liked a message - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      
      firebase.database().ref(room_name).child(message_id).update({
      likes : updated_likes
      });
      
      }

    function logOut() {
      localStorage.removeItem(room_name);
      localStorage.removeItem(student_name);
      window.location = "login.html";
    }