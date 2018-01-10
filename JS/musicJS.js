/* When the page has loaded...*/
$(document).ready(function(){
	
	/* Create a variable storing the current width of a column */
	var originalWidth = $('#customiserColumn').width();
	
	/* If the width of the screen is greater than 600 pixels (desktop site), apply event listeners 
	to each column for both mouse hover and mouse leave events */
	if(self.innerWidth > 600){
		$('#customiserColumn').mouseenter(function(e){
			LeftColumnHover();
		});
	
		$('#spotifyColumn').mouseenter(function(e){
			RightColumnHover();
		});
	
		$('#customiserColumn').mouseleave(function(e){
			LeftColumnLeave();
		});
	
		$('#spotifyColumn').mouseleave(function(e){
			RightColumnLeave();
		});
	}
});

/* If the left column is hovered over, make the column fill 100% of the screen's width and hide the right-hand column */
LeftColumnHover = function(){
	var columnHeight = $('#spotifyColumn').height();
	
	/* An animation is used to make the transition smoother. Queuing is set to false so that all events happen at the same time */
	$('#customiserColumn').animate({
		width:"100vw"
	},{duration:50, queue:false});
	
	/* This ensures that the height of the column does not change */
	$('#customiserColumn').height(columnHeight);
	
	$('#spotifyColumn').hide();
}

/* If the right column is hovered over, make the column fill 100% of the screen's width and hide the left-hand column */
RightColumnHover = function(){
	var columnHeight = $('#spotifyColumn').height();
	
	$('#spotifyColumn').animate({
		width:"100vw"
	},{duration:50, queue:false});
	
	$('#spotifyColumn').height(columnHeight);
	$('#customiserColumn').hide();	
}

/* If the user stops hovering over the left column, set the column's width to be it's previous width, and show the right-hand column */
LeftColumnLeave = function(){
	$('#customiserColumn').animate({
		width:"50vw"
	},{duration:50, queue:false});
	$('#spotifyColumn').show();
}

/* If the user stops hovering over the right column, set the column's width to be it's previous width, and show the left-hand column */
RightColumnLeave = function(){
	$('#spotifyColumn').animate({
		width:"50vw"
	},{duration:50, queue:false});
	$('#customiserColumn').show();	
}



