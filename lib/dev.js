'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = _interopDefault(require('react'));
var reactTransitionGroup = require('react-transition-group');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var CenteredOverlay = styled__default.div(_templateObject());

var breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}; // Iterate through the sizes and create a media template

var mediaqueries = Object.keys(breakpoints).reduce(function (acc, label) {
  acc[label] = function () {
    return styled.css(["@media (min-width:", "em){", "}"], breakpoints[label] / 16, styled.css.apply(void 0, arguments));
  };

  return acc;
}, {});

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex-basis: ", "%;\n    max-width: ", "%;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex-basis: ", "%;\n    max-width: ", "%;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-basis: ", "%;\n    max-width: ", "%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: ", ";\n  max-width: ", ";\n\n  ", "\n\n\n  ", "\n\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Column = styled__default.div(_templateObject$1(), function (props) {
  return "".concat(100 * (props.xs || 12) / 12, "%");
}, function (props) {
  return "".concat(100 * (props.xs || 12) / 12, "%");
}, mediaqueries.sm(_templateObject2(), function (props) {
  return 100 * (props.sm || props.xs || 12) / 12;
}, function (props) {
  return 100 * (props.sm || props.xs || 12) / 12;
}), mediaqueries.md(_templateObject3(), function (props) {
  return 100 * (props.md || props.sm || props.xs || 12) / 12;
}, function (props) {
  return 100 * (props.md || props.sm || props.xs || 12) / 12;
}), mediaqueries.lg(_templateObject4(), function (props) {
  return 100 * (props.lg || props.md || props.sm || props.xs || 12) / 12;
}, function (props) {
  return 100 * (props.lg || props.md || props.sm || props.xs || 12) / 12;
}));

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  margin: 0 auto;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ContentContainer = styled__default.div(_templateObject$2(), function (props) {
  return "".concat(props.theme.maxContentWidth || 1080, "px");
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  flex-grow: ", ";\n  flex-basis: ", ";\n  max-width: ", ";\n  flex-wrap: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Flex = styled__default.div(_templateObject$3(), function (props) {
  return props.alignItems || 'flex-start';
}, function (props) {
  return props.justifyContent || 'flex-start';
}, function (props) {
  return props.flexDirection || 'row';
}, function (props) {
  return props.flexGrow || '0';
}, function (props) {
  return props.flexBasis || 'auto';
}, function (props) {
  return props.maxWidth || props.flexBasis || 'none';
}, function (props) {
  return props.flexWrap || 'nowrap';
});

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    .lg\\:order-1 { order: 1; }\n    .lg\\:order-2 { order: 2; }\n    .lg\\:order-none { order:none; }\n  "], ["\n    .lg\\\\:order-1 { order: 1; }\n    .lg\\\\:order-2 { order: 2; }\n    .lg\\\\:order-none { order:none; }\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    .md\\:order-1 { order: 1; }\n    .md\\:order-2 { order: 2; }\n    .md\\:order-none { order:none; }\n  "], ["\n    .md\\\\:order-1 { order: 1; }\n    .md\\\\:order-2 { order: 2; }\n    .md\\\\:order-none { order:none; }\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    .sm\\:order-1 { order: 1; }\n    .sm\\:order-2 { order: 2; }\n    .sm\\:order-none { order:none; }\n  "], ["\n    .sm\\\\:order-1 { order: 1; }\n    .sm\\\\:order-2 { order: 2; }\n    .sm\\\\:order-none { order:none; }\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    .xs\\:order-1 { order: 1; }\n    .xs\\:order-2 { order: 2; }\n    .xs\\:order-none { order:none; }\n  "], ["\n    .xs\\\\:order-1 { order: 1; }\n    .xs\\\\:order-2 { order: 2; }\n    .xs\\\\:order-none { order:none; }\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    .lg\\:w-40 { width: 40%; }\n    .lg\\:w-50 { width: 50%; }\n    .lg\\:w-75 { width: 75%; }\n    .lg\\:w-100 { width: 100%; }\n    .lg\\:w-auto { width: auto; }\n  "], ["\n    .lg\\\\:w-40 { width: 40%; }\n    .lg\\\\:w-50 { width: 50%; }\n    .lg\\\\:w-75 { width: 75%; }\n    .lg\\\\:w-100 { width: 100%; }\n    .lg\\\\:w-auto { width: auto; }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    .md\\:w-40 { width: 40%; }\n    .md\\:w-50 { width: 50%; }\n    .md\\:w-75 { width: 75%; }\n    .md\\:w-100 { width: 100%; }\n    .md\\:w-auto { width: auto; }\n  "], ["\n    .md\\\\:w-40 { width: 40%; }\n    .md\\\\:w-50 { width: 50%; }\n    .md\\\\:w-75 { width: 75%; }\n    .md\\\\:w-100 { width: 100%; }\n    .md\\\\:w-auto { width: auto; }\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    .sm\\:w-40 { width: 40%; }\n    .sm\\:w-50 { width: 50%; }\n    .sm\\:w-75 { width: 75%; }\n    .sm\\:w-100 { width: 100%; }\n    .sm\\:w-auto { width: auto; }\n  "], ["\n    .sm\\\\:w-40 { width: 40%; }\n    .sm\\\\:w-50 { width: 50%; }\n    .sm\\\\:w-75 { width: 75%; }\n    .sm\\\\:w-100 { width: 100%; }\n    .sm\\\\:w-auto { width: auto; }\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    .xs\\:w-40 { width: 40%; }\n    .xs\\:w-50 { width: 50%; }\n    .xs\\:w-75 { width: 75%; }\n    .xs\\:w-100 { width: 100%; }\n    .xs\\:w-auto { width: auto; }\n  "], ["\n    .xs\\\\:w-40 { width: 40%; }\n    .xs\\\\:w-50 { width: 50%; }\n    .xs\\\\:w-75 { width: 75%; }\n    .xs\\\\:w-100 { width: 100%; }\n    .xs\\\\:w-auto { width: auto; }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    .lg\\:bg-none { background: none; }\n    .lg\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "], ["\n    .lg\\\\:bg-none { background: none; }\n    .lg\\\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    .md\\:bg-none { background: none; }\n    .md\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "], ["\n    .md\\\\:bg-none { background: none; }\n    .md\\\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    .sm\\:bg-none { background: none; }\n    .sm\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "], ["\n    .sm\\\\:bg-none { background: none; }\n    .sm\\\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    .xs\\:bg-none { background: none; }\n    .xs\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "], ["\n    .xs\\\\:bg-none { background: none; }\n    .xs\\\\:bg-alpha-2 { background: rgba(0,0,0,0.2); }\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  html {\n    font-size: 16px;\n    color: ", "\n    -webkit-font-smoothing: antialiased;\n  }\n\n  .z-1 { z-index: 1; }\n  .z-2 { z-index: 2; }\n  .z-3 { z-index: 3; }\n  .z-4 { z-index: 4; }\n  .z-5 { z-index: 5; }\n  .z-6 { z-index: 6; }\n  .z-7 { z-index: 7; }\n  .z-8 { z-index: 8; }\n  .z-9 { z-index: 9; }\n\n  .rounded-none\t{ border-radius: 0; }\n  .rounded-sm\t  { border-radius: .125rem; }\n  .rounded      { border-radius: .25rem; }\n  .rounded-lg\t  { border-radius: .5rem; }\n  .rounded-full\t{ border-radius: 9999px; }\n\n  a {\n    color: ", ";\n    transition: 0.3s all ease;\n\n    &:hover {\n    color: ", ";\n    }\n  }\n\n  .opacity-0 { opacity: 0;}\n  .opacity-1 { opacity: 1;}\n\n  .transition-300 { transition: 0.3s all ease; }\n  .transition-500 { transition: 0.5s all ease; }\n\n  /* SCALE */\n  .hover\\:scale-92:hover { transform: scale(0.92); }\n  .hover\\:scale-94:hover { transform: scale(0.94); }\n  .hover\\:scale-96:hover { transform: scale(0.96); }\n  .hover\\:scale-98:hover { transform: scale(0.98); }\n  .hover\\:scale-100:hover { transform: scale(1); }\n  .hover\\:scale-102:hover { transform: scale(1.02); }\n  .hover\\:scale-104:hover { transform: scale(1.04); }\n  .hover\\:scale-106:hover { transform: scale(1.06); }\n  .hover\\:scale-108:hover { transform: scale(1.08); }\n  .hover\\:scale-110:hover { transform: scale(1.10); }\n\n  .text-black { color: ", "; }\n  .text-white { color: ", "; }\n  .text-primary { color: ", "; }\n  .text-secondary { color: ", "; }\n  .text-gray700 { color: ", " }\n\n  .uppercase { text-transform: uppercase; }\n\n  .bg-none { background: none; }\n  .bg-alpha-2 { background: rgba(0,0,0, 0.2); }\n\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n\n  /* POSITIONING */\n  .relative {position: relative; }\n  .absolute {position: absolute; }\n  .fixed {position: fixed; }\n\n  /* ABSOLUTE POSITIONING   */\n  /*  TOP/RIGHT/BOTTOM/LEFT */\n  .inset-0      { top: 0; right: 0; bottom: 0; left: 0;}\n  .inset-y-0\t  { top: 0; bottom: 0; }\n  .inset-x-0\t  { right: 0; left: 0; }\n  .top-0\t      { top: 0; }\n  .top-50\t      { top: 50%; }\n  .right-0\t    { right: 0; }\n  .right-50\t    { right: 50%; }\n  .bottom-0\t    { bottom: 0; }\n  .bottom-50\t  { bottom: 50%; }\n  .left-0\t      { left: 0; }\n  .left-50\t    { left: 50%; }\n  .inset-auto\t  { top: auto; right: auto; bottom: auto; left: auto; }\n  .inset-y-auto {\ttop: auto; bottom: auto; }\n  .inset-x-auto\t{ left: auto; right: auto; }\n  .top-auto\t    { top: auto; }\n  .bottom-auto\t{ bottom: auto; }\n  .left-auto\t  { left: auto; }\n  .right-auto\t  { right: auto; }\n\n  .top-0 { top: 0; }\n  .right-0 { right: 0;}\n\n  .markdown {\n    line-height: 1.7;\n\n    div, p, h1, h2, h3, h4, h5, h6 {\n      padding-bottom: ", ";\n    }\n\n    div, p {\n      font-size: ", "\n    }\n    h1 {\n      font-size: ", "\n    }\n    h2 {\n      font-size: ", "\n    }\n    h3 {\n      font-size: ", "\n    }\n    h4 {\n      font-size: ", "\n    }\n    h5 {\n      font-size: ", "\n    }\n    h6 {\n      font-size: ", "\n    }\n  }\n\n\n  .shadow\t{ box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);}\n  .shadow-md\t{ box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);}\n  .shadow-lg\t{ box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);}\n  .shadow-xl\t{ box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);}\n  .shadow-2xl\t{ box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);}\n  .shadow-inner\t{ box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);}\n  .shadow-outline\t{ box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);}\n  .shadow-none\t{ box-shadow: none;}\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  .w-40 { width: 40%; }\n  .w-50 { width: 50%; }\n  .w-75 { width: 75%; }\n  .w-100 { width: 100%; }\n  .w-auto { width: auto; }\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  .order-1 { order: 1;}\n  .order-2 { order: 2;}\n  .order-none {order: none;}\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  .h-100 {\n    height: 100%;\n  }\n"], ["\n  html {\n    font-size: 16px;\n    color: ", "\n    -webkit-font-smoothing: antialiased;\n  }\n\n  .z-1 { z-index: 1; }\n  .z-2 { z-index: 2; }\n  .z-3 { z-index: 3; }\n  .z-4 { z-index: 4; }\n  .z-5 { z-index: 5; }\n  .z-6 { z-index: 6; }\n  .z-7 { z-index: 7; }\n  .z-8 { z-index: 8; }\n  .z-9 { z-index: 9; }\n\n  .rounded-none\t{ border-radius: 0; }\n  .rounded-sm\t  { border-radius: .125rem; }\n  .rounded      { border-radius: .25rem; }\n  .rounded-lg\t  { border-radius: .5rem; }\n  .rounded-full\t{ border-radius: 9999px; }\n\n  a {\n    color: ", ";\n    transition: 0.3s all ease;\n\n    &:hover {\n    color: ", ";\n    }\n  }\n\n  .opacity-0 { opacity: 0;}\n  .opacity-1 { opacity: 1;}\n\n  .transition-300 { transition: 0.3s all ease; }\n  .transition-500 { transition: 0.5s all ease; }\n\n  /* SCALE */\n  .hover\\\\:scale-92:hover { transform: scale(0.92); }\n  .hover\\\\:scale-94:hover { transform: scale(0.94); }\n  .hover\\\\:scale-96:hover { transform: scale(0.96); }\n  .hover\\\\:scale-98:hover { transform: scale(0.98); }\n  .hover\\\\:scale-100:hover { transform: scale(1); }\n  .hover\\\\:scale-102:hover { transform: scale(1.02); }\n  .hover\\\\:scale-104:hover { transform: scale(1.04); }\n  .hover\\\\:scale-106:hover { transform: scale(1.06); }\n  .hover\\\\:scale-108:hover { transform: scale(1.08); }\n  .hover\\\\:scale-110:hover { transform: scale(1.10); }\n\n  .text-black { color: ", "; }\n  .text-white { color: ", "; }\n  .text-primary { color: ", "; }\n  .text-secondary { color: ", "; }\n  .text-gray700 { color: ", " }\n\n  .uppercase { text-transform: uppercase; }\n\n  .bg-none { background: none; }\n  .bg-alpha-2 { background: rgba(0,0,0, 0.2); }\n\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n\n  /* POSITIONING */\n  .relative {position: relative; }\n  .absolute {position: absolute; }\n  .fixed {position: fixed; }\n\n  /* ABSOLUTE POSITIONING   */\n  /*  TOP/RIGHT/BOTTOM/LEFT */\n  .inset-0      { top: 0; right: 0; bottom: 0; left: 0;}\n  .inset-y-0\t  { top: 0; bottom: 0; }\n  .inset-x-0\t  { right: 0; left: 0; }\n  .top-0\t      { top: 0; }\n  .top-50\t      { top: 50%; }\n  .right-0\t    { right: 0; }\n  .right-50\t    { right: 50%; }\n  .bottom-0\t    { bottom: 0; }\n  .bottom-50\t  { bottom: 50%; }\n  .left-0\t      { left: 0; }\n  .left-50\t    { left: 50%; }\n  .inset-auto\t  { top: auto; right: auto; bottom: auto; left: auto; }\n  .inset-y-auto {\ttop: auto; bottom: auto; }\n  .inset-x-auto\t{ left: auto; right: auto; }\n  .top-auto\t    { top: auto; }\n  .bottom-auto\t{ bottom: auto; }\n  .left-auto\t  { left: auto; }\n  .right-auto\t  { right: auto; }\n\n  .top-0 { top: 0; }\n  .right-0 { right: 0;}\n\n  .markdown {\n    line-height: 1.7;\n\n    div, p, h1, h2, h3, h4, h5, h6 {\n      padding-bottom: ", ";\n    }\n\n    div, p {\n      font-size: ", "\n    }\n    h1 {\n      font-size: ", "\n    }\n    h2 {\n      font-size: ", "\n    }\n    h3 {\n      font-size: ", "\n    }\n    h4 {\n      font-size: ", "\n    }\n    h5 {\n      font-size: ", "\n    }\n    h6 {\n      font-size: ", "\n    }\n  }\n\n\n  .shadow\t{ box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);}\n  .shadow-md\t{ box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);}\n  .shadow-lg\t{ box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);}\n  .shadow-xl\t{ box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);}\n  .shadow-2xl\t{ box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);}\n  .shadow-inner\t{ box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);}\n  .shadow-outline\t{ box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);}\n  .shadow-none\t{ box-shadow: none;}\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  .w-40 { width: 40%; }\n  .w-50 { width: 50%; }\n  .w-75 { width: 75%; }\n  .w-100 { width: 100%; }\n  .w-auto { width: auto; }\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  .order-1 { order: 1;}\n  .order-2 { order: 2;}\n  .order-none {order: none;}\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  .h-100 {\n    height: 100%;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = styled.createGlobalStyle(_templateObject$4(), function (props) {
  return props.theme.colors.gray[700];
}, function (props) {
  return props.theme.colors.secondary[500];
}, function (props) {
  return props.theme.colors.secondary[700];
}, function (props) {
  return props.theme.colors.black[500];
}, function (props) {
  return props.theme.colors.white[500];
}, function (props) {
  return props.theme.colors.primary[500];
}, function (props) {
  return props.theme.colors.secondary[500];
}, function (props) {
  return props.theme.colors.gray[700];
}, mediaqueries.xs(_templateObject2$1()), mediaqueries.sm(_templateObject3$1()), mediaqueries.md(_templateObject4$1()), mediaqueries.lg(_templateObject5()), function (props) {
  return props.theme.spacing['6'];
}, function (props) {
  return props.theme.typography.sizes['xl'];
}, function (props) {
  return props.theme.typography.sizes['4xl'];
}, function (props) {
  return props.theme.typography.sizes['3xl'];
}, function (props) {
  return props.theme.typography.sizes['2xl'];
}, function (props) {
  return props.theme.typography.sizes['xl'];
}, function (props) {
  return props.theme.typography.sizes['lg'];
}, function (props) {
  return props.theme.typography.sizes['normal'];
}, function (props) {
  return Object.keys(props.theme.spacing).map(function (label) {
    return styled.css([".translate-x-", "{transform:translateX(", ");}.hover\\:translate-x-", ":hover{transform:translateX(", ");}.hover\\:translate-child-x-", ":hover > *{transform:translateX(", ");}.translate-y-", "{transform:translateY(", ");}.hover\\:translate-y-", ":hover{transform:translateY(", ");}.hover\\:translate-child-y-", ":hover > *{transform:translateY(", ");}.-translate-y-", "{transform:translateY(-", ");}.p-", "{padding:", ";}.pt-", "{padding-top:", ";}.pb-", "{padding-bottom:", ";}.pl-", "{padding-left:", ";}.pr-", "{padding-right:", ";}.py-", "{padding-top:", ";padding-bottom:", ";}.px-", "{padding-left:", ";padding-right:", ";}.m-", "{margin:", ";}.mt-", "{margin-top:", ";}.mb-", "{margin-bottom:", ";}.ml-", "{margin-left:", ";}.mr-", "{margin-right:", ";}.my-", "{margin-top:", ";margin-bottom:", ";}.mx-", "{margin-left:", ";margin-right:", ";}"], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label]);
  });
}, function (props) {
  return mediaqueries.xs(_templateObject6(), Object.keys(props.theme.spacing).map(function (label) {
    return styled.css([".xs\\:p-", "{padding:", ";}.xs\\:pt-", "{padding-top:", ";}.xs\\:pb-", "{padding-bottom:", ";}.xs\\:pl-", "{padding-left:", ";}.xs\\:pr-", "{padding-right:", ";}.xs\\:py-", "{padding-top:", ";padding-bottom:", ";}.xs\\:px-", "{padding-left:", ";padding-right:", ";}"], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label]);
  }));
}, function (props) {
  return mediaqueries.sm(_templateObject7(), Object.keys(props.theme.spacing).map(function (label) {
    return styled.css([".sm\\:p-", "{padding:", ";}.sm\\:pt-", "{padding-top:", ";}.sm\\:pb-", "{padding-bottom:", ";}.sm\\:pl-", "{padding-left:", ";}.sm\\:pr-", "{padding-right:", ";}.sm\\:py-", "{padding-top:", ";padding-bottom:", ";}.sm\\:px-", "{padding-left:", ";padding-right:", ";}"], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label]);
  }));
}, function (props) {
  return mediaqueries.md(_templateObject8(), Object.keys(props.theme.spacing).map(function (label) {
    return styled.css([".md\\:p-", "{padding:", ";}.md\\:pt-", "{padding-top:", ";}.md\\:pb-", "{padding-bottom:", ";}.md\\:pl-", "{padding-left:", ";}.md\\:pr-", "{padding-right:", ";}.md\\:py-", "{padding-top:", ";padding-bottom:", ";}.md\\:px-", "{padding-left:", ";padding-right:", ";}"], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label]);
  }));
}, function (props) {
  return mediaqueries.lg(_templateObject9(), Object.keys(props.theme.spacing).map(function (label) {
    return styled.css([".lg\\:p-", "{padding:", ";}.lg\\:pt-", "{padding-top:", ";}.lg\\:pb-", "{padding-bottom:", ";}.lg\\:pl-", "{padding-left:", ";}.lg\\:pr-", "{padding-right:", ";}.lg\\:py-", "{padding-top:", ";padding-bottom:", ";}.lg\\:px-", "{padding-left:", ";padding-right:", ";}"], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label], label, props.theme.spacing[label], props.theme.spacing[label]);
  }));
}, function (props) {
  return styled.css(["html,body,div,p,h1,h2,h3,h4,h5,h6{font-family:", ";}"], props.theme.fontFamily[props.theme.defaultFontFamilyVariant]);
}, mediaqueries.xs(_templateObject10()), mediaqueries.sm(_templateObject11()), mediaqueries.md(_templateObject12()), mediaqueries.lg(_templateObject13()), mediaqueries.xs(_templateObject14()), mediaqueries.sm(_templateObject15()), mediaqueries.md(_templateObject16()), mediaqueries.lg(_templateObject17()));

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  min-height: 650px;\n  height: 100vh;\n  position: relative;\n  width: 100%;\n  background-color: ", ";\n  overflow: hidden;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Hero = styled__default.section(_templateObject$5(), function (props) {
  return props.variant ? props.theme.colors[props.variant][props.shade || 500] : '#999';
});

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n  "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n  "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n  "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var HideAtSize = styled__default.div(_templateObject$6(), mediaqueries.xs(_templateObject2$2(), function (props) {
  return props.xs ? 'none' : 'inherit';
}), mediaqueries.sm(_templateObject3$2(), function (props) {
  return props.sm ? 'none' : 'inherit';
}), mediaqueries.md(_templateObject4$2(), function (props) {
  return props.md ? 'none' : 'inherit';
}), mediaqueries.lg(_templateObject5$1(), function (props) {
  return props.lg ? 'none' : 'inherit';
}));

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-wrap: ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Row = styled__default.div(_templateObject$7(), function (props) {
  return props.justifyContent || 'flex-start';
}, function (props) {
  return props.alignItems || 'flex-start';
}, function (props) {
  return props.flexWrap || 'nowrap';
});

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Section = styled__default.section(_templateObject$8(), function (props) {
  return props.variant ? props.theme.colors[props.variant][props.shade || 500] : props.theme.colors.white;
});

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n  text-align: ", ";\n  font-weight: ", ";\n  text-decoration: ", ";\n  letter-spacing: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = styled__default.div(_templateObject$9(), function (props) {
  return props.size ? props.theme.typography.sizes[props.size] : props.theme.typography.sizes['base'];
}, function (props) {
  return props.lineHeight || 'inherit';
}, function (props) {
  return props.variant ? props.theme.colors[props.variant][props.shade || 500] : 'inherit';
}, function (props) {
  return props.align || 'left';
}, function (props) {
  return props.fontWeight || 'normal';
}, function (props) {
  return props.textDecoration || 'none';
}, function (props) {
  return props.letterSpacing ? "".concat(props.letterSpacing, "px") : 'normal';
}, mediaqueries.xs(_templateObject2$3(), function (props) {
  return props.theme.typography.sizes[props.xs || props.size];
}), mediaqueries.sm(_templateObject3$3(), function (props) {
  return props.theme.typography.sizes[props.sm || props.xs || props.size];
}), mediaqueries.md(_templateObject4$3(), function (props) {
  return props.theme.typography.sizes[props.md || props.sm || props.xs || props.size];
}), mediaqueries.lg(_templateObject5$2(), function (props) {
  return props.theme.typography.sizes[props.lg || props.md || props.sm || props.xs || props.size];
}));

var DIRECTIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
};

var getDefaultStyles = function getDefaultStyles(_ref) {
  var duration = _ref.duration;
  return {
    transition: "all ".concat(duration, "ms ease")
  };
};

var getTransitionStyles = function getTransitionStyles(_ref2) {
  var from = _ref2.from,
      amount = _ref2.amount;

  if (from === DIRECTIONS.BOTTOM) {
    return {
      entering: {
        opacity: 0,
        transform: "translateY(".concat(amount, ")")
      },
      entered: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    };
  }

  if (from === DIRECTIONS.TOP) {
    return {
      entering: {
        opacity: 0,
        transform: "translateY(-".concat(amount, ")")
      },
      entered: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    };
  }

  if (from === DIRECTIONS.LEFT) {
    return {
      entering: {
        opacity: 0,
        transform: "translateX(-".concat(amount, ")")
      },
      entered: {
        opacity: 1,
        transform: 'translateX(0)'
      }
    };
  }

  if (from === DIRECTIONS.RIGHT) {
    return {
      entering: {
        opacity: 0,
        transform: "translateX(".concat(amount, ")")
      },
      entered: {
        opacity: 1,
        transform: 'translateX(0)'
      }
    };
  }
};

var Fade = function Fade(_ref3) {
  var _ref3$in = _ref3["in"],
      inProp = _ref3$in === void 0 ? false : _ref3$in,
      _ref3$from = _ref3.from,
      from = _ref3$from === void 0 ? DIRECTIONS.BOTTOM : _ref3$from,
      _ref3$amount = _ref3.amount,
      amount = _ref3$amount === void 0 ? '5%' : _ref3$amount,
      _ref3$timeout = _ref3.timeout,
      timeout = _ref3$timeout === void 0 ? 100 : _ref3$timeout,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 300 : _ref3$duration,
      children = _ref3.children;
  var transitionStyles = getTransitionStyles({
    from: from,
    amount: amount
  });
  return React.createElement(reactTransitionGroup.Transition, {
    "in": inProp,
    timeout: timeout
  }, function (state) {
    return React.createElement("div", {
      style: _objectSpread2({}, getDefaultStyles({
        duration: duration
      }), {}, transitionStyles['entering'], {}, transitionStyles[state])
    }, children);
  });
};

Fade.DIRECTIONS = DIRECTIONS;

var DisplayOne = function DisplayOne(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '8xl' : _ref$size,
      _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? '6xl' : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === void 0 ? '6xl' : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? '7xl' : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? '8xl' : _ref$lg,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 700 : _ref$fontWeight,
      rest = _objectWithoutProperties(_ref, ["children", "size", "xs", "sm", "md", "lg", "fontWeight"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var DisplayTwo = function DisplayTwo(_ref2) {
  var children = _ref2.children,
      _ref2$fontWeight = _ref2.fontWeight,
      fontWeight = _ref2$fontWeight === void 0 ? 700 : _ref2$fontWeight,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? '7xl' : _ref2$size,
      _ref2$xs = _ref2.xs,
      xs = _ref2$xs === void 0 ? '5xl' : _ref2$xs,
      _ref2$sm = _ref2.sm,
      sm = _ref2$sm === void 0 ? '5xl' : _ref2$sm,
      _ref2$md = _ref2.md,
      md = _ref2$md === void 0 ? '6xl' : _ref2$md,
      _ref2$lg = _ref2.lg,
      lg = _ref2$lg === void 0 ? '7xl' : _ref2$lg,
      rest = _objectWithoutProperties(_ref2, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var HeadingOne = function HeadingOne(_ref3) {
  var children = _ref3.children,
      _ref3$fontWeight = _ref3.fontWeight,
      fontWeight = _ref3$fontWeight === void 0 ? 600 : _ref3$fontWeight,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? '6xl' : _ref3$size,
      _ref3$xs = _ref3.xs,
      xs = _ref3$xs === void 0 ? '4xl' : _ref3$xs,
      _ref3$sm = _ref3.sm,
      sm = _ref3$sm === void 0 ? '4xl' : _ref3$sm,
      _ref3$md = _ref3.md,
      md = _ref3$md === void 0 ? '5xl' : _ref3$md,
      _ref3$lg = _ref3.lg,
      lg = _ref3$lg === void 0 ? '6xl' : _ref3$lg,
      rest = _objectWithoutProperties(_ref3, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var HeadingTwo = function HeadingTwo(_ref4) {
  var children = _ref4.children,
      _ref4$fontWeight = _ref4.fontWeight,
      fontWeight = _ref4$fontWeight === void 0 ? 600 : _ref4$fontWeight,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? '5xl' : _ref4$size,
      _ref4$xs = _ref4.xs,
      xs = _ref4$xs === void 0 ? '3xl' : _ref4$xs,
      _ref4$sm = _ref4.sm,
      sm = _ref4$sm === void 0 ? '3xl' : _ref4$sm,
      _ref4$md = _ref4.md,
      md = _ref4$md === void 0 ? '4xl' : _ref4$md,
      _ref4$lg = _ref4.lg,
      lg = _ref4$lg === void 0 ? '5xl' : _ref4$lg,
      rest = _objectWithoutProperties(_ref4, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var HeadingThree = function HeadingThree(_ref5) {
  var children = _ref5.children,
      _ref5$fontWeight = _ref5.fontWeight,
      fontWeight = _ref5$fontWeight === void 0 ? 500 : _ref5$fontWeight,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? '4xl' : _ref5$size,
      _ref5$xs = _ref5.xs,
      xs = _ref5$xs === void 0 ? '2xl' : _ref5$xs,
      _ref5$sm = _ref5.sm,
      sm = _ref5$sm === void 0 ? '2xl' : _ref5$sm,
      _ref5$md = _ref5.md,
      md = _ref5$md === void 0 ? '3xl' : _ref5$md,
      _ref5$lg = _ref5.lg,
      lg = _ref5$lg === void 0 ? '4xl' : _ref5$lg,
      rest = _objectWithoutProperties(_ref5, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var HeadingFour = function HeadingFour(_ref6) {
  var children = _ref6.children,
      _ref6$fontWeight = _ref6.fontWeight,
      fontWeight = _ref6$fontWeight === void 0 ? 500 : _ref6$fontWeight,
      _ref6$size = _ref6.size,
      size = _ref6$size === void 0 ? '3xl' : _ref6$size,
      _ref6$xs = _ref6.xs,
      xs = _ref6$xs === void 0 ? 'xl' : _ref6$xs,
      _ref6$sm = _ref6.sm,
      sm = _ref6$sm === void 0 ? 'xl' : _ref6$sm,
      _ref6$md = _ref6.md,
      md = _ref6$md === void 0 ? '2xl' : _ref6$md,
      _ref6$lg = _ref6.lg,
      lg = _ref6$lg === void 0 ? '3xl' : _ref6$lg,
      rest = _objectWithoutProperties(_ref6, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var HeadingFive = function HeadingFive(_ref7) {
  var children = _ref7.children,
      _ref7$fontWeight = _ref7.fontWeight,
      fontWeight = _ref7$fontWeight === void 0 ? 500 : _ref7$fontWeight,
      _ref7$size = _ref7.size,
      size = _ref7$size === void 0 ? '2xl' : _ref7$size,
      _ref7$xs = _ref7.xs,
      xs = _ref7$xs === void 0 ? 'lg' : _ref7$xs,
      _ref7$sm = _ref7.sm,
      sm = _ref7$sm === void 0 ? 'lg' : _ref7$sm,
      _ref7$md = _ref7.md,
      md = _ref7$md === void 0 ? 'xl' : _ref7$md,
      _ref7$lg = _ref7.lg,
      lg = _ref7$lg === void 0 ? '2xl' : _ref7$lg,
      rest = _objectWithoutProperties(_ref7, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var LeadText = function LeadText(_ref8) {
  var children = _ref8.children,
      _ref8$fontWeight = _ref8.fontWeight,
      fontWeight = _ref8$fontWeight === void 0 ? 500 : _ref8$fontWeight,
      _ref8$size = _ref8.size,
      size = _ref8$size === void 0 ? 'xl' : _ref8$size,
      _ref8$xs = _ref8.xs,
      xs = _ref8$xs === void 0 ? 'xl' : _ref8$xs,
      _ref8$sm = _ref8.sm,
      sm = _ref8$sm === void 0 ? 'xl' : _ref8$sm,
      _ref8$md = _ref8.md,
      md = _ref8$md === void 0 ? 'xl' : _ref8$md,
      _ref8$lg = _ref8.lg,
      lg = _ref8$lg === void 0 ? 'xl' : _ref8$lg,
      rest = _objectWithoutProperties(_ref8, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};
var BodyText = function BodyText(_ref9) {
  var children = _ref9.children,
      _ref9$fontWeight = _ref9.fontWeight,
      fontWeight = _ref9$fontWeight === void 0 ? 500 : _ref9$fontWeight,
      _ref9$size = _ref9.size,
      size = _ref9$size === void 0 ? 'base' : _ref9$size,
      _ref9$xs = _ref9.xs,
      xs = _ref9$xs === void 0 ? 'base' : _ref9$xs,
      _ref9$sm = _ref9.sm,
      sm = _ref9$sm === void 0 ? 'base' : _ref9$sm,
      _ref9$md = _ref9.md,
      md = _ref9$md === void 0 ? 'base' : _ref9$md,
      _ref9$lg = _ref9.lg,
      lg = _ref9$lg === void 0 ? 'base' : _ref9$lg,
      rest = _objectWithoutProperties(_ref9, ["children", "fontWeight", "size", "xs", "sm", "md", "lg"]);

  return React.createElement(React.Fragment, null, React.createElement(Text, _extends({
    size: size,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    fontWeight: fontWeight
  }, rest), children));
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0; left: 0; right: 0; bottom: 0;\n  background-image: ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var Gradient = styled__default.div(_templateObject$a(), function (props) {
  return "linear-gradient(".concat(props.direction || '90deg', ", ").concat(props.theme.colors[props.fromVariant || 'primary'][props.fromShade || '500'], ", ").concat(props.theme.colors[props.toVariant || 'secondary'][props.toShade || '500'], ")");
});

exports.BodyText = BodyText;
exports.CenteredOverlay = CenteredOverlay;
exports.Column = Column;
exports.ContentContainer = ContentContainer;
exports.DisplayOne = DisplayOne;
exports.DisplayTwo = DisplayTwo;
exports.Fade = Fade;
exports.Flex = Flex;
exports.GlobalStyle = GlobalStyle;
exports.Gradient = Gradient;
exports.HeadingFive = HeadingFive;
exports.HeadingFour = HeadingFour;
exports.HeadingOne = HeadingOne;
exports.HeadingThree = HeadingThree;
exports.HeadingTwo = HeadingTwo;
exports.Hero = Hero;
exports.HideAtSize = HideAtSize;
exports.LeadText = LeadText;
exports.Row = Row;
exports.Section = Section;
exports.Text = Text;
exports.mediaqueries = mediaqueries;
