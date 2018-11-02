// array with movie titles 
//var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Lord of The Rings', 'Harry Potter'];

// array of movie id's
var randomMovieArray = ['tt0800080', 'tt0111161', 'tt0068646', 'tt0468569'];

function apiCall() {

    var randomNumber = Math.floor((Math.random() * randomMovieArray.length -1) + 1);
    var randomMovie = randomMovieArray[randomNumber];

    //choose between either titles, or ID's, I am using ID's here
    $.getJSON('https://www.omdbapi.com/?apikey=d7a28dd2&i=' + encodeURI(randomMovie)).then(function(response)
    //$.getJSON('http://www.omdbapi.com/?apikey=d7a28dd2&t=' + encodeURI(randomMovie)).then(function(response)
    
    
    {
        //console.log(response);
        console.log(response.Year);

        // console.log(response.Title);
        var title = response.Title;
        var year = response.Year;
        //If there is no poster available then:
        if(title !== "N/A" || "undefined"){
            $('#title').text(title);
            $('#year').text(year);
        }

        //console.log(response.Runtime);
        var runtime = response.Runtime;
        //If there is no runtime avaiable then:
        if(runtime !== "N/A" || "undefined"){
            $('#duration').text(runtime);
        }
        
        //console.log(response.Poster);
        var image = response.Poster;
        //If there is no poster available then:
        if(image !== "N/A" || "undefined"){
            $('#poster').attr('src', image);
        }

        //console.log(response.Plot);
        var plot = response.Plot;
        //If there is no plot available then:
        if(plot !== "N/A" || "undefined"){
            $('#plot').text(plot);
        }

        //console.log(response.Ratings[0].Value);
        var rating = response.Ratings[0].Value;
        if(rating !== "N/A" || "undefined"){
            $('#IMDb-btn').text("IMDb " + rating);
        }

        //console.log(response.Ratings[0].Value);
        var rating = response.Ratings[1].Value;
        if(rating !== "N/A" || "undefined"){
            $('#RT-btn').text("Rotten " + rating);
        }
    });
}


// Run the function on page load
$( document ).ready(function() {
    apiCall();
});

// Run the function on #next-btn click
//  TODO: Replacing text not working...
$( "#next-btn" ).click(function() {
    // alert( "Handler for .click() called." );
    $('#preloader-text').text("New text");
    location.reload();
});

//

window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });