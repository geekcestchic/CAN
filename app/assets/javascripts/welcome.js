$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $("#carousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
});

$('.slot').jSlots({
spinner : '#playBtn',
winnerNumber : 7
});



$(function() {

$.jSlots.defaultOptions = {  
    number : 2,          // Number: number of slots  
    winnerNumber : 1,    // Number: list item number upon which to trigger a win, 1-based index, NOT ZERO-BASED  
    spinner : '',        // CSS Selector: element to bind the start event to  
    spinEvent : 'click', // String: event to start slots on this event  
    onStart : $.noop,    // Function: runs on spin start,  
    onEnd : $.noop,      // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.  
    onWin : $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array, finalNumbers:Array)  
    easing : 'swing',    // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.  
    time : 7000,         // Number: total time of spin animation  
    loops : 6            // Number: times it will spin during the animation  
};  

$('.slot1').jSlots({  
    spinner : '#playBtn',  
    winnerNumber : 7  
}); 

$('.slot2').jSlots({  
    spinner : '#playBtn',  
    winnerNumber : 7  
}); 

$('.slot3').jSlots({  
    spinner : '#playBtn',  
    winnerNumber : 7  
}); 

$('.slot4').jSlots({  
    spinner : '#playBtn',  
    winnerNumber : 7  
}); 

$('.slot5').jSlots({  
    spinner : '#playBtn',  
    winnerNumber : 7  
}); 



function onFormSubmit(event) {
    event.preventDefault();

    if(event.keyCode != 13) {
        return;
    }

    var $this = $(this);

    $this.closest('.nav')
         .find('ul')
         .prepend('<li>'+$this.val()+'</li>');

    $this.val('');
}

$('input').keyup(onFormSubmit);
});