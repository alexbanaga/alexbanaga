window.onload = function onLoad() {

  $('#one').delay(0).fadeIn(500);
  $('#two').delay(200).fadeIn(500);
  $('.location').delay(300).fadeIn(300);
  $('.current').delay(400).fadeIn(300);
  $('.past').delay(500).fadeIn(300);
  $('.quote-container').delay(600).fadeIn(300);
  $('.social-list-container').delay(700).fadeIn(300);
  $('.me').delay(1100).fadeIn(1500);

  var loopTime = 7000;

  var bar = new ProgressBar.Line(slider, {
      strokeWidth: 0.2,
      easing: 'easeInSine',
      duration: 7000,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#B6C0C4'},
      to: {color: '#444B4E'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      }
  });

  function repeatQuote() {
    bar.set(0.0);

    bar.animate(1.0, {
        duration: loopTime
    });
  }

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    const fadeInTime = 800;
    const fadeOutTime = 300;
    const extraTime = 50;

    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
        .fadeIn(fadeInTime)
        .delay(loopTime - fadeInTime - fadeOutTime - extraTime)
        .fadeOut(fadeOutTime);
  }

  function timeout() {
    showNextQuote();
    repeatQuote();
    setTimeout(function() {
      timeout();
    }, loopTime);
  }

  timeout()
};
