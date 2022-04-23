var firebaseConfig = {
    apiKey: "AIzaSyBAK-MMgZ9w6OS8iWw0A0b5nMreyYFXKR0",
    authDomain: "lets-chat-d4154.firebaseapp.com",
    databaseURL: "https://lets-chat-d4154-default-rtdb.firebaseio.com",
    projectId: "lets-chat-d4154",
    storageBucket: "lets-chat-d4154.appspot.com",
    messagingSenderId: "548737427532",
    appId: "1:548737427532:web:0b3441fa27d3cb32d2ace9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();