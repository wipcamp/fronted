"use strict";function loaded(){function e(e,t){$("body").width()<=1500?s=1500*Math.random()-800:$("body").width()>1500&&$("body").width()<=2e3?s=2e3*Math.random()-1300:$("body").width()>2e3&&$("body").width()<=2560&&(s=3700*Math.random()-1300);var o=1.5*Math.random()+2;TweenMax.fromTo(e,o,{css:{left:s,top:"-30%"}},{css:{left:s+h,top:"100%"},delay:2.5,onComplete:function(){m(t,o)}})}function t(e,t){$("body").width()<=1500?r=1500*Math.random()-800:$("body").width()>1500&&$("body").width()<=2e3?r=2e3*Math.random()-1300:$("body").width()>2e3&&$("body").width()<=2560&&(r=3700*Math.random()-1300);var o=1.5*Math.random()+1;TweenMax.fromTo(e,o,{css:{left:r,top:"-30%"}},{css:{left:r+h,top:"100%"},delay:2.5,onComplete:function(){f(t,o)}})}function o(e,t){$("body").width()<=1500?d=1500*Math.random()-800:$("body").width()>1500&&$("body").width()<=2e3?d=2e3*Math.random()-1300:$("body").width()>2e3&&$("body").width()<=2560&&(d=3700*Math.random()-1300);var o=1.5*Math.random()+.5;TweenMax.fromTo(e,o,{css:{left:d,top:"-30%"}},{css:{left:d+h,top:"100%"},delay:2.5,onComplete:function(){y(t,o)}})}function a(e,t){$("body").width()<=1500?c=1500*Math.random()-800:$("body").width()>1500&&$("body").width()<=2e3?c=2e3*Math.random()-1300:$("body").width()>2e3&&$("body").width()<=2560&&(c=3700*Math.random()-1300);var o=1.5*Math.random()+2;TweenMax.fromTo(e,o,{css:{left:c,top:"-30%"}},{css:{left:c+h,top:"90%"},delay:2.5,onComplete:function(){u(t,o)}})}function i(e,t){$("body").width()<=1500?l=1500*Math.random()-800:$("body").width()>1500&&$("body").width()<=2e3?l=2e3*Math.random()-1300:$("body").width()>2e3&&$("body").width()<=2560&&(l=3700*Math.random()-1300);var o=1.5*Math.random()+1;TweenMax.fromTo(e,o,{css:{left:l,top:"-30%"}},{css:{left:l+h,top:"90%"},delay:2.5,onComplete:function(){w(t,o)}})}function n(e,t){$("body").width()<=1500?p=1500*Math.random()-800:$("body").width()>1500&&$("body").width()<=2e3?p=2e3*Math.random()-1300:$("body").width()>2e3&&$("body").width()<=2560&&(p=3700*Math.random()-1300);var o=1.5*Math.random()+.5;TweenMax.fromTo(e,o,{css:{left:p,top:"-30%"}},{css:{left:p+h,top:"90%"},delay:2.5,onComplete:function(){v(t,o)}})}TweenMax.to(".pre-logo .img-logo.img-logo-bottom",1,{css:{transform:"scale(.2) rotate(180deg)",opacity:0},delay:2}),TweenMax.to(".pre-logo .img-logo.img-logo-top",1,{css:{transform:"scale(.2)",opacity:0},delay:2}),TweenMax.to("#preload",3,{css:{opacity:0},delay:2,onComplete:function(){$("#preload").remove()}}),TweenMax.from(".section .what",1,{css:{left:"44%",top:"39%",opacity:0},delay:3}),TweenMax.from(".section .who",1,{css:{left:"44%",top:"39%",opacity:0},delay:3.2}),TweenMax.from(".section .when",1,{css:{left:"44%",top:"39%",opacity:0},delay:3.4}),TweenMax.from(".section .where",1,{css:{right:"44%",top:"39%",opacity:0},delay:3.6}),TweenMax.from(".section .faqs",1,{css:{right:"44%",top:"39%",opacity:0},delay:3.8}),TweenMax.from(".section .contact",1,{css:{right:"44%",top:"39%",opacity:0},delay:4}),TweenMax.from(".section .description",1.5,{css:{opacity:0},delay:4.8}),TweenMax.from(".layout .town-front",1.5,{css:{bottom:"-100%"},delay:5.2}),TweenMax.from(".layout .town-mid",1.5,{css:{bottom:"-100%"},ease:Back.easeOut.config(.8),delay:5.8}),TweenMax.from(".layout .town-back",1.5,{css:{bottom:"-100%"},ease:Back.easeOut.config(.8),delay:6}),TweenMax.from(".sec-sponser",1.5,{css:{bottom:"-100%"},ease:Back.easeOut.config(.7),delay:6}),TweenMax.from(".layout .header",2,{css:{top:"-100%"},delay:5.5}),TweenMax.to(".reg",2,{css:{opacity:1,visibility:"visible"},delay:7}),TweenMax.to(".star-front",2,{css:{opacity:1,visibility:"visible"},delay:7}),TweenMax.to(".star-mid",2,{css:{opacity:1,visibility:"visible"},delay:8}),navigator.userAgent.toLowerCase().indexOf("firefox")<=-1&&TweenMax.to(".star-back",2,{css:{opacity:1,visibility:"visible"},delay:9});var s,r,d,c,l,p,h;$("body").width()<=1500?h=1e3:$("body").width()>1500&&$("body").width()<=2e3?h=1100:$("body").width()>2e3&&$("body").width()<=2560&&(h=1600);var m=function(t){$(t).css({left:s+h}),$(t).addClass("active"),setTimeout(function(){$(t).removeClass("active"),e(".ds1",".exp1")},2500)},f=function(e){$(e).css({left:r+h}),$(e).addClass("active"),setTimeout(function(){$(e).removeClass("active"),t(".ds2",".exp2")},2500)},y=function(e){$(e).css({left:d+h}),$(e).addClass("active"),setTimeout(function(){$(e).removeClass("active"),o(".ds3",".exp3")},2500)},u=function(e){$(e).css({left:c+h}),$(e).addClass("active"),setTimeout(function(){$(e).removeClass("active"),a(".ds-b1",".exp-b1")},2500)},w=function(e){$(e).css({left:l+h}),$(e).addClass("active"),setTimeout(function(){$(e).removeClass("active"),i(".ds-b2",".exp-b2")},2500)},v=function(e){$(e).css({left:p+h}),$(e).addClass("active"),setTimeout(function(){$(e).removeClass("active"),n(".ds-b3",".exp-b3")},2500)};setTimeout(function(){e(".ds1",".exp1")},9007),setTimeout(function(){t(".ds2",".exp2")},9264),setTimeout(function(){o(".ds3",".exp3")},14305),setTimeout(function(){a(".ds-b1",".exp-b1")},7291),setTimeout(function(){i(".ds-b2",".exp-b2")},13238),setTimeout(function(){n(".ds-b3",".exp-b3")},8599)}/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&window.location.replace("http://wip.camp/m"),$(document).ready(function(e){function t(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");t>0&&$("head").append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');var o=e.indexOf("Trident/");o>0&&$("head").append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />');var a=e.indexOf("Edge/");return a>0&&$("head").append('<link rel="stylesheet" href="assets/css/ie.css" type="text/css" />'),!1}function o(){$(".modal").hasClass("active")&&(TweenMax.to(".modal",.8,{css:{transform:"scale(8)",opacity:0,visibility:"visible"},onComplete:function(){$(".modal").remove()}}),TweenMax.to(".overlay",.8,{className:"-=active"}))}function a(){if(console.log(i+" "+n),$(i).hasClass("active")&&1==n){var e=i;console.log("item"+e),$(e).hasClass("left")?TweenMax.to(e,1,{left:"-100%",ease:SlowMo.easeIn}):$(e).hasClass("right")?TweenMax.to(e,1,{right:"-100%",ease:SlowMo.easeIn}):(TweenMax.to(e,1,{right:"-100%",ease:SlowMo.easeIn}),TweenMax.to(".pop-where .image-wippo",1,{css:{left:"-200%",opacity:0}})),TweenMax.to(e,1,{className:"-=active",delay:1}),TweenMax.to(".overlay",1,{className:"-=active"}),TweenMax.to("#scene",1,{transform:"scale(1)"}),n--,$(".loy-outer").removeClass("loyBig"),$(".loy-outer").removeClass("delay"),$(".inner-descript").removeClass("upText"),$("#line").removeClass("when"),i=""}}$("body").wipLoader(),t(),$("#scene").parallax({limitY:1});var i,n=0;$(".sec").click(function(e){e.stopPropagation();var t=$(this).data("sec");i=".pop-"+t,0==n&&($(i).hasClass("left")?(TweenMax.to($(i),1,{left:"0%",delay:.2,ease:SlowMo.easeOut}),$(i).addClass("active")):$(i).hasClass("right")?TweenMax.to($(i),1,{right:"0%",delay:.2,ease:SlowMo.easeIn}):(TweenMax.to($(i),1,{right:"0%",delay:.2,ease:SlowMo.easeIn}),TweenMax.to(".pop-where .image-wippo",1,{css:{left:0,opacity:1}})),TweenMax.to(".overlay",1,{className:"+=active"}),TweenMax.to(i,1,{className:"+=active",delay:.2}),TweenMax.to("#scene",2,{transform:"scale(1.4)"}),n++)}),$(".close-easter").click(function(){$(".easter").removeClass("fadeInRight animated"),$(".easter").addClass("fadeOutRight animated"),setTimeout(function(){TweenMax.to(".easter",1,{css:{opacity:0,visibility:"hidden"}}),$(".easter").removeClass("fadeOutRight animated")},1e3),key=0}),$(" .overlay , .triangle , .exit").click(function(){a()}),$(document).keydown(function(e){27==e.keyCode&&(a(),o(),TweenMax.to(".easter",1,{css:{opacity:0,visibility:"hidden"}}))}),$(".exit_modal,.overlay").click(function(){o(),TweenMax.to(".easter",1,{css:{opacity:0,visibility:"hidden"}})}),$(".accordion").click(function(){$(this).next().is(":visible")?$(".accContent").not($(this).next()).slideUp("600"):$(".accContent").slideUp("600"),1==$(this).next().is(":hidden")&&$(this).next().slideDown("600")}),$(".accContent").hide(),$(".accContent.first").show(),$(".when").click(function(){$(".loy1").find(".loy-outer,.inner-descript").addClass("loyBig"),$(".loy-outer").addClass("delay"),$("#line").addClass("when"),$(".inner-descript").addClass("upText")}),$(".reg").click(function(){TweenMax.to(".pre-redirect",1,{css:{opacity:1,visibility:"visible"}}),TweenMax.to(".pre-redirect",1,{className:"+=active",delay:1}),TweenMax.from(".pre-redirect h1",1,{css:{transform:"scale(.8)",opacity:0},delay:.3})}),$(".pre-redirect").click(function(){$(this).hasClass("active")&&(TweenMax.to(".pre-redirect",1,{css:{opacity:0}}),TweenMax.to(".pre-redirect",1,{css:{visibility:"hidden"},delay:1}),TweenMax.to(".pre-redirect",1,{className:"-=active",delay:1}))})}),function(e){function t(e){this.parent=e,this.container,this.loadbar,this.percentageContainer}function o(e){this.toPreload=[],this.parent=e,this.container}function a(e){this.element,this.parent=e}function i(a,i){this.element=a,this.$element=e(a),this.options=i,this.foundUrls=[],this.destroyed=!1,this.imageCounter=0,this.imageDone=0,this.alreadyLoaded=!1,this.preloadContainer=new o(this),this.overlayLoader=new t(this),this.defaultOptions={onComplete:function(){},onLoadComplete:function(){},backgroundColor:"#000",barColor:"#fff",overlayId:"qLoverlay",barHeight:1,percentage:!1,deepSearch:!0,completeAnimation:"fade",minimumTime:1e3},this.init()}t.prototype.updatePercentage=function(t){e(".img-logo-bottom").stop().animate({height:t/100*318},600),e(".pre-percent").html(Math.ceil(t)+"%")},o.prototype.create=function(){this.processQueue()},o.prototype.processQueue=function(){for(var e=0;this.toPreload.length>e;e++)this.parent.destroyed||this.preloadImage(this.toPreload[e])},o.prototype.addImage=function(e){this.toPreload.push(e)},o.prototype.preloadImage=function(e){var t=new a;t.addToPreloader(this,e),t.bindLoadEvent()},a.prototype.addToPreloader=function(t,o){this.element=e("<img />").attr("src",o),this.element.appendTo(t.container),this.parent=t.parent},a.prototype.bindLoadEvent=function(){var e=this.element.attr("src");if("assets/img/emblem/wippppp_blank.png"!=e&"assets/img/emblem/wippppp_loaded.png"!=e){this.parent.imageCounter++,this.element.removeAttr("src");var t=this;setTimeout(function(){t.element.on("load error",t,function(e){e.data.completeLoading()}),t.element.attr("src",e)},1)}},a.prototype.completeLoading=function(){this.parent.imageDone++;var e=this.parent.imageDone/this.parent.imageCounter*100;this.parent.overlayLoader.updatePercentage(e),this.parent.imageDone==this.parent.imageCounter&&this.parent.endLoader()},i.prototype.init=function(){if(this.options=e.extend({},this.defaultOptions,this.options),this.findImageInElement(this.element),1==this.options.deepSearch)for(var t=this.$element.find("*:not(script)"),o=0;o<t.length;o++)this.findImageInElement(t[o]);this.preloadContainer.create()},i.prototype.findImageInElement=function(t){var o="",i=e(t),n="normal";if("none"!=i.css("background-image")?(o=i.css("background-image"),n="background"):"undefined"!=typeof i.attr("src")&&"img"==t.nodeName.toLowerCase()&&(o=i.attr("src")),!this.hasGradient(o)){o=this.stripUrl(o);for(var s=o.split(", "),r=0;r<s.length;r++)if(this.validUrl(s[r])&&this.urlIsNew(s[r])){var d="";if(this.isIE()||this.isOpera())d="?rand="+Math.random(),this.preloadContainer.addImage(s[r]+d);else if("background"==n)this.preloadContainer.addImage(s[r]+d);else{var c=new a(this);c.element=i,c.bindLoadEvent()}this.foundUrls.push(s[r])}}},i.prototype.hasGradient=function(e){return-1==e.indexOf("gradient")?!1:!0},i.prototype.stripUrl=function(e){return e=e.replace(/url\(\"/g,""),e=e.replace(/url\(/g,""),e=e.replace(/\"\)/g,""),e=e.replace(/\)/g,"")},i.prototype.isIE=function(){return navigator.userAgent.match(/msie/i)},i.prototype.isOpera=function(){return navigator.userAgent.match(/Opera/i)},i.prototype.validUrl=function(e){return e.length>0&&!e.match(/^(data:)/i)?!0:!1},i.prototype.urlIsNew=function(e){return-1==this.foundUrls.indexOf(e)?!0:!1},i.prototype.destroyContainers=function(){this.destroyed=!0,this.preloadContainer.container.remove(),this.overlayLoader.container.remove()},i.prototype.endLoader=function(){this.destroyed=!0,this.onLoadComplete()},i.prototype.onLoadComplete=function(){this.options.onLoadComplete(),e(".pre-percent").fadeOut(1e3),loaded()},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length>>>0,o=Number(arguments[1])||0;for(o=0>o?Math.ceil(o):Math.floor(o),0>o&&(o+=t);t>o;o++)if(o in this&&this[o]===e)return o;return-1}),e.fn.wipLoader=function(e){return this.each(function(){new i(this,e)})}}($);
