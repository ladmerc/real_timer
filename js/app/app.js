var bgTimer = {


//Initialize Variables to hold hours, minutes and seconds
  init: function () {
    bgTimer.date = new Date();
    bgTimer.hours = bgTimer.date.getHours();
    bgTimer.minutes = bgTimer.date.getMinutes();
    bgTimer.seconds = bgTimer.date.getSeconds();
  },


//Add a leading zero for hours, minutes and seconds that are less than 10. Example, 8 becomes 08
  addZero: function () {
    bgTimer.init();
    if(bgTimer.hours < 10) {
      bgTimer.hours = "0" + bgTimer.hours;
    }
    if(bgTimer.minutes < 10) {
      bgTimer.minutes = "0" + bgTimer.minutes;
    }
    if(bgTimer.seconds < 10) {
      bgTimer.seconds = "0" + bgTimer.seconds;
    }
    bgTimer.time = bgTimer.hours + ":" + bgTimer.minutes + ":" + bgTimer.seconds;
  },

  //Choose the background Image, from a set of images available, depending on the hour of the day
  selectBackgroundForTime: function () {
    bgTimer.addZero();

    if(bgTimer.hours >= 20 && bgTimer.hours > 16) {
      if(bgTimer.hours >= 23) {
        $("body").css({
          background: "url('img/night.gif')",
          backgroundSize: "cover"
        });
      }
      else {
        $("body").css({
          background: "url('img/nightt.gif')",
          backgroundSize: "cover"
        });
      }
    }

    if(bgTimer.hours < 8) {
      if(bgTimer.hours <= 5) {
        $("body").css({
          background: "url('img/nighty.gif')",
          backgroundSize: "cover"
        });
      }
      else {
        $("body").css({
          background: "url('img/sunrise2.gif')",
          backgroundSize: "cover"
        });
      }
    }

    if(bgTimer.hours >= 8 && bgTimer.hours <16) {
      if(bgTimer.hours <= 10) {
        $("body").css({
          background: "url('img/sunr.gif')",
          backgroundSize: "cover"
        });
      }
      else {
        $("body").css({
          background: "url('img/sunny.gif')",
          backgroundSize: "cover"
        });
        $('h3').css("color", "black");
      }
    }

    if(bgTimer.hours >= 16 && bgTimer.hours < 20) {
      if(bgTimer.hours < 18) {
        $("body").css({
          background: "url('img/sunset.gif')",
          backgroundSize: "cover"
        });
      }
      else {
        $("body").css({
          background: "url('img/dusk2.gif')",
          backgroundSize: "cover"
        });
      }
    }
    
  },


//Having selected a suitable background image, update the input's value with the new time and update body background
  getTime: function () {
    bgTimer.selectBackgroundForTime();
    $("input").val(bgTimer.time);  
    bgTimer.updateTime();
  },

//Repeat the getTime process every 1s. This is to automate the process instead of manually refreshing the page
  updateTime: function () {
    setInterval(bgTimer.getTime, 1000);
  }


};

bgTimer.getTime();
