var RESUME = RESUME || {};

( function () {

  RESUME.mailMe = youveGotMail;

  var shown;

  function checkVisible( e ) {

    var buffer,
        elements = window.document.getElementsByClassName( "job_history" ),
        element,
        event,
        height = window.clientHeight || window.innerHeight,
        rect;

    buffer = height / 4;

    for( var i = 0; i < elements.length; i++ ) {

      element = elements[ i ];
      rect = element.getBoundingClientRect();

      if( rect.top > 0 && ( rect.top + buffer ) < height ) {
        break;
      }
      else {
        element = null;
      }

    }

    if( shown != null && shown != element ) {
      shown.classList.remove( "hovered" );
    }

    if( element != null ) {
      shown = element;
      shown.classList.add( "hovered" );
    }

  }

  var eventAttached = false;
  function touchInit () {

    if( !eventAttached ) {
      console.log( "attaching event listener" );
      window.addEventListener( "scroll", checkVisible );
      eventAttached = true;
    }

  }

  function youveGotMail () {

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

  }



  window.document.addEventListener( "touchstart", touchInit );

  window.onload = checkVisible;

} () );

