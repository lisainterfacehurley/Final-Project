/* Product Reviews from Customers An Array */
var arr=[
  {
    "name": "Dragan Perković",
    "rating": 2,
    "reviewDate": "03/12/2018",
    "comments": "They didn't have enough bear gifs. What's the point if they don't have enough bears?!?!"
  },
  {
    "name": "Frank Metzger",
    "rating": 3,
    "reviewDate": "03/02/2018",
    "comments": "Does exactly what it says it will do so good job!"
  },
  {
    "name": "Corinne Quessy",
    "rating": 5,
    "reviewDate": "05/21/2018",
    "comments": "All the cats I could ever want best site EVER!!!!!!"
  },
  {
    "name": "Hannah Harvey",
    "rating": 3,
    "reviewDate": "05/30/2018",
    "comments": "Highly reccomended if you need a ton of gifs."
  },
  {
    "name": "Kayla Bannan",
    "rating": 5,
    "reviewDate": "06/21/18",
    "comments": "What are you waiting for!?!? Sign up now!!!"
  },
  {
    "name": "Tyrone H. Singleton",
    "rating": 3,
    "reviewDate": "04/01/18",
    "comments": "It's ok I guess if this is your thing."
  },
  {
    "name": "Nazario Esposito",
    "rating": 1,
    "reviewDate": "06/30/2018",
    "comments": "I signed up without reading the terms and conditions and didn't realize I would have to pay for this. What the heck!?!"
  },
  {
    "name": "Edvin Nordström",
    "rating": 4,
    "reviewDate": "07/15/2018",
    "comments": "Easy to use, highly reccomended."
  },
  {
    "name": "Anisa Lind",
    "rating": 2,
    "reviewDate": "04/15/18",
    "comments": "Dumb...."
  },
  {
    "name": "Linda Genovesi",
    "rating": 5,
    "reviewDate": "01/12/18",
    "comments": "Great site. Perfect 5/7"
  },
  {
    "name": "Gail S. Brown",
    "rating": 4,
    "reviewDate": "02/25/18",
    "comments": "4/5 stars"
  },
  {
    "name": "Lauren Hayes",
    "rating": 4,
    "reviewDate": "06/06/18",
    "comments": "Just renewed my membership, tots worth it!"
  },
  {
    "name": "Hanne Madsen",
    "rating": 4,
    "reviewDate": "08/01/18",
    "comments": "Love this site!"
  },
  {
    "name": "Steve Grabowski",
    "rating": 5,
    "reviewDate": "02/02/18",
    "comments": "It's a library for gifs just like the advertisement. I mean what else did you want from it?"
  },
  {
    "name": "Reginald J. Farnsworth",
    "rating": 1,
    "reviewDate": "06/18/18",
    "comments": "This isn't the XBOX remote I ordered! What the frick?"
  }
];
/* Remove Any Reviews Lower than 3 Stars */
var ratingLargerThan2 = arr.filter(function(element){
    return element.rating > 2;
});
/* Replace Full Name with First Name Only */
function splitName(user){
       var name = user.name.split(" ");
       user.firstName = name[0];
       user.lastName = name[1];
       return user;
     }
/* Render Data with First Name, Rating, Comments and Dates Using Maps */
var reviewDate = dateReview.map(function(aDate){
       aDate =
           return aDate;
});
/* Allow Users to Sort Reviews by Date or Rating */
arr.sort(function(a, b){
    return a.rating + b.rating;
});


/* If User Submits, Compile all of the Form Information to an Object and Log it to the console before closing the Modal */
const handleFormSubmit = event => {
 event.preventDefault();
   const data = {};  //Call to get form data
   dataContainer.textContent = JSON.stringify(data, null, "  ");  // Use `JSON.stringify()` to make the output valid JSON.
   const handleFormSubmit = event => {
  };
const form = document.getElementsByClassName('contact-form')[0];    /* Get form element, attach the `handleFormSubmit()` function to the submit` event. */
form.addEventListener('submit', handleFormSubmit); 
const formToJSON = elements => [].reduce.call(elements, (data, element){   /* Retrieves input data from a form and returns it as a JSON object. */
  data[element.name] = element.value;
  return data;
}, {});

