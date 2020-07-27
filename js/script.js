//toggle effect in the what we do section
$(document).ready(function() {
  $(".design").click(function() {
    $("#design-desc").toggle();
    $("#fig-des").slideToggle(1000);
  });
});
$(document).ready(function() {
  $(".development").click(function() {
    $("#dev-paragraph").toggle();
    $("#fig-dev").slideToggle(1000);
  });
});
$(document).ready(function() {
  $(".product-mgmt").click(function() {
    $("#prod-paragragh").toggle();
    $("#fig-prod").slideToggle(1000);
  });
});

//Hover mouse effect in the portfolio section
$(document).ready(function() {
  $(".work-portfolio1").mouseenter(function() {
      $("#overlay1").show();
  });
  $(".work-portfolio1").mouseleave(function() {
      $("#overlay1").hide();
  });
  $(".work-portfolio2").mouseenter(function() {
      $("#overlay2").show();
  });
  $(".work-portfolio2").mouseleave(function() {
      $("#overlay2").hide();
  });
  $(".work-portfolio3").mouseenter(function() {
      $("#overlay3").show();
  });
  $(".work-portfolio3").mouseleave(function() {
      $("#overlay3").hide();
  });
  $(".work-portfolio4").mouseenter(function() {
      $("#overlay4").show();
  });
  $(".work-portfolio4").mouseleave(function() {
      $("#overlay4").hide();
  });
  $(".work-portfolio5").mouseenter(function() {
      $("#overlay5").show();
  });
  $(".work-portfolio5").mouseleave(function() {
      $("#overlay5").hide();
  });
  $(".work-portfolio6").mouseenter(function() {
      $("#overlay6").show();
  });
  $(".work-portfolio6").mouseleave(function() {
      $("#overlay6").hide();
  });
  $(".work-portfolio7").mouseenter(function() {
      $("#overlay7").show();
  });
  $(".work-portfolio7").mouseleave(function() {
      $("#overlay7").hide();
  });
  $(".work-portfolio8").mouseenter(function() {
      $("#overlay8").show();
  });
  $(".work-portfolio8").mouseleave(function() {
      $("#overlay8").hide();
  });
})

//Getting data from user through the form
function userMessage() {
    let name = document.getElementById("name").value;
    document.getElementById("mc-embedded-subscribe-form").addEventListener("submit", function(event) {

    if(document.getElementById("name").value==""){
        alert("Please enter your name");
        return false;
    }else if(document.getElementById("email").value==""){
        alert("Please enter an email address");
        return false;
    }else if(document.getElementById("comment").value==""){
        alert("Please enter a valid comment");
        return false;
    }else{
        alert(`Thank you for your feedback ${name}`)
    }
    event.preventDefault();
});
};