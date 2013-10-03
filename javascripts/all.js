 (function ($) {
  var hideEffect = { opacity: 0 };
  var showEffect = { opacity: 1 };
  
  if (!$.support.opacity) {
  hideEffect = { };
  showEffect = { };
  }
  
  var Orbiter = function ($sourceElement, options) {
  this.$sourceElement = $sourceElement;
  this.options = options;
  
  this.$sourceElement
  .css({ cursor: this.options.loadTrigger === 'click' ? 'pointer' : undefined })
  .disableSelection();
  
  this.$container = $(document.createElement('div'))
  .addClass('orbiter')
  .css({
       display: 'inline-block',
       position: 'relative'
       })
  .disableSelection()
  .data('orbiter', this);
  
  this.$featureBoxContainer = $(document.createElement('div'))
  .css({
       display: 'block',
       position: 'absolute',
       left: 0,
       right: 0,
       top: 0,
       bottom: 0
       })
  .hide()
  .css(hideEffect)
  .gxInit({ queue: 'cancel' })
  .appendTo(this.$container);
  
  this.rotationCount = options.rotationCount;
  this.rotationsPerFrame = options.rotationsPerFrame;
  this.pixelsPerRotation = options.pixelsPerRotation;
  this.features = this.options.features;
  
  this.frameImages = [ ];
  this.featureBoxes = { };
  
  this.isLoaded = false;
  
  this.bind();
  };
  
  Orbiter.prototype = {
  updateViewer: function () {
  throw 'Implement updateViewer in a subclass';
  },
  
  getViewer$: function () {
  throw 'Implement getViewer$ i na subclass';
  },
  
  bind: function () {
  var orbiter = this;
  
  function isLeftMouseButton(e) {
  if ($.browser.msie) {
  return e.button === 1;
  }
  
  return e.button === 0;
  }
  
  function onDown(e) {
  if (isLeftMouseButton(e)) {
  orbiter.down(e.screenX, e.screenY);
  $(document).one('mouseup', onUp);
  $(document).bind('mousemove', onMove);
  }
  }
  
  function onMove(e) {
  if (isLeftMouseButton(e)) {
  orbiter.move(e.screenX, e.screenY);
  }
  }
  
  function onUp(e) {
  if (isLeftMouseButton(e)) {
  orbiter.up(e.screenX, e.screenY);
  $(document).unbind('mousemove', onMove);
  }
  }
  
  function onTouchDown(e) {
  // No, this isn't American football
  e.preventDefault();
  
  orbiter.down(e.targetTouches[0].screenX, e.targetTouches[0].screenY);
  
  return true;
  }
  
  function onTouchMove(e) {
  e.preventDefault();
  
  orbiter.move(e.targetTouches[0].screenX, e.targetTouches[0].screenY);
  
  return true;
  }
  
  function onTouchUp(e) {
  // FIXME what if they're still touching?
  e.preventDefault();
  
  orbiter.up(e.changedTouches[0].screenX, e.changedTouches[0].screenY);
  
  return true;
  }
  
  this.$container.bind('mousedown', onDown);
  
  // jQuery binding doesn't work for some reason
  // TODO Submit a bug report...
  this.$container[0].ontouchstart = onTouchDown;
  this.$container[0].ontouchmove  = onTouchMove;
  this.$container[0].ontouchend   = onTouchUp;
  
  // This is required for some reason...
  if (document.addEventListener != undefined && document.addEventListener != null) {
    document.addEventListener('touchstart', function() {}, false);
  }
  
  this.$container.bind('mouseenter', function () {
                       orbiter.$featureBoxContainer
                       .show()
                       .gx(showEffect, orbiter.options.featureMouseInTime, orbiter.options.featureMouseInEasing);
                       });
  
  this.$container.bind('mouseleave', function () {
                       orbiter.$featureBoxContainer
                       .gx(hideEffect, orbiter.options.featureMouseOutTime, orbiter.options.featureMouseOutEasing, function () {
                           orbiter.$featureBoxContainer.hide();
                           });
                       });
  },
  
  load: function () {
  if (this.isLoaded) {
  return;
  }
  
  this.showLoading();
  
  var orbiter = this;
  
  this.loadAllFrames(function () {
                     orbiter.isLoaded = true;
                     
                     orbiter.setRotation(0);
                     
                     var $viewer = orbiter.getViewer$()
                     .appendTo(orbiter.$container);
                     
                     orbiter.$container.css({
                                            width: orbiter.$sourceElement.width(),
                                            height: orbiter.$sourceElement.height()
                                            });
                     
                     orbiter.hideLoading(function () {
                                         orbiter.$sourceElement.replaceWith(orbiter.$container);
                                         });
                     });
  },
  
  showLoading: function () {
  // TODO Maybe split this into its own class or something
  
  if (!this.options.showLoading) {
  return;
  }
  
  var orbiter = this;
  
  this.$sourceElement.css({ cursor: 'wait' });
  
  this.loadingTimeout = window.setTimeout(function () {
                                          var region = orbiter.$sourceElement.offset();
                                          region.width = orbiter.$sourceElement.width();
                                          region.height = orbiter.$sourceElement.height();
                                          
                                          var loaderImageSize = {
                                          width: 32,
                                          height: 32
                                          };
                                          
                                          orbiter.$sourceElement.animate({
                                                                         opacity: 0.5
                                                                         }, 500);
                                          
                                          orbiter.$loading = $(document.createElement('img'))
                                          .attr('src', 'images/loader.gif')
                                          .css({
                                               position: 'absolute',
                                               left: region.left + (region.width  - loaderImageSize.width ) / 2,
                                               top:  region.top  + (region.height - loaderImageSize.height) / 2
                                               })
                                          .appendTo(document.body);
                                          }, 0);
  },
  
  hideLoading: function (callback) {
  if (!this.options.showLoading) {
  callback();
  
  return;
  }
  
  if (this.loadingTimeout) {
  window.clearTimeout(this.loadingTimeout);
  }
  
  this.$sourceElement
  .css({ cursor: '' })
  .animate({
           opacity: 1
           }, 200, callback);
  
  if (this.$loading) {
  this.$loading.remove();
  
  this.$loading = null;
  }
  },
  
  loadAllFrames: function (callback) {
  var totalFrames = Math.ceil(this.rotationCount / this.rotationsPerFrame);
  var framesRemaining = totalFrames;
  
  function frameLoaded() {
  --framesRemaining;
  
  if (framesRemaining <= 0) {
  callback();
  }
  }
  
  var frame;
  
  for (frame = 0; frame < totalFrames; ++frame) {
  this.loadFrameImage(frame, frameLoaded);
  }
  },
  
  wrapRotation: function (rotation) {
  var rotationCount = this.rotationCount;
  
  if (rotationCount === 0) {
  // We could be here a while...
  return 0;
  }
  
  while (rotation >= rotationCount) {
  rotation -= rotationCount;
  }
  
  while (rotation < 0) {
  rotation += rotationCount;
  }
  
  return rotation;
  },
  
  setRotation: function (rotation) {
  if (parseInt(rotation, 10) != rotation) {
  // (Loose comparison intentional)
  alert ("rotation: " + rotation);
  throw 'Rotation number must be an integer';
  }
  
  rotation = parseInt(rotation, 10);
  
  if (rotation < 0 || rotation >= this.rotationCount) {
  throw 'Rotation number out of range';
  }
  
  if (rotation === this.currentRotation) {
  return;
  }
  
  this.currentRotation = rotation;
  
  this.updateViewer();
  this.updateFeatureBoxes();
  },
  
  updateFeatureBoxes: function (rotation) {
  var orbiter = this;
  var currentFeatures = this.getFeatures(this.currentRotation);
  
  var currentFeatureNames = $(currentFeatureNames).map(function () {
                                                       return this.name;
                                                       }).get();
  
  // Hide inactive boxes
  $.each(this.featureBoxes, function (text, $element) {
         if ($(currentFeatureNames).index(text) < 0) {
         if ($element.isFadingOut) {
         return;
         }
         
         $element.gx(hideEffect, orbiter.options.featureFadeOutTime, orbiter.options.featureFadeOutEasing, function () {
                     delete orbiter.featureBoxes[text];
                     
                     $element.hide();
                     });
         
         $element.isFadingOut = true;
         }
         });
  
  $(currentFeatures).each(function () {
                          var $element = orbiter.featureBoxes[this.name];
                          
                          if ($element) {
                          $element.isFadingOut = false;
                          
                          $element.show();
                          
                          $element.gx($.extend({ }, showEffect, this.position), orbiter.options.featureFadeInTime, orbiter.options.featureFadeInEasing);
                          } else {
                          $element = $(document.createElement('div'))
                          .addClass('orbiter-feature')
                          .css(this.position)
                          .css({ position: 'absolute' })
                          .css(hideEffect)
                          .attr('title', this.name)
                          .gxInit({ queue: 'cancel' })
                          .gx(showEffect, orbiter.options.featureFadeInTime, orbiter.options.featureFadeInEasing)
                          .appendTo(orbiter.$featureBoxContainer);
                          
                          toolTipIt$($element)
                          .addClass('feature-tool-tip');
                          }
                          
                          orbiter.featureBoxes[this.name] = $element;
                          });
  },
  
  getFeatures: function (rotation) {
  // jQuery is retarded and won't let us filter on an object.  =|
  var features = [ ];
  
  $.each(this.features, function (key, value) {
         if (value[rotation]) {
         features.push({
                       name: key,
                       position: value[rotation]
                       });
         }
         });
  
  return features;
  },
  
  loadFrameImage: function (frame, callback) {
  var img = this.frameImages[frame];
  
  if (img) {
  if (img.data('callbacks')) {
  img.data('callbacks').push(callback);
  } else {
  callback(img);
  }
  
  return;
  }
  
  var img = this.options.frameImage;
  var imgSrc;
  
  if (typeof img === 'function') {
  img = img(this.$sourceElement, frame);
  }
  
  if (typeof img === 'string') {
  imgSrc = img;
  img = new Image();
  }
  
  if (img.tagName && img.tagName === 'IMG') {
  img = $(img);
  }
  
  if (!(img instanceof $)) {
  throw 'image should be a jQuery object';
  }
  
  this.frameImages[frame] = img;
  
  img.data('callbacks', [ callback ]);
  
  img.load(function () {
           $(img.data('callbacks')).each(function () {
                                         this(img);
                                         });
           });
  
  // IE needs src to be set after the load handler is attached
  // else cached images do not fire the load event.
  if (imgSrc) {
  img.attr('src', imgSrc);
  }
  },
  
  down: function (x, y) {
  this.isDown = true;
  
  this.startX = x;
  this.startY = y;
  this.startTick = this.getTimeTick();
  this.startRotation = this.currentRotation;
  
  this.endMomentum();
  },
  
  move: function (x, y) {
  if (!this.isDown) {
  return;
  }
  
  var dx = this.startX - x;
  var rotations = Math.round(dx / this.pixelsPerRotation);
  
  this.setRotation(this.wrapRotation(this.startRotation + rotations));
  },
  
  up: function (x, y) {
  if (!this.isDown) {
  return;
  }
  
  this.isDown = false;
  
  this.startMomentum((this.startX - x) / (this.getTimeTick() - this.startTick));
  },
  
  getTimeTick: function () {
  return (new Date()).getTime();
  },
  
  startMomentum: function (force) {
  if (force === 0) {
  return;
  }
  
  var rotation = this.currentRotation;
  var speed = Math.min(2.5, Math.abs(force));
  var direction = Math.abs(force) / force;
  
  if (speed < 1) {
  return;
  }
  
  var orbiter = this;
  
  function nextTick() {
  speed -= 0.05;
  
  if (speed < 0) {
  orbiter.endMomentum();
  
  return;
  }
  
  rotation += direction;
  
  orbiter.setRotation(orbiter.wrapRotation(rotation));
  
  var time = 20 / speed;
  
  if (time > 400) {
  return;
  }
  
  orbiter.momentumTimer = window.setTimeout(nextTick, time);
  }
  
  nextTick();
  },
  
  endMomentum: function () {
  window.clearTimeout(this.momentumTimer);
  }
  };
  
  function CssOrbiter($sourceElement, options) {
  var orbiter = new Orbiter($sourceElement, options);
  
  var $div = null;
  
  orbiter.getViewer$ = function () {
  if ($div) {
  return $div;
  }
  
  $div = $(document.createElement('div'))
  .width(this.$sourceElement.width())
  .height(this.$sourceElement.height());
  
  return $div;
  };
  
  orbiter.updateViewer = function () {
  var $div = this.getViewer$();
  
  var rotation = this.currentRotation;
  var frame = Math.floor(rotation / this.rotationsPerFrame);
  var rotationInFrame = rotation % this.rotationsPerFrame;
  
  var x = 0;
  var y = rotationInFrame * $div.height();
  
  var $frameImage = this.frameImages[frame];
  
  $div.css({
           backgroundImage: 'url(' + escape($frameImage.attr('src')) + ')',
           backgroundPosition: '0 ' + y + 'px'
           });
  };
  
  return orbiter;
  }
  
  function CanvasOrbiter($sourceElement, options) {
  var orbiter = new Orbiter($sourceElement, options);
  
  var $canvas = null;
  
  orbiter.getViewer$ = function () {
  if ($canvas) {
  return $canvas;
  }
  
  var canvas = document.createElement('canvas');
  
  canvas.width = this.$sourceElement.width();
  canvas.height = this.$sourceElement.height();
  
  $canvas = $(canvas);
  
  return $canvas;
  };
  
  orbiter.updateViewer = function () {
  var rotation = this.currentRotation;
  var frame = Math.floor(rotation / this.rotationsPerFrame);
  var rotationInFrame = rotation % this.rotationsPerFrame;
  
  var context = this.getViewer$()[0].getContext('2d');
  var width = context.canvas.width;
  var height = context.canvas.height;
  var x = 0;
  var y = rotationInFrame * height;
  
  var $frameImage = this.frameImages[frame];
  
  context.drawImage(
                    $frameImage[0],         // image
                    x, y, width, height,    // source
                    0, 0, width, height     // destination
                    );
  };
  
  return orbiter;
  }
  
  function toolTipIt$($element) {
  var $toolTip = $(document.createElement('div'))
  .gxInit({ queue: 'cancel' })
  .css({ position: 'absolute' })
  .css(hideEffect)
  .hide();
  
  $element
  .data('toolTipIt', {
        title: $element.attr('title'),
        $toolTip: $toolTip,
        hideTimer: null
        })
  .attr('title', '')
  .bind('mouseenter', toolTipIt$.enter)
  .bind('mouseleave', toolTipIt$.leave);
  
  return $toolTip;
  }
  
  toolTipIt$.enter = function () {
  var $element = $(this);
  var data = $element.data('toolTipIt');
  
  var offset = $element.offset();
  
  if (data.hideTimer) {
  window.clearTimeout(data.hideTimer);
  data.hideTimer = null;
  }
  
  data.$toolTip
  .text(data.title)
  .show()
  .gx(showEffect, 300, 'Quad:Out');
  
  // Append before applying CSS because
  // outerHeight doesn't exist until the
  // element is added to the DOM
  data.$toolTip
  .appendTo($element)
  .css({
       top: -data.$toolTip.outerHeight() - 1   // Fix off-by-one pixel error
       })
  };
  
  toolTipIt$.leave = function () {
  var $element = $(this);
  var data = $element.data('toolTipIt');
  
  if (data.hideTimer) {
  window.clearTimeout(data.hideTimer);
  data.hideTimer = null;
  }
  
  data.hideTimer = window.setTimeout(function () {
                                     data.hideTimer = null;
                                     
                                     data.$toolTip
                                     .gx(hideEffect, 300, 'Sine', function () {
                                         data.$toolTip
                                         .css({
                                              top: 0
                                              })
                                         .remove();
                                         });
                                     }, 500);
  };
  
  function getOrbiterClass() {
  // Prefer canvas; fall back to plain CSS
  
  try {
  if (document.createElement('canvas').getContext) {
  return CanvasOrbiter;
  }
  } catch (e) {
  return CssOrbiter;
  }
  
  return CssOrbiter;
  }
  
  var orbit = function (options) {
  options = $.extend({ }, orbit.defaultOptions, options);
  
  this.each(function () {
            var $orbitee = $(this);
            
            try {
            var OrbiterClass = getOrbiterClass();
            var orbiter = new OrbiterClass($orbitee, options);
            
            switch (options.loadTrigger) {
            case 'now':
            default:
            orbiter.load();
            
            break;
            
            case 'click':
            $orbitee.one('mousedown', function () {
                         orbiter.load();
                         });
            
            break;
            
            case 'hover':
            $orbitee.one('mouseenter', function () {
                         orbiter.load();
                         });
            
            break;
            }
            
            $orbitee.data('orbiter', orbiter);
            } catch (e) {
            console.log('Exception in $.fn.orbit: ');
            console.log(e);
            }
            });
  };
  
  orbit.defaultOptions = {
  rotationCount: 32,
  
  frameImage: function ($sourceElement, frame) {
  var url = $sourceElement.attr('src');
  url = url.replace('-thumb', '-' + frame);
  url = url.replace(/#.*$/, '');
  
  return url;
  },
  
  features: { },
  
  featureFadeInTime: 300,
  featureFadeOutTime: 600,
  
  featureFadeInEasing: 'Sine:Out',
  featureFadeOutEasing: 'Sine:Out',
  
  featureMouseInTime: 500,
  featureMouseOutTime: 1000,
  
  featureMouseInEasing: 'Expo',
  featureMouseOutEasing: 'Expo',
  
  rotationsPerFrame: 1,
  pixelsPerRotation: 10,
  
  showLoading: false,
  loadTrigger: 'now'  // now, hover, click
  };
  
  $.fn.orbit = orbit;
  
  $.fn.disableSelection = function () {
  return this
  .bind('selectstart.disableSelection mousedown.disableSelection', function (e) {
        e.preventDefault();
        })
  .attr('unselectable', 'unselectable'); // IE
  };
  
  $(function () {
    $('img.auto-orbit').each(function () {
                             var $image = $(this);
                             var json = $image.attr('src').replace(/^[^#]*#/, '');
                             var options = $.parseJSON(json);
                             
                             $image.orbit(options);
                             });
    });
  }(jQuery));
(function(d){function l(a,b){var c=new j(a,b),e=null;c.getViewer$=function(){return e?e:e=d(document.createElement("div")).width(this.$sourceElement.width()).height(this.$sourceElement.height())};c.updateViewer=function(){var a=this.getViewer$(),b=this.currentRotation,c=Math.floor(b/this.rotationsPerFrame),b=b%this.rotationsPerFrame*a.height();a.css({backgroundImage:"url("+escape(this.frameImages[c].attr("src"))+")",backgroundPosition:"0 "+b+"px"})};return c}function m(a,b){var c=new j(a,b),e=null;
c.getViewer$=function(){if(e)return e;var a=document.createElement("canvas");a.width=this.$sourceElement.width();a.height=this.$sourceElement.height();return e=d(a)};c.updateViewer=function(){var a=this.currentRotation,b=Math.floor(a/this.rotationsPerFrame),a=a%this.rotationsPerFrame,c=this.getViewer$()[0].getContext("2d"),e=c.canvas.width,d=c.canvas.height;c.drawImage(this.frameImages[b][0],0,a*d,e,d,0,0,e,d)};return c}function h(a){var b=d(document.createElement("div")).gxInit({queue:"cancel"}).css({position:"absolute"}).css(f).hide();
a.data("toolTipIt",{title:a.attr("title"),$toolTip:b,hideTimer:null}).attr("title","").bind("mouseenter",h.enter).bind("mouseleave",h.leave);return b}var f={opacity:0},i={opacity:1};d.support.opacity||(f={},i={});var j=function(a,b){this.$sourceElement=a;this.options=b;this.$sourceElement.css({cursor:"click"===this.options.loadTrigger?"pointer":void 0}).disableSelection();this.$container=d(document.createElement("div")).addClass("orbiter").css({display:"inline-block",position:"relative"}).disableSelection().data("orbiter",
this);this.$featureBoxContainer=d(document.createElement("div")).css({display:"block",position:"absolute",left:0,right:0,top:0,bottom:0}).hide().css(f).gxInit({queue:"cancel"}).appendTo(this.$container);this.rotationCount=b.rotationCount;this.rotationsPerFrame=b.rotationsPerFrame;this.pixelsPerRotation=b.pixelsPerRotation;this.features=this.options.features;this.frameImages=[];this.featureBoxes={};this.isLoaded=!1;this.bind()};j.prototype={updateViewer:function(){throw"Implement updateViewer in a subclass";
},getViewer$:function(){throw"Implement getViewer$ i na subclass";},bind:function(){function a(a){return d.browser.msie?1===a.button:0===a.button}function b(b){a(b)&&e.move(b.screenX,b.screenY)}function c(c){a(c)&&(e.up(c.screenX,c.screenY),d(document).unbind("mousemove",b))}var e=this;this.$container.bind("mousedown",function(g){a(g)&&(e.down(g.screenX,g.screenY),d(document).one("mouseup",c),d(document).bind("mousemove",b))});this.$container[0].ontouchstart=function(a){a.preventDefault();e.down(a.targetTouches[0].screenX,
a.targetTouches[0].screenY);return!0};this.$container[0].ontouchmove=function(a){a.preventDefault();e.move(a.targetTouches[0].screenX,a.targetTouches[0].screenY);return!0};this.$container[0].ontouchend=function(a){a.preventDefault();e.up(a.changedTouches[0].screenX,a.changedTouches[0].screenY);return!0};void 0!=document.addEventListener&&null!=document.addEventListener&&document.addEventListener("touchstart",function(){},!1);this.$container.bind("mouseenter",function(){e.$featureBoxContainer.show().gx(i,
e.options.featureMouseInTime,e.options.featureMouseInEasing)});this.$container.bind("mouseleave",function(){e.$featureBoxContainer.gx(f,e.options.featureMouseOutTime,e.options.featureMouseOutEasing,function(){e.$featureBoxContainer.hide()})})},load:function(){if(!this.isLoaded){this.showLoading();var a=this;this.loadAllFrames(function(){a.isLoaded=!0;a.setRotation(0);a.getViewer$().appendTo(a.$container);a.$container.css({width:a.$sourceElement.width(),height:a.$sourceElement.height()});a.hideLoading(function(){a.$sourceElement.replaceWith(a.$container)})})}},
showLoading:function(){if(this.options.showLoading){var a=this;this.$sourceElement.css({cursor:"wait"});this.loadingTimeout=window.setTimeout(function(){var b=a.$sourceElement.offset();b.width=a.$sourceElement.width();b.height=a.$sourceElement.height();a.$sourceElement.animate({opacity:0.5},500);a.$loading=d(document.createElement("img")).attr("src","images/loader.gif").css({position:"absolute",left:b.left+(b.width-32)/2,top:b.top+(b.height-32)/2}).appendTo(document.body)},0)}},hideLoading:function(a){this.options.showLoading?
(this.loadingTimeout&&window.clearTimeout(this.loadingTimeout),this.$sourceElement.css({cursor:""}).animate({opacity:1},200,a),this.$loading&&(this.$loading.remove(),this.$loading=null)):a()},loadAllFrames:function(a){function b(){--e;0>=e&&a()}var c=Math.ceil(this.rotationCount/this.rotationsPerFrame),e=c,d;for(d=0;d<c;++d)this.loadFrameImage(d,b)},wrapRotation:function(a){var b=this.rotationCount;if(0===b)return 0;for(;a>=b;)a-=b;for(;0>a;)a+=b;return a},setRotation:function(a){if(parseInt(a,10)!=
a)throw alert("rotation: "+a),"Rotation number must be an integer";a=parseInt(a,10);if(0>a||a>=this.rotationCount)throw"Rotation number out of range";a!==this.currentRotation&&(this.currentRotation=a,this.updateViewer(),this.updateFeatureBoxes())},updateFeatureBoxes:function(){var a=this,b=this.getFeatures(this.currentRotation),c=d(c).map(function(){return this.name}).get();d.each(this.featureBoxes,function(b,g){0>d(c).index(b)&&!g.isFadingOut&&(g.gx(f,a.options.featureFadeOutTime,a.options.featureFadeOutEasing,
function(){delete a.featureBoxes[b];g.hide()}),g.isFadingOut=!0)});d(b).each(function(){var b=a.featureBoxes[this.name];b?(b.isFadingOut=!1,b.show(),b.gx(d.extend({},i,this.position),a.options.featureFadeInTime,a.options.featureFadeInEasing)):(b=d(document.createElement("div")).addClass("orbiter-feature").css(this.position).css({position:"absolute"}).css(f).attr("title",this.name).gxInit({queue:"cancel"}).gx(i,a.options.featureFadeInTime,a.options.featureFadeInEasing).appendTo(a.$featureBoxContainer),
h(b).addClass("feature-tool-tip"));a.featureBoxes[this.name]=b})},getFeatures:function(a){var b=[];d.each(this.features,function(c,e){e[a]&&b.push({name:c,position:e[a]})});return b},loadFrameImage:function(a,b){var c=this.frameImages[a];if(c)c.data("callbacks")?c.data("callbacks").push(b):b(c);else{var c=this.options.frameImage,e;"function"===typeof c&&(c=c(this.$sourceElement,a));"string"===typeof c&&(e=c,c=new Image);c.tagName&&"IMG"===c.tagName&&(c=d(c));if(!(c instanceof d))throw"image should be a jQuery object";
this.frameImages[a]=c;c.data("callbacks",[b]);c.load(function(){d(c.data("callbacks")).each(function(){this(c)})});e&&c.attr("src",e)}},down:function(a,b){this.isDown=!0;this.startX=a;this.startY=b;this.startTick=this.getTimeTick();this.startRotation=this.currentRotation;this.endMomentum()},move:function(a){this.isDown&&(a=Math.round((this.startX-a)/this.pixelsPerRotation),this.setRotation(this.wrapRotation(this.startRotation+a)))},up:function(a){this.isDown&&(this.isDown=!1,this.startMomentum((this.startX-
a)/(this.getTimeTick()-this.startTick)))},getTimeTick:function(){return(new Date).getTime()},startMomentum:function(a){function b(){e-=0.05;if(0>e)f.endMomentum();else{c+=d;f.setRotation(f.wrapRotation(c));var a=20/e;400<a||(f.momentumTimer=window.setTimeout(b,a))}}if(0!==a){var c=this.currentRotation,e=Math.min(2.5,Math.abs(a)),d=Math.abs(a)/a;if(!(1>e)){var f=this;b()}}},endMomentum:function(){window.clearTimeout(this.momentumTimer)}};h.enter=function(){var a=d(this),b=a.data("toolTipIt");a.offset();
b.hideTimer&&(window.clearTimeout(b.hideTimer),b.hideTimer=null);b.$toolTip.text(b.title).show().gx(i,300,"Quad:Out");b.$toolTip.appendTo(a).css({top:-b.$toolTip.outerHeight()-1})};h.leave=function(){var a=d(this).data("toolTipIt");a.hideTimer&&(window.clearTimeout(a.hideTimer),a.hideTimer=null);a.hideTimer=window.setTimeout(function(){a.hideTimer=null;a.$toolTip.gx(f,300,"Sine",function(){a.$toolTip.css({top:0}).remove()})},500)};var k=function(a){a=d.extend({},k.defaultOptions,a);this.each(function(){var b=
d(this);try{var c;a:{try{if(document.createElement("canvas").getContext){c=m;break a}}catch(e){}c=l}var g=new c(b,a);switch(a.loadTrigger){default:g.load();break;case "click":b.one("mousedown",function(){g.load()});break;case "hover":b.one("mouseenter",function(){g.load()})}b.data("orbiter",g)}catch(f){console.log("Exception in $.fn.orbit: "),console.log(f)}})};k.defaultOptions={rotationCount:32,frameImage:function(a,b){var c=a.attr("src"),c=c.replace("-thumb","-"+b);return c=c.replace(/#.*$/,"")},
features:{},featureFadeInTime:300,featureFadeOutTime:600,featureFadeInEasing:"Sine:Out",featureFadeOutEasing:"Sine:Out",featureMouseInTime:500,featureMouseOutTime:1E3,featureMouseInEasing:"Expo",featureMouseOutEasing:"Expo",rotationsPerFrame:1,pixelsPerRotation:10,showLoading:!1,loadTrigger:"now"};d.fn.orbit=k;d.fn.disableSelection=function(){return this.bind("selectstart.disableSelection mousedown.disableSelection",function(a){a.preventDefault()}).attr("unselectable","unselectable")};d(function(){d("img.auto-orbit").each(function(){var a=
d(this),b=a.attr("src").replace(/^[^#]*#/,""),b=d.parseJSON(b);a.orbit(b)})})})(jQuery);
