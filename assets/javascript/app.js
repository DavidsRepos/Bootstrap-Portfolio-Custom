$(document).ready(function () {

//FireBase data and reference
    var config = {
        apiKey: "AIzaSyDtmeeLBIF3LVSXK5a8JwC7pAAJJTDW7Lo",
        authDomain: "portfolio-7a6b8.firebaseapp.com",
        databaseURL: "https://portfolio-7a6b8.firebaseio.com",
        projectId: "portfolio-7a6b8",
        storageBucket: "portfolio-7a6b8.appspot.com",
        messagingSenderId: "998968756020"
      };
      
      firebase.initializeApp(config);
     
      var database = firebase.database();


    });