parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aZCc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=s(require("@babel/runtime-corejs2/core-js/reflect/construct")),e=s(require("@babel/runtime-corejs2/helpers/classCallCheck")),t=s(require("@babel/runtime-corejs2/helpers/createClass")),o=s(require("@babel/runtime-corejs2/helpers/inherits")),r=s(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn")),a=s(require("@babel/runtime-corejs2/helpers/getPrototypeOf")),i=s(require("./../Base.js"));function s(n){return n&&n.__esModule?n:{default:n}}function l(e){var t=d();return function(){var o,i=(0,a.default)(e);if(t){var s=(0,a.default)(this).constructor;o=(0,n.default)(i,arguments,s)}else o=i.apply(this,arguments);return(0,r.default)(this,o)}}function d(){if("undefined"==typeof Reflect||!n.default)return!1;if(n.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,n.default)(Date,[],function(){})),!0}catch(e){return!1}}var c="\n    .form {\n        z-index: 2;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform : translate(-50%, -50%);\n\n        background-color: rgba(0,0,0,0.9);\n        color: #eeeeee;\n        padding: 0.5em 2em;\n        padding-bottom: 3em;\n    }\n\n    h2 {\n        text-align: center;\n        margin-bottom: 0;\n    }\n\n    #backdrop {\n        position: absolute;\n        z-index: 1;\n        background-color: rgba(0,0,0,0.7);\n        width: 100%;\n        height: 90%;\n        padding: 0px; \n        margin: 0px; \n        cursor: pointer;\n    }\n\n    input {\n        outline: none;\n        margin-bottom: 2.5px;\n    }\n\n    #firstName,#lastName, #email,#password, #confirmPassword {\n        width: 100%;\n        border: none;\n        outline: none;\n        background: #eeeeee;\n        padding: 0.1rem 0.7rem;\n        font-size: 1.2rem;\n        color: #555;\n        font-family: 'poppins', sans-serif;\n    }\n\n\n\n\n    label {\n        display: block;\n        margin-bottom: 5px;\n    }\n\n    .hr-separator {\n        width: 100%;\n        height: 5px;\n        background-color: #eeeeee;\n        margin: 1em 0;\n    }\n\n    button {\n        width: 100%;\n        margin-bottom: 25px;\n        display: block;\n        width: 100%;\n        height: 50px;\n        border-radius: 25px;\n        outline: none;\n        border: none;\n        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);\n        background-size: 200%;\n        font-size: 0.8rem;\n        color: #fff;\n        font-family: 'Poppins', sans-serif;\n        text-transform: uppercase;\n        margin: 1rem 0;\n        cursor: pointer;\n        transition: 1s;\n    }\n    button:hover{\n        background-position: right;\n        color: black;\n    }\n    .google {\n        color: blue;\n        background-image: url(\"../assets/images/google.svg\");\n    }\n\n    .facebook {\n        color: red;\n        background-image: url(\"../assets/images/facebook.svg\");\n    }\n\n    a {\n        cursor: pointer;\n        width: 100%;\n        text-align: right;\n        text-decoration: none;\n        color: #999;\n        font-size: 0.9rem;\n        transition: .3s;\n    }\n\n    a:hover{\n        color: #F4D03F;\n    }\n\n\n    .img{\n        margin-left:80px;\n        width:100px;\n        height:100px\n    }\n\n",u='\n    \n    <h2>SignUp</h2>\n\n    <div class="container">\n        <div class="row">\n            <div class="name">\n                <label for="firstName">First Name</label>\n                <input type="text" id="firstName" name="firstName" title="First Name : Joe" />\n                <label for="lastName">Last Name</label>\n                <input type="text" id="lastName" name="lastName" title="Last Name : Does" />\n            </div>\n        </div>\n        <div class="row">\n            <label for="email">Email</label>\n            <input type="email" id="email" name="email" title="Email : someone@somthing.com" />\n        </div>\n        <div class="row">\n            <label for="password">Password</label>\n            <input type="password" id="password" name="password" title= "Password : pass@123" />\n        </div>\n        <div class="row">\n            <label for="confirmPassword">Confirm Password</label>\n            <input type="password" id="confirmPassword" name="confirmPassword" title= "Confirm Password : pass@123" />\n        </div>\n        <div class="row">\n            <input type="checkbox" id="remember"><a> accept terms and conditions</a>\n        </div>\n        <div class="row">\n            <button id="signUp"> Sign Up </button>\n        </div>\n        <div class="row">\n            <a title="Login" class="load-login-content">Already have an account ? </a>\n            |\n            <button title="Log in" class="load-login-content"> Login </button>\n        </div>\n\n        <div class="hr-separator">\n        </div>\n\n        <div class="row">\n            <span>or</span>\n        </div>\n        \n        <div class="row">\n            <button class="google"><img class="img2" src="../assets/images/google.svg">SignUp with Google</button>\n        </div>\n        <div class="row">\n            <button class="facebook"><img class="img2" src="../assets/images/facebook.svg">SignUp with Facebook</button>\n        </div>\n\n    </div>\n    \n',m=function(n){(0,o.default)(a,n);var r=l(a);function a(){var n;return(0,e.default)(this,a),(n=r.call(this)).render(c,u),n.attachShadow({mode:"open"}),n.shadowRoot.appendChild(n.template.content.cloneNode(!0)),n.setPath("/signup"),n}return(0,t.default)(a,[{key:"connectedCallback",value:function(){this.shadowRoot.querySelectorAll(".load-login-content").forEach(function(n){n.addEventListener("click",function(){dispatchEvent(new Event("load-login-content"))})})}}]),a}(i.default);exports.default=m,window.customElements.define("signup-form",m);
},{"@babel/runtime-corejs2/core-js/reflect/construct":"vZQy","@babel/runtime-corejs2/helpers/classCallCheck":"Tzth","@babel/runtime-corejs2/helpers/createClass":"xM5U","@babel/runtime-corejs2/helpers/inherits":"CdTE","@babel/runtime-corejs2/helpers/possibleConstructorReturn":"w9GY","@babel/runtime-corejs2/helpers/getPrototypeOf":"Qxr1","./../Base.js":"oyoJ"}]},{},[], null)
//# sourceMappingURL=signup-form.46ebd868.js.map