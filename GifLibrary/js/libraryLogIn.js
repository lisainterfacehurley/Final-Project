//Users that will be seen if someone enters an email and password correctly
const USERS = [
      {email: "steveg@example.com", 
       password: "PaSsWoRd", 
       birthday: "2000-09-30 00:00:00",
       role: "basic"},
      {email: "hanneM@example.com", 
       password: "hanneRules!", 
       birthday: "1980-04-15 00:00:00",
       role: "basic"},
      {email: "lindaG@example.com", 
       password: "lg014589", 
       birthday: "2012-01-03 00:00:00",
       role: "admin"},
      {email: "nEsposito@example.it", 
       password: "pswd1234", 
       birthday: "1975-03-23 00:00:00",
       role: "advanced"},
      {email: "draganP@example.hr", 
       password: "volimbaku", 
       birthday: "1995-06-06 00:00:00",
       role: "advanced"}]
// Accesses Local Storage object and adds a data item into it using Storage.setItem();
localStorage.setItem(user, userObject);

//Add a click Listener to the submit button that will fire a function called logIn()
document.getElementById("logIn").addEventListener.onclick("logIn");

//Log In function should see if a user with email exists in Users constant   I still do not know how to code this filter section
var user = user.filter;

userPassword = user.val;

if userEmail && userPassword{
    return
}

// After checking both email and password,  If a user with that email exists, check to see if the case sensitive password matches one for user.

$(document).ready(function(){
   $("#textNewEmail, #textConfirmEmail").keyup(checkEmailMatch);
    return user.email.toLowerCase == .toLowerCase;
});


// If the user's email is authenticated and true, the user will be automatically sent to the Library Page
if(logInEmail.getAttribute("authenticated")!=null && logInEmail.getAttribute("authenticated").equals(true)){
   return("./libraryPage.html");
}

//if errors, add error to errorContainer
else{
    errorContainer.append("Email or Password is incorrect!");
}

// Clear all Items in Error Container
errorContainer.clear();

localStorage.clear();







/* save Data Values for email, password, logIn, errorContainer 
localStorage.setItem("email", "password", "logIn", "errorContainer");

retrieve Data Values for email, password, logIn, errorContainer 
var logInData = localStorage.getItem("logInData");



/*window.onload = function(){
    $("#showPassword").hide();
}

$("#textPassword").on('change',function(){  
		if($("#textPassword").val()){
			$("#showPassword").show();
		}
		else{
			$("#showPassword").hide();
		}
});

$(".reveal").on('click',function(){
    var $pwd = $("#textPassword");
    if ($pwd.attr('type') === 'password'){
        $pwd.attr('type', 'text');
    } 
		else{
        $pwd.attr('type', 'password');
    }
});
*/










