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

    $this.each(function(){
      var dur = $(this).data("dur");
      rateArray.push(dur);
    });
    $parent.css({
      "position":"fixed"
    });

    function smoothScroll(){
        windowOffset = $window.scrollTop();
        move += (windowOffset - move) * 0.1
        moveChild += (windowOffset - moveChild) * 0.03
        $parent.css({transform:"translate3d(" + 0 + "," + -move  + "px ," + 0 +")"});
        $this.each(function(i){
            $(this).css({transform:"translate3d(" + 0 + "," + -(moveChild + moveChild * rateArray[i] * 0.01)  + "px ," + 0 +")"});
        });
        requestAnimationFrame(smoothScroll)
    }
   smoothScroll();

  $window
    .on("load.inertiaScroll",function(){
      $body.height($parent.height());
    });
  };
})(jQuery);