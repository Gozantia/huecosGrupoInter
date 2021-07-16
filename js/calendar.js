jQuery.datetimepicker.setLocale("es");
$(document).ready(function () {
    var d = new Date();
           var currMonth = d.getMonth();
           var currYear = d.getFullYear();
           var startDate = new Date(currYear, currMonth, 1);
  var options = {
    allowTimes: [
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ],
    minDate: 0,
    startDate:new Date(),
    inline:true,
    mask:'9999/19/39',
    format:'Y/m/d H:i',
    // yearEnd: 2021,
    roundTime: 'round',
    disabledWeekDays: [0],
    changeYear: true,
    yearStart: '2020',
    yearEnd: '2021',
  };
  jQuery("#datetimepicker").datetimepicker(options);
});

