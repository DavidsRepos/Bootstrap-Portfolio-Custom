$(document).ready(function () {

//FireBase data and reference
var config = {
  apiKey: "AIzaSyCkjAZQxliPMcqplVpp5eZk19jGsfP7HV8",
  authDomain: "portfolioproject-a06a1.firebaseapp.com",
  databaseURL: "https://portfolioproject-a06a1.firebaseio.com",
  projectId: "portfolioproject-a06a1",
  storageBucket: "portfolioproject-a06a1.appspot.com",
  messagingSenderId: "688831726299"
      };
      
      firebase.initializeApp(config);
     
      var database = firebase.database();

    


   // When the user scrolls down 600px from the top of the document, show "back to top" button
   var btnb = $('#upBtn');

   $(window).scroll(function () {
       if ($(window).scrollTop() > 600) {
        btnb.addClass('show');
       } else {
        btn.removeClass('show');
       }
   });

   btnb.on('click', function (e) {
    e.preventDefault();
    $('html').animate({
       scrollTop: 0
    }, '300');

   }); //  end of up button function

    //on clicking submit, write contact info to db
      $(".submit-btn").on("click", function (event) {
        event.preventDefault();
      
        var contactSav = {
            fullnamedb : $("#fullName").val().trim(),
            emailaddressdb: $("#emailAddress").val().trim(),
            commentsdb: $("#q-comments").val().trim(),

        }
        // console.log(contactSav);
        
            database.ref().push(contactSav);
    
        });


    //Modal for successfull submission

    // var modal = $("#modal");
    // console.log(modal);

    // var btnmodal = ("#myBtn");
    // console.log(btnmodal);

    // var span = $(".close")[0];
    // console.log(span);

    $("#myBtn").on("click", function() {
      $("#modal").css("display", "block");
    });

    $("#modal").on("click", function(){
      $("#modal").css("display", "none");

    });

    $(".close").on("click", function(){
      $("#modal").css("display", "none");

    });

    // When the user clicks anywhere outside of the modal, close it

    window.onclick = function(event) {
      if (event.target == modal) {
        $("#modal").css("display", "none");
        };
      };

    //Listen for DB changes and update
      database.ref().on("child_added", function(childSnapshot) {

});


    }); // end document ready function