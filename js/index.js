/**
 * index.js
 * Paul Krishnamurthy 2016
 *
 * https://paulkr.com
 * paul@paulkr.com
 */

$(document).ready(function () {

  function clearAll () {

    var elems = [
      "squareFlash",
      "vortex",
      "bouncingBalls",
      "shootingLines",
      "simpleGradient",
      "starfield",
      "layeredTriangles",
      "cornerSpikes",
      "floatingBoxes"
    ];

    for (var i = 0; i < elems.length; i++) {
      $("#" + elems[i]).hide();
    }
  }

  clearAll();

  $("#bouncingBalls").show();

  $("#Wrapper").quietflow({
    theme          : "bouncingBalls",
    specificColors : [
      "rgba(255, 10, 50, .5)", 
      "rgba(10, 255, 50, .5)", 
      "rgba(10, 50, 255, .5)", 
      "rgba(0, 0, 0, .5)"
    ]
  });

  $(".effects").change(function () {

    effect = $(".effects").find(":selected").text();

    if (effect == "starfield") {
      clearAll();

      $("#starfield").show();
      $("#Wrapper").quietflow({
        theme : "starfield"
      });

    } else if (effect == "squareFlash") {
      clearAll();

      $("#squareFlash").show();
      $("#Wrapper").quietflow({
        theme      : "squareFlash",
        squareSize : 20,
        maxRed     : 255,
        maxGreen   : 40,
        maxBlue    : 100,
        speed      : 80
      });

    } else if (effect == "vortex") {
      clearAll();

      $("#vortex").show();
      $("#Wrapper").quietflow({
        theme     : "vortex",
        miniRadii : 40
      });

    } else if (effect == "bouncingBalls") {
      clearAll();

      $("#bouncingBalls").show();
      $("#Wrapper").quietflow({
        theme          : "bouncingBalls",
        specificColors : ["rgba(255, 10, 50, .5)", 
                          "rgba(10, 255, 50, .5)", 
                          "rgba(10, 50, 255, .5)", 
                          "rgba(0, 0, 0, .5)"]
      });

    } else if (effect == "shootingLines") {
      clearAll();

      $("#shootingLines").show();
      $("#Wrapper").quietflow({
        theme         : "shootingLines",
        backgroundCol : "#141C26",
        lineColor     : "#05E0E0",
        lineGlow      : "#00ff00"
      })

    } else if (effect == "simpleGradient") {
      clearAll();

      $("#simpleGradient").show();
      $("#Wrapper").quietflow({
        theme   : "simpleGradient",
        primary : "#B066FE",
        accent  : "#63E2FF"
      });

    } else if (effect == "layeredTriangles") {
      clearAll();

      $("#layeredTriangles").show();
      $("#Wrapper").quietflow({
        theme : "layeredTriangles"
      });

    } else if (effect == "cornerSpikes") {
      clearAll();

      $("#cornerSpikes").show();
      $("#Wrapper").quietflow({
        theme          : "cornerSpikes",
        backgroundCol  : "#34495E",
        specificColors : ["#009245", "#FCEE21"]
      });

    } else {
      clearAll();

      $("#floatingBoxes").show();
      $("#Wrapper").quietflow({
        theme          : "floatingBoxes",
        specificColors : ["rgba(46, 204, 113, .5)", 
                          "rgba(52, 152, 219, .5)", 
                          "rgba(231, 76, 60, .5)", 
                          "rgba(155, 89, 182, .5)", 
                          "rgba(241, 196, 15, .5)"],
        boxCount       : 500,
        backgroundCol  : "#34495E"
      });
    }
  });

})
