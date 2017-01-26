var RESUME = RESUME || {};

( function () {

  RESUME.mailMe = youveGotMail;

  var eventAttached = false,
      shown;

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

  function initEvents() {

    var nothing_to_see_here_move_along = new Konami('secret.html');

    var email_link = window.document.getElementById( "email_me" ),
        show_email_link = window.document.getElementById( "show_email" ),
        hide_email_link = window.document.getElementById( "hide_email" ),
        show_email,
        hide_email;


    show_email = showEmail.bind( show_email_link, true );
    hide_email = showEmail.bind( hide_email_link, false );

    if( email_link != null ) {
      email_link.addEventListener( "click", youveGotMail );
    }

    if( show_email_link != null ) {
      show_email_link.addEventListener( "click", show_email );
    }

    if( hide_email_link != null ) {
      hide_email_link.addEventListener( "click", hide_email );
    }

  }

  function touchInit () {

    if( !eventAttached ) {

      checkVisible();

      console.log( "attaching event listener" );
      window.addEventListener( "scroll", checkVisible );
      eventAttached = true;

    }

  }

  function showEmail ( show, e ) {

    var slider = window.document.getElementById( "email_slide" );

    console.log( 'args' );
    console.log( arguments );
    console.log( "shown :" + show );

    if( show ) {
      slider.classList.add( "shown" );
    }
    else {
      slider.classList.remove( "shown" );
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

  window.onload = initEvents;
  window.document.addEventListener( "touchstart", touchInit );

} () );

