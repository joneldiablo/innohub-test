'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var InnohubTest=function(){function a(){_classCallCheck(this,a)}/**
   * 
   * @param {string} input string which goings to reverse
   * @returns {string} string reversed
   */return _createClass(a,[{key:'reverse',value:function d(){for(var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'',b=[],c=a.length;0<=c;c--)b.push(a[c]);return b=b.join(''),b}/**
 * 
 * @param {*} obj
 * @param {string} obj.input string which goings to reverse
 * @returns {boolean} done
 */},{key:'reverseSameObject',value:function d(a){for(var b=[],c=a.input.length;0<=c;c--)b.push(a.input[c]);return b=b.join(''),a.input=b,!0}/**
   * 
   * @param {*} obj 
   */},{key:'fold',value:function c(a){a.result=0;var b=function(c,d){if(Array.isArray(c)||'number'!=typeof c&&'object'!==('undefined'==typeof c?'undefined':_typeof(c)))throw new Error(d+' ('+JSON.stringify(c)+') is not a number');if('object'===('undefined'==typeof c?'undefined':_typeof(c)))return Object.keys(c).forEach(function(a){return b(c[a],a)});switch(d){case'bar':case'result':break;default:a.result+=c;}};return b(a),!0}},{key:'plusIndex',value:function d(a){for(var b=0,c=1;c<=a;c++)b+=c;return b}}]),a}();exports.default=InnohubTest,module.exports=exports.default,module.exports.default=exports.default;
//# sourceMappingURL=InnohubTest.js.map