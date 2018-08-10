/* Scroll to Top For User Options on Library */
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#scroll-to-top').click(function () {
            $('#scroll-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        $('#scroll-to-top').tooltip('show');
});
// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');
	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
});

var key = "&api_key=29rwLqlr4kmHUumMiNJgLy0ezgoWpmXJ";          // Giphy key
var urlToAPI = "https://api.giphy.com/v1/gifs/search?q=";       // Giphy URL Search Input
var queryURL = "";                                              // Define queryURL as an Empty String
var topics = ["Flowers", "Lighthouses", "Nature", "Animals",    // Array for Initial Buttons
     "Oceans", "Sunsets", "Reading", "Hobbies", "Sports"
];


var defaultGifs = "nature";
var limit = 24;
function renderButtons(){                                       // Function to go through Array and Render the Buttons to the DOM
    $("#buttons").empty();                                      // Clear Old Buttons before Rendering Again
    for (var i = 0; i < topics.length; i++){                    // For Loop to go through the whole Array
        $("#buttons").append($("<button>")                      // Append a Button Tag to the div with id of Buttons
            .text(topics[i].replace(/[+]/g, " "))               // Puts the Array Title of the Current Index that the For Loop is working through
            .addClass("btn btn-default natureBtn")              // Gives that Button some Bootstrap Classes
            .data("searchInput", topics[i]));                   // Attach a data-searchInput of the Topic indexes Name
    }
}
$(document).on("click", "#submit-button", function(){           // Document Click Event on Element with id of Submit
    event.preventDefault();                                     // Prevents the Submit Button from acting like a Form, which would be its default
    var searchInput = $("#search-term").val()                   // Store the Users Entry Search term as a Variable
        .trim()                                                 // Trim off Leading & Trailing Spaces of the String
        .replace(/\s/g, "+")                                    // Replace Spaces to +
        .replace(/[^A-Za-z0-9+]/g, "");                         // Removes Non Alpha-numeric Characters (except the + symbol)  Found this line of code to remove non alpha
        //.toLowerCase();                                       // Changes all Alpha Characters to Lower Case
    $("#search-term").val('');                                  // Clears the Search Field after a Submit by the User
    console.log(topics);
    // *** VALIDATE THE USER INPUT*** //
    if (topics.indexOf(searchInput) === -1 && (searchInput !== '' && searchInput.match(/[A-Za-z0-9]/))) {
        displayGifs(searchInput);                               // Call the API Function
        topics.push(searchInput);                               // Push the searchInput into the Topics Array
        renderButtons([searchInput]);                           // Call the Render Buttons Function 
    } else {
        // *** ALERT USER *** //
        if (searchInput === '' || searchInput.match(/[^A-Za-z0-9+]/)){   //  Found this line of Code
            // *** INVALID TOPIC ALERT USER NEEDS TO ENTER A NEW TOPIC*** //
            $("#alertPop").append($("box")
                .addClass("alert alert-danger")
                .attr("role", "alert")
                .text("Please Enter a Valid Topic"));
        } else {
            // *** DUPLICATE TOPIC ALERT USER NEEDS TO ENTER A NEW TOPIC *** //
            $("#alertPop").append($("box")
                .addClass("alert alert-danger")
                .attr("role", "alert")
                .text("Duplicate: Please Enter a New Topic"));
        }
    }
});
$(document).on("click", ".natureBtn", function(){                // When Clicking a Populated Button with the natureBtn Class
    displayGifs($(this).data("searchInput"));                    // Call the Display Gifs Function based off the data-searchInput value
});
/*jQuery variable to for gifImages to go into
	      		var gifImage = $('<img>')
	      		gifImage.attr("src", results[i].images.fixed_height_still.url);
	      		gifImage.attr("gif-still", results[i].images.fixed_height_still.url);
	      		gifImage.attr("gif-animate", results[i].images.fixed_height.url);
	      		gifImage.attr("gif-state", "still")
	      		gifImage.addClass('image-gif');
	      		gifDiv.prepend(rated);
	      		gifDiv.prepend(gifImage);
	      		$('.gif-display').append(gifDiv);
	      	}
	      	})
	    });
	},   */
function displayGifs(searchInput){                               // Display Gifs Function will populate the Results area with the Correct Gifs
    queryURL = urlToAPI + searchInput + key;                     // queryURL will be the endpoint + the applicable search term + the public key
    console.log(queryURL);                                       // Used to check that the Total URL is Correct
    $.ajax({                                                     // Ajax Call
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);                                   // Logs the Response JSON of the API Call
        limit = $("#num-records-select").val();
        $("#alertPop").empty();
        $("#results0").empty();                                  // Empty the Previous Contents of the three columns of Gif Results before Populating New Results
        $("#results1").empty();
        $("#results2").empty();
        for (var i = 0; i < limit /*response.data.length*/ ; i++){          // Cycle through the Response
            var newDiv = $("box").addClass("resultBox");                    // Add a new div to house each Gif Result
            var newGif = $("<img>")                                         // Add an Img Tag for each Gif
                .addClass("img-responsive result")                          // Give that Gif a Bootstrap Class for Responsiveness
                .attr("src", response.data[i].images.original_still.url)    // Add a src Attribute with the default Still url
                .data("orig", response.data[i].images.original_still.url)   // Add a data-original with the Still url
                .data("gif", response.data[i].images.original.url)          // Add a data-gif with the Animated url
                .data("mode", "still")                                      // Add a data-mode used to Toggle Play/Pause
                .appendTo(newBox);                                          // Append the Img into the new Box
            var rating = $("box").addClass("rating")
                .text(response.data[i].rating.toUpperCase())
                .appendTo(newDiv);
            var x = i % 3;
            var columnAssign = "#results" + x;                              // Split the results into the 3 columns of GIFS
            $(columnAssign).append(newBox);                                 // Append the newBox into the results area by columns
        }
    });
}
$(document).on("click", ".result", function() {      // Function that when Clicking the Gifs that have the class .result, the Gif will play or pause
    console.log($(this).data("mode"));               // Logs the data-mode of the Gif 
    if ($(this).data("mode") === "still") {          // If the Gif has a Current data-mode of 'still' then run some code
        $(this).attr("src", $(this).data("gif"))     // Change the src attribute of the Clicked Gif to the value of its data-gif
            .data("mode", "animate");                // Change the data-mode to 'animate' so that the next click would run the else statement
    } else {                                         // If the Gif does not have the data-mode value of 'still' run some code: if it is not still it will be animate
        $(this).attr("src", $(this).data("orig"))    // Change the src attribute of the Clicked Gif to the value of its data-orig
            .data("mode", "still");                  // Change the data-mode to 'still' so that the next click would run the if statement
    }
});
$(document).ready(function() {                      // When the Document Loads
    renderButtons(topics);                          // Render the Initial Buttons from the Default Array
    displayGifs(defaultGifs);                       // Display some Default Gifs 
}); 





















var GphApiClient = require('giphy-js-sdk-core')   //Initialize Giphy  
client = GphApiUser("YOUR_API_KEY")

/// Gif Search
client.search('gifs', {"q": "cats"})
  .then((response) => {
    response.data.forEach((gifObject) => {
      console.log(gifObject)
    })
  })
  .catch((err) => {

  })

// Returns a Random GIF from the available GIFS. 

client.random('gifs', {})
  .then((response) => {

  })
  .catch((err) => {

  })
//  Translates Words and phrases to a Gif
client.translate('gifs', {"s": 'cool'})
  .then((response) => {

  })
  .catch((err) => {

  })
