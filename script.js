$(function() {

    // Center the flag

    var height = $(window).height();
    var margins = Math.max(0,height - 60 /* top */ - 400 /* flag */ - 120 /* foot */) / 2;
    $('#flag').css({ 'margin': margins + 'px auto' });

    // Cycle through flag colors

    var cycle = [ "blue" , "white" , "red" ], current = 0, auto = true;

    function doCycle() {
	if (!auto) return;
	$("#flag").removeClass(cycle[current]);
	current = (current + 1) % 3;
	$("#flag").addClass(cycle[current]);
    }   
    
    function cycleTo(pos) {
	auto = false;
	if (current == pos) return;
	$("#flag").removeClass(cycle[current]);
	current = pos;
	$("#flag").addClass(cycle[current]);
    }
    
    setInterval(doCycle, 10000);
    
    $("#flag").children().click(function(){
	var pos = $(this).prevAll().length;
	cycleTo(pos);
    });
    
    // Send the e-mail on the server
    
    var contact = "http://m2014.fr/post-contact";
    
    function postContact(email) {
	if (!email) return;
	$.post(contact,{m2014:"DemandeSiteM2014",email:email},function(){});      
	$("#contact").addClass("sent");
    }
    
    $("#contact form").submit(function(){
	postContact($('input').val());
	return false;
    });
    
});

