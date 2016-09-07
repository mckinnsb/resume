var RESUME = RESUME || {};

( function () {

  RESUME.mailMe = function() {

    var coded = "YnhExxdL@qYyEv.nUY",
        key = "HAtLcDvPMUwhKdi0rjp7BInZmJGg5fVWEa2QN3T8xuY96q4bSFlyzoXkRse1CO",
        shift=coded.length,
        link="";

    for (i=0; i<coded.length; i++) {
      if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i)
        link += (ltr)
      }
      else {
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        link += (key.charAt(ltr))
      }
    }

    window.location.href = "mailto:"+link;

  };

  window.document.addEventListener( "touchstart", function() {} );

} () );

