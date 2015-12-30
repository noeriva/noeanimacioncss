$(document).ready(function() { 
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    event.preventDefault();
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    
    $('#slider ul li:last-child').prependTo('#slider ul');
    event.preventDefault();

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };


//function moveLeft(selector) {
  //     $(selector).animate({
    //       left: + slideWidth
      // }, 200, function () {
        //   $(selector + ' li:last-child').prependTo(selector);
          // $(selector).css('left', '');
       // });
  // };


    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    var slideCount = $('#slidercuadros ul li').length;
    var slideWidth = $('#slidercuadros ul li').width();
    var slideHeight = $('#slidercuadros ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slidercuadros').css({ width: slideWidth, height: slideHeight });
    
    $('#slidercuadros ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slidercuadros ul li:last-child').prependTo('#slidercuadros ul');

    function moveLeft() {
        $('#slidercuadros ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slidercuadros ul li:last-child').prependTo('#slidercuadros ul');
            $('#slidercuadros ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slidercuadros ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slidercuadros ul li:first-child').appendTo('#slidercuadros ul');
            $('#slidercuadros ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});