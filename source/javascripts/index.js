var RESUME = {};

(function () {
  'use strict';

  RESUME.mailMe = youveGotMail;

  var eventAttached = false,
    shown;

  function checkVisible(e) {
    var buffer,
        elements = window.document.getElementsByClassName("job_history"),
        element,
        height = window.clientHeight || window.innerHeight,
        rect;

    buffer = height / 4;

    elements.forEach(function (element) {
      rect = element.getBoundingClientRect();

      if (rect.top > 0 && (rect.top + buffer) < height) {
        return;
      }
      else {
        element = null;
      }
    });

    if (shown != null && shown != element) {
      shown.classList.remove("hovered");
    }

    if (element != null) {
      shown = element;
      shown.classList.add("hovered");
    }
  }

  function initEvents() {
    var nothing_to_see_here_move_along = new Konami('secret.html');

    var sendEmail = window.document.getElementById("email_slide"),
        showEmail = window.document.getElementById("show_email"),
        hideEmail = window.document.getElementById("hide_email"),
        showFunction,
        hideFunction;


    showFunction = showEmailButton.bind(showEmail, true);
    hideFunction = showEmailButton.bind(hideEmail, false);

    if (sendEmail != null) {
      sendEmail.addEventListener("click", youveGotMail);
    }

    if (showEmail != null) {
      showEmail.addEventListener("click", showFunction);
    }

    if (hideEmail != null) {
      hideEmail.addEventListener("click", hideFunction);
    }
  }

  function touchInit() {
    if (!eventAttached) {
      checkVisible();
      window.addEventListener("scroll", checkVisible);
      eventAttached = true;
    }
  }

  function showEmailButton(show, e) {
    e.stopPropagation();

    var slider = window.document.getElementById("email_slide");

    if (show) {
      slider.classList.add("shown");
    }
    else {
      slider.classList.remove("shown");
    }
  }

  function youveGotMail() {
    var coded = "YnhExxdL@qYyEv.nUY",
      key = "HAtLcDvPMUwhKdi0rjp7BInZmJGg5fVWEa2QN3T8xuY96q4bSFlyzoXkRse1CO",
      shift = coded.length,
      link = "";

    var ltr;

    for (var i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) == -1) {
        ltr = coded.charAt(i);
        link += (ltr);
      }
      else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
        link += (key.charAt(ltr));
      }
    }

    var mailTo = "mailto:" + link;
    window.location.href = mailTo;
    console.log(mailTo);
    return false;
  }

  window.onload = initEvents;
  window.document.addEventListener("touchstart", touchInit);

}());

