window.onload = function(){
	//Create three variables - one for each of the canvasses making up the customiser
	var backgroundCanvas = document.getElementById('backgroundCanvas');
	var imageCanvas = document.getElementById('imageCanvas');
	var textCanvas = document.getElementById('textCanvas');
	//Manually sets the width and height of each canvas
	backgroundCanvas.width = 600;
	backgroundCanvas.height = 600;
	imageCanvas.width = 500;
	imageCanvas.height = 500;
	textCanvas.width = 500;
	textCanvas.height = 500;
	
	/* Adds an event listener to the background colour selector, image upload button, and 'display text' check box
		If the states of one of these is changed by the user, call the relevant function
	*/
	document.getElementById('backgroundColourButton').addEventListener('change', function(e){
		ChangeBackgroundColour(backgroundCanvas, backgroundCanvas.getContext('2d'));
	});
	
	document.getElementById('albumImageButton').addEventListener('change', function(e){
		DisplayImage(imageCanvas, imageCanvas.getContext('2d'));
	});
	
	document.getElementById('checkBox').addEventListener('change', function(e){
		SetAlbumTitle(textCanvas, textCanvas.getContext('2d'));
	});
	
	//Load and display any previous data shown on canvasses from previous sessions, making use of the localStorage feature
	LocalStorageBackground(backgroundCanvas, backgroundCanvas.getContext('2d'));
	LocalStorageImage(imageCanvas, imageCanvas.getContext('2d'));
	LocalStorageText(textCanvas, textCanvas.getContext('2d'));
}

//Loads and displays the background colour from the last session
function LocalStorageBackground(canvas, context){
	
	//If there is no saved data, don't load anything as this will cause an error
	if(localStorage.getItem("background") !== null){
		var url = localStorage.getItem("background");
		
		/*Create a new image object that will be printed to the background canvas
		and set the source of it to the URL in local storage */
		var background = new Image;
		background.src = url;
		
		//When the image object has loaded, print the background to the canvas
		background.onload = function(){
			context.drawImage(background, 0, 0);
		};
	}
}

//Loads and displays the background image from the last session
function LocalStorageImage(canvas, context){
	
	//If there is no saved data, don't load anything as this will cause an error
	if(localStorage.getItem("image") !== null){
		var url = localStorage.getItem("image");
		
		/*Create a new image object that will be printed to the album image canvas
		and set the source of it to the URL in local storage */
		var albumImage = new Image;
		albumImage.src = url;
		
		//When the image object has loaded, print the album image to the canvas
		albumImage.onload = function(){
			context.drawImage(albumImage, 50, 50, 500, 500);
		};		
	}
}

//Loads and displays the album title from the last session
function LocalStorageText(canvas, context){
	
	//If there is no saved data, don't load anything as this will cause an error
	if(localStorage.getItem("text") !== null){
		var url = localStorage.getItem("text");
		
		/*Create a new image object that will be printed to the album image canvas
		and set the source of it to the URL in local storage */
		var textImage = new Image;
		textImage.src = url;
		
		//When the image object has loaded, print the album title to the canvas
		textImage.onload = function(){
			context.drawImage(textImage, 0, 0);
		};
	}
}

//Changes the background colour of the canvas by getting the value from the colour selector
function ChangeBackgroundColour(canvas, context){
	var colour = document.getElementById('backgroundColourButton').value;
	
	/*The canvas fill style is changed to the value of the colour selector, 
	and a rectangle is drawn to the canvas that fills said canvas */
	context.fillStyle = colour;
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	//The canvas is converted to a data URL and stored in local storage
	localStorage.setItem("background", canvas.toDataURL());
}

//Loads a file from the user's device and displays this on the 'album image' canvas
function DisplayImage(canvas, context){
	var fileReader = new FileReader();
	
	//The filereader.js library is used to get an image from the user
	fileReader.onload = function(event){
		
		//When a new instance of an image object has been created and loaded, the image is drawn onto the canvas
		var albumImage = new Image();
		albumImage.onload = function(){
			context.drawImage(albumImage, 0, 0, albumImage.width, albumImage.height, 50, 50, 500, 500);
		}
		
		//The source of the image is changed to the file that the user uploaded
		albumImage.src = event.target.result;
	}
	
	//The file reader reads the file as a data URL
	fileReader.readAsDataURL(event.target.files[0]);
	
	//The canvas' URL is stored in local storage
	localStorage.setItem("image", canvas.toDataURL());
}

//The value of the 'title button' colour selector is returned
function GetTitleColour(){
	return document.getElementById('titleColourButton').value;
}

//the title of the album is set using this function 
function SetAlbumTitle(canvas, context){
	var checkedValue = document.getElementById('checkBox').checked;
	
	//If the 'display album title' button has been checked, then the title will be displayed
	if(checkedValue == true){
		
		//Request an album title from the user
		var albumTitle = String(prompt("Enter an album title"));
		
		//If the album title is greater than 21 characters in length, a new input will be requested
		while(albumTitle.length > 21){
			albumTitle = prompt("An album title cannot be longer than 21 characters. Try again");
		}
		
		//A standard font and font size is used
		context.font = "30px verdana, sans-serif";
		
		//The colour of the text is changed to the one the user selected
		context.fillStyle = GetTitleColour();
		
		//The text is printed to the canvas
		context.fillText(albumTitle, 50, 50);	
	} else{
		
		/*If the user does not want to display an album title, clear the part of the canvas that would normally display the title
		this is to clear any previous title from the screen */
		context.clearRect(25, 25, canvas.width, 50);
	}
	
	//Store the album title in local storage
	localStorage.setItem("text", canvas.toDataURL());
}