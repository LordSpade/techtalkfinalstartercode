// JavaScript File
// JavaScript File
$(document).ready(function(){
$( "#founderButton" ).click(function() {
    var founderInput = $("#founder").val();
    if (founderInput === "Steve Jobs" || "Ronald Wayne" || "Steve Wozniak") {
        alert("You are correct");
    }else{
        alert("Oops, Try again");
    
    }

});

});