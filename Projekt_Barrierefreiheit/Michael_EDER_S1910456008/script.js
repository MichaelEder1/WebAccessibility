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

	/*Checkboxes erforderlich machen - (funktioniert leider nicht)
	let checkedBoxes = $("input[type='checkbox']:checked");
	if (checkedBoxes.size()>0) alert("Bitte mind. eine Auswahl treffen");
	 */
	//console.log($("input[type='checkbox']"));
});