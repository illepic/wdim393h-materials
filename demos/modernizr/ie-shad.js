if (!Modernizr.textshadow) {
  // [default] reading the current style automatically
  $('h1').textshadow();

  // creates the HTML structure but doesn't try to apply the styles
  $('h1').textshadow({useStyle: false});

  // normal
  $('h1').textshadow('2px 2px 2px #000');

  // multiple shadows
  $('h1').textshadow('2px 2px 2px #0f0, 4px 4px 2px #f00, 6px 6px 2px #00f');

  // rgba
  $('h1').textshadow('2px 2px 2px rgba(0, 0, 0, 0.5)');

  // hsla
  $('h1').textshadow('2px 2px 2px hsla(0, 100%, 54%, .5)');

  alert('ieshad got loaded');
}