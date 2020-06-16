
 

 fetch ("https://official-joke-api.appspot.com/random_joke")

       .then(function(joke){
	 return joke.json();
})
	.then(function(API){
		showJoke(API);
	})
    .catch(function(error){
	 console.log(error);
 })

function showJoke(jokeline){
document.querySelector(".container").innerHTML += 
	        '<h2>' + jokeline.type + " Joke" + '</h2>' +
	        '<div class="jokesetup">'+ jokeline.setup  +'</div>' +
            '<div class="joke punchline">'+ jokeline.punchline + '</div>' 
}




 
  