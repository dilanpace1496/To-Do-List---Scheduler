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


  var name = getInputVal('eventName');
  var date = getInputVal('startTime');
  var startTime = getInputVal('startTime');
  var endTime = getInputVal('endTime');
  var colorLabel = getInputVal('colorLabel');
  var locationLabel = getInputVal('locationLabel');
  var descriptionLabel = getInputVal('descLabel');

  //var phone = getInputVal('phone');
  //var message = getInputVal('message');
  // Save message
  saveMessage(date, name, startTime, endTime, colorLabel, locationLabel, descriptionLabel);//, company, email, phone, message);

  // Show alert
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  //},3000);

  // Clear form
  //document.getElementById('contactForm').reset();
  getEventsofDate(date);
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(dateLabel, name, startTime, endTime, colorLabel, locationLabel, descriptionLabel) {//, company, email, phone, message){
  var d = new Date();
  var hour = d.getHours();
  var minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = String("0" + minutes);
  }
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var newMessageRef = messagesRef;
  var day = days[d.getDay()];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[d.getMonth()];
  var dayExtends = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
  var date = dayExtends[d.getDate()];
  var year = d.getFullYear();

  var dateLabel = dateLabel.substr(0, 10);

  var dataRef = firebase.database().ref('Events/' + String(dateLabel));

  dataRef.push({
    Timestamp: String(day) + ", " + String(month) + " " + String(date) + ", " + String(year) + " | " + String(hour) + ":" + String(minutes),
    StartTime: startTime,
    EndTime: endTime,
    Color: colorLabel,
    Location: locationLabel,
    Description: descriptionLabel,
    Title: name

  })

  gotoCalendar();
}



function getEventsofDate(date) {
  //firebase.database().ref('Events/').on('value', snap => {
   // var rooms = Object.values(snap.val()).map(function (obj) {
   //   return obj.StartTime;
   // });
   // console.log('firebaseHolyArray: ', rooms);
  //});
  //var x = $("li").toArray()
  //console.log(snapshot.val().-LzeQLaAs7zwSS7zxyHy);
  //array = Object.values(snapshot.val())
}

function makeEvent(){
  window.location.replace("createEvent.html");
}

function gotoCalendar(){
  window.location.replace("index.html");
}


function changeDate() {
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var hour = d.getHours();
  var minute = d.getMinutes();
  if (month < 10) {
    month = String("0" + month);
  }
  if (hour < 10) {
    hour = String("0" + hour);
  }
  if (minute < 10) {
    minute = String("0" + minute);
  }
  var minutes = d.getMinutes();
  var year = d.getFullYear();
  var dateFormat = String(year + "-" + month + "-" + day + "T" + hour + ":" + minute);
  document.getElementById("startTime").setAttribute('value', dateFormat);
  document.getElementById("endTime").setAttribute('value', dateFormat);

}