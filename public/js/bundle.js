/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var bind, unbind, prefix;

function detect () {
  bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
  unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
  prefix = bind !== 'addEventListener' ? 'on' : '';
}

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  if (!bind) detect();
  el[bind](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  if (!unbind) detect();
  el[unbind](prefix + type, fn, capture || false);
  return fn;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {


/**
 * map
 */

var map = {
    backspace: 8
  , command: 91
  , tab: 9
  , clear: 12
  , enter: 13
  , shift: 16
  , ctrl: 17
  , alt: 18
  , capslock: 20
  , escape: 27
  , esc: 27
  , space: 32
  , pageup: 33
  , pagedown: 34
  , end: 35
  , home: 36
  , left: 37
  , up: 38
  , right: 39
  , down: 40
  , del: 46
  , comma: 188
  , f1: 112
  , f2: 113
  , f3: 114
  , f4: 115
  , f5: 116
  , f6: 117
  , f7: 118
  , f8: 119
  , f9: 120
  , f10: 121
  , f11: 122
  , f12: 123
  , ',': 188
  , '.': 190
  , '/': 191
  , '`': 192
  , '-': 189
  , '=': 187
  , ';': 186
  , '[': 219
  , '\\': 220
  , ']': 221
  , '\'': 222
};

/**
 * find a keycode.
 *
 * @param {String} name
 * @return {Number}
 */

module.exports = function(name){
  return map[name.toLowerCase()] || name.toUpperCase().charCodeAt(0);
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lightbox__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exif__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_yields_k__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_yields_k___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_yields_k__);




// import './metrics'

const k = __WEBPACK_IMPORTED_MODULE_2_yields_k___default()(window)
const box = new __WEBPACK_IMPORTED_MODULE_0__lightbox__["a" /* default */]($('.Lightbox')[0])
const exif = new __WEBPACK_IMPORTED_MODULE_1__exif__["a" /* default */]

$('body').on('click', '[data-zoom]', function(){
  box.show($(this).data('zoom') || this.src)
})

$('.Post').on('click', 'img', function(){
  box.show(this.src)
})

k('e', e => { exif.toggle(box.src()) })

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spin__ = __webpack_require__(4);



// TODO: write something with less suck,
// so many rely on old hacks, flexbox ftw,
// but this still sucks.

const opts = {
  lines: 17, // The number of lines to draw
  length: 2, // The length of each line
  width: 2, // The line thickness
  radius: 17, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#fff', // #rgb or #rrggbb or array of colors
  opacity: 0.05, // Opacity of the lines
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  speed: 1, // Rounds per second
  trail: 58, // Afterglow percentage
  fps: 20, // Frames per second when using setTimeout() as a fallback for CSS
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  position: 'absolute' // Element positioning
}

const orientation = (img) =>
  img.width > img.height
    ? 'landscape'
    : 'portrait'

class Lightbox {
  constructor(el) {
    this.el = $(el)
    this.el.on('click', e => this.hide())
  }

  show(url) {
    if (!url) throw new Error('url required')

    const spinner = new __WEBPACK_IMPORTED_MODULE_0__spin__["a" /* default */](opts)
    const img = $('<img/>')
    const el = this.el
    var spin

    const id = setTimeout(() => {
      spin = spinner.spin().el
      el.append(spin)
    }, 250)

    el.addClass('show').find('img').remove()

    img.on('load', () => {
      clearTimeout(id)

      if (spin) {
        spinner.stop()
        $(spin).remove()
      }

      img.attr('class', orientation(img[0]))
      el.append(img)
    })

    img.attr('src', url)

  }

  hide() {
    this.el.removeClass('show')
  }

  src() {
    return this.el.find('img').attr('src')
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Lightbox;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);



class Exif {
  constructor() {
    this.el = $('.Exif')
    this.el.on('click', '.Exif-close', e => this.hide())
  }

  show(url) {
    this.info(url).then(info => {
      this.el.addClass('show')
        .find('tbody')
        .html(this.rows(info))
    })
  }

  hide() {
    this.el.removeClass('show')
  }

  toggle(url) {
    if (this.el.hasClass('show')) {
      this.hide()
    } else {
      this.show(url)
    }
  }

  info(url) {
    return __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url + '&fm=json')
      .then(res => res.json())
  }

  filter(info) {
    return [
      ['Camera', info.TIFF.Model],
      ['Lens', info.Exif.LensModel],
      ['Focal Length', info.Exif.FocalLenIn35mmFilm],
      ['Aperture', info.Exif.FNumber],
      ['ISO', info.Exif.ISOSpeedRatings[0]]
    ]
  }

  rows(info) {
    return this.filter(info).map(row => {
      if (row[1] == null) return
      return `
        <tr>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
        </tr>
      `
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Exif;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(7);
module.exports = self.fetch.bind(self);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module Dependencies.
 */

var event = __webpack_require__(0)
var proto = __webpack_require__(9)
var bind = __webpack_require__(12);

/**
 * Create a new dispatcher with `el`.
 *
 * example:
 *
 *      var k = require('k')(window);
 *      k('shift + tab', function(){});
 *
 * @param {Element} el
 * @return {Function}
 * @api public
 */

module.exports = function(el){
  function k(e, fn){ k.handle(e, fn) };
  k._handle = bind(k, proto.handle);
  k._clear = bind(k, proto.clear);
  k._reset = bind(k, proto.reset);
  event.bind(el, 'keydown', k._handle, false);
  event.bind(el, 'keyup', k._handle, false);
  event.bind(el, 'keyup', k._clear, false);
  event.bind(el, 'focus', k._reset, false);
  for (var p in proto) k[p] = proto[p];
  k.listeners = [];
  k.active = 0;
  k.el = el;
  return k;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module Dependencies.
 */

var sequence = __webpack_require__(10);
var keycode = __webpack_require__(1);
var event = __webpack_require__(0);
var os = __webpack_require__(11);

/**
 * modifiers.
 */

var modifiers = {
  224: 'command',
  91: 'command',
  93: 'command',
  16: 'shift',
  17: 'ctrl',
  18: 'alt'
};

/**
 * Super key.
 * (must use subscript vs. dot notation to avoid issues with older browsers)
 */

exports['super'] = 'mac' == os
  ? 'command'
  : 'ctrl';

/**
 * Handle the given `KeyboardEvent` or bind
 * a new `keys` handler.
 *
 * @param {String|KeyboardEvent} e
 * @param {Function} fn
 * @api private
 */

exports.handle = function(e, fn){
  var ignore = this.ignore;
  var event = e.type;
  var code = e.which;

  // bind
  if (fn) return this.bind(e, fn);

  // modifiers
  var mod = modifiers[code];
  if ('keydown' == event && mod) {
    this['super'] = exports['super'] == mod;
    this[mod] = true;
    this.modifiers = true;
    this.active++;
    return;
  }

  // ignore
  if (ignore && ignore(e)) return;

  // listeners
  var all = this.listeners;

  // match
  for (var i = 0; i < all.length; ++i) {
    var invoke = true;
    var obj = all[i];
    var seq = obj.seq;
    var mods = obj.mods;
    var fn = seq || obj.fn;

    if (!seq && code != obj.code) continue;
    if (event != obj.event) continue;
    if (this.active != obj.mods.length) continue;

    for (var j = 0; j < mods.length; ++j) {
      if (!this[mods[j]]) {
        invoke = null;
        break;
      }
    }

    invoke && fn(e);
  }
};

/**
 * Destroy this `k` dispatcher instance.
 *
 * @api public
 */

exports.destroy = function(){
  event.unbind(this.el, 'keydown', this._handle);
  event.unbind(this.el, 'keyup', this._handle);
  event.unbind(this.el, 'keyup', this._clear);
  event.unbind(this.el, 'focus', this._clear);
  this.listeners = [];
};

/**
 * Unbind the given `keys` with optional `fn`.
 *
 * Example:
 *
 *      k.unbind('enter, tab', myListener); // unbind `myListener` from `enter, tab` keys
 *      k.unbind('enter, tab'); // unbind all `enter, tab` listeners
 *      k.unbind(); // unbind all listeners
 *
 * @param {String} keys
 * @param {Function} fn
 * @return {k}
 * @api public
 */

exports.unbind = function(keys, fn){
  var fns = this.listeners
  var len = fns.length;
  var all;

  // unbind all
  if (0 == arguments.length) {
    this.listeners = [];
    return this;
  }

  // parse
  all = parseKeys(keys);

  // unbind
  for (var i = 0; i < all.length; ++i) {
    for (var j = 0, obj; j < len; ++j) {
      obj = fns[j];
      if (!obj) continue;
      if (fn && obj.fn != fn) continue;
      if (obj.key != all[i].key) continue;
      if (!matches(obj, all[i])) continue;
      fns.splice(j--, 1);
    }
  }

  return this;
};

/**
 * Bind the given `keys` to `fn` with optional `event`
 *
 * Example:
 *
 *      k.bind('shift + tab, ctrl + a', function(e){});
 *
 * @param {String} event
 * @param {String} keys
 * @param {Function} fn
 * @return {k}
 * @api public
 */

exports.bind = function(event, keys, fn){
  var fns = this.listeners
  var len;
  var all;

  if (2 == arguments.length) {
    fn = keys;
    keys = event;
    event = 'keydown';
  }

  all = parseKeys(keys);
  len = all.length;

  for (var i = 0; i < len; ++i) {
    var obj = all[i];
    obj.seq = obj.seq && sequence(obj.key, fn);
    obj.event = event;
    obj.fn = fn;
    fns.push(obj);
  }

  return this;
};

/**
 * Bind keyup with `keys` and `fn`.
 *
 * @param {String} keys
 * @param {Function} fn
 * @return {k}
 * @api public
 */

exports.up = function(keys, fn){
  return this.bind('keyup', keys, fn);
};

/**
 * Bind keydown with `keys` and `fn`.
 *
 * @param {String} keys
 * @param {Function} fn
 * @return {k}
 * @api public
 */

exports.down = function(keys, fn){
  return this.bind('keydown', keys, fn);
};

/**
 * Clear all modifiers on `keyup`.
 *
 * @api private
 */

exports.clear = function(e){
  var code = e.keyCode || e.which;
  if (!(code in modifiers)) return;
  this.active--;
  this[modifiers[code]] = null;
  this.modifiers = this.command
    || this.shift
    || this.ctrl
    || this.alt;
};

/**
 * Clear all modifiers on `focus`.
 *
 * @api private
 */

exports.reset = function(e){
  this.active = 0;
  this.modifiers =
  this.command =
  this.shift =
  this.ctrl =
  this.alt = null;
};

/**
 * Ignore all input elements by default.
 *
 * @param {Event} e
 * @return {Boolean}
 * @api private
 */

exports.ignore = function(e){
  var el = e.target || e.srcElement;
  var name = el.tagName.toLowerCase();
  return 'textarea' == name
    || 'select' == name
    || 'input' == name;
};

/**
 * Parse the given `keys`.
 *
 * @param {String} keys
 * @return {Array}
 * @api private
 */

function parseKeys(keys){
  keys = keys.replace('super', exports['super']);

  var all = ',' != keys
    ? keys.split(/ *, */)
    : [','];

  var ret = [];
  for (var i = 0; i < all.length; ++i) {
    if ('' == all[i]) continue;
    var mods = all[i].split(/ *\+ */);
    var key = mods.pop() || ',';

    ret.push({
      seq: !! (~key.indexOf(' ') || ~key.indexOf('*')),
      code: keycode(key),
      mods: mods,
      key: key
    });
  }

  return ret;
}

/**
 * Check if the given `a` matches `b`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Boolean}
 * @api private
 */

function matches(a, b){
  return 0 == b.mods.length || eql(a, b);
}

/**
 * Shallow eql util.
 *
 * TODO: move to yields/eql
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Boolean}
 * @api private
 */

function eql(a, b){
  a = a.mods.sort().toString();
  b = b.mods.sort().toString();
  return a == b;
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * dependencies
 */

var keycode = __webpack_require__(1);

/**
 * Export `sequence`
 */

module.exports = sequence;

/**
 * Create sequence fn with `keys`.
 * optional `ms` which defaults
 * to `500ms` and `fn`.
 *
 * Example:
 *
 *      seq = sequence('a b c', fn);
 *      el.addEventListener('keydown', seq);
 *
 * @param {String} keys
 * @param {Number} ms
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

function sequence(keys, ms, fn){
  var codes = keys.split(/ +/).map(keycode)
    , clen = codes.length
    , seq = []
    , i = 0
    , prev;

  if (2 == arguments.length) {
    fn = ms;
    ms = 500;
  }

  return function(e){
    var code = codes[i++];
    if (42 != code && code != e.which) return reset();
    if (prev && new Date - prev > ms) return reset();
    var len = seq.push(e.which);
    prev = new Date;
    if (len != clen) return;
    reset();
    fn(e);
  };

  function reset(){
    prev = null;
    seq = [];
    i = 0;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {



module.exports = os();

function os() {
  var ua = navigator.userAgent;
  if (/mac/i.test(ua)) return 'mac';
  if (/win/i.test(ua)) return 'windows';
  if (/linux/i.test(ua)) return 'linux';
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};


/***/ })
/******/ ]);