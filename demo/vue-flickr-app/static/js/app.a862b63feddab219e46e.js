webpackJsonp([1],{"0w0q":function(t,e){},"4Vo1":function(t,e){},"991W":function(t,e){},Eu7k:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=(a("991W"),a("Dd8w")),s=a.n(i),o=a("uUlv"),r={name:"MainTitle",computed:s()({},Object(o.a)(["page","pages","text"]))},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"flickerapp-MainTitle"},[t._v("Flicker Photo List")]),t._v(" "),t.page&&t.pages?a("h2",{staticClass:"flickerapp-Count"},[t._v("\n    「"+t._s(t.text)+"」: "+t._s(t.page)+"ページ / 全"+t._s(t.pages)+"ページ中\n  ")]):t._e()])},staticRenderFns:[]};var l={name:"App",components:{"main-title":a("VU/8")(r,c,!1,function(t){a("ei1q")},"data-v-3111a9bd",null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("main-title"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=a("VU/8")(l,p,!1,function(t){a("QwRz")},null,null).exports,f=a("/ocq"),d=a("NYxO"),_={name:"PhotoList",data:function(){return{}},methods:s()({},Object(d.d)(["setCurrent"]),{load:function(t){t.path[0].classList.add("is-load")}}),computed:s()({},Object(d.e)(["photos"])),filters:{cutText:function(t){return t.length>25?t.substr(0,25)+"...":t}},mounted:function(){this.setCurrent({current:""})}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"flickerapp-PhotoList"},t._l(t.photos.photo,function(e){return a("li",{key:e.id,staticClass:"flickerapp-PhotoList_child"},[a("router-link",{attrs:{to:{name:"detail",params:{id:e.id}}}},[a("dl",[a("dt",[a("img",{attrs:{src:e.url_sq,alt:e.title,height:"150"},on:{load:t.load}})]),t._v(" "),a("dd",[t._v(t._s(t._f("cutText")(e.title)))])])])],1)}))])},staticRenderFns:[]};var h=a("VU/8")(_,g,!1,function(t){a("0w0q")},"data-v-3fc331fa",null).exports,v={name:"SearchBox",computed:{text:{get:function(){return this.$store.getters.text},set:function(t){this.$store.commit("setText",{text:t})}}},methods:s()({},Object(d.b)(["getIndexData"]))},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flickerapp-SearchBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"flickerapp-SearchBox_input",attrs:{type:"text",placeholder:"Flickerで検索したい文字を入力"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),a("button",{staticClass:"flickerapp-SearchBox_button",on:{click:function(e){t.getIndexData()}}},[t._v("\n    search\n  ")])])},staticRenderFns:[]};var k=a("VU/8")(v,m,!1,function(t){a("uARp")},"data-v-74e69961",null).exports,x={computed:s()({},Object(d.c)(["page","pages"]),Object(d.e)(["photos"])),methods:s()({},Object(d.b)(["getIndexData"]))},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.photos?a("div",{staticClass:"flickerapp-Pagenation"},[t.page>=2?a("a",{staticClass:"flickerapp-Pagenation_prev",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getIndexData(t.page-1)}}},[t._v("< 前へ")]):t._e(),t._v(" "),a("ul",{staticClass:"flickerapp-Pagenation_List"},[t.page>=3?a("li",{staticClass:"flickerapp-Pagenation_ListChild"},[a("a",{staticClass:"flickerapp-Pagenation_ListLink",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getIndexData(t.page-2)}}},[t._v(t._s(t.page-2))])]):t._e(),t._v(" "),t.page>=2?a("li",{staticClass:"flickerapp-Pagenation_ListChild"},[a("a",{staticClass:"flickerapp-Pagenation_ListLink",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getIndexData(t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),t.page>=1?a("li",{staticClass:"flickerapp-Pagenation_ListChild"},[a("b",{staticClass:"flickerapp-Pagenation_ListLink current"},[t._v(t._s(t.page))])]):t._e(),t._v(" "),t.pages-t.page>=1?a("li",{staticClass:"flickerapp-Pagenation_ListChild"},[a("a",{staticClass:"flickerapp-Pagenation_ListLink",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getIndexData(t.page+1)}}},[t._v(t._s(t.page+1))])]):t._e(),t._v(" "),t.pages-t.page>=2?a("li",{staticClass:"flickerapp-Pagenation_ListChild"},[a("a",{staticClass:"flickerapp-Pagenation_ListLink",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getIndexData(t.page+2)}}},[t._v(t._s(t.page+2))])]):t._e()]),t._v(" "),t.pages-t.page>=1?a("a",{staticClass:"flickerapp-Pagenation_next",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getIndexData(t.page+1)}}},[t._v("次へ >")]):t._e()]):t._e()},staticRenderFns:[]};var P={name:"PageIndex",components:{photolist:h,searchbox:k,pagenation:a("VU/8")(x,C,!1,function(t){a("rlXa")},null,null).exports}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flickerapp-PageIndex"},[e("searchbox"),this._v(" "),e("pagenation"),this._v(" "),e("photolist")],1)},staticRenderFns:[]};var b=a("VU/8")(P,D,!1,function(t){a("4Vo1")},"data-v-40d0ccae",null).exports,L=(a("v8QE"),{name:"PageDetail",components:{BallBeatLoader:a("CYu0").a},computed:s()({makeUrl:function(){var t=this.current;return t?"https://farm"+t.farm+".staticflickr.com/"+t.server+"/"+t.id+"_"+t.secret+".jpg":""}},Object(d.e)(["current"])),methods:s()({},Object(d.b)(["getDetailData"]),{load:function(t){t.path[0].classList.add("is-load")}}),mounted:function(){this.getDetailData({id:this.$route.params.id})}}),j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flickerapp-PageDetail"},[a("h2",{staticClass:"flickerapp-PageDetail_title"},[t._v("detail")]),t._v(" "),a("p",{staticClass:"flickerapp-PageDetail_id"},[t._v("ID: "+t._s(t.$route.params.id))]),t._v(" "),t.current?a("figure",{staticClass:"flickerapp-PageDetail_photo"},[a("img",{attrs:{src:t.makeUrl,alt:""},on:{load:t.load}})]):a("div",{staticClass:"loading"},[a("BallBeatLoader",{attrs:{color:"#000000",size:"20px"}})],1),t._v(" "),a("div",{staticClass:"flickerapp-PageDetail_topLink"},[a("router-link",{attrs:{to:"/"}},[t._v("topへ戻る")])],1)])},staticRenderFns:[]};var I=a("VU/8")(L,j,!1,function(t){a("Eu7k")},"data-v-710b6e4d",null).exports;n.a.use(f.a);var O=new f.a({base:"/demo/vue-flickr-app",routes:[{name:"index",path:"/",component:b},{name:"detail",path:"/:id(\\d+)",component:I}]}),w=a("mtWM"),E=a.n(w),R="1e2e200960ca1738278340cd312dcc87",$="https://api.flickr.com/services/rest/";n.a.use(d.a);var U=new d.a.Store({state:{photos:"",current:"",text:""},getters:{text:function(t){return t.text},pages:function(t){return!(!t.photos||!t.photos.pages)&&t.photos.pages},page:function(t){return!(!t.photos||!t.photos.page)&&t.photos.page}},mutations:{setText:function(t,e){var a=e.text;t.text=a},setPhotos:function(t,e){var a=e.photos;t.photos=a},setCurrent:function(t,e){var a=e.current;t.current=a}},actions:{getIndexData:function(t,e){var a=t.state,n=t.commit;(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return E.a.get($,{params:{method:"flickr.photos.search",api_key:R,text:t,format:"json",nojsoncallback:1,extras:"url_sq",per_page:10,page:e}})})(a.text,e).then(function(t){"ok"===t.data.stat?n("setPhotos",{photos:t.data.photos}):n("setPhotos",{photos:""})}).catch(function(t){console.log(t)})},getDetailData:function(t,e){var a=t.commit;(function(t){return E.a.get($,{params:{method:"flickr.photos.getInfo",api_key:R,photo_id:t,format:"json",nojsoncallback:1,extras:"url_o"}})})(e.id).then(function(t){"ok"===t.data.stat&&a("setCurrent",{current:t.data.photo})})}}}),F=a("9JMe");Object(F.sync)(U,O),n.a.config.productionTip=!1,new n.a({el:"#app",router:O,store:U,components:{App:u},template:"<App/>"})},QwRz:function(t,e){},ei1q:function(t,e){},rlXa:function(t,e){},uARp:function(t,e){},v8QE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a862b63feddab219e46e.js.map