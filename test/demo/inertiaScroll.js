(function($){
  $.fn.inertiaScroll = function(options,parent){

    var $window = $(window);
    var $body = $("body");
    var $parent = $(parent);
    var $this = this;

    var move = 0; // 親要素のスクロール量
    var moveChild = 0; // 親要素のスクロール量
    var windowOffset = 0;　// ウィンドウの今のオフセット
    var oldOffset = 0;　// ウィンドウの前のオフセット
    var subtraction = 0; // スクロール量の差
    var rateArray = []; // それぞれの要素の慣性の倍率を格納する

    var settings = $.extend({
      transitionDuration:"1.5s",
      moveRate: 0.09
    },options);

    $this.each(function(){
      var dur = $(this).data("dur");
      $(this).css({
//        "transitionDuration": dur + "s"
        });
    });
    $parent.css({
      "position":"fixed",
 //       "transitionDuration": 0.8 + "s"
    });

    function test(){
        windowOffset = $window.scrollTop();
        subtraction = windowOffset - oldOffset;
        move = move + subtraction;
        moveChild = moveChild + subtraction * settings.moveRate
        oldOffset = windowOffset;

        console.log(moveChild)
        $parent.css({transform:"translate3d(" + 0 + "," + -move  + "px ," + 0 +")"});

        $this.each(function(i){
            $(this).css({transform:"translate3d(" + 0 + "," + -moveChild  + "px ," + 0 +")"});
        });
        requestAnimationFrame(test)

    }
   test();


  $window
    .on("load.inertiaScroll",function(){
      $body.height($parent.height());
    });
  };
})(jQuery);