parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VY1A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("@babel/runtime-corejs2/core-js/reflect/construct")),t=i(require("@babel/runtime-corejs2/helpers/classCallCheck")),r=i(require("@babel/runtime-corejs2/helpers/createClass")),n=i(require("@babel/runtime-corejs2/helpers/inherits")),a=i(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn")),o=i(require("@babel/runtime-corejs2/helpers/getPrototypeOf")),s=i(require("./../Base.js"));function i(e){return e&&e.__esModule?e:{default:e}}function l(t){var r=u();return function(){var n,s=(0,o.default)(t);if(r){var i=(0,o.default)(this).constructor;n=(0,e.default)(s,arguments,i)}else n=s.apply(this,arguments);return(0,a.default)(this,n)}}function u(){if("undefined"==typeof Reflect||!e.default)return!1;if(e.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,e.default)(Date,[],function(){})),!0}catch(t){return!1}}var c="\n\n\n",d='\n        <div class=\'container\'>\n            <h3>Reset Password</h3>\n            <div class="row>\n                <label for="email"> Email </label>\n                <input type="email" id="email" name="email" title="Email : someone@somthing.com" />\n            </div>\n            <div class="row">\n                <button id="reset">Reset</button>\n            </div>\n        </div>\n',f=function(e){(0,n.default)(o,e);var a=l(o);function o(){var e;return(0,t.default)(this,o),(e=a.call(this)).render(c,d),e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(e.template.content.cloneNode(!0)),e.setPath("/reset-password"),e}return(0,r.default)(o,[{key:"connectedCallback",value:function(){this.shadowRoot.querySelector("#reset").addEventListener("click",function(){dispatchEvent(new Event("load-password-reset"))})}}]),o}(s.default);exports.default=f,window.customElements.define("reset-password",f);
},{"@babel/runtime-corejs2/core-js/reflect/construct":"vZQy","@babel/runtime-corejs2/helpers/classCallCheck":"Tzth","@babel/runtime-corejs2/helpers/createClass":"xM5U","@babel/runtime-corejs2/helpers/inherits":"CdTE","@babel/runtime-corejs2/helpers/possibleConstructorReturn":"w9GY","@babel/runtime-corejs2/helpers/getPrototypeOf":"Qxr1","./../Base.js":"oyoJ"}]},{},[], null)
//# sourceMappingURL=reset-password.d4e142ea.js.map