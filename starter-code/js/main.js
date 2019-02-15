
    // Utilize the date class and also the css property rotate, float or flex
    console.log("test")

$(document).ready(function(){
 
    setInterval(digitalClock12, 1000);
    setInterval(digitalClock24, 1000);
    setInterval(analogClock, 1000);




    function analogClock(){
        var time = new Date();
        var secondsAnalog = time.getSeconds();
        var minutesAnalog = time.getMinutes();
        var hoursAnalog = time.getHours();   
        $(".second_hand").css("transform", "rotate("+(secondsAnalog)*6+"deg)");
        $(".minute_hand").css("transform", "rotate("+(minutesAnalog)*6+"deg)");
        $(".hour_hand").css("transform", "rotate("+(hoursAnalog%12)*30+"deg)")  
    }

    

    $( "#btn" ).click(function() {
        $( ".digi_clock12" ).toggle("slow");
      });

    $( "#btn" ).click(function() {
    $( ".digi_clock" ).toggle("slow");
    });


    function digitalClock12(){

        var currentTime = new Date();

        let hour = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();

        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;
        sec = (sec < 10 ? "0" : "") + sec;

        hour = (hour > 12) ? hour - 12 : hour;
        var AMPM = (hour > 12) ? "PM" : "AM";

        hour = (hour == 0) ? 12 : hour;
  

        var time12 = `${hour} : ${min} : ${sec} ${AMPM}`;

        $(".digi_clock12").html(time12);

    
    }


    function digitalClock24(){

        var currentTime = new Date();

        let hour = currentTime.getHours();
        let min = currentTime.getMinutes();
        let sec = currentTime.getSeconds();

        hour = (hour < 10 ? "0" : "") + hour;
        min = (min < 10 ? "0" : "") + min;
        sec = (sec < 10 ? "0" : "") + sec;


        var time24 = `${hour} : ${min} : ${sec} `;

        $(".digi_clock").html(time24);

    
    }




})


