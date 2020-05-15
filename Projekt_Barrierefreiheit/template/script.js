$(document).ready(function ()
{
	
	//Seitenbereichsmenü
	let menu = $("#skip_menu")
	
	//Menü einblenden bei Fokussierung
	menu.focusin(function ()
	{
		$(this).removeClass('hide');
	});
	
	//Menü ausblenden bei Defokussierung
	menu.focusout(function ()
	{
		$(this).addClass('hide');
	});
});