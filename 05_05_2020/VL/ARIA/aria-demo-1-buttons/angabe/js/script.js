$( document ).ready(function() {

    $( "#pushButton" ).click(function() {
        pushButtonTriggerAction();
    });

    $( "#toggleButton" ).click(function() {
        toggleButtonTriggerAction();
    });


});


function pushButtonTriggerAction(){

    alert("Hello!");
}

function toggleButtonTriggerAction() {

    if($( "#toggleButton" ).hasClass( "button_pressed" )){

        $( "#toggleButton" ).removeClass("button_pressed");

    }else{

        $( "#toggleButton" ).addClass("button_pressed");
    }

}