// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require_tree .
//= require filterrific/filterrific-jquery


$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
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