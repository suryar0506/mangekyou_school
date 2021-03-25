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