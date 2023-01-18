// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAEXWuMIKiP78XfCVNTRHI6Py-uiRm5BwA",
  authDomain: "twito-ba470.firebaseapp.com",
  databaseURL: "https://twito-ba470-default-rtdb.firebaseio.com",
  projectId: "twito-ba470",
  storageBucket: "twito-ba470.appspot.com",
  messagingSenderId: "125020631690",
  appId: "1:125020631690:web:7ed430feec26a860547373"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row ;
      });
   });
}









getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}







user_name = localStorage.getItem("UserName");

document.getElementById("user_name_room").innerHTML = "Welcome  " + user_name + "!" ;








function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}








function logout()
{
  localStorage.removeItem("UserName");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}