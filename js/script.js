$(document).ready(function(){
  $(".design").click(function(){
    $("#design-desc").toggle();
    $("#fig-des").slideToggle(1000);
  });
});
$(document).ready(function(){
  $(".development").click(function(){
    $("#dev-paragraph").toggle();
    $("#fig-dev").slideToggle(1000);
  });
});
$(document).ready(function(){
  $(".product-mgmt").click(function(){
    $("#prod-paragragh").toggle();
    $("#fig-prod").slideToggle(1000);
  });
});


//Getting data from user
function userMessage(){
  document.getElementById("formSubmit").addEventListener("click", function(event){
    event.preventDefault();
    let userName = document.getElementById("name").value;
    console.log(userName);
    let userEmail = document.getElementById("email").value;
    console.log(userEmail);
    let userMessage = document.getElementById("message").value;
    console.log(userMessage);
  
    if(userName && userEmail && userMessage){
      alert(`Thank you for your feed back ${userName}.`);
    }else{
      alert("Please confirm your credentials.");
    }
  });
}