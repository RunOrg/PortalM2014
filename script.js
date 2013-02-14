$(function() {
  var height = $(window).height();
  var margins = Math.max(0,height - 60 /* top */ - 400 /* flag */ - 120 /* foot */) / 2;
  $('#flag').css({ 'margin': margins + 'px auto' });

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
  
  setInterval(doCycle, 5000);
  
  $("#flag").children().click(function(){
    var pos = $(this).prevAll().length;
	cycleTo(pos);
  });
});

