// Declare Users     Users that will be seen if someone enters an email and password correctly
var users = [
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
       role: "advanced"}];

// Save References to the Password and email fields
var emailInput = $("#email");
var passwordInput = $("#password");

// Add an Event Listener to the submit button that will fire a function called logIn()
button.addEventListener ("click", function() {
  alert("Logged In Successfully!");
});

const searchUserElement = document.querySelector('#js-search-query');
const searchItemsButton  = document.querySelector('#js-filter-items');
const searchableItems    = document.querySelectorAll('.searchable');
const sortBy             = document.querySelector('#js-sort-by');
const listContainer      = document.querySelector('#js-list');


// Search button callback
searchItemsButton.addEventListener('click', filterItems);

// function for filtering the list items and displaying the correct items
function filterItems() {
  let searchParam = searchInputElement.value.toLowerCase();
  searchableItems.forEach((listItem) => {
    let itemName = listItem.dataset.name.toLowerCase();
    if (-1 == itemName.indexOf(searchParam)) {
      listItem.classList.add('hidden');
    } else {
      listItem.classList.remove('hidden');
    }
  });
}

// Callback for sorting the items
sortBy.addEventListener('change', function(event) {
  // Need to convert to an array, since we can't call sort on a NodeList
  itemsArray = Array.prototype.slice.call(searchableItems, 0);
  // Sort the array of nodes
  itemsArray = itemsArray.sort(function(a, b) {
    let aVal = ('name' == sortBy.value) ? a.dataset.name.toLowerCase() : a.dataset.index;
    let bVal = ('name' == sortBy.value) ? b.dataset.name.toLowerCase() : b.dataset.index;
    return aVal > bVal;
  });
  // Empty the list of items and re-add everything in the sorted order
  listContainer.innerHTML = ''
  itemsArray.forEach((item, index) => {
    listContainer.append(item);
  });
});

//Log In function should see if a user with email exists in Users constant   
function validate(){
var userEmail = document.getElementById("email").value;
var userPassword = document.getElementById("password").value;
if ( userEmail == "" && userPassword == ""){
alert ("Login Successfully");
window.location = "libraryPage.html"; // Redirecting to Library Page.
return false;
}
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
    
// Accesses Local Storage object and adds a data item into it using localStorage.setItem();
`localStorage.setItem('user', filteredUser[0])`;


