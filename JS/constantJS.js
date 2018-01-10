$(document).ready(function(){
  $('#open').click(function(){
    $.fn.CheckIcon();
  })
});

/*Checks the symbol being displayed in the mobile menu and decide what action to take */
$.fn.CheckIcon = function(){
	
	/* If the burger menu is not open and the website is being viewed on a mobile,
	open the menu when the icon is pressed*/
	if($('#open').text() == '☰' && window.innerWidth < 600){
		$.fn.OpenNav();
	} else{
		
		/* If the burger menu is open, close the menu when the icon is pressed*/
		$.fn.CloseNav();
	}
}

/*If the menu is to be opened, change the symbol from  ☰ to ✕ and expand the menu */
$.fn.OpenNav = function() {
  $('#open').text('✕');
  $('#bottom').css('display', 'block');
  $('#bottom').width('60vw');
  $('html, body').css({
    overflow:'hidden',
    height:'100%'
});
}

/*If the menu is to be opened, change the symbol from ✕ to ☰ and collapse the menu */
$.fn.CloseNav = function(){
  $('#open').text('☰');
  $('#bottom').width('0');
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
});
}

