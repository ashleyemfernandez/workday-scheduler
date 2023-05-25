$(document).ready(function () {
 
  var currentTime = dayjs();
  $("#currentDay").text(currentTime);

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));


  function hourTracker() {
      
      var currentHour = moment().hour();

     
      $(".time-block").each(function () {
          var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
          console.log(timeBlock, currentHour)

          if (timeBlock < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (timeBlock === currentHour) {
              $(this).addClass("present");
              $(this).removeClass("past");
              $(this).removeClass("future");
          }
          else {
              $(this).addClass("future");
              $(this).removeClass("present");
              $(this).removeClass("past");
          }
      })
  }
  hourTracker();

  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var timeStamp = $(this).parent().attr("id");

    
    localStorage.setItem(timeStamp, text);
})
})