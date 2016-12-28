(function($){
  $.fn.inertiaScroll = function(options){

    //////////////////////////////////////////////////
    // options
    //////////////////////////////////////////////////

    var settings = $.extend({
      parent: "",
      val1: 0.02,
      val2: 0.1,
      val3: 0.08
    },options);


    //////////////////////////////////////////////////
    // jqeury object
    //////////////////////////////////////////////////

    var $window = $(window);
    var $body = $('body');
    var $parent = settings.parent;
    var $child = this;

    //////////////////////////////////////////////////
    // inertiaScroll　childClass
    //////////////////////////////////////////////////

    var ChildBox = function(elm, offset = 0, speed = 1, margin = 0){
      this.elm = elm;
      this.offset = offset;
      this.speed = speed;
      this.margin = margin;
    }
    ChildBox.prototype.update = function(windowOffset,offsetBottom = 0){
        this.offset += (windowOffset * settings.val1 * Number(this.speed) - this.offset) * settings.val2;
        this.elm.css({transform:'translate3d(' + 0 + ',' + ( Number(this.margin) - Number(this.offset) ) + 'px ,' + 0 +')'});        
    }

    //////////////////////////////////////////////////
    // inertiaScroll　parentClass
    //////////////////////////////////////////////////

    var ParentBox = function(elm, offset = 0, speed = 1.0, margin = 0){
        ChildBox.apply(this,arguments);
    }
    ParentBox.prototype = Object.create(ChildBox.prototype,{
      constructor:{
        value: ParentBox
      }
    });
    ParentBox.prototype.update = function(windowOffset){
        this.offset += (windowOffset - this.offset) * settings.val3;
        this.elm.css({transform:'translate3d(' + 0 + ',' + -this.offset  + 'px ,' + 0 +')'});
    }
    ParentBox.prototype.setcss = function(){
      this.elm.css({
        'width':'100%',
        'position':'fixed'
      });
    }

    //////////////////////////////////////////////////
    // make Object
    //////////////////////////////////////////////////

    var Boxes = function(){
      this.ChildBox = [];
      this.ChildBoxLength = 0;
      this.ParentBox = "";
      this.windowHeight = 0;
    }
    Boxes.prototype = {
      init:function(){        
        this.createElm($child,$parent);
        this.loop();
      },
      createElm:function(child,parent){
        this.ParentBox = new ParentBox(parent,0,1);
        this.ParentBox.setcss();
        this.boxArrayLength = child.length;
        for (var i = 0; i < this.boxArrayLength; i++) {
          var e = child.eq(i);
          var speed = e.data("speed");
          var margin = e.data("margin");
          this.ChildBox.push(new ChildBox(e,0,speed,margin));
        }
      },
      smoothScroll:function(){
        var windowOffset = $window.scrollTop();
        var offsetBottom = windowOffset + this.windowHeight;
        this.ParentBox.update(windowOffset);
        for (var i = 0; i < this.boxArrayLength; i++) {
          this.ChildBox[i].update(windowOffset,offsetBottom);
        }
      },
      loop:function(){
        this.smoothScroll();
        window.requestAnimationFrame(this.loop.bind(this));
      }
    }

    //////////////////////////////////////////////////
    // Done
    //////////////////////////////////////////////////
    $(function(){
      $body.height($parent.height());
      var boxes = new Boxes();
      boxes.init();
    });

    return this;

  };
})(jQuery);
