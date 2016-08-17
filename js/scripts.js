$("#form").submit(function(event) {
  event.preventDefault();

  var year = $("input#leapYear").val();
  console.log(year)

  leapYear = 0;

  if (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)) {
    console.log("True");
    $(".result").text(year + " is a leap year.")
  }
  else  {
    console.log("False")
    $(".result").text(year + " is not a leap year.")

  }
})
