// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAO4rdTU-CSZB7PtZyZK41EN5gXpzFRkeY",
  authDomain: "to-do-list-scheduler.firebaseapp.com",
  databaseURL: "https://to-do-list-scheduler.firebaseio.com",
  projectId: "to-do-list-scheduler",
  storageBucket: "to-do-list-scheduler.appspot.com",
  messagingSenderId: "388650130081",
  appId: "1:388650130081:web:d468bd11d743e4db25eee0",
  measurementId: "G-SV6RDX31ZR"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Events');



// Submit form
function submitForm() {

  // Get values
  //var company = getInputVal('company');
  //var email = getInputVal('email');
  //var phone = getInputVal('phone');
  //var message = getInputVal('message');
  // Save message
  saveMessage();//, company, email, phone, message);

  // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  //},3000);

  // Clear form
  //document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage() {//, company, email, phone, message){
  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  var newMessageRef = messagesRef;
  switch (day) {
    case 0:
      var dayString = "Sunday";
      break;
    case 1:
      var dayString = "Monday";
      break;
    case 2:
      var dayString = "Tuesday";
      break;
    case 3:
      var dayString = "Wednesday";
      break;
    case 4:
      var dayString = "Thursday";
      break;
    case 5:
      var dayString = "Friday";
      break;
    case 6:
      var dayString = "Saturday";
      break;
  }
  newMessageRef.set({
    timestamp: dayString+", "+String(hour)+":"+String(minutes)
  });
}