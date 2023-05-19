$(document).ready(function () {
 
  var currentTime = dayjs();
  $("#currentDay").text(currentTime);

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));


  function hourTracker() {
      
      var currentHour = moment().hour();

     
      $(".time-block").each(function () {
          var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
          console.log( blockHour, currentHour)

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