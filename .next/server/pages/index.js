(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/HeaderNav.js":
/*!*********************************!*\
  !*** ./components/HeaderNav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeaderNavItem */ "./components/HeaderNavItem.js");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ "./styles/Header.module.css");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\HeaderNav.js";





const HeaderNav = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerContainerInner),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_HeaderNavItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        text: "Home",
        link: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_HeaderNavItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        text: "Portfolio",
        link: "/portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_HeaderNavItem__WEBPACK_IMPORTED_MODULE_1__.default, {
        text: "About",
        link: "/about"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNav);

/***/ }),

/***/ "./components/HeaderNavItem.js":
/*!*************************************!*\
  !*** ./components/HeaderNavItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Header.module.css */ "./styles/Header.module.css");
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\HeaderNavItem.js";





const HeaderNavItem = ({
  text,
  link
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: link,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
      className: router.pathname == link ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerNavItemContainerActive) : link !== '/' && router.pathname.startsWith(link) ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerNavItemContainerActive) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerNavItemContainer),
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavItem);

/***/ }),

/***/ "./components/about-home/AboutHomeContainer.js":
/*!*****************************************************!*\
  !*** ./components/about-home/AboutHomeContainer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AboutHomeText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutHomeText */ "./components/about-home/AboutHomeText.js");
/* harmony import */ var _AboutHomeSkillsAndTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutHomeSkillsAndTools */ "./components/about-home/AboutHomeSkillsAndTools.js");
/* harmony import */ var _styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/AboutHome.module.css */ "./styles/AboutHome.module.css");
/* harmony import */ var _styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\about-home\\AboutHomeContainer.js";





const AboutHomeContainer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3___default().aboutHomeContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerMobile),
      children: "About me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3___default().profilePicture),
      style: {
        backgroundImage: 'url(/jonathan-uppsala2.JPG)'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3___default().contentContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: "About me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AboutHomeText__WEBPACK_IMPORTED_MODULE_0__.default, {
        text: "I'm Jonathan, a guy from Northern Sweden that loves getting involved in new projects and\r opportunities where I get the chance to learn new things and challenge myself. Currently, I'm \r mostly interested in software development, design, and entrepreneurship. Outside of that, I spend most\r of my time diving headfirst into whatever hobbies I have at the time and cooking food that at least I \r think tastes pretty good."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_AboutHomeSkillsAndTools__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutHomeContainer);

/***/ }),

/***/ "./components/about-home/AboutHomeSkillsAndTools.js":
/*!**********************************************************!*\
  !*** ./components/about-home/AboutHomeSkillsAndTools.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/AboutHome.module.css */ "./styles/AboutHome.module.css");
/* harmony import */ var _styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\about-home\\AboutHomeSkillsAndTools.js";



const AboutHomeSkillsAndTools = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillsContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillsAndToolsHeader),
        children: "SKILLS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default().tag),
        children: "Software development, UI/UX design, Prototyping, Visual design, Leadership"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default().toolsContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default().skillsAndToolsHeader),
        children: "TOOLS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default().tag),
        children: "HTML, CSS, Javascript, Adobe Creative Suite, React, NextJS, Java, C, PHP, Express, NodeJS, Redux, Wordpress, SQL, noSQL, MongoDB, Codeigniter"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutHomeSkillsAndTools);

/***/ }),

/***/ "./components/about-home/AboutHomeText.js":
/*!************************************************!*\
  !*** ./components/about-home/AboutHomeText.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/AboutHome.module.css */ "./styles/AboutHome.module.css");
/* harmony import */ var _styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\about-home\\AboutHomeText.js";



const AboutHomeText = ({
  text
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: (_styles_AboutHome_module_css__WEBPACK_IMPORTED_MODULE_1___default().aboutHomeText),
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutHomeText);

/***/ }),

/***/ "./components/contact/ContactForm.js":
/*!*******************************************!*\
  !*** ./components/contact/ContactForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Contact.module.css */ "./styles/Contact.module.css");
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\contact\\ContactForm.js";





const ContactForm = () => {
  const form = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: formStatus,
    1: setFormStatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().sendForm('service_4495msr', 'template_xe3ko0h', form.current, 'user_gaMLP53oPSnRCwOYsS3bt').then(result => {
      console.log(result.text);
      setFormStatus({
        status: true,
        message: "Your message was sent successfully! I'll get back to you with a response shortly."
      });
    }, error => {
      console.log(error.text);
      setFormStatus({
        status: false,
        message: "Oh, something went wrong. Try sending a mail to jonathan.hedlund.371@gmail.com instead!"
      });
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().formContainer),
    onSubmit: sendEmail,
    ref: form,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
      className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: "Contact me!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),
      children: "I'm currently living in Ume\xE5, Sweden. Get in touch with me to by filling out the contact form below."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      type: "text",
      name: "from",
      className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
      placeholder: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      type: "text",
      name: "subject",
      className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().textInput),
      placeholder: "Subject"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
      name: "message",
      id: "",
      cols: "30",
      rows: "10",
      className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().textArea),
      placeholder: "Message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
      type: "submit",
      className: `btn ${(_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().formSubmitButton)}`,
      value: "Send!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), formStatus && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: formStatus.status ? (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactFormStatusSuccess) : (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactFormStatusError),
      children: formStatus.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ "./components/contact/ContactFormContainer.js":
/*!****************************************************!*\
  !*** ./components/contact/ContactFormContainer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm */ "./components/contact/ContactForm.js");
/* harmony import */ var _ContactFormMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactFormMap */ "./components/contact/ContactFormMap.js");
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Contact.module.css */ "./styles/Contact.module.css");
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\contact\\ContactFormContainer.js";





const ContactFormContainer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactFormContainer),
    id: "contact-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ContactForm__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ContactFormMap__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactFormContainer);

/***/ }),

/***/ "./components/contact/ContactFormMap.js":
/*!**********************************************!*\
  !*** ./components/contact/ContactFormMap.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Contact.module.css */ "./styles/Contact.module.css");
/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\contact\\ContactFormMap.js";





const ContactFormMap = () => {
  const AnyReactComponent = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: ['fas', 'map-marker-alt'],
    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 35
  }, undefined);

  const defaultProps = {
    center: {
      lat: 63.825848,
      lng: 20.263035
    },
    zoom: 6
  };

  const handleApiLoaded = (map, maps) => {// use map and maps objects
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().mapContainer),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((google_map_react__WEBPACK_IMPORTED_MODULE_0___default()), {
      bootstrapURLKeys: {
        key: "AIzaSyD017DDf15cgKA_bm1fBVBoSOUJXaejtSk"
      },
      defaultCenter: defaultProps.center,
      defaultZoom: defaultProps.zoom,
      yesIWantToUseGoogleMapApiInternals: true,
      onGoogleApiLoaded: ({
        map,
        maps
      }) => handleApiLoaded(map, maps),
      className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().mapContainer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AnyReactComponent, {
        lat: 63.8275,
        lng: 20.263035
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactFormMap);

/***/ }),

/***/ "./components/current-focus/CurrentFocusContainer.js":
/*!***********************************************************!*\
  !*** ./components/current-focus/CurrentFocusContainer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CurrentFocusItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrentFocusItem */ "./components/current-focus/CurrentFocusItem.js");
/* harmony import */ var _styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/CurrentFocus.module.css */ "./styles/CurrentFocus.module.css");
/* harmony import */ var _styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\current-focus\\CurrentFocusContainer.js";




const CurrentFocusContainer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_2___default().currentFocusMainContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),
      children: "What I'm currently focusing on"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_2___default().currentFocuses),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CurrentFocusItem__WEBPACK_IMPORTED_MODULE_0__.default, {
        img: "/splick.png",
        header: "Splick",
        role: "Co-founder",
        timeslot: "MARCH 2020 - CURRENT",
        text: "A next-generation platform for helping e-commerce companies and influencers \r connect and collaborate.",
        link: "/portfolio/splick"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CurrentFocusItem__WEBPACK_IMPORTED_MODULE_0__.default, {
        img: "/wip.png",
        header: "WIP - New social media",
        role: "Creator",
        timeslot: "FEBRUARY 2022 - CURRENT",
        text: "Started working on a new (larger) project. A social media that also creates \r value for using it on your own.",
        link: "/portfolio/social-media"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CurrentFocusItem__WEBPACK_IMPORTED_MODULE_0__.default, {
        img: "/intam.png",
        header: "Intam",
        role: "Founder",
        timeslot: "AUGUST 2020 - CURRENT",
        text: "A web agency that specializes in creating user-friendly and responsive \r websites tailored for the customer's needs.",
        link: "/portfolio/intam"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CurrentFocusItem__WEBPACK_IMPORTED_MODULE_0__.default, {
        img: "/klassfoto.jpg",
        header: "Ume\xE5 University",
        role: "Student",
        timeslot: "AUGUST 2016 - CURRENT",
        text: "I'm currently a student at Ume\xE5 University studying economics.",
        link: "/portfolio/umeauniversity"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentFocusContainer);

/***/ }),

/***/ "./components/current-focus/CurrentFocusItem.js":
/*!******************************************************!*\
  !*** ./components/current-focus/CurrentFocusItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/CurrentFocus.module.css */ "./styles/CurrentFocus.module.css");
/* harmony import */ var _styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\current-focus\\CurrentFocusItem.js";





const CurrentFocusItem = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentFocusContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: props.link,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
            style: {
              backgroundImage: 'url(' + props.img + ')'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
      className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerFocus),
      children: props.header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().metaContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().role),
        children: props.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().timeslot),
        children: props.timeslot
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
      children: props.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkContent),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: props.link,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: "Read more"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: ['fas', 'long-arrow-alt-right'],
            className: (_styles_CurrentFocus_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentFocusItem);

/***/ }),

/***/ "./components/experiences/EducationContainer.js":
/*!******************************************************!*\
  !*** ./components/experiences/EducationContainer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExperienceHeader */ "./components/experiences/ExperienceHeader.js");
/* harmony import */ var _ExperienceItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExperienceItem */ "./components/experiences/ExperienceItem.js");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\EducationContainer.js";





const EducationContainer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default().experienceContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__.default, {
      header: "Education",
      button: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "/portfolio/umeauniversity",
      img: "/umeauniversity.png",
      header: "Master of Science, Interaction & Design",
      role: "Ume\xE5 University",
      timeslot: "AUG 2016 - JAN 2022"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "/portfolio/umeauniversity",
      img: "/umeauniversity.png",
      header: "Bachelor of Science in Economics",
      role: "Ume\xE5 University",
      timeslot: "AUG 2019 - Current"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EducationContainer);

/***/ }),

/***/ "./components/experiences/ExperienceCollectionHome.js":
/*!************************************************************!*\
  !*** ./components/experiences/ExperienceCollectionHome.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExperienceContainerHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExperienceContainerHome */ "./components/experiences/ExperienceContainerHome.js");
/* harmony import */ var _ProjectsContainerHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsContainerHome */ "./components/experiences/ProjectsContainerHome.js");
/* harmony import */ var _PublicationsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicationsContainer */ "./components/experiences/PublicationsContainer.js");
/* harmony import */ var _EducationContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EducationContainer */ "./components/experiences/EducationContainer.js");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\ExperienceCollectionHome.js";







const ExperienceCollectionHome = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_5___default().experienceCollectionContainerHome),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ExperienceContainerHome__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ProjectsContainerHome__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_PublicationsContainer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_EducationContainer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceCollectionHome);

/***/ }),

/***/ "./components/experiences/ExperienceContainerHome.js":
/*!***********************************************************!*\
  !*** ./components/experiences/ExperienceContainerHome.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExperienceHeader */ "./components/experiences/ExperienceHeader.js");
/* harmony import */ var _ExperienceItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExperienceItem */ "./components/experiences/ExperienceItem.js");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\ExperienceContainerHome.js";





const ExperienceContainerHome = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default().experienceContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__.default, {
      header: "Experiences",
      button: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "/portfolio/uminovainnovation",
      img: "/uminovainnovation.png",
      header: "Uminova Innovation",
      role: "Student communicator",
      timeslot: "FEB 2020 - APR 2021"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "/portfolio/piteakommun",
      img: "/piteakommun.png",
      header: "Pite\xE5 kommun",
      role: "Supervisor at Ung i Pite\xE5",
      timeslot: "JUN 2016 - SEP 2018"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceContainerHome);

/***/ }),

/***/ "./components/experiences/ExperienceHeader.js":
/*!****************************************************!*\
  !*** ./components/experiences/ExperienceHeader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\ExperienceHeader.js";




const ExperienceHeader = ({
  header,
  button
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().experienceHeaderContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().experienceHeader),
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), button && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/portfolio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        className: "btn",
        children: "View all"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceHeader);

/***/ }),

/***/ "./components/experiences/ExperienceItem.js":
/*!**************************************************!*\
  !*** ./components/experiences/ExperienceItem.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\ExperienceItem.js";




const ExperienceItem = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: props.link,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemImage),
        style: {
          backgroundImage: 'url(' + props.img + ')'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemInformation),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemHeader),
            children: props.header
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemRole),
            children: props.role
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemTimeslot),
          children: props.timeslot
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExperienceItem);

/***/ }),

/***/ "./components/experiences/ProjectsContainerHome.js":
/*!*********************************************************!*\
  !*** ./components/experiences/ProjectsContainerHome.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExperienceHeader */ "./components/experiences/ExperienceHeader.js");
/* harmony import */ var _ExperienceItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExperienceItem */ "./components/experiences/ExperienceItem.js");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\ProjectsContainerHome.js";





const ProjectsContainerHome = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default().experienceContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__.default, {
      header: "Projects",
      button: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "/portfolio/csncountdown",
      img: "csncountdown.png",
      header: "CSN Countdown",
      role: "Project",
      timeslot: "APR 2019 - MAY 2019"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "/portfolio/idagochinatt",
      img: "idagochinatt.png",
      header: "IDag & Inatt",
      role: "Project manager",
      timeslot: "SEP 2018 - OKT 2019"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "/portfolio/buddyprogramme",
      img: "/umeauniversity.png",
      header: "Buddy programme",
      role: "Group Leader",
      timeslot: "AUG 2017 - DEC 2017"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsContainerHome);

/***/ }),

/***/ "./components/experiences/PublicationItem.js":
/*!***************************************************!*\
  !*** ./components/experiences/PublicationItem.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\PublicationItem.js";




const PublicationItem = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    href: props.link,
    className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemContainer),
    target: "_blank",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().publicationInformation),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemHeader),
        children: props.header
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemRole),
        children: props.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicationItem);

/***/ }),

/***/ "./components/experiences/PublicationsContainer.js":
/*!*********************************************************!*\
  !*** ./components/experiences/PublicationsContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExperienceHeader */ "./components/experiences/ExperienceHeader.js");
/* harmony import */ var _PublicationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationItem */ "./components/experiences/PublicationItem.js");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Experience.module.css */ "./styles/Experience.module.css");
/* harmony import */ var _styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\experiences\\PublicationsContainer.js";





const PublicationsContainer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Experience_module_css__WEBPACK_IMPORTED_MODULE_3___default().experienceContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ExperienceHeader__WEBPACK_IMPORTED_MODULE_0__.default, {
      header: "Publications",
      button: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_PublicationItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "http://urn.kb.se/resolve?urn=urn:nbn:se:umu:diva-192335",
      header: "Using Machine Learning to Connect Brands with Influencers (Master Thesis)",
      role: "Hedlund, J. (2022)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_PublicationItem__WEBPACK_IMPORTED_MODULE_1__.default, {
      link: "https://press.um.si/index.php/ump/catalog/book/581",
      header: "Designing call to action: Users\u2019 perception of different characteristics",
      role: "Mejtoft, T., Hedlund, J., Cripps, H., S\xF6derstr\xF6m, U., & Norberg, O. (2021)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicationsContainer);

/***/ }),

/***/ "./components/hero/HeroContainer.js":
/*!******************************************!*\
  !*** ./components/hero/HeroContainer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroIconLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroIconLink */ "./components/hero/HeroIconLink.js");
/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Hero.module.css */ "./styles/Hero.module.css");
/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\hero\\HeroContainer.js";




const HeroContainer = () => {
  const handleClick = () => {
    const yOffset = -80;
    const element = document.getElementById('contact-container');
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    return window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroContent),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().welcomeText),
        children: "Welcome to my portfolio!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().nameText),
        children: "I'm Jonathan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroTagContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroTag),
          children: "Fullstack Developer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroTag),
          children: "UX/UI Designer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroLinksContainer),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: `btn ${(_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().contactButton)}`,
          onClick: () => handleClick(),
          children: "Get in touch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroLinkContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_HeroIconLink__WEBPACK_IMPORTED_MODULE_0__.default, {
            text: "",
            icon: "envelope",
            iconType: "fas",
            link: "mailto:jonathan.hedlund.371@gmail.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_HeroIconLink__WEBPACK_IMPORTED_MODULE_0__.default, {
            text: "",
            icon: "linkedin",
            iconType: "fab",
            link: "https://www.linkedin.com/in/jonathanhedlund/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_HeroIconLink__WEBPACK_IMPORTED_MODULE_0__.default, {
            text: "",
            icon: "book",
            iconType: "fas",
            link: "https://www.goodreads.com/user/show/89568653-jonathan-hedlund"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroTellusContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "/earth-mobile.png",
        alt: "",
        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroTellusMobile)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: "/earth.png",
        alt: "",
        className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroTellus)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroContainer);

/***/ }),

/***/ "./components/hero/HeroIconLink.js":
/*!*****************************************!*\
  !*** ./components/hero/HeroIconLink.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Hero.module.css */ "./styles/Hero.module.css");
/* harmony import */ var _styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\hero\\HeroIconLink.js";




const HeroIconLink = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
    href: props.link,
    target: "_blank",
    className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().heroIconContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
      icon: [props.iconType, props.icon],
      className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      className: (_styles_Hero_module_css__WEBPACK_IMPORTED_MODULE_2___default().iconText),
      children: props.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroIconLink);

/***/ }),

/***/ "./components/previous-work/PreviousWorkContainer.js":
/*!***********************************************************!*\
  !*** ./components/previous-work/PreviousWorkContainer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PreviousWorkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviousWorkItem */ "./components/previous-work/PreviousWorkItem.js");
/* harmony import */ var _styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/PreviousWork.module.css */ "./styles/PreviousWork.module.css");
/* harmony import */ var _styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\previous-work\\PreviousWorkContainer.js";

 // You can also use <link> for styles





const PreviousWorkContainer = () => {
  if (false) {}

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_4___default().previousWorkContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: "Some of my previous projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        "data-aos": "fade-left",
        "data-aos-offset": "200",
        "data-aos-duration": "600",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_PreviousWorkItem__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/hobbies.png",
          link: "/portfolio/hobbies",
          header: "Hobbies",
          tags: "Design, Entreprenourship",
          timeslot: "AUG 2020 - JAN 2021",
          text: "A service where the user can connect and communicate with others who have the same \r hobbies, and get more out of exercising their hobbies on their own. ",
          textMobile: "A service where the user can connect and communicate with others who have the same \r hobbies, and get more out of exercising their hobbies on their own."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        "data-aos": "fade-right",
        "data-aos-offset": "150",
        "data-aos-duration": "600",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_PreviousWorkItem__WEBPACK_IMPORTED_MODULE_2__.default, {
          img: "/arboreal-show-case.png",
          link: "/portfolio/arboreal",
          header: "Arboreal Prototype",
          tags: "Design, Prototyping",
          timeslot: "JAN 2019 - JUN 2019",
          text: "Forest measurements with your phone. Arboreal uses AR technology to transform \r the forest into a digital variant where you can perform measurements in real-time.",
          textMobile: "Forest measurements with your phone. Arboreal uses AR technology to transform \r the forest into a digital variant where we can perform measurements in real-time.",
          flip: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviousWorkContainer);

/***/ }),

/***/ "./components/previous-work/PreviousWorkItem.js":
/*!******************************************************!*\
  !*** ./components/previous-work/PreviousWorkItem.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/PreviousWork.module.css */ "./styles/PreviousWork.module.css");
/* harmony import */ var _styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\components\\previous-work\\PreviousWorkItem.js";





const PreviousWorkItem = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousWorkLink),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: props.flip ? (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousItemContainerFlipped) : (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousItemContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: props.link,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().hejsan),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: props.flip ? (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainerFlip) : (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: props.flip ? (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousItemImageFlipped) : (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousItemImage),
              style: {
                backgroundImage: 'url(' + props.img + ')'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: props.flip ? (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousItemImageFlippedMobile) : (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousItemImageMobile),
              style: {
                backgroundImage: 'url(' + props.img + ')'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().previousItemInformation),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerItem),
          children: props.header
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().tagAndTimeContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().tags),
            children: props.tags
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().timeslot),
            children: props.timeslot
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
          children: props.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().textMobile),
          children: props.textMobile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: props.link,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                children: "Read more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: ['fas', 'long-arrow-alt-right'],
                className: (_styles_PreviousWork_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviousWorkItem);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _components_HeaderNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/HeaderNav */ "./components/HeaderNav.js");
/* harmony import */ var _components_hero_HeroContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/hero/HeroContainer */ "./components/hero/HeroContainer.js");
/* harmony import */ var _components_current_focus_CurrentFocusContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/current-focus/CurrentFocusContainer */ "./components/current-focus/CurrentFocusContainer.js");
/* harmony import */ var _components_previous_work_PreviousWorkContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/previous-work/PreviousWorkContainer */ "./components/previous-work/PreviousWorkContainer.js");
/* harmony import */ var _components_about_home_AboutHomeContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/about-home/AboutHomeContainer */ "./components/about-home/AboutHomeContainer.js");
/* harmony import */ var _components_experiences_ExperienceCollectionHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/experiences/ExperienceCollectionHome */ "./components/experiences/ExperienceCollectionHome.js");
/* harmony import */ var _components_contact_ContactFormContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contact/ContactFormContainer */ "./components/contact/ContactFormContainer.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Jonathan\\Programming\\portfolio\\pages\\index.js";









function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_HeaderNav__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_hero_HeroContainer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_current_focus_CurrentFocusContainer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_about_home_AboutHomeContainer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_previous_work_PreviousWorkContainer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_experiences_ExperienceCollectionHome__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_contact_ContactFormContainer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/AboutHome.module.css":
/*!*************************************!*\
  !*** ./styles/AboutHome.module.css ***!
  \*************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"aboutHomeContainer": "AboutHome_aboutHomeContainer__23quw",
	"header": "AboutHome_header__1_8xD",
	"headerMobile": "AboutHome_headerMobile__3N0Fu",
	"profilePicture": "AboutHome_profilePicture__1at2X",
	"aboutHomeText": "AboutHome_aboutHomeText__38KkA",
	"skillsAndToolsHeader": "AboutHome_skillsAndToolsHeader__kK6Mi",
	"tag": "AboutHome_tag__cwzMh",
	"contentContainer": "AboutHome_contentContainer__1FgwL"
};


/***/ }),

/***/ "./styles/Contact.module.css":
/*!***********************************!*\
  !*** ./styles/Contact.module.css ***!
  \***********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"formContainer": "Contact_formContainer__2ti5o",
	"header": "Contact_header__303sq",
	"desc": "Contact_desc__2dWQs",
	"textInput": "Contact_textInput__1kxjY",
	"textArea": "Contact_textArea__3H-N2",
	"formSubmitButton": "Contact_formSubmitButton__1rsbu",
	"mapContainer": "Contact_mapContainer__gAzrl",
	"icon": "Contact_icon__32Nsp",
	"contactFormStatusSuccess": "Contact_contactFormStatusSuccess__3YeuJ",
	"contactFormStatusError": "Contact_contactFormStatusError__HjEVB",
	"contactFormContainer": "Contact_contactFormContainer__2hGAz"
};


/***/ }),

/***/ "./styles/CurrentFocus.module.css":
/*!****************************************!*\
  !*** ./styles/CurrentFocus.module.css ***!
  \****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"currentFocusMainContainer": "CurrentFocus_currentFocusMainContainer__yXx0T",
	"currentFocuses": "CurrentFocus_currentFocuses__1Xvb0",
	"currentFocusContainer": "CurrentFocus_currentFocusContainer__7VMtQ",
	"header": "CurrentFocus_header__15lDC",
	"imageContainer": "CurrentFocus_imageContainer__yEBgX",
	"image": "CurrentFocus_image__1BcAM",
	"headerFocus": "CurrentFocus_headerFocus__1ar5d",
	"metaContainer": "CurrentFocus_metaContainer__1Y3bc",
	"role": "CurrentFocus_role__gzaS7",
	"text": "CurrentFocus_text__3jMNJ",
	"readMoreLink": "CurrentFocus_readMoreLink__1u-Bo",
	"link": "CurrentFocus_link__2J4A2",
	"linkContent": "CurrentFocus_linkContent__2pwxf",
	"icon": "CurrentFocus_icon__jU2hk",
	"timeslot": "CurrentFocus_timeslot__3P5e9"
};


/***/ }),

/***/ "./styles/Experience.module.css":
/*!**************************************!*\
  !*** ./styles/Experience.module.css ***!
  \**************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"experienceCollectionContainer": "Experience_experienceCollectionContainer__1-ZNU",
	"experienceCollectionContainerHome": "Experience_experienceCollectionContainerHome__2qB7X",
	"experienceContainer": "Experience_experienceContainer__tHbjo",
	"experienceHeaderContainer": "Experience_experienceHeaderContainer__hySVt",
	"experienceHeader": "Experience_experienceHeader__1LFcX",
	"itemContainer": "Experience_itemContainer__awOzI",
	"itemImage": "Experience_itemImage__XbRyi",
	"itemInformation": "Experience_itemInformation__tYryf",
	"publicationInformation": "Experience_publicationInformation__3AK8t",
	"itemHeader": "Experience_itemHeader__3VG-Z",
	"itemRole": "Experience_itemRole__1JpBK",
	"itemTimeslot": "Experience_itemTimeslot__3ADqT"
};


/***/ }),

/***/ "./styles/Header.module.css":
/*!**********************************!*\
  !*** ./styles/Header.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "Header_headerContainer__2TVnY",
	"headerContainerInner": "Header_headerContainerInner__2qqXy",
	"headerNavItemContainer": "Header_headerNavItemContainer__1oSnQ",
	"headerNavItemContainerActive": "Header_headerNavItemContainerActive__3rVSC"
};


/***/ }),

/***/ "./styles/Hero.module.css":
/*!********************************!*\
  !*** ./styles/Hero.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"heroContainer": "Hero_heroContainer__22-ND",
	"heroContent": "Hero_heroContent__3nJ-Q",
	"welcomeText": "Hero_welcomeText__3k1lK",
	"nameText": "Hero_nameText__1xjfS",
	"heroTagContainer": "Hero_heroTagContainer__1irCQ",
	"heroTag": "Hero_heroTag__aYprm",
	"heroLinksContainer": "Hero_heroLinksContainer__305je",
	"contactButton": "Hero_contactButton__ba_3z",
	"heroLinkContainer": "Hero_heroLinkContainer__1RkaF",
	"heroIconContainer": "Hero_heroIconContainer__1TcJb",
	"icon": "Hero_icon__o-aic",
	"iconText": "Hero_iconText__2V_vl",
	"heroTellusContainer": "Hero_heroTellusContainer__CBksf",
	"heroTellusMobile": "Hero_heroTellusMobile__2_vDa",
	"heroTellus": "Hero_heroTellus__27vHp"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"pageContent": "Home_pageContent__25_DN",
	"footerContainer": "Home_footerContainer__T7vtv",
	"footerContainerInner": "Home_footerContainerInner___lavk",
	"footerIcon": "Home_footerIcon__2RywR",
	"footerText": "Home_footerText__1cXmR",
	"footerTextMobile": "Home_footerTextMobile__3JUmR"
};


/***/ }),

/***/ "./styles/PreviousWork.module.css":
/*!****************************************!*\
  !*** ./styles/PreviousWork.module.css ***!
  \****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"previousWorkContainer": "PreviousWork_previousWorkContainer__3W7L5",
	"header": "PreviousWork_header__yUHGW",
	"previousWorkLink": "PreviousWork_previousWorkLink__3JcPn",
	"previousItemContainer": "PreviousWork_previousItemContainer__3eNP1",
	"previousItemContainerFlipped": "PreviousWork_previousItemContainerFlipped__bthO5",
	"imageContainer": "PreviousWork_imageContainer__1vXbB",
	"imageContainerFlip": "PreviousWork_imageContainerFlip__2Vj0b",
	"previousItemImageMobile": "PreviousWork_previousItemImageMobile__14pr3",
	"previousItemImageFlippedMobile": "PreviousWork_previousItemImageFlippedMobile__3mvBw",
	"previousItemImage": "PreviousWork_previousItemImage__136db",
	"previousItemImageFlipped": "PreviousWork_previousItemImageFlipped__2GCMV",
	"previousItemInformation": "PreviousWork_previousItemInformation__3fADW",
	"headerItem": "PreviousWork_headerItem__31g24",
	"tags": "PreviousWork_tags__2580d",
	"timeslot": "PreviousWork_timeslot__2EmCE",
	"text": "PreviousWork_text__bP_Em",
	"textMobile": "PreviousWork_textMobile__28IT3",
	"link": "PreviousWork_link__1SFs3",
	"linkContent": "PreviousWork_linkContent__TLC5X",
	"icon": "PreviousWork_icon__8nGF_",
	"hejsan": "PreviousWork_hejsan__11UWC",
	"tagAndTimeContainer": "PreviousWork_tagAndTimeContainer__2s0m_"
};


/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("emailjs-com");

/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("google-map-react");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUV4QkEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUM7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvSGVhZGVyTmF2LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvSGVhZGVyTmF2SXRlbS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2Fib3V0LWhvbWUvQWJvdXRIb21lQ29udGFpbmVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvYWJvdXQtaG9tZS9BYm91dEhvbWVTa2lsbHNBbmRUb29scy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2Fib3V0LWhvbWUvQWJvdXRIb21lVGV4dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RGb3JtQ29udGFpbmVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0Rm9ybU1hcC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2N1cnJlbnQtZm9jdXMvQ3VycmVudEZvY3VzQ29udGFpbmVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvY3VycmVudC1mb2N1cy9DdXJyZW50Rm9jdXNJdGVtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvRWR1Y2F0aW9uQ29udGFpbmVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvRXhwZXJpZW5jZUNvbGxlY3Rpb25Ib21lLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvRXhwZXJpZW5jZUNvbnRhaW5lckhvbWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9leHBlcmllbmNlcy9FeHBlcmllbmNlSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvRXhwZXJpZW5jZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9leHBlcmllbmNlcy9Qcm9qZWN0c0NvbnRhaW5lckhvbWUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9leHBlcmllbmNlcy9QdWJsaWNhdGlvbkl0ZW0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9leHBlcmllbmNlcy9QdWJsaWNhdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9oZXJvL0hlcm9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9oZXJvL0hlcm9JY29uTGluay5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL3ByZXZpb3VzLXdvcmsvUHJldmlvdXNXb3JrQ29udGFpbmVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvcHJldmlvdXMtd29yay9QcmV2aW91c1dvcmtJdGVtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3R5bGVzL0Fib3V0SG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3N0eWxlcy9Db250YWN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3R5bGVzL0N1cnJlbnRGb2N1cy5tb2R1bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3N0eWxlcy9FeHBlcmllbmNlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3N0eWxlcy9IZXJvLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zdHlsZXMvUHJldmlvdXNXb3JrLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJhb3NcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcImdvb2dsZS1tYXAtcmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2lnbm9yZWR8QzpcXFVzZXJzXFxKb25hdGhhblxcUHJvZ3JhbW1pbmdcXHBvcnRmb2xpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgSGVhZGVyTmF2SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlck5hdkl0ZW0nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEhlYWRlck5hdiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcklubmVyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJOYXZJdGVtIHRleHQ9XCJIb21lXCIgbGluaz1cIi9cIi8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTmF2SXRlbSB0ZXh0PVwiUG9ydGZvbGlvXCIgbGluaz1cIi9wb3J0Zm9saW9cIi8+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyTmF2SXRlbSB0ZXh0PVwiQWJvdXRcIiBsaW5rPVwiL2Fib3V0XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEhlYWRlck5hdkl0ZW0gPSAoe3RleHQsIGxpbmt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9ID5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gbGluayA/IHN0eWxlcy5oZWFkZXJOYXZJdGVtQ29udGFpbmVyQWN0aXZlIDogKGxpbmsgIT09ICcvJyAmJiByb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aChsaW5rKSkgPyBzdHlsZXMuaGVhZGVyTmF2SXRlbUNvbnRhaW5lckFjdGl2ZSA6IHN0eWxlcy5oZWFkZXJOYXZJdGVtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZJdGVtXHJcbiIsImltcG9ydCBBYm91dEhvbWVUZXh0IGZyb20gJy4vQWJvdXRIb21lVGV4dCdcclxuaW1wb3J0IEFib3V0SG9tZVNraWxsc0FuZFRvb2xzIGZyb20gJy4vQWJvdXRIb21lU2tpbGxzQW5kVG9vbHMnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9BYm91dEhvbWUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEFib3V0SG9tZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dEhvbWVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTW9iaWxlfT5BYm91dCBtZTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZVBpY3R1cmV9IHN0eWxlPXtcclxuICAgICAgICAgICAgICAgIHsgYmFja2dyb3VuZEltYWdlOiAndXJsKC9qb25hdGhhbi11cHBzYWxhMi5KUEcpJ319PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkFib3V0IG1lPC9oMj5cclxuICAgICAgICAgICAgICAgIDxBYm91dEhvbWVUZXh0IFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJJJ20gSm9uYXRoYW4sIGEgZ3V5IGZyb20gTm9ydGhlcm4gU3dlZGVuIHRoYXQgbG92ZXMgZ2V0dGluZyBpbnZvbHZlZCBpbiBuZXcgcHJvamVjdHMgYW5kXHJcbiAgICAgICAgICAgICAgICAgICAgb3Bwb3J0dW5pdGllcyB3aGVyZSBJIGdldCB0aGUgY2hhbmNlIHRvIGxlYXJuIG5ldyB0aGluZ3MgYW5kIGNoYWxsZW5nZSBteXNlbGYuIEN1cnJlbnRseSwgSSdtIFxyXG4gICAgICAgICAgICAgICAgICAgIG1vc3RseSBpbnRlcmVzdGVkIGluIHNvZnR3YXJlIGRldmVsb3BtZW50LCBkZXNpZ24sIGFuZCBlbnRyZXByZW5ldXJzaGlwLiBPdXRzaWRlIG9mIHRoYXQsIEkgc3BlbmQgbW9zdFxyXG4gICAgICAgICAgICAgICAgICAgIG9mIG15IHRpbWUgZGl2aW5nIGhlYWRmaXJzdCBpbnRvIHdoYXRldmVyIGhvYmJpZXMgSSBoYXZlIGF0IHRoZSB0aW1lIGFuZCBjb29raW5nIGZvb2QgdGhhdCBhdCBsZWFzdCBJIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaW5rIHRhc3RlcyBwcmV0dHkgZ29vZC5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEFib3V0SG9tZVNraWxsc0FuZFRvb2xzIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dEhvbWVDb250YWluZXJcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQWJvdXRIb21lLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBBYm91dEhvbWVTa2lsbHNBbmRUb29scyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc0FuZFRvb2xzSGVhZGVyfT5TS0lMTFM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFnfT5Tb2Z0d2FyZSBkZXZlbG9wbWVudCwgVUkvVVggZGVzaWduLCBQcm90b3R5cGluZywgVmlzdWFsIGRlc2lnbiwgTGVhZGVyc2hpcDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9vbHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc0FuZFRvb2xzSGVhZGVyfT5UT09MUzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWd9PlxyXG4gICAgICAgICAgICAgICAgICAgIEhUTUwsIENTUywgSmF2YXNjcmlwdCwgQWRvYmUgQ3JlYXRpdmUgU3VpdGUsIFJlYWN0LCBOZXh0SlMsIEphdmEsIEMsIFxyXG4gICAgICAgICAgICAgICAgICAgIFBIUCwgRXhwcmVzcywgTm9kZUpTLCBSZWR1eCwgV29yZHByZXNzLCBTUUwsIG5vU1FMLCBNb25nb0RCLCBDb2RlaWduaXRlclxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRIb21lU2tpbGxzQW5kVG9vbHNcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQWJvdXRIb21lLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBBYm91dEhvbWVUZXh0ID0gKHt0ZXh0fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYm91dEhvbWVUZXh0fT5cclxuICAgICAgICAgICAgeyB0ZXh0IH1cclxuICAgICAgICA8L3A+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0SG9tZVRleHRcclxuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ29udGFjdC5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1TdGF0dXMsIHNldEZvcm1TdGF0dXNdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRFbWFpbChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlXzQ0OTVtc3InLCAndGVtcGxhdGVfeGUza28waCcsIGZvcm0uY3VycmVudCwgJ3VzZXJfZ2FNTFA1M29QU25SQ3dPWXNTM2J0JylcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgc2V0Rm9ybVN0YXR1cyh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZSB3YXMgc2VudCBzdWNjZXNzZnVsbHkhIEknbGwgZ2V0IGJhY2sgdG8geW91IHdpdGggYSByZXNwb25zZSBzaG9ydGx5LlwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG4gICAgICAgICAgICBzZXRGb3JtU3RhdHVzKHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk9oLCBzb21ldGhpbmcgd2VudCB3cm9uZy4gVHJ5IHNlbmRpbmcgYSBtYWlsIHRvIGpvbmF0aGFuLmhlZGx1bmQuMzcxQGdtYWlsLmNvbSBpbnN0ZWFkIVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfSBvblN1Ym1pdD17c2VuZEVtYWlsfSByZWY9e2Zvcm19PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5Db250YWN0IG1lITwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PlxyXG4gICAgICAgICAgICAgICAgSSdtIGN1cnJlbnRseSBsaXZpbmcgaW4gVW1lw6UsIFN3ZWRlbi4gR2V0IGluIHRvdWNoIHdpdGggbWUgdG8gYnkgZmlsbGluZyBvdXQgdGhlIGNvbnRhY3QgZm9ybSBiZWxvdy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZnJvbVwiIGNsYXNzTmFtZT17c3R5bGVzLnRleHRJbnB1dH0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5wdXR9IHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QXJlYX0gcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2BidG4gJHtzdHlsZXMuZm9ybVN1Ym1pdEJ1dHRvbn1gfSB2YWx1ZT1cIlNlbmQhXCIvPlxyXG4gICAgICAgICAgICB7Zm9ybVN0YXR1cyAmJiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1TdGF0dXMuc3RhdHVzID8gc3R5bGVzLmNvbnRhY3RGb3JtU3RhdHVzU3VjY2VzcyA6IHN0eWxlcy5jb250YWN0Rm9ybVN0YXR1c0Vycm9yfT5cclxuICAgICAgICAgICAgICAgIHtmb3JtU3RhdHVzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXHJcbiIsImltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuL0NvbnRhY3RGb3JtJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm1NYXAgZnJvbSAnLi9Db250YWN0Rm9ybU1hcCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0NvbnRhY3QubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RGb3JtQ29udGFpbmVyfSBpZD1cImNvbnRhY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgICAgICA8Q29udGFjdEZvcm1NYXAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1Db250YWluZXJcclxuIiwiaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Db250YWN0Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBDb250YWN0Rm9ybU1hcCA9ICgpID0+IHtcclxuICBjb25zdCBBbnlSZWFjdENvbXBvbmVudCA9ICgpID0+IDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXMnLCAnbWFwLW1hcmtlci1hbHQnXX0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cclxuXHJcbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgY2VudGVyOiB7XHJcbiAgICAgICAgICBsYXQ6IDYzLjgyNTg0OCxcclxuICAgICAgICAgIGxuZzogMjAuMjYzMDM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB6b29tOiA2XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVBcGlMb2FkZWQgPSAobWFwLCBtYXBzKSA9PiB7XHJcbiAgICAgICAgLy8gdXNlIG1hcCBhbmQgbWFwcyBvYmplY3RzXHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHb29nbGVNYXBSZWFjdFxyXG4gICAgICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiBcIkFJemFTeUQwMTdERGYxNWNnS0FfYm0xZkJWQm9TT1VKWGFlanRTa1wiIH19XHJcbiAgICAgICAgICAgICAgZGVmYXVsdENlbnRlcj17ZGVmYXVsdFByb3BzLmNlbnRlcn1cclxuICAgICAgICAgICAgICBkZWZhdWx0Wm9vbT17ZGVmYXVsdFByb3BzLnpvb219XHJcbiAgICAgICAgICAgICAgeWVzSVdhbnRUb1VzZUdvb2dsZU1hcEFwaUludGVybmFsc1xyXG4gICAgICAgICAgICAgIG9uR29vZ2xlQXBpTG9hZGVkPXsoeyBtYXAsIG1hcHMgfSkgPT4gaGFuZGxlQXBpTG9hZGVkKG1hcCwgbWFwcyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWFwQ29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFueVJlYWN0Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICBsYXQ9ezYzLjgyNzV9XHJcbiAgICAgICAgICAgICAgICBsbmc9ezIwLjI2MzAzNX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybU1hcFxyXG5cclxuIiwiaW1wb3J0IEN1cnJlbnRGb2N1c0l0ZW0gZnJvbSAnLi9DdXJyZW50Rm9jdXNJdGVtJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ3VycmVudEZvY3VzLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBDdXJyZW50Rm9jdXNDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEZvY3VzTWFpbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PldoYXQgSSdtIGN1cnJlbnRseSBmb2N1c2luZyBvbjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEZvY3VzZXN9PlxyXG4gICAgICAgICAgICAgICAgPEN1cnJlbnRGb2N1c0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPVwiL3NwbGljay5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlNwbGlja1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJDby1mb3VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc2xvdD1cIk1BUkNIIDIwMjAgLSBDVVJSRU5UXCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQSBuZXh0LWdlbmVyYXRpb24gcGxhdGZvcm0gZm9yIGhlbHBpbmcgZS1jb21tZXJjZSBjb21wYW5pZXMgYW5kIGluZmx1ZW5jZXJzIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3QgYW5kIGNvbGxhYm9yYXRlLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9wb3J0Zm9saW8vc3BsaWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEN1cnJlbnRGb2N1c0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPVwiL3dpcC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIldJUCAtIE5ldyBzb2NpYWwgbWVkaWFcIiBcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiQ3JlYXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXNsb3Q9XCJGRUJSVUFSWSAyMDIyIC0gQ1VSUkVOVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlN0YXJ0ZWQgd29ya2luZyBvbiBhIG5ldyAobGFyZ2VyKSBwcm9qZWN0LiBBIHNvY2lhbCBtZWRpYSB0aGF0IGFsc28gY3JlYXRlcyBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSBmb3IgdXNpbmcgaXQgb24geW91ciBvd24uXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3BvcnRmb2xpby9zb2NpYWwtbWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDdXJyZW50Rm9jdXNJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIGltZz1cIi9pbnRhbS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkludGFtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cIkZvdW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzbG90PVwiQVVHVVNUIDIwMjAgLSBDVVJSRU5UXCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQSB3ZWIgYWdlbmN5IHRoYXQgc3BlY2lhbGl6ZXMgaW4gY3JlYXRpbmcgdXNlci1mcmllbmRseSBhbmQgcmVzcG9uc2l2ZSBcclxuICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlcyB0YWlsb3JlZCBmb3IgdGhlIGN1c3RvbWVyJ3MgbmVlZHMuXCJcclxuICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3BvcnRmb2xpby9pbnRhbVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEN1cnJlbnRGb2N1c0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPVwiL2tsYXNzZm90by5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlVtZcOlIFVuaXZlcnNpdHlcIiBcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiU3R1ZGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXNsb3Q9XCJBVUdVU1QgMjAxNiAtIENVUlJFTlRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJJJ20gY3VycmVudGx5IGEgc3R1ZGVudCBhdCBVbWXDpSBVbml2ZXJzaXR5IHN0dWR5aW5nIGVjb25vbWljcy5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms9XCIvcG9ydGZvbGlvL3VtZWF1bml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50Rm9jdXNDb250YWluZXJcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9DdXJyZW50Rm9jdXMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEN1cnJlbnRGb2N1c0l0ZW0gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50Rm9jdXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgcHJvcHMuaW1nICArICcpJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyRm9jdXN9Pntwcm9wcy5oZWFkZXJ9PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJvbGV9Pntwcm9wcy5yb2xlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzbG90fT57cHJvcHMudGltZXNsb3R9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWFkIG1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYXMnLCAnbG9uZy1hcnJvdy1hbHQtcmlnaHQnXX0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50Rm9jdXNJdGVtXHJcbiIsImltcG9ydCBFeHBlcmllbmNlSGVhZGVyIGZyb20gJy4vRXhwZXJpZW5jZUhlYWRlcidcclxuaW1wb3J0IEV4cGVyaWVuY2VJdGVtIGZyb20gJy4vRXhwZXJpZW5jZUl0ZW0nXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9FeHBlcmllbmNlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBFZHVjYXRpb25Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlSGVhZGVyIGhlYWRlcj1cIkVkdWNhdGlvblwiIGJ1dHRvbj17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgPEV4cGVyaWVuY2VJdGVtIFxyXG4gICAgICAgICAgICAgICAgbGluaz1cIi9wb3J0Zm9saW8vdW1lYXVuaXZlcnNpdHlcIlxyXG4gICAgICAgICAgICAgICAgaW1nPVwiL3VtZWF1bml2ZXJzaXR5LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJNYXN0ZXIgb2YgU2NpZW5jZSwgSW50ZXJhY3Rpb24gJiBEZXNpZ25cIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIlVtZcOlIFVuaXZlcnNpdHlcIlxyXG4gICAgICAgICAgICAgICAgdGltZXNsb3Q9XCJBVUcgMjAxNiAtIEpBTiAyMDIyXCIvPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUl0ZW0gXHJcbiAgICAgICAgICAgICAgICBsaW5rPVwiL3BvcnRmb2xpby91bWVhdW5pdmVyc2l0eVwiXHJcbiAgICAgICAgICAgICAgICBpbWc9XCIvdW1lYXVuaXZlcnNpdHkucG5nXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gRWNvbm9taWNzXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJVbWXDpSBVbml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgICAgIHRpbWVzbG90PVwiQVVHIDIwMTkgLSBDdXJyZW50XCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb25Db250YWluZXJcclxuIiwiaW1wb3J0IEV4cGVyaWVuY2VDb250YWluZXJIb21lIGZyb20gJy4vRXhwZXJpZW5jZUNvbnRhaW5lckhvbWUnXHJcbmltcG9ydCBQcm9qZWN0c0NvbnRhaW5lckhvbWUgZnJvbSAnLi9Qcm9qZWN0c0NvbnRhaW5lckhvbWUnXHJcbmltcG9ydCBQdWJsaWNhdGlvbkNvbnRhaW5lciBmcm9tICcuL1B1YmxpY2F0aW9uc0NvbnRhaW5lcidcclxuaW1wb3J0IEVkdWNhdGlvbkNvbnRhaW5lciBmcm9tICcuL0VkdWNhdGlvbkNvbnRhaW5lcidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0V4cGVyaWVuY2UubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VDb2xsZWN0aW9uSG9tZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leHBlcmllbmNlQ29sbGVjdGlvbkNvbnRhaW5lckhvbWV9PlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUNvbnRhaW5lckhvbWUgLz5cclxuICAgICAgICAgICAgPFByb2plY3RzQ29udGFpbmVySG9tZSAvPlxyXG4gICAgICAgICAgICA8UHVibGljYXRpb25Db250YWluZXIgLz5cclxuICAgICAgICAgICAgPEVkdWNhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlQ29sbGVjdGlvbkhvbWVcclxuIiwiaW1wb3J0IEV4cGVyaWVuY2VIZWFkZXIgZnJvbSAnLi9FeHBlcmllbmNlSGVhZGVyJ1xyXG5pbXBvcnQgRXhwZXJpZW5jZUl0ZW0gZnJvbSAnLi9FeHBlcmllbmNlSXRlbSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0V4cGVyaWVuY2UubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VDb250YWluZXJIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4cGVyaWVuY2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUhlYWRlciBoZWFkZXI9XCJFeHBlcmllbmNlc1wiIGJ1dHRvbj17dHJ1ZX0vPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUl0ZW1cclxuICAgICAgICAgICAgICAgIGxpbms9XCIvcG9ydGZvbGlvL3VtaW5vdmFpbm5vdmF0aW9uXCJcclxuICAgICAgICAgICAgICAgIGltZz1cIi91bWlub3ZhaW5ub3ZhdGlvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiVW1pbm92YSBJbm5vdmF0aW9uXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJTdHVkZW50IGNvbW11bmljYXRvclwiXHJcbiAgICAgICAgICAgICAgICB0aW1lc2xvdD1cIkZFQiAyMDIwIC0gQVBSIDIwMjFcIi8+XHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlSXRlbSBcclxuICAgICAgICAgICAgICAgIGxpbms9XCIvcG9ydGZvbGlvL3BpdGVha29tbXVuXCJcclxuICAgICAgICAgICAgICAgIGltZz1cIi9waXRlYWtvbW11bi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiUGl0ZcOlIGtvbW11blwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwiU3VwZXJ2aXNvciBhdCBVbmcgaSBQaXRlw6VcIlxyXG4gICAgICAgICAgICAgICAgdGltZXNsb3Q9XCJKVU4gMjAxNiAtIFNFUCAyMDE4XCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlQ29udGFpbmVySG9tZVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9FeHBlcmllbmNlLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBFeHBlcmllbmNlSGVhZGVyID0gKCB7aGVhZGVyLCBidXR0b259ICkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4cGVyaWVuY2VIZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB7YnV0dG9uICYmICBcclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgYWxsXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlSGVhZGVyXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0V4cGVyaWVuY2UubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEV4cGVyaWVuY2VJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmxpbmt9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUltYWdlfSBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgeyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmltZyAgKyAnKSd9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUluZm9ybWF0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUhlYWRlcn0+e3Byb3BzLmhlYWRlcn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pdGVtUm9sZX0+e3Byb3BzLnJvbGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1UaW1lc2xvdH0+e3Byb3BzLnRpbWVzbG90fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlSXRlbVxyXG4iLCJpbXBvcnQgRXhwZXJpZW5jZUhlYWRlciBmcm9tICcuL0V4cGVyaWVuY2VIZWFkZXInXHJcbmltcG9ydCBFeHBlcmllbmNlSXRlbSBmcm9tICcuL0V4cGVyaWVuY2VJdGVtJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRXhwZXJpZW5jZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUHJvamVjdHNDb250YWluZXJIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4cGVyaWVuY2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUhlYWRlciBoZWFkZXI9XCJQcm9qZWN0c1wiIGJ1dHRvbj17dHJ1ZX0vPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUl0ZW0gXHJcbiAgICAgICAgICAgICAgICBsaW5rPVwiL3BvcnRmb2xpby9jc25jb3VudGRvd25cIlxyXG4gICAgICAgICAgICAgICAgaW1nPVwiY3NuY291bnRkb3duLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJDU04gQ291bnRkb3duXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJQcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgIHRpbWVzbG90PVwiQVBSIDIwMTkgLSBNQVkgMjAxOVwiLz5cclxuICAgICAgICAgICAgPEV4cGVyaWVuY2VJdGVtIFxyXG4gICAgICAgICAgICAgICAgbGluaz1cIi9wb3J0Zm9saW8vaWRhZ29jaGluYXR0XCJcclxuICAgICAgICAgICAgICAgIGltZz1cImlkYWdvY2hpbmF0dC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiSURhZyAmIEluYXR0XCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJQcm9qZWN0IG1hbmFnZXJcIlxyXG4gICAgICAgICAgICAgICAgdGltZXNsb3Q9XCJTRVAgMjAxOCAtIE9LVCAyMDE5XCIvPlxyXG4gICAgICAgICAgICA8RXhwZXJpZW5jZUl0ZW0gXHJcbiAgICAgICAgICAgICAgICBsaW5rPVwiL3BvcnRmb2xpby9idWRkeXByb2dyYW1tZVwiXHJcbiAgICAgICAgICAgICAgICBpbWc9XCIvdW1lYXVuaXZlcnNpdHkucG5nXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIkJ1ZGR5IHByb2dyYW1tZVwiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwiR3JvdXAgTGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIHRpbWVzbG90PVwiQVVHIDIwMTcgLSBERUMgMjAxN1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNDb250YWluZXJIb21lIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvRXhwZXJpZW5jZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUHVibGljYXRpb25JdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmxpbmt9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1Db250YWluZXJ9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnB1YmxpY2F0aW9uSW5mb3JtYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1IZWFkZXJ9Pntwcm9wcy5oZWFkZXJ9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLml0ZW1Sb2xlfT57cHJvcHMucm9sZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25JdGVtXHJcbiIsImltcG9ydCBFeHBlcmllbmNlSGVhZGVyIGZyb20gJy4vRXhwZXJpZW5jZUhlYWRlcidcclxuaW1wb3J0IFB1YmxpY2F0aW9uSXRlbSBmcm9tICcuL1B1YmxpY2F0aW9uSXRlbSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0V4cGVyaWVuY2UubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFB1YmxpY2F0aW9uc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxFeHBlcmllbmNlSGVhZGVyIGhlYWRlcj1cIlB1YmxpY2F0aW9uc1wiIGJ1dHRvbj17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgPFB1YmxpY2F0aW9uSXRlbSBcclxuICAgICAgICAgICAgICAgIGxpbms9XCJodHRwOi8vdXJuLmtiLnNlL3Jlc29sdmU/dXJuPXVybjpuYm46c2U6dW11OmRpdmEtMTkyMzM1XCJcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIlVzaW5nIE1hY2hpbmUgTGVhcm5pbmcgdG8gQ29ubmVjdCBCcmFuZHMgd2l0aCBJbmZsdWVuY2VycyAoTWFzdGVyIFRoZXNpcylcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIkhlZGx1bmQsIEouICgyMDIyKVwiLz5cclxuICAgICAgICAgICAgPFB1YmxpY2F0aW9uSXRlbSBcclxuICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL3ByZXNzLnVtLnNpL2luZGV4LnBocC91bXAvY2F0YWxvZy9ib29rLzU4MVwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJEZXNpZ25pbmcgY2FsbCB0byBhY3Rpb246IFVzZXJz4oCZIHBlcmNlcHRpb24gb2YgZGlmZmVyZW50IGNoYXJhY3RlcmlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwiTWVqdG9mdCwgVC4sIEhlZGx1bmQsIEouLCBDcmlwcHMsIEguLCBTw7ZkZXJzdHLDtm0sIFUuLCAmIE5vcmJlcmcsIE8uICgyMDIxKVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25zQ29udGFpbmVyXHJcbiIsImltcG9ydCBIZXJvSWNvbkxpbmsgZnJvbSAnLi9IZXJvSWNvbkxpbmsnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9IZXJvLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBIZXJvQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeU9mZnNldCA9IC04MDsgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCArIHlPZmZzZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsVG8oe3RvcDogeSwgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMud2VsY29tZVRleHR9PldlbGNvbWUgdG8gbXkgcG9ydGZvbGlvITwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lVGV4dH0+SSdtIEpvbmF0aGFuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RhZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvVGFnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRnVsbHN0YWNrIERldmVsb3BlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RhZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVYL1VJIERlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0xpbmtzQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJ0biAke3N0eWxlcy5jb250YWN0QnV0dG9ufWB9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgaW4gdG91Y2hcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9MaW5rQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlcm9JY29uTGluayB0ZXh0PVwiXCIgaWNvbj17XCJlbnZlbG9wZVwifSBpY29uVHlwZT1cImZhc1wiIGxpbms9XCJtYWlsdG86am9uYXRoYW4uaGVkbHVuZC4zNzFAZ21haWwuY29tXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVyb0ljb25MaW5rIHRleHQ9XCJcIiBpY29uPXtcImxpbmtlZGluXCJ9IGljb25UeXBlPVwiZmFiXCIgbGluaz1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb25hdGhhbmhlZGx1bmQvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVyb0ljb25MaW5rIHRleHQ9XCJcIiBpY29uPXtcImJvb2tcIn0gaWNvblR5cGU9XCJmYXNcIiBsaW5rPVwiaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvODk1Njg2NTMtam9uYXRoYW4taGVkbHVuZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RlbGx1c0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lYXJ0aC1tb2JpbGUucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RlbGx1c01vYmlsZX0vPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZWFydGgucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb1RlbGx1c30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9Db250YWluZXJcclxuIiwiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSGVyby5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgSGVyb0ljb25MaW5rID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17c3R5bGVzLmhlcm9JY29uQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbcHJvcHMuaWNvblR5cGUsIHByb3BzLmljb25dfSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pY29uVGV4dH0+e3Byb3BzLnRleHR9PC9wPiBcclxuICAgICAgICA8L2E+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9JY29uTGlua1xyXG4iLCJpbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XHJcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7IC8vIFlvdSBjYW4gYWxzbyB1c2UgPGxpbms+IGZvciBzdHlsZXNcclxuXHJcbmltcG9ydCBQcmV2aW91c1dvcmtJdGVtIGZyb20gJy4vUHJldmlvdXNXb3JrSXRlbSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1ByZXZpb3VzV29yay5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUHJldmlvdXNXb3JrQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBBT1MuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aW91c1dvcmtDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5Tb21lIG9mIG15IHByZXZpb3VzIHByb2plY3RzPC9oMj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hb3Mtb2Zmc2V0PVwiMjAwXCIgZGF0YS1hb3MtZHVyYXRpb249XCI2MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJldmlvdXNXb3JrSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPVwiL2hvYmJpZXMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9wb3J0Zm9saW8vaG9iYmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkhvYmJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzPVwiRGVzaWduLCBFbnRyZXByZW5vdXJzaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXNsb3Q9XCJBVUcgMjAyMCAtIEpBTiAyMDIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkEgc2VydmljZSB3aGVyZSB0aGUgdXNlciBjYW4gY29ubmVjdCBhbmQgY29tbXVuaWNhdGUgd2l0aCBvdGhlcnMgd2hvIGhhdmUgdGhlIHNhbWUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob2JiaWVzLCBhbmQgZ2V0IG1vcmUgb3V0IG9mIGV4ZXJjaXNpbmcgdGhlaXIgaG9iYmllcyBvbiB0aGVpciBvd24uIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRNb2JpbGU9XCJBIHNlcnZpY2Ugd2hlcmUgdGhlIHVzZXIgY2FuIGNvbm5lY3QgYW5kIGNvbW11bmljYXRlIHdpdGggb3RoZXJzIHdobyBoYXZlIHRoZSBzYW1lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9iYmllcywgYW5kIGdldCBtb3JlIG91dCBvZiBleGVyY2lzaW5nIHRoZWlyIGhvYmJpZXMgb24gdGhlaXIgb3duLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hb3Mtb2Zmc2V0PVwiMTUwXCIgZGF0YS1hb3MtZHVyYXRpb249XCI2MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJldmlvdXNXb3JrSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPVwiL2FyYm9yZWFsLXNob3ctY2FzZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL3BvcnRmb2xpby9hcmJvcmVhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkFyYm9yZWFsIFByb3RvdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9XCJEZXNpZ24sIFByb3RvdHlwaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXNsb3Q9XCJKQU4gMjAxOSAtIEpVTiAyMDE5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkZvcmVzdCBtZWFzdXJlbWVudHMgd2l0aCB5b3VyIHBob25lLiBBcmJvcmVhbCB1c2VzIEFSIHRlY2hub2xvZ3kgdG8gdHJhbnNmb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZvcmVzdCBpbnRvIGEgZGlnaXRhbCB2YXJpYW50IHdoZXJlIHlvdSBjYW4gcGVyZm9ybSBtZWFzdXJlbWVudHMgaW4gcmVhbC10aW1lLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRNb2JpbGU9XCJGb3Jlc3QgbWVhc3VyZW1lbnRzIHdpdGggeW91ciBwaG9uZS4gQXJib3JlYWwgdXNlcyBBUiB0ZWNobm9sb2d5IHRvIHRyYW5zZm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmb3Jlc3QgaW50byBhIGRpZ2l0YWwgdmFyaWFudCB3aGVyZSB3ZSBjYW4gcGVyZm9ybSBtZWFzdXJlbWVudHMgaW4gcmVhbC10aW1lLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsaXA9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXZpb3VzV29ya0NvbnRhaW5lclxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1ByZXZpb3VzV29yay5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUHJldmlvdXNXb3JrSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByZXZpb3VzV29ya0xpbmt9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuZmxpcCA/IHN0eWxlcy5wcmV2aW91c0l0ZW1Db250YWluZXJGbGlwcGVkIDogc3R5bGVzLnByZXZpb3VzSXRlbUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuaGVqc2FufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5mbGlwID8gc3R5bGVzLmltYWdlQ29udGFpbmVyRmxpcCA6IHN0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmZsaXAgPyBzdHlsZXMucHJldmlvdXNJdGVtSW1hZ2VGbGlwcGVkIDogc3R5bGVzLnByZXZpb3VzSXRlbUltYWdlfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmltZyArICcpJ319Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmZsaXAgPyBzdHlsZXMucHJldmlvdXNJdGVtSW1hZ2VGbGlwcGVkTW9iaWxlIDogc3R5bGVzLnByZXZpb3VzSXRlbUltYWdlTW9iaWxlfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHByb3BzLmltZyArICcpJ319PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aW91c0l0ZW1JbmZvcm1hdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckl0ZW19Pntwcm9wcy5oZWFkZXJ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ0FuZFRpbWVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT57cHJvcHMudGFnc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzbG90fT57cHJvcHMudGltZXNsb3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9Pntwcm9wcy50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0TW9iaWxlfT57cHJvcHMudGV4dE1vYmlsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlYWQgbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhcycsICdsb25nLWFycm93LWFsdC1yaWdodCddfSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXZpb3VzV29ya0l0ZW1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xyXG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XHJcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IHByZWZldGNoZWQgPSB7XHJcbn07XHJcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XHJcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XHJcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXHJcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXHJcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcclxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxyXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcclxuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXHJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XHJcbn1cclxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcclxuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcclxuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcclxuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xyXG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XHJcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcclxuICAgICAgICBzaGFsbG93LFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBzY3JvbGxcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xyXG4gICAgICAgICAgICBocmVmOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcclxuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcclxuICAgICAgICAgICAgYXM6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcclxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXHJcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xyXG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xyXG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xyXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XHJcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xyXG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xyXG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxyXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIHByb3BzLmhyZWYsXHJcbiAgICAgICAgcHJvcHMuYXNcclxuICAgIF0pO1xyXG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xyXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXHJcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XHJcbiAgICB9XHJcbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcclxuICAgIGxldCBjaGlsZDtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xyXG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xyXG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xyXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XHJcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIGNoaWxkUmVmLFxyXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxyXG4gICAgXSk7XHJcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xyXG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XHJcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcclxuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xyXG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgYXMsXHJcbiAgICAgICAgaHJlZixcclxuICAgICAgICBpc1Zpc2libGUsXHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgIHAsXHJcbiAgICAgICAgcm91dGVyXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XHJcbiAgICAgICAgcmVmOiBzZXRSZWYsXHJcbiAgICAgICAgb25DbGljazogKGUpPT57XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XHJcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xyXG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xyXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXHJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xyXG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XHJcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcclxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XHJcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XHJcbn1cclxudmFyIF9kZWZhdWx0ID0gTGluaztcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XHJcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcclxuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xyXG59XHJcbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XHJcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcclxuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XHJcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcclxuICAgIH1cclxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xyXG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xyXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XHJcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2Ioe1xyXG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIDEpO1xyXG59O1xyXG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xyXG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcclxufTtcclxuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcclxuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XHJcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XHJcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcclxudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcclxudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcclxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XHJcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xyXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cclxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xyXG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcclxuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcclxuICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcclxuICAgIH1cclxuICAgIGxldCByZXNvbHZlcjtcclxuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XHJcbiAgICB9KTtcclxuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcclxuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcclxuICAgICAgICBmdXR1cmU6IHByb21cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXHJcbiAgICApIDogcHJvbTtcclxufVxyXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxyXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XHJcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XHJcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxyXG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xyXG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcclxuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcclxuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcclxuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XHJcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcclxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XHJcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcclxuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XHJcbn1cclxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxyXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcclxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cclxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcclxuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcclxuICAgICAgICA7XHJcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXHJcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXHJcbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcclxuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxyXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxyXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cclxubGV0IGRldkJ1aWxkUHJvbWlzZTtcclxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cclxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcclxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgcC50aGVuKChyKT0+e1xyXG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XHJcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlc29sdmUocik7XHJcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXHJcbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIG1zKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XHJcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxyXG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xyXG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XHJcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xyXG4gICAgICAgICAgICBzY3JpcHRzOiBbXHJcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XHJcbiAgICAgICAgICAgIGNzczogW11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XHJcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcclxuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xyXG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcclxuICAgICAgICBpZiAocHJvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xyXG4gICAgICAgIHJldHVybiBwcm9tO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcclxuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcclxuICAgICAgICBpZiAocHJvbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXHJcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICwgKGVycik9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XHJcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcclxuICAgICAgICAgICAgbGV0IGNuO1xyXG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXHJcbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcclxuICAgICAgICAgICAgICAgICkgOiBbXSlcclxuICAgICAgICAgICAgKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xyXG4gICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xyXG4gICAgfVxyXG59KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xyXG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcclxuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xyXG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcclxudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XHJcbiAgICByb3V0ZXI6IG51bGwsXHJcbiAgICByZWFkeUNhbGxiYWNrczogW10sXHJcbiAgICByZWFkeSAoY2IpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcclxuICAgICdwYXRobmFtZScsXHJcbiAgICAncm91dGUnLFxyXG4gICAgJ3F1ZXJ5JyxcclxuICAgICdhc1BhdGgnLFxyXG4gICAgJ2NvbXBvbmVudHMnLFxyXG4gICAgJ2lzRmFsbGJhY2snLFxyXG4gICAgJ2Jhc2VQYXRoJyxcclxuICAgICdsb2NhbGUnLFxyXG4gICAgJ2xvY2FsZXMnLFxyXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxyXG4gICAgJ2lzUmVhZHknLFxyXG4gICAgJ2lzUHJldmlldycsXHJcbiAgICAnaXNMb2NhbGVEb21haW4nLFxyXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcclxuXTtcclxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xyXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxyXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxyXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxyXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxyXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXHJcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXHJcbl07XHJcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXHJcbiAgICAncHVzaCcsXHJcbiAgICAncmVwbGFjZScsXHJcbiAgICAncmVsb2FkJyxcclxuICAgICdiYWNrJyxcclxuICAgICdwcmVmZXRjaCcsXHJcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcclxuXTtcclxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xyXG4gICAgZ2V0ICgpIHtcclxuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcclxuICAgIH1cclxufSk7XHJcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xyXG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxyXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXHJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcclxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xyXG4gICAgICAgIGdldCAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XHJcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XHJcbiAgICB9O1xyXG59KTtcclxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XHJcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XHJcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xyXG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcclxufVxyXG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XHJcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XHJcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXHJcbiAgICApO1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XHJcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcclxufVxyXG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XHJcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcclxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xyXG4gICAgfTtcclxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xyXG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcclxuICAgIH1cclxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcclxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XHJcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xyXG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcclxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xyXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XHJcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xyXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcclxuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xyXG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xyXG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xyXG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcclxuICAgICAgICAgICAgLCB7XHJcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBpc0Rpc2FibGVkLFxyXG4gICAgICAgIHJvb3RNYXJnaW4sXHJcbiAgICAgICAgdmlzaWJsZVxyXG4gICAgXSk7XHJcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgdmlzaWJsZVxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHNldFJlZixcclxuICAgICAgICB2aXNpYmxlXHJcbiAgICBdO1xyXG59XHJcbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XHJcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcclxuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xyXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcclxuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xyXG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XHJcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcclxuICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBvcHRpb25zKTtcclxuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIG9ic2VydmVyLFxyXG4gICAgICAgIGVsZW1lbnRzXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XHJcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xyXG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxyXG4gICAgICAgIH0sIHByb3BzKSkpO1xyXG4gICAgfVxyXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xyXG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcclxuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcclxuICAgIH1cclxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xyXG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcclxuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XHJcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcclxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xyXG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XHJcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XHJcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcclxudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xyXG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcclxudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xyXG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcclxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xyXG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XHJcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcclxudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xyXG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XHJcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcclxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XHJcbn1cclxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xyXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xyXG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcclxuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcclxufVxyXG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XHJcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xyXG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XHJcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcclxuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG59XHJcbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XHJcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XHJcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcclxuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcclxuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XHJcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xyXG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xyXG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcclxuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcclxufVxyXG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XHJcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xyXG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xyXG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xyXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXHJcbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xyXG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XHJcbiAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XHJcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcclxuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XHJcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcclxuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxyXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxyXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxyXG4gICAgcXVlcnk7XHJcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XHJcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcclxuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcclxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXHJcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcclxuICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XHJcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcclxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXHJcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcclxuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcclxuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxyXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcclxuICAgIH0pKSB7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xyXG4gICAgICAgIDtcclxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXHJcbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xyXG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xyXG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xyXG59XHJcbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XHJcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xyXG4gICAgbGV0IGJhc2U7XHJcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XHJcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXHJcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcclxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcclxuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XHJcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xyXG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XHJcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xyXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xyXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XHJcbiAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cclxuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xyXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XHJcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcclxuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcclxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcclxuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxyXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcclxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXHJcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXHJcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xyXG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcclxufVxyXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XHJcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcclxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXHJcbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XHJcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xyXG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XHJcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XHJcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xyXG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XHJcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xyXG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXHJcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XHJcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcclxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xyXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cclxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xyXG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xyXG59XHJcbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xyXG4gICAgfSBjYXRjaCAobikge1xyXG4gICAgfVxyXG59KCk7XHJcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XHJcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxyXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxyXG4gICAgICAgIC8vID4gb3B0aW9uLlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXHJcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxyXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcclxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxyXG4gICAgICAgIC8vIGxvb3AuXHJcbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xyXG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9KTtcclxufVxyXG5jbGFzcyBSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xyXG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXHJcbiAgICAgICAgdGhpcy5zZGMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xyXG4gICAgICAgIHRoaXMuc2RyID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcclxuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cclxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxyXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXHJcbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXHJcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cclxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cclxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxyXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcclxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxyXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXHJcbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXHJcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcclxuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcclxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXHJcbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxyXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxyXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxyXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcclxuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcclxuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcclxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xyXG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcclxuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxyXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXHJcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcclxuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xyXG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcclxuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xyXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXHJcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XHJcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcclxuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXHJcbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXHJcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxyXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxyXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWxvYWQoKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XHJcbiAgICovIGJhY2soKSB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xyXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXHJcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcclxuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxyXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxyXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXHJcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcclxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xyXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcclxuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcclxuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcclxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcclxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcclxuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxyXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWY7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxyXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXHJcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcclxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XHJcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHNoYWxsb3dcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcclxuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcclxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXHJcbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxyXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcclxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cclxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcclxuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcclxuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXHJcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XHJcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cclxuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XHJcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxyXG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcclxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcclxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXHJcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcclxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXHJcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xyXG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcclxuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XHJcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcclxuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXHJcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxyXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXHJcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcclxuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcclxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xyXG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcclxuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcclxuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcclxuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxyXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcclxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cclxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcclxuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9IDogbnVsbDtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IGVycjE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgYXMsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxyXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxyXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcclxuICAgICAgICAgICAgJycsIGFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcclxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xyXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xyXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcclxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcclxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XHJcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxyXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxyXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xyXG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XHJcbiAgICAgICAgICAgIGxldCBwcm9wcztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXHJcbiAgICAgICAgICAgICAgICBlcnIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcclxuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcclxuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxyXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxyXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xyXG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xyXG4gICAgfVxyXG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcclxuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XHJcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxyXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcclxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cclxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXHJcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcclxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxyXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xyXG4gICAgfVxyXG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XHJcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xyXG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcclxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcclxuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXHJcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xyXG4gICAgICAgIGlmIChpZEVsKSB7XHJcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcclxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcclxuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcclxuICAgICAgICBpZiAobmFtZUVsKSB7XHJcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVybElzTmV3KGFzUGF0aCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cclxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxyXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXHJcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXHJcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcclxuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcclxuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xyXG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xyXG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcclxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xyXG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xyXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcclxuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xyXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcclxuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XHJcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XHJcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcclxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XHJcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XHJcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xyXG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBfZ2V0RGF0YShmbikge1xyXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xyXG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XHJcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcclxuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xyXG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XHJcbiAgICAgICAgICAgIHRocm93IGVycjI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcclxuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcclxuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcclxuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XHJcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xyXG4gICAgICAgICAgICBBcHBUcmVlLFxyXG4gICAgICAgICAgICBDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5jbGMpIHtcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xyXG4gICAgfVxyXG59XHJcblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBIZWFkZXJOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXJOYXYnXHJcbmltcG9ydCBIZXJvQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby9IZXJvQ29udGFpbmVyJ1xyXG5pbXBvcnQgQ3VycmVudEZvY3VzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY3VycmVudC1mb2N1cy9DdXJyZW50Rm9jdXNDb250YWluZXInXHJcbmltcG9ydCBQcmV2aW91c1dvcmtDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wcmV2aW91cy13b3JrL1ByZXZpb3VzV29ya0NvbnRhaW5lcidcclxuaW1wb3J0IEFib3V0SG9tZUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0LWhvbWUvQWJvdXRIb21lQ29udGFpbmVyJ1xyXG5pbXBvcnQgRXhwZXJpZW5jZUNvbGxlY3Rpb25Ib21lIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpZW5jZXMvRXhwZXJpZW5jZUNvbGxlY3Rpb25Ib21lJ1xyXG5pbXBvcnQgQ29udGFjdEZvcm1Db250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RGb3JtQ29udGFpbmVyJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZGVyTmF2IC8+XHJcbiAgICAgIDxIZXJvQ29udGFpbmVyIC8+XHJcbiAgICAgIDxDdXJyZW50Rm9jdXNDb250YWluZXIgLz5cclxuICAgICAgPEFib3V0SG9tZUNvbnRhaW5lciAvPlxyXG4gICAgICA8UHJldmlvdXNXb3JrQ29udGFpbmVyIC8+XHJcbiAgICAgIDxFeHBlcmllbmNlQ29sbGVjdGlvbkhvbWUgLz5cclxuICAgICAgPENvbnRhY3RGb3JtQ29udGFpbmVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXRIb21lQ29udGFpbmVyXCI6IFwiQWJvdXRIb21lX2Fib3V0SG9tZUNvbnRhaW5lcl9fMjNxdXdcIixcblx0XCJoZWFkZXJcIjogXCJBYm91dEhvbWVfaGVhZGVyX18xXzh4RFwiLFxuXHRcImhlYWRlck1vYmlsZVwiOiBcIkFib3V0SG9tZV9oZWFkZXJNb2JpbGVfXzNOMEZ1XCIsXG5cdFwicHJvZmlsZVBpY3R1cmVcIjogXCJBYm91dEhvbWVfcHJvZmlsZVBpY3R1cmVfXzFhdDJYXCIsXG5cdFwiYWJvdXRIb21lVGV4dFwiOiBcIkFib3V0SG9tZV9hYm91dEhvbWVUZXh0X18zOEtrQVwiLFxuXHRcInNraWxsc0FuZFRvb2xzSGVhZGVyXCI6IFwiQWJvdXRIb21lX3NraWxsc0FuZFRvb2xzSGVhZGVyX19rSzZNaVwiLFxuXHRcInRhZ1wiOiBcIkFib3V0SG9tZV90YWdfX2N3ek1oXCIsXG5cdFwiY29udGVudENvbnRhaW5lclwiOiBcIkFib3V0SG9tZV9jb250ZW50Q29udGFpbmVyX18xRmd3TFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybUNvbnRhaW5lclwiOiBcIkNvbnRhY3RfZm9ybUNvbnRhaW5lcl9fMnRpNW9cIixcblx0XCJoZWFkZXJcIjogXCJDb250YWN0X2hlYWRlcl9fMzAzc3FcIixcblx0XCJkZXNjXCI6IFwiQ29udGFjdF9kZXNjX18yZFdRc1wiLFxuXHRcInRleHRJbnB1dFwiOiBcIkNvbnRhY3RfdGV4dElucHV0X18xa3hqWVwiLFxuXHRcInRleHRBcmVhXCI6IFwiQ29udGFjdF90ZXh0QXJlYV9fM0gtTjJcIixcblx0XCJmb3JtU3VibWl0QnV0dG9uXCI6IFwiQ29udGFjdF9mb3JtU3VibWl0QnV0dG9uX18xcnNidVwiLFxuXHRcIm1hcENvbnRhaW5lclwiOiBcIkNvbnRhY3RfbWFwQ29udGFpbmVyX19nQXpybFwiLFxuXHRcImljb25cIjogXCJDb250YWN0X2ljb25fXzMyTnNwXCIsXG5cdFwiY29udGFjdEZvcm1TdGF0dXNTdWNjZXNzXCI6IFwiQ29udGFjdF9jb250YWN0Rm9ybVN0YXR1c1N1Y2Nlc3NfXzNZZXVKXCIsXG5cdFwiY29udGFjdEZvcm1TdGF0dXNFcnJvclwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1TdGF0dXNFcnJvcl9fSGpFVkJcIixcblx0XCJjb250YWN0Rm9ybUNvbnRhaW5lclwiOiBcIkNvbnRhY3RfY29udGFjdEZvcm1Db250YWluZXJfXzJoR0F6XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjdXJyZW50Rm9jdXNNYWluQ29udGFpbmVyXCI6IFwiQ3VycmVudEZvY3VzX2N1cnJlbnRGb2N1c01haW5Db250YWluZXJfX3lYeDBUXCIsXG5cdFwiY3VycmVudEZvY3VzZXNcIjogXCJDdXJyZW50Rm9jdXNfY3VycmVudEZvY3VzZXNfXzFYdmIwXCIsXG5cdFwiY3VycmVudEZvY3VzQ29udGFpbmVyXCI6IFwiQ3VycmVudEZvY3VzX2N1cnJlbnRGb2N1c0NvbnRhaW5lcl9fN1ZNdFFcIixcblx0XCJoZWFkZXJcIjogXCJDdXJyZW50Rm9jdXNfaGVhZGVyX18xNWxEQ1wiLFxuXHRcImltYWdlQ29udGFpbmVyXCI6IFwiQ3VycmVudEZvY3VzX2ltYWdlQ29udGFpbmVyX195RUJnWFwiLFxuXHRcImltYWdlXCI6IFwiQ3VycmVudEZvY3VzX2ltYWdlX18xQmNBTVwiLFxuXHRcImhlYWRlckZvY3VzXCI6IFwiQ3VycmVudEZvY3VzX2hlYWRlckZvY3VzX18xYXI1ZFwiLFxuXHRcIm1ldGFDb250YWluZXJcIjogXCJDdXJyZW50Rm9jdXNfbWV0YUNvbnRhaW5lcl9fMVkzYmNcIixcblx0XCJyb2xlXCI6IFwiQ3VycmVudEZvY3VzX3JvbGVfX2d6YVM3XCIsXG5cdFwidGV4dFwiOiBcIkN1cnJlbnRGb2N1c190ZXh0X18zak1OSlwiLFxuXHRcInJlYWRNb3JlTGlua1wiOiBcIkN1cnJlbnRGb2N1c19yZWFkTW9yZUxpbmtfXzF1LUJvXCIsXG5cdFwibGlua1wiOiBcIkN1cnJlbnRGb2N1c19saW5rX18ySjRBMlwiLFxuXHRcImxpbmtDb250ZW50XCI6IFwiQ3VycmVudEZvY3VzX2xpbmtDb250ZW50X18ycHd4ZlwiLFxuXHRcImljb25cIjogXCJDdXJyZW50Rm9jdXNfaWNvbl9falUyaGtcIixcblx0XCJ0aW1lc2xvdFwiOiBcIkN1cnJlbnRGb2N1c190aW1lc2xvdF9fM1A1ZTlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV4cGVyaWVuY2VDb2xsZWN0aW9uQ29udGFpbmVyXCI6IFwiRXhwZXJpZW5jZV9leHBlcmllbmNlQ29sbGVjdGlvbkNvbnRhaW5lcl9fMS1aTlVcIixcblx0XCJleHBlcmllbmNlQ29sbGVjdGlvbkNvbnRhaW5lckhvbWVcIjogXCJFeHBlcmllbmNlX2V4cGVyaWVuY2VDb2xsZWN0aW9uQ29udGFpbmVySG9tZV9fMnFCN1hcIixcblx0XCJleHBlcmllbmNlQ29udGFpbmVyXCI6IFwiRXhwZXJpZW5jZV9leHBlcmllbmNlQ29udGFpbmVyX190SGJqb1wiLFxuXHRcImV4cGVyaWVuY2VIZWFkZXJDb250YWluZXJcIjogXCJFeHBlcmllbmNlX2V4cGVyaWVuY2VIZWFkZXJDb250YWluZXJfX2h5U1Z0XCIsXG5cdFwiZXhwZXJpZW5jZUhlYWRlclwiOiBcIkV4cGVyaWVuY2VfZXhwZXJpZW5jZUhlYWRlcl9fMUxGY1hcIixcblx0XCJpdGVtQ29udGFpbmVyXCI6IFwiRXhwZXJpZW5jZV9pdGVtQ29udGFpbmVyX19hd096SVwiLFxuXHRcIml0ZW1JbWFnZVwiOiBcIkV4cGVyaWVuY2VfaXRlbUltYWdlX19YYlJ5aVwiLFxuXHRcIml0ZW1JbmZvcm1hdGlvblwiOiBcIkV4cGVyaWVuY2VfaXRlbUluZm9ybWF0aW9uX190WXJ5ZlwiLFxuXHRcInB1YmxpY2F0aW9uSW5mb3JtYXRpb25cIjogXCJFeHBlcmllbmNlX3B1YmxpY2F0aW9uSW5mb3JtYXRpb25fXzNBSzh0XCIsXG5cdFwiaXRlbUhlYWRlclwiOiBcIkV4cGVyaWVuY2VfaXRlbUhlYWRlcl9fM1ZHLVpcIixcblx0XCJpdGVtUm9sZVwiOiBcIkV4cGVyaWVuY2VfaXRlbVJvbGVfXzFKcEJLXCIsXG5cdFwiaXRlbVRpbWVzbG90XCI6IFwiRXhwZXJpZW5jZV9pdGVtVGltZXNsb3RfXzNBRHFUXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJDb250YWluZXJcIjogXCJIZWFkZXJfaGVhZGVyQ29udGFpbmVyX18yVFZuWVwiLFxuXHRcImhlYWRlckNvbnRhaW5lcklubmVyXCI6IFwiSGVhZGVyX2hlYWRlckNvbnRhaW5lcklubmVyX18ycXFYeVwiLFxuXHRcImhlYWRlck5hdkl0ZW1Db250YWluZXJcIjogXCJIZWFkZXJfaGVhZGVyTmF2SXRlbUNvbnRhaW5lcl9fMW9TblFcIixcblx0XCJoZWFkZXJOYXZJdGVtQ29udGFpbmVyQWN0aXZlXCI6IFwiSGVhZGVyX2hlYWRlck5hdkl0ZW1Db250YWluZXJBY3RpdmVfXzNyVlNDXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZXJvQ29udGFpbmVyXCI6IFwiSGVyb19oZXJvQ29udGFpbmVyX18yMi1ORFwiLFxuXHRcImhlcm9Db250ZW50XCI6IFwiSGVyb19oZXJvQ29udGVudF9fM25KLVFcIixcblx0XCJ3ZWxjb21lVGV4dFwiOiBcIkhlcm9fd2VsY29tZVRleHRfXzNrMWxLXCIsXG5cdFwibmFtZVRleHRcIjogXCJIZXJvX25hbWVUZXh0X18xeGpmU1wiLFxuXHRcImhlcm9UYWdDb250YWluZXJcIjogXCJIZXJvX2hlcm9UYWdDb250YWluZXJfXzFpckNRXCIsXG5cdFwiaGVyb1RhZ1wiOiBcIkhlcm9faGVyb1RhZ19fYVlwcm1cIixcblx0XCJoZXJvTGlua3NDb250YWluZXJcIjogXCJIZXJvX2hlcm9MaW5rc0NvbnRhaW5lcl9fMzA1amVcIixcblx0XCJjb250YWN0QnV0dG9uXCI6IFwiSGVyb19jb250YWN0QnV0dG9uX19iYV8zelwiLFxuXHRcImhlcm9MaW5rQ29udGFpbmVyXCI6IFwiSGVyb19oZXJvTGlua0NvbnRhaW5lcl9fMVJrYUZcIixcblx0XCJoZXJvSWNvbkNvbnRhaW5lclwiOiBcIkhlcm9faGVyb0ljb25Db250YWluZXJfXzFUY0piXCIsXG5cdFwiaWNvblwiOiBcIkhlcm9faWNvbl9fby1haWNcIixcblx0XCJpY29uVGV4dFwiOiBcIkhlcm9faWNvblRleHRfXzJWX3ZsXCIsXG5cdFwiaGVyb1RlbGx1c0NvbnRhaW5lclwiOiBcIkhlcm9faGVyb1RlbGx1c0NvbnRhaW5lcl9fQ0Jrc2ZcIixcblx0XCJoZXJvVGVsbHVzTW9iaWxlXCI6IFwiSGVyb19oZXJvVGVsbHVzTW9iaWxlX18yX3ZEYVwiLFxuXHRcImhlcm9UZWxsdXNcIjogXCJIZXJvX2hlcm9UZWxsdXNfXzI3dkhwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJwYWdlQ29udGVudFwiOiBcIkhvbWVfcGFnZUNvbnRlbnRfXzI1X0ROXCIsXG5cdFwiZm9vdGVyQ29udGFpbmVyXCI6IFwiSG9tZV9mb290ZXJDb250YWluZXJfX1Q3dnR2XCIsXG5cdFwiZm9vdGVyQ29udGFpbmVySW5uZXJcIjogXCJIb21lX2Zvb3RlckNvbnRhaW5lcklubmVyX19fbGF2a1wiLFxuXHRcImZvb3Rlckljb25cIjogXCJIb21lX2Zvb3Rlckljb25fXzJSeXdSXCIsXG5cdFwiZm9vdGVyVGV4dFwiOiBcIkhvbWVfZm9vdGVyVGV4dF9fMWNYbVJcIixcblx0XCJmb290ZXJUZXh0TW9iaWxlXCI6IFwiSG9tZV9mb290ZXJUZXh0TW9iaWxlX18zSlVtUlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJldmlvdXNXb3JrQ29udGFpbmVyXCI6IFwiUHJldmlvdXNXb3JrX3ByZXZpb3VzV29ya0NvbnRhaW5lcl9fM1c3TDVcIixcblx0XCJoZWFkZXJcIjogXCJQcmV2aW91c1dvcmtfaGVhZGVyX195VUhHV1wiLFxuXHRcInByZXZpb3VzV29ya0xpbmtcIjogXCJQcmV2aW91c1dvcmtfcHJldmlvdXNXb3JrTGlua19fM0pjUG5cIixcblx0XCJwcmV2aW91c0l0ZW1Db250YWluZXJcIjogXCJQcmV2aW91c1dvcmtfcHJldmlvdXNJdGVtQ29udGFpbmVyX18zZU5QMVwiLFxuXHRcInByZXZpb3VzSXRlbUNvbnRhaW5lckZsaXBwZWRcIjogXCJQcmV2aW91c1dvcmtfcHJldmlvdXNJdGVtQ29udGFpbmVyRmxpcHBlZF9fYnRoTzVcIixcblx0XCJpbWFnZUNvbnRhaW5lclwiOiBcIlByZXZpb3VzV29ya19pbWFnZUNvbnRhaW5lcl9fMXZYYkJcIixcblx0XCJpbWFnZUNvbnRhaW5lckZsaXBcIjogXCJQcmV2aW91c1dvcmtfaW1hZ2VDb250YWluZXJGbGlwX18yVmowYlwiLFxuXHRcInByZXZpb3VzSXRlbUltYWdlTW9iaWxlXCI6IFwiUHJldmlvdXNXb3JrX3ByZXZpb3VzSXRlbUltYWdlTW9iaWxlX18xNHByM1wiLFxuXHRcInByZXZpb3VzSXRlbUltYWdlRmxpcHBlZE1vYmlsZVwiOiBcIlByZXZpb3VzV29ya19wcmV2aW91c0l0ZW1JbWFnZUZsaXBwZWRNb2JpbGVfXzNtdkJ3XCIsXG5cdFwicHJldmlvdXNJdGVtSW1hZ2VcIjogXCJQcmV2aW91c1dvcmtfcHJldmlvdXNJdGVtSW1hZ2VfXzEzNmRiXCIsXG5cdFwicHJldmlvdXNJdGVtSW1hZ2VGbGlwcGVkXCI6IFwiUHJldmlvdXNXb3JrX3ByZXZpb3VzSXRlbUltYWdlRmxpcHBlZF9fMkdDTVZcIixcblx0XCJwcmV2aW91c0l0ZW1JbmZvcm1hdGlvblwiOiBcIlByZXZpb3VzV29ya19wcmV2aW91c0l0ZW1JbmZvcm1hdGlvbl9fM2ZBRFdcIixcblx0XCJoZWFkZXJJdGVtXCI6IFwiUHJldmlvdXNXb3JrX2hlYWRlckl0ZW1fXzMxZzI0XCIsXG5cdFwidGFnc1wiOiBcIlByZXZpb3VzV29ya190YWdzX18yNTgwZFwiLFxuXHRcInRpbWVzbG90XCI6IFwiUHJldmlvdXNXb3JrX3RpbWVzbG90X18yRW1DRVwiLFxuXHRcInRleHRcIjogXCJQcmV2aW91c1dvcmtfdGV4dF9fYlBfRW1cIixcblx0XCJ0ZXh0TW9iaWxlXCI6IFwiUHJldmlvdXNXb3JrX3RleHRNb2JpbGVfXzI4SVQzXCIsXG5cdFwibGlua1wiOiBcIlByZXZpb3VzV29ya19saW5rX18xU0ZzM1wiLFxuXHRcImxpbmtDb250ZW50XCI6IFwiUHJldmlvdXNXb3JrX2xpbmtDb250ZW50X19UTEM1WFwiLFxuXHRcImljb25cIjogXCJQcmV2aW91c1dvcmtfaWNvbl9fOG5HRl9cIixcblx0XCJoZWpzYW5cIjogXCJQcmV2aW91c1dvcmtfaGVqc2FuX18xMVVXQ1wiLFxuXHRcInRhZ0FuZFRpbWVDb250YWluZXJcIjogXCJQcmV2aW91c1dvcmtfdGFnQW5kVGltZUNvbnRhaW5lcl9fMnMwbV9cIlxufTtcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnb29nbGUtbWFwLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiTGluayIsIkhlYWRlck5hdkl0ZW0iLCJzdHlsZXMiLCJIZWFkZXJOYXYiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJDb250YWluZXJJbm5lciIsInVzZVJvdXRlciIsInRleHQiLCJsaW5rIiwicm91dGVyIiwicGF0aG5hbWUiLCJoZWFkZXJOYXZJdGVtQ29udGFpbmVyQWN0aXZlIiwic3RhcnRzV2l0aCIsImhlYWRlck5hdkl0ZW1Db250YWluZXIiLCJBYm91dEhvbWVUZXh0IiwiQWJvdXRIb21lU2tpbGxzQW5kVG9vbHMiLCJBYm91dEhvbWVDb250YWluZXIiLCJhYm91dEhvbWVDb250YWluZXIiLCJoZWFkZXJNb2JpbGUiLCJwcm9maWxlUGljdHVyZSIsImJhY2tncm91bmRJbWFnZSIsImNvbnRlbnRDb250YWluZXIiLCJoZWFkZXIiLCJza2lsbHNDb250YWluZXIiLCJza2lsbHNBbmRUb29sc0hlYWRlciIsInRhZyIsInRvb2xzQ29udGFpbmVyIiwiYWJvdXRIb21lVGV4dCIsInVzZVJlZiIsInVzZVN0YXRlIiwiZW1haWxqcyIsIkNvbnRhY3RGb3JtIiwiZm9ybSIsImZvcm1TdGF0dXMiLCJzZXRGb3JtU3RhdHVzIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJjdXJyZW50IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJmb3JtQ29udGFpbmVyIiwiZGVzYyIsInRleHRJbnB1dCIsInRleHRBcmVhIiwiZm9ybVN1Ym1pdEJ1dHRvbiIsImNvbnRhY3RGb3JtU3RhdHVzU3VjY2VzcyIsImNvbnRhY3RGb3JtU3RhdHVzRXJyb3IiLCJDb250YWN0Rm9ybU1hcCIsIkNvbnRhY3RGb3JtQ29udGFpbmVyIiwiY29udGFjdEZvcm1Db250YWluZXIiLCJHb29nbGVNYXBSZWFjdCIsIkZvbnRBd2Vzb21lSWNvbiIsIkFueVJlYWN0Q29tcG9uZW50IiwiaWNvbiIsImRlZmF1bHRQcm9wcyIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJoYW5kbGVBcGlMb2FkZWQiLCJtYXAiLCJtYXBzIiwibWFwQ29udGFpbmVyIiwia2V5IiwiQ3VycmVudEZvY3VzSXRlbSIsIkN1cnJlbnRGb2N1c0NvbnRhaW5lciIsImN1cnJlbnRGb2N1c01haW5Db250YWluZXIiLCJjdXJyZW50Rm9jdXNlcyIsInByb3BzIiwiY3VycmVudEZvY3VzQ29udGFpbmVyIiwiaW1hZ2VDb250YWluZXIiLCJpbWFnZSIsImltZyIsImhlYWRlckZvY3VzIiwibWV0YUNvbnRhaW5lciIsInJvbGUiLCJ0aW1lc2xvdCIsImxpbmtDb250ZW50IiwiRXhwZXJpZW5jZUhlYWRlciIsIkV4cGVyaWVuY2VJdGVtIiwiRWR1Y2F0aW9uQ29udGFpbmVyIiwiZXhwZXJpZW5jZUNvbnRhaW5lciIsIkV4cGVyaWVuY2VDb250YWluZXJIb21lIiwiUHJvamVjdHNDb250YWluZXJIb21lIiwiUHVibGljYXRpb25Db250YWluZXIiLCJFeHBlcmllbmNlQ29sbGVjdGlvbkhvbWUiLCJleHBlcmllbmNlQ29sbGVjdGlvbkNvbnRhaW5lckhvbWUiLCJidXR0b24iLCJleHBlcmllbmNlSGVhZGVyQ29udGFpbmVyIiwiZXhwZXJpZW5jZUhlYWRlciIsIml0ZW1Db250YWluZXIiLCJpdGVtSW1hZ2UiLCJpdGVtSW5mb3JtYXRpb24iLCJpdGVtSGVhZGVyIiwiaXRlbVJvbGUiLCJpdGVtVGltZXNsb3QiLCJQdWJsaWNhdGlvbkl0ZW0iLCJwdWJsaWNhdGlvbkluZm9ybWF0aW9uIiwiUHVibGljYXRpb25zQ29udGFpbmVyIiwiSGVyb0ljb25MaW5rIiwiSGVyb0NvbnRhaW5lciIsImhhbmRsZUNsaWNrIiwieU9mZnNldCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwieSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhlcm9Db250YWluZXIiLCJoZXJvQ29udGVudCIsIndlbGNvbWVUZXh0IiwibmFtZVRleHQiLCJoZXJvVGFnQ29udGFpbmVyIiwiaGVyb1RhZyIsImhlcm9MaW5rc0NvbnRhaW5lciIsImNvbnRhY3RCdXR0b24iLCJoZXJvTGlua0NvbnRhaW5lciIsImhlcm9UZWxsdXNDb250YWluZXIiLCJoZXJvVGVsbHVzTW9iaWxlIiwiaGVyb1RlbGx1cyIsImhlcm9JY29uQ29udGFpbmVyIiwiaWNvblR5cGUiLCJpY29uVGV4dCIsIkFPUyIsIlByZXZpb3VzV29ya0l0ZW0iLCJQcmV2aW91c1dvcmtDb250YWluZXIiLCJpbml0IiwicHJldmlvdXNXb3JrQ29udGFpbmVyIiwicHJldmlvdXNXb3JrTGluayIsImZsaXAiLCJwcmV2aW91c0l0ZW1Db250YWluZXJGbGlwcGVkIiwicHJldmlvdXNJdGVtQ29udGFpbmVyIiwiaGVqc2FuIiwiaW1hZ2VDb250YWluZXJGbGlwIiwicHJldmlvdXNJdGVtSW1hZ2VGbGlwcGVkIiwicHJldmlvdXNJdGVtSW1hZ2UiLCJwcmV2aW91c0l0ZW1JbWFnZUZsaXBwZWRNb2JpbGUiLCJwcmV2aW91c0l0ZW1JbWFnZU1vYmlsZSIsInByZXZpb3VzSXRlbUluZm9ybWF0aW9uIiwiaGVhZGVySXRlbSIsInRhZ0FuZFRpbWVDb250YWluZXIiLCJ0YWdzIiwidGV4dE1vYmlsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic3JjIiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJmaWx0ZXIiLCJ2IiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJmaW5hbGx5IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiZW51bWVyYWJsZSIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwicHVzaCIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJIb21lIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==