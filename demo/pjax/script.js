(function(){

	// twitter //////////////////////////////////
	!function(d,s,id){
		var js,
		fjs=d.getElementsByTagName(s)[0],
		p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;
			js.src=p+'://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js,fjs);
		}
	}(document, 'script', 'twitter-wjs');
	// twitter end //////////////////////////////////

	// facebook //////////////////////////////////
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.4";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	// facebook end //////////////////////////////////

	$(function(){

		var $time = $("#time");
		var $blackLayer = $("#blackLayer");
		var $loader = $("#loader");
		var $contentsWrap = $("#contentsWrap");

		// 現在時刻を検証のために表示
		var m = moment();
		var output = m.format("YYYY年MM月DD日 HH:mm:ss dddd");
		$time.text(output);


		// pjaxの設定
		$.pjax({
			area : '.detailSns, #contents',
			link : '.pjaxLink',
			ajax : { timeout: 2500 },
			wait : 200,
			cache: { click: false, submit: false, popstate: false },
			load: { head: 'base, meta, link', css: true, script: true },
			callbacks:{
					ajax : {
						success: function(event, setting, data, textStatus, jqXHR){
							 console.log("ajax.success");
						}
					},
					update : {
						content: {
							after : function( event, setting, srcContent, dstContent ) {
								console.log(srcContent + ': update.content.after');
							}
						}
					}
				}
		});


		// データ取得前に発生するイベントを設定できます。
		$(document).on('pjax:fetch', function(){
			$contentsWrap.addClass("add");
			$blackLayer.fadeIn(200);
			$loader.fadeIn(200);

		});

		// データの取得後、ページの更新前にwindowオブジェクトから発生します。
		$(window).on('pjax:unload', function(){
			console.log("pjax:unload")
		});

		// areaで指定された範囲のDOMの更新後、documentオブジェクトから発生します。
		$(document).on('pjax:DOMContentLoaded', function(){
			console.log("pjax:DOMContentLoaded")
		});

		// すべての更新範囲の描画後、documentオブジェクトから発生します。
		$(document).on('pjax:render', function(){
			console.log("pjax:render")
		});

		// SCRIPT要素を除くすべてのDOMの更新後、documentオブジェクトから発生します。
		$(document).on('pjax:ready', function(){
			console.log("pjax:ready")
		});

		// すべての画像(IMG要素)とフレーム(IFRAME, FRAME要素)の読み込み後、windowオブジェクトから発生します。
		$(window).on('pjax:load', function(){
			console.log("pjax:load")

		});

		// すべての更新範囲の描画後、documentオブジェクトから発生します。
		$(document).on('pjax:render', function(){

			// body のIDを変更
			$("body").attr({
				'id': $("#contents").data('bodyid')
			})

			// twボタンを再描画
			twttr.widgets.load($("#detailSns")[0]);

			// fbボタンを再描画
			FB.XFBML.parse($("#detailSns")[0]);

			// コンテンツ部分を表示
			$blackLayer.fadeOut(300);
			$loader.fadeOut(300,function(){
				$contentsWrap.removeClass("add");
			});

		});


	});

})();