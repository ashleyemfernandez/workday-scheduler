var saveButton = document.querySelector("saveBtn");
var currentHour = dayjs().format('hh-mm-ss');


var today = dayjs().format; 
$('#currentDay').text(today.format('MMM D, YYYY'));

function time() {
  $(".time-block").each(function() {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

time();





$(".saveBtn") () {
savebtn.addEventListener('click'), function () { 
localStorage.setItem("saved") 
}

