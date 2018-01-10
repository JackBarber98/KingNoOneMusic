/* When the document has loaded, check if a thumbnail has been clicked */
$(document).ready(function(){
	CheckIfThumbClick();
});

CheckIfThumbClick = function(){
	
	/* If the user pressed a thumbnail image... */
	$('.videoThumbs').click(function(e){
		if($(e.target).is('img')){
			var thumbClicked = e.target;
			var thumbClickedID = e.target.id;
			var thumbClickedSrc = $(thumbClicked).attr('src');
			var thumbClickedAlt = $(thumbClicked).attr('alt');
		
			var mainVideo = $('.mainVideo');
			var mainVideoID = mainVideo.attr('id');
			var mainVideoPoster = mainVideo.attr('poster');
			var mainVideoAlt = mainVideo.attr('alt');
		
			var thumbCaptionElement = 'figcaption#'+thumbClickedID;
			
			/* Change the id, source, poster, and alternative text of the main video to that of the thumbnail*/
			$(mainVideo).attr('id', thumbClickedID);
			$(mainVideo).attr('src', 'Assets/' + thumbClickedID + '.mp4');
			$(mainVideo).attr('poster', thumbClickedSrc);
			$(mainVideo).attr('alt', thumbClickedAlt);
		
			/* Change the id, source, poster, and alternative text of the thumbnail to that of the main video*/
			$(thumbClicked).attr('id', mainVideoID);
			$(thumbClicked).attr('src', mainVideoPoster);
			$(thumbClicked).attr('alt', mainVideoAlt);
		}
	});
}