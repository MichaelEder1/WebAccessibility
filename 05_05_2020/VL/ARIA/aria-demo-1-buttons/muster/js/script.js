$( document ).ready(function() {

    $( "#pushButton" ).click(function(e) {
        pushButtonTriggerAction();
    });

    $( "#pushButton" ).keydown(function(e) {

        if (e.key === " " || e.key === "Enter") {

            pushButtonTriggerAction();
        }
    });

    $( "#toggleButton" ).click(function() {
        toggleButtonTriggerAction();
    });

    $( "#toggleButton" ).keydown(function(e) {

        if (e.key === " " || e.key === "Enter") {
            toggleButtonTriggerAction();
            //Button was pressed
        }
    });


});


function pushButtonTriggerAction(){

    alert("Hello!");
}

function toggleButtonTriggerAction() {

    if($( "#toggleButton" ).hasClass( "button_pressed" )){

        $( "#toggleButton" ).removeClass("button_pressed");
        $("#toggleButton").attr("aria-pressed", "false");

    }else{

        $( "#toggleButton" ).addClass("button_pressed");
        $("#toggleButton").attr("aria-pressed", "true");
    }

}