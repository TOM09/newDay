"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollUtil = exports.AnimationUtil = exports.DingtalkConfigUtil = exports.CacheUtil = exports.parseTime = exports.NetworkUtil = exports.FileUtil = exports.RouterUtil = exports.LogUtil = exports.ObjectUtil = exports.StringUtil = exports.RandomUtil = exports.FontUtil = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _arguments = arguments;

var _constants = require("./constants");

var _dingtalkUtil = require("./dingtalk-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CacheUtil = new (function () {
  function _class() {
    (0, _classCallCheck3.default)(this, _class);
  }

  (0, _createClass3.default)(_class, [{
    key: "setItem",
    value: function setItem(cacheName, cacheTime, cacheContent) {
      var result = {
        data: cacheContent,
        expiration: new Date().getTime() + cacheTime
      };
      _dingtalkUtil.DingtalkUtil.setItem(cacheName, (0, _stringify2.default)(result));
    }
  }, {
    key: "getItem",
    value: function getItem(cacheName, successCallback) {
      _dingtalkUtil.DingtalkUtil.getItem(cacheName, function (info) {
        if (info) {
          info = JSON.parse(info);
          if (info.expiration - new Date().getTime() > 3000) {
            if (successCallback) {
              successCallback(info.data);
              return;
            }
          }
        }

        if (successCallback) successCallback('');
      });
    }
  }]);
  return _class;
}())();

var NetworkUtil = new (function () {
  function _class2() {
    (0, _classCallCheck3.default)(this, _class2);
  }

  (0, _createClass3.default)(_class2, [{
    key: "streamAndCache",
    value: function streamAndCache(cacheName, cacheTime, settings, isNow, successCallback, failedCallback) {
      _dingtalkUtil.DingtalkUtil.getItem(cacheName, function (info) {
        if (info && !isNow) {
          info = JSON.parse(info);
          if (info.expiration - new Date().getTime() > 3000) {
            if (successCallback) successCallback(info.data.data);
            return;
          }
        }
        setTimeout(function () {
          _constants.stream.fetch(settings, function (data) {
            if (0 > cacheTime) cacheTime = 3600000;
            var result = {
              data: data.data,
              expiration: new Date().getTime() + cacheTime
            };
            _dingtalkUtil.DingtalkUtil.setItem(cacheName, (0, _stringify2.default)(result));
            if (successCallback) successCallback(data.data.data);
          }, failedCallback);
        }, 600);
      });
    }
  }, {
    key: "streamRequest",
    value: function streamRequest(settings, successCallback, cacheParams, failedCallback) {
      if (settings.method === 'GET') {
        if (cacheParams) {
          this.streamAndCache(cacheParams.cacheName, cacheParams.cacheTime, settings, cacheParams.isNow, successCallback, failedCallback);
          return;
        }
      }
      _constants.stream.fetch(settings, function (response) {
        if (response.data.code === 0) {
          if (successCallback) successCallback(response.data.data);
        } else {
          LogUtil.log((0, _stringify2.default)(response));
          LogUtil.log('获取数据失败');
        }
      });
    }
  }]);
  return _class2;
}())();

var ScrollUtil = new (function () {
  function _class3() {
    (0, _classCallCheck3.default)(this, _class3);
  }

  (0, _createClass3.default)(_class3, [{
    key: "scrollToElement",
    value: function scrollToElement(ref, options) {
      _constants.domModule.scrollToElement(ref, options);
    }
  }]);
  return _class3;
}())();

var FontUtil = new (function () {
  function _class4() {
    (0, _classCallCheck3.default)(this, _class4);
  }

  (0, _createClass3.default)(_class4, [{
    key: "addRule",
    value: function addRule(fontFace, fontFamily, src) {
      _constants.domModule.addRule(fontFace, {
        'fontFamily': fontFamily,
        'src': src
      });
    }
  }, {
    key: "addRule",
    value: function addRule(fontFace, fontFamily, src) {
      _constants.domModule.addRule(fontFace, {
        'fontFamily': fontFamily,
        'src': src
      });
    }
  }]);
  return _class4;
}())();

var RandomUtil = new (function () {
  function _class6() {
    (0, _classCallCheck3.default)(this, _class6);
    this._CHARS = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  }

  (0, _createClass3.default)(_class6, [{
    key: "getString",
    value: function getString(len) {
      len = len || 32;
      var maxPos = this._CHARS.length,
          result = '';
      for (var i = 0; i < len; ++i) {
        result += this._CHARS.charAt(Math.floor(Math.random() * maxPos));
      }return result;
    }
  }, {
    key: "getArray",
    value: function getArray(arr, num) {
      if (num > arr.length || num < 0) return arr;
      var returnArr = [];
      var set = new _set2.default();
      var setFlag = true;
      var moreThanFlag = false;
      if (num > arr.length / 2) {
        num = arr.length - num;
        moreThanFlag = true;
      }
      while (setFlag) {
        if (set.size < num) set.add(Math.floor(Math.random() * arr.length));else setFlag = false;
      }
      if (moreThanFlag) {
        var indexArr = [];
        for (var index in arr) {
          indexArr.push(index);
        }
        set = new _set2.default(indexArr.filter(function (x) {
          return !set.has(Number(x));
        }));
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(set), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          returnArr.push(arr[item]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return returnArr;
    }
  }]);
  return _class6;
}())();

var StringUtil = new (function () {
  function _class7() {
    (0, _classCallCheck3.default)(this, _class7);
  }

  (0, _createClass3.default)(_class7, [{
    key: "isEmpty",
    value: function isEmpty(str) {
      var s = str || '';
      return '' === s || 0 === s.length;
    }
  }]);
  return _class7;
}())();

var ObjectUtil = new (function () {
  function _class8() {
    (0, _classCallCheck3.default)(this, _class8);
  }

  (0, _createClass3.default)(_class8, [{
    key: "isNull",
    value: function isNull(obj) {
      return null === obj;
    }
  }, {
    key: "isUndefined",
    value: function isUndefined(obj) {
      return undefined === obj;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(obj) {
      return this.isNull(obj) || this.isUndefined(obj);
    }
  }, {
    key: "compare",
    value: function compare(objA, objB) {
      var valA = objA,
          valB = objB;
      if (!this.isEmpty(valA) && 'number' === typeof valA) valA = parseFloat(valA);
      if (!this.isEmpty(valB) && 'number' === typeof valB) valB = parseFloat(valB);
      return valA > valB ? 1 : valA < valB ? -1 : 0;
    }
  }, {
    key: "getValue",
    value: function getValue(obj, property) {
      if (this.isEmpty(obj)) return null;
      var props = property.split('.'),
          result = obj;
      for (var i = 0, size = props.length; i < size; ++i) {
        if (props[i] in result) {
          result = result[props[i]];
        } else {
          result = null;
          break;
        }
      }return result;
    }
  }]);
  return _class8;
}())();

var LogUtil = new (function () {
  function _class9() {
    (0, _classCallCheck3.default)(this, _class9);
  }

  (0, _createClass3.default)(_class9, [{
    key: "log",
    value: function log(message) {
      if (_constants.isDebug) {
        _constants.modal.alert({
          message: message
        });
        console.log(message);
      }
    }
  }]);
  return _class9;
}())();

var RouterUtil = new (function () {
  function _class11() {
    (0, _classCallCheck3.default)(this, _class11);
  }

  (0, _createClass3.default)(_class11, [{
    key: "_check",
    value: function _check() {
      if (ObjectUtil.isEmpty(this._router)) throw new Error('RouterUtil is not init');
    }
  }, {
    key: "init",
    value: function init(router) {
      if (ObjectUtil.isEmpty(this._router)) {
        this._router = router;
        this._shares = {};
        for (var routes = this._router.options.routes, i = 0, length = routes.length; i < length; ++i) {
          if (!ObjectUtil.isEmpty(routes[i].share)) {
            this._shares[routes[i].path] = routes[i].share;
            this._shares[routes[i].path].url = _constants.env.originalUrl + routes[i].path;
          }
        }
      }
    }
  }, {
    key: "getCurrentPath",
    value: function getCurrentPath() {
      return this._router.currentRoute.path;
    }
  }, {
    key: "getCurrentPathShare",
    value: function getCurrentPathShare() {
      var path = this.getCurrentPath();

      return path in this._shares ? this._shares[path] : this._shares['/'];
    }
  }, {
    key: "push",
    value: function push(url) {
      this._check();
      this._router.push(url);
    }
  }, {
    key: "back",
    value: function back() {
      this._check();
      var previousUrl = this.getCurrentPath();
      this._router.back();
      return previousUrl === this.getCurrentPath() && '/' === previousUrl;
    }
  }]);
  return _class11;
}())();

var FileUtil = new (function () {
  function _class12() {
    (0, _classCallCheck3.default)(this, _class12);
  }

  (0, _createClass3.default)(_class12, [{
    key: "getSuffix",
    value: function getSuffix(fileName) {
      var suffix = '',
          pos = fileName.lastIndexOf('.');
      if (-1 != pos) suffix = fileName.substring(pos);

      return suffix;
    }
  }]);
  return _class12;
}())();

var DingtalkConfigUtil = new (function () {
  function _class13() {
    (0, _classCallCheck3.default)(this, _class13);
  }

  (0, _createClass3.default)(_class13, [{
    key: "getConfigInfo",
    value: function getConfigInfo(corpId, url, successCallback) {
      _constants.stream.fetch({
        method: 'GET',
        type: 'json',
        url: _constants.baseUrl + '/dingtalk/get-config?corpId=' + corpId + '&url=' + url
      }, function (response) {
        if (response.data.code === 0) {
          if (successCallback) successCallback(response.data.data);
        } else {
          LogUtil.log((0, _stringify2.default)(response));
          LogUtil.log('获取钉钉鉴权数据失败');
        }
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo(corpId, successCallback) {
      _dingtalkUtil.DingtalkUtil.getItem('userInfo', function (info) {
        if (info) {
          info = JSON.parse(info);
          if (info.expiration - new Date().getTime() > 300) {
            if (successCallback) successCallback(info.data.data);
            return;
          }
        }
        _dingtalkUtil.DingtalkUtil.getCode(corpId, function (code) {
          _constants.stream.fetch({
            method: 'GET',
            type: 'json',
            url: _constants.baseUrl + '/dingtalk/get-user-info?corpId=' + corpId + '&code=' + code.code
          }, function (response) {
            if (response.data.code === 0) {
              var result = {
                data: response.data,
                expiration: new Date().getTime() + 300000
              };
              _dingtalkUtil.DingtalkUtil.setItem('userInfo', (0, _stringify2.default)(result));
              if (successCallback) successCallback(response.data.data);
            } else {
              LogUtil.log((0, _stringify2.default)(response));
              LogUtil.log('获取用户详细信息失败');
            }
          });
        });
      });
    }
  }]);
  return _class13;
}())();

var AnimationUtil = new (function () {
  function _class14() {
    (0, _classCallCheck3.default)(this, _class14);
  }

  (0, _createClass3.default)(_class14, [{
    key: "transitionAnimation",
    value: function transitionAnimation(el, transform) {
      _constants.animation.transition(el, {
        styles: {
          transform: transform
        },
        duration: 200,
        timingFunction: 'ease-in',
        delay: 0 });
    }
  }]);
  return _class14;
}())();

var parseTime = function parseTime(time, cFormat) {
  if (_arguments.length === 0) {
    return null;
  }
  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  var date = void 0;
  if ((typeof time === "undefined" ? "undefined" : (0, _typeof3.default)(time)) === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
    var value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
};

exports.FontUtil = FontUtil;
exports.RandomUtil = RandomUtil;
exports.StringUtil = StringUtil;
exports.ObjectUtil = ObjectUtil;
exports.LogUtil = LogUtil;
exports.RouterUtil = RouterUtil;
exports.FileUtil = FileUtil;
exports.NetworkUtil = NetworkUtil;
exports.parseTime = parseTime;
exports.CacheUtil = CacheUtil;
exports.DingtalkConfigUtil = DingtalkConfigUtil;
exports.AnimationUtil = AnimationUtil;
exports.ScrollUtil = ScrollUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyY19saWIvdXRpbC5qcyJdLCJuYW1lcyI6WyJDYWNoZVV0aWwiLCJjYWNoZU5hbWUiLCJjYWNoZVRpbWUiLCJjYWNoZUNvbnRlbnQiLCJyZXN1bHQiLCJkYXRhIiwiZXhwaXJhdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwic2V0SXRlbSIsInN1Y2Nlc3NDYWxsYmFjayIsImdldEl0ZW0iLCJpbmZvIiwiSlNPTiIsInBhcnNlIiwiTmV0d29ya1V0aWwiLCJzZXR0aW5ncyIsImlzTm93IiwiZmFpbGVkQ2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJjYWNoZVBhcmFtcyIsIm1ldGhvZCIsInN0cmVhbUFuZENhY2hlIiwicmVzcG9uc2UiLCJjb2RlIiwiTG9nVXRpbCIsImxvZyIsIlNjcm9sbFV0aWwiLCJyZWYiLCJvcHRpb25zIiwic2Nyb2xsVG9FbGVtZW50IiwiRm9udFV0aWwiLCJmb250RmFjZSIsImZvbnRGYW1pbHkiLCJzcmMiLCJhZGRSdWxlIiwiUmFuZG9tVXRpbCIsIl9DSEFSUyIsImxlbiIsIm1heFBvcyIsImxlbmd0aCIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhcnIiLCJudW0iLCJyZXR1cm5BcnIiLCJzZXQiLCJzZXRGbGFnIiwibW9yZVRoYW5GbGFnIiwic2l6ZSIsImFkZCIsImluZGV4QXJyIiwiaW5kZXgiLCJwdXNoIiwiZmlsdGVyIiwiaGFzIiwiTnVtYmVyIiwieCIsIml0ZW0iLCJTdHJpbmdVdGlsIiwic3RyIiwicyIsIk9iamVjdFV0aWwiLCJvYmoiLCJ1bmRlZmluZWQiLCJpc051bGwiLCJpc1VuZGVmaW5lZCIsIm9iakEiLCJvYmpCIiwidmFsQSIsInZhbEIiLCJpc0VtcHR5IiwicGFyc2VGbG9hdCIsInByb3BlcnR5IiwicHJvcHMiLCJzcGxpdCIsIm1lc3NhZ2UiLCJhbGVydCIsImNvbnNvbGUiLCJSb3V0ZXJVdGlsIiwiX3JvdXRlciIsIkVycm9yIiwicm91dGVyIiwiX3NoYXJlcyIsInJvdXRlcyIsInNoYXJlIiwicGF0aCIsInVybCIsIm9yaWdpbmFsVXJsIiwiY3VycmVudFJvdXRlIiwiZ2V0Q3VycmVudFBhdGgiLCJfY2hlY2siLCJwcmV2aW91c1VybCIsImJhY2siLCJGaWxlVXRpbCIsImZpbGVOYW1lIiwic3VmZml4IiwicG9zIiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJEaW5ndGFsa0NvbmZpZ1V0aWwiLCJjb3JwSWQiLCJ0eXBlIiwiZ2V0Q29kZSIsIkFuaW1hdGlvblV0aWwiLCJlbCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJzdHlsZXMiLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwiZGVsYXkiLCJwYXJzZVRpbWUiLCJ0aW1lIiwiY0Zvcm1hdCIsImZvcm1hdCIsImRhdGUiLCJwYXJzZUludCIsImZvcm1hdE9iaiIsInkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJhIiwiZ2V0RGF5IiwidGltZV9zdHIiLCJyZXBsYWNlIiwia2V5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBOztBQVNBOzs7O0FBMENBLElBQU1BLFlBQVk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDRCQVNSQyxTQVRRLEVBU1dDLFNBVFgsRUFTOEJDLFlBVDlCLEVBU29EO0FBQ2xFLFVBQUlDLFNBQVM7QUFDWEMsY0FBTUYsWUFESztBQUVYRyxvQkFBWSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsS0FBdUJOO0FBRnhCLE9BQWI7QUFJQSxpQ0FBYU8sT0FBYixDQUFxQlIsU0FBckIsRUFBZ0MseUJBQWVHLE1BQWYsQ0FBaEM7QUFDRDtBQWZlO0FBQUE7QUFBQSw0QkF1QlJILFNBdkJRLEVBdUJXUyxlQXZCWCxFQXVCc0M7QUFDcEQsaUNBQWFDLE9BQWIsQ0FBcUJWLFNBQXJCLEVBQWdDLFVBQVNX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QUNBRyxVLEdBQUFBLFU7UUFDQXhDLE8sR0FBQUEsTztRQUNBeUQsVSxHQUFBQSxVO1FBQ0FlLFEsR0FBQUEsUTtRQUNBbkYsVyxHQUFBQSxXO1FBQ0FxRyxTLEdBQUFBLFM7UUFDQXBILFMsR0FBQUEsUztRQUNBd0csa0IsR0FBQUEsa0I7UUFDQUksYSxHQUFBQSxhO1FBQ0FoRixVLEdBQUFBLFUiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBmbG93ICovXHJcblxyXG4vKiFcclxuICogVXRpbCBKU1xyXG4gKlxyXG4gKiDlrZjlgqjpobnnm67lt6Xlhbdqc+S7o+eggVxyXG4gKlxyXG4gKiBAYXV0aG9yIGdsXHJcbiAqIEB2ZXJzaW9uIDEuMC4wIDIwMTcwOTI3XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBkb21Nb2R1bGUsXHJcbiAgZW52LFxyXG4gIGlzRGVidWcsXHJcbiAgbW9kYWwsXHJcbiAgc3RyZWFtLFxyXG4gIGFuaW1hdGlvbixcclxuICBiYXNlVXJsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgRGluZ3RhbGtVdGlsXHJcbn0gZnJvbSBcIi4vZGluZ3RhbGstdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIOe9kee7nOmAmuS/oeivt+axguiuvue9ruaOpeWPo1xyXG4gKi9cclxuZGVjbGFyZSBpbnRlcmZhY2UgTmV0d29ya1NldHRpbmdzIHtcclxuICAvKiog6K+35rGC5pa55rOVICovXHJcbiAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCI7XHJcblxyXG4gIC8qKiDor7fmsYLlnLDlnYAgKi9cclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgLyoqIOebuOW6lOexu+WeiyAqL1xyXG4gIHR5cGU6IFwianNvblwiIHwgJ2pzb25wJyB8ICd0ZXh0JztcclxuXHJcbiAgLyoqIOivt+axglBPU1TmlbDmja4gKi9cclxuICBib2R5ID8gOiBTdHJpbmc7XHJcblxyXG4gIC8qKiBwb3N06K+35rGC5pWw5o2u5aS0ICovXHJcbiAgaGVhZGVycyA/IDogT2JqZWN0O1xyXG5cclxuICAvKiog6K+35rGC5pa55rOVICovXHJcbiAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCI7XHJcblxyXG4gIC8qKiDor7fmsYLlnLDlnYAgKi9cclxuICB1cmw6IHN0cmluZztcclxuXHJcbiAgLyoqIOebuOW6lOexu+WeiyAqL1xyXG4gIHR5cGU6IFwianNvblwiIHwgJ2pzb25wJyB8ICd0ZXh0JztcclxuXHJcbiAgLyoqIOivt+axglBPU1TmlbDmja4gKi9cclxuICBkYXRhID8gOiBTdHJpbmc7XHJcblxyXG4gIC8qKiBwb3N06K+35rGC5pWw5o2u5aS0ICovXHJcbiAgaGVhZGVycyA/IDogU3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICog5bim5aSx5pWI5pe26Ze055qE57yT5a2Y5bel5YW3XHJcbiAqL1xyXG5jb25zdCBDYWNoZVV0aWwgPSBuZXcgY2xhc3Mge1xyXG4gIC8qKlxyXG4gICAqIOiuvue9rue8k+WtmFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNhY2hlTmFtZSDnvJPlrZjlkI3np7BcclxuICAgKiBAcGFyYW0gY2FjaGVUaW1lIOe8k+WtmOaXtumXtFxyXG4gICAqIEBwYXJhbSBjYWNoZUNvbnRlbnQg57yT5a2Y5YaF5a65XHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayDmiJDlip/lm57osIPlh73mlbBcclxuICAgKi9cclxuICBzZXRJdGVtKGNhY2hlTmFtZTogU3RyaW5nLCBjYWNoZVRpbWU6IE51bWJlciwgY2FjaGVDb250ZW50OiBTdHJpbmcpIHtcclxuICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgIGRhdGE6IGNhY2hlQ29udGVudCxcclxuICAgICAgZXhwaXJhdGlvbjogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBjYWNoZVRpbWVcclxuICAgIH07XHJcbiAgICBEaW5ndGFsa1V0aWwuc2V0SXRlbShjYWNoZU5hbWUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnvJPlrZhcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjYWNoZU5hbWUg57yT5a2Y5ZCN56ewXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayDmiJDlip/lm57osIPlh73mlbBcclxuICAgKi9cclxuICBnZXRJdGVtKGNhY2hlTmFtZTogU3Rpcm5nLCBzdWNjZXNzQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICBEaW5ndGFsa1V0aWwuZ2V0SXRlbShjYWNoZU5hbWUsIGZ1bmN0aW9uKGluZm8pIHtcclxuICAgICAgaWYgKGluZm8pIHtcclxuICAgICAgICBpbmZvID0gSlNPTi5wYXJzZShpbmZvKTtcclxuICAgICAgICBpZiAoaW5mby5leHBpcmF0aW9uIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkgPiAzMDAwKSB7XHJcbiAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhpbmZvLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBzdWNjZXNzQ2FsbGJhY2soJycpXHJcbiAgICB9KTtcclxuICB9XHJcbn0oKTtcclxuXHJcbi8qKlxyXG4gKiBuZXR3b3Jr5bel5YW35a6e5L6LXHJcbiAqL1xyXG5jb25zdCBOZXR3b3JrVXRpbCA9IG5ldyBjbGFzcyB7XHJcbiAgLyoqXHJcbiAgICog5bim57yT5a2Y55qEc3RyZWFt6K+35rGCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2FjaGVOYW1lIOe8k+WtmOWQjeensFxyXG4gICAqIEBwYXJhbSBjYWNoZVRpbWUg57yT5a2Y5pe26Ze077yI5Y2V5L2NOiDmr6vnp5LvvIlcclxuICAgKiBAcGFyYW0gc2V0dGluZ3Mg6K+35rGC5Y+C5pWwXHJcbiAgICogQHBhcmFtIGlzTm93IOaYr+WQpueri+WNs+ivt+axgih0cnVlOiDnq4vljbPor7fmsYIpXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayDmiJDlip/lm57osIPlh73mlbBcclxuICAgKiBAcGFyYW0gZmFpbGVkQ2FsbGJhY2sg5aSx6LSl5Zue6LCD5Ye95pWwXHJcbiAgICovXHJcbiAgc3RyZWFtQW5kQ2FjaGUoY2FjaGVOYW1lOiBTdHJpbmcsIGNhY2hlVGltZTogTnVtYmVyLCBzZXR0aW5nczogTmV0d29ya1NldHRpbmdzLCBpc05vdzogYm9vbGVhbiwgc3VjY2Vzc0NhbGxiYWNrID8gOiBGdW5jdGlvbiwgZmFpbGVkQ2FsbGJhY2sgPyA6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBEaW5ndGFsa1V0aWwuZ2V0SXRlbShjYWNoZU5hbWUsIGZ1bmN0aW9uKGluZm8pIHtcclxuICAgICAgaWYgKGluZm8gJiYgIWlzTm93KSB7XHJcbiAgICAgICAgaW5mbyA9IEpTT04ucGFyc2UoaW5mbyk7XHJcbiAgICAgICAgaWYgKGluZm8uZXhwaXJhdGlvbiAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gMzAwMCkge1xyXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgc3VjY2Vzc0NhbGxiYWNrKGluZm8uZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBzdHJlYW0uZmV0Y2goc2V0dGluZ3MsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIGlmICgwID4gY2FjaGVUaW1lKSBjYWNoZVRpbWUgPSAzNjAwMDAwO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGNhY2hlVGltZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIERpbmd0YWxrVXRpbC5zZXRJdGVtKGNhY2hlTmFtZSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBzdWNjZXNzQ2FsbGJhY2soZGF0YS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0sIGZhaWxlZENhbGxiYWNrKTtcclxuICAgICAgfSwgNjAwKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOe9kee7nOivt+axglxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNldHRpbmdzIOivt+axguWPguaVsFxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sg5oiQ5Yqf5Zue6LCD5Ye95pWwXHJcbiAgICogQHBhcmFtIGNhY2hlUGFyYW1zIOe8k+WtmOWvueixoSjpnZ7lv4XkvKApe2NhY2hlTmFtZTog57yT5a2Y5ZCN56ewLCBjYWNoZVRpbWU6IOe8k+WtmOaXtumXtCwgaXNOb3c6IOaYr+WQpueri+WNs+mHjeaWsOivt+axgn1cclxuICAgKiBAcGFyYW0gZmFpbGVkQ2FsbGJhY2sg5aSx6LSl5Zue6LCD5Ye95pWwKOmdnuW/heS8oClcclxuICAgKi9cclxuICBzdHJlYW1SZXF1ZXN0KHNldHRpbmdzOiBOZXR3b3JrU2V0dGluZ3MsIHN1Y2Nlc3NDYWxsYmFjazogRnVuY3Rpb24sIGNhY2hlUGFyYW1zID8gOiBPYmplY3QsIGZhaWxlZENhbGxiYWNrID8gOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKHNldHRpbmdzLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgICAgaWYgKGNhY2hlUGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5zdHJlYW1BbmRDYWNoZShjYWNoZVBhcmFtcy5jYWNoZU5hbWUsIGNhY2hlUGFyYW1zLmNhY2hlVGltZSwgc2V0dGluZ3MsIGNhY2hlUGFyYW1zLmlzTm93LCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWxlZENhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdHJlYW0uZmV0Y2goc2V0dGluZ3MsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTG9nVXRpbC5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG4gICAgICAgIExvZ1V0aWwubG9nKCfojrflj5bmlbDmja7lpLHotKUnKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0oKTtcclxuXHJcbi8qKlxyXG4gKiDot7PovazliLDpobXpnaLmjIflrprkvY3nva5cclxuICovXHJcbmNvbnN0IFNjcm9sbFV0aWwgPSBuZXcgY2xhc3Mge1xyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOWIsOafkOS4gOWFg+e0oFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlZiDlhYPntKDoioLngrlcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDmk43kvZxcclxuICAgKi9cclxuICBzY3JvbGxUb0VsZW1lbnQocmVmLCBvcHRpb25zKSB7XHJcbiAgICBkb21Nb2R1bGUuc2Nyb2xsVG9FbGVtZW50KHJlZiwgb3B0aW9ucylcclxuICB9XHJcbn0oKTtcclxuXHJcbi8qKlxyXG4gKiBpY29uZm9udOWtl+S9k+W3peWFt+WunuS+i1xyXG4gKi9cclxuY29uc3QgRm9udFV0aWwgPSBuZXcgY2xhc3Mge1xyXG4gIC8qKlxyXG4gICAqIOa3u+WKoOinhOWImVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZvbnRGYWNlIOWtl+S9k+agt+W8j1xyXG4gICAqIEBwYXJhbSBmb250RmFtaWx5IOWtl+S9k+WQjeensFxyXG4gICAqIEBwYXJhbSBzcmMg5rqQdXJsXHJcbiAgICovXHJcbiAgYWRkUnVsZShmb250RmFjZTogU3RyaW5nLCBmb250RmFtaWx5OiBTdHJpbmcsIHNyYzogU3RyaW5nKTogdm9pZCB7XHJcbiAgICBkb21Nb2R1bGUuYWRkUnVsZShmb250RmFjZSwge1xyXG4gICAgICAnZm9udEZhbWlseSc6IGZvbnRGYW1pbHksXHJcbiAgICAgICdzcmMnOiBzcmMsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICog5re75Yqg6KeE5YiZXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm9udEZhY2Ug5a2X5L2T5qC35byPXHJcbiAgICogQHBhcmFtIGZvbnRGYW1pbHkg5a2X5L2T5ZCN56ewXHJcbiAgICogQHBhcmFtIHNyYyDmupB1cmxcclxuICAgKi9cclxuICBhZGRSdWxlKGZvbnRGYWNlOiBTdHJpbmcsIGZvbnRGYW1pbHk6IFN0cmluZywgc3JjOiBTdHJpbmcpOiB2b2lkIHtcclxuICAgIGRvbU1vZHVsZS5hZGRSdWxlKGZvbnRGYWNlLCB7XHJcbiAgICAgICdmb250RmFtaWx5JzogZm9udEZhbWlseSxcclxuICAgICAgJ3NyYyc6IHNyYyxcclxuICAgIH0pO1xyXG4gIH1cclxufSgpO1xyXG5cclxuLyoqXHJcbiAqIOmaj+acuuaVsOW3peWFt+WunuS+i1xyXG4gKi9cclxuY29uc3QgUmFuZG9tVXRpbCA9IG5ldyBjbGFzcyB7XHJcbiAgLyoqXHJcbiAgICog5a2X56ym5bi46YePXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX0NIQVJTOiBzdHJpbmcgPSAnQUJDREVGR0hKS01OUFFSU1RXWFlaYWJjZGVmaGlqa21ucHJzdHd4eXoyMzQ1Njc4JztcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5oiQ6ZqP5py65a2X56ym5LiyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGVuIOeUn+aIkOWtl+espuS4sumVv+W6plxyXG4gICAqL1xyXG4gIGdldFN0cmluZyhsZW46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZW4gPSBsZW4gfHwgMzI7XHJcbiAgICB2YXIgbWF4UG9zID0gdGhpcy5fQ0hBUlMubGVuZ3RoLFxyXG4gICAgICByZXN1bHQgPSAnJztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXHJcbiAgICAgIHJlc3VsdCArPSB0aGlzLl9DSEFSUy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4UG9zKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6ZqP5py66I635Y+W5pWw57uE5Lit5oyH5a6a5Liq5pWw5LiN6YeN5aSN5YWD57SgXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXJyIOW+heaTjeS9nOaVsOe7hFxyXG4gICAqIEBwYXJhbSBudW0g6I635Y+W5YWD57Sg5Liq5pWwXHJcbiAgICovXHJcbiAgZ2V0QXJyYXkoYXJyOiBBcnJheSwgbnVtOiBOdW1iZXIpIHtcclxuICAgIGlmIChudW0gPiBhcnIubGVuZ3RoIHx8IG51bSA8IDApIHJldHVybiBhcnI7XHJcbiAgICB2YXIgcmV0dXJuQXJyID0gW107XHJcbiAgICB2YXIgc2V0ID0gbmV3IFNldCgpO1xyXG4gICAgdmFyIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgdmFyIG1vcmVUaGFuRmxhZyA9IGZhbHNlO1xyXG4gICAgaWYgKG51bSA+IGFyci5sZW5ndGggLyAyKSB7XHJcbiAgICAgIG51bSA9IGFyci5sZW5ndGggLSBudW07XHJcbiAgICAgIG1vcmVUaGFuRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoc2V0RmxhZykge1xyXG4gICAgICBpZiAoc2V0LnNpemUgPCBudW0pIHNldC5hZGQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCkpO1xyXG4gICAgICBlbHNlIHNldEZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChtb3JlVGhhbkZsYWcpIHtcclxuICAgICAgdmFyIGluZGV4QXJyID0gW11cclxuICAgICAgZm9yICh2YXIgaW5kZXggaW4gYXJyKSB7XHJcbiAgICAgICAgaW5kZXhBcnIucHVzaChpbmRleClcclxuICAgICAgfVxyXG4gICAgICBzZXQgPSBuZXcgU2V0KGluZGV4QXJyLmZpbHRlcih4ID0+ICFzZXQuaGFzKE51bWJlcih4KSkpKVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGl0ZW0gb2Ygc2V0KSB7XHJcbiAgICAgIHJldHVybkFyci5wdXNoKGFycltpdGVtXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldHVybkFycjtcclxuICB9XHJcbn0oKTtcclxuXHJcbi8qKlxyXG4gKiDlrZfnrKbkuLLlt6Xlhbflrp7kvotcclxuICovXHJcbmNvbnN0IFN0cmluZ1V0aWwgPSBuZXcgY2xhc3Mge1xyXG4gIC8qKlxyXG4gICAqIOajgOa1i+Wtl+espuS4suaYr+WQpuS4uuepulxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ciDooqvmo4DmtYvnmoTlrZfnrKbkuLJcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZTog56m6XHJcbiAgICovXHJcbiAgaXNFbXB0eShzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHMgPSBzdHIgfHwgJyc7XHJcbiAgICByZXR1cm4gJycgPT09IHMgfHwgMCA9PT0gcy5sZW5ndGg7XHJcbiAgfVxyXG59KCk7XHJcblxyXG4vKipcclxuICog5a+56LGh5bel5YW35a6e5L6LXHJcbiAqL1xyXG5jb25zdCBPYmplY3RVdGlsID0gbmV3IGNsYXNzIHtcclxuICAvKipcclxuICAgKiDmo4DmtYvlr7nosaHmmK/lkKbkuLpudWxsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb2JqIOiiq+ajgOa1i+WvueixoVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlOiBudWxsXHJcbiAgICovXHJcbiAgaXNOdWxsKG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbnVsbCA9PT0gb2JqO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qOA5rWL5a+56LGh5piv5ZCm5Li6dW5kZWZpbmVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb2JqIOiiq+ajgOa1i+WvueixoVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlOiB1bmRlZmluZWRcclxuICAgKi9cclxuICBpc1VuZGVmaW5lZChvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZCA9PT0gb2JqO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5qOA5rWL5a+56LGh5piv5ZCm5Li656m6XHJcbiAgICpcclxuICAgKiBAcGFyYW0gb2JqIOiiq+ajgOa1i+WvueixoVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlOiDnqbpcclxuICAgKi9cclxuICBpc0VtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc051bGwob2JqKSB8fCB0aGlzLmlzVW5kZWZpbmVkKG9iaik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlr7nosaHmr5TovoNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvYmpBIOWvueixoUFcclxuICAgKiBAcGFyYW0gb2JqQiDlr7nosaFCXHJcbiAgICogQHJldHVybnMge251bWJlcn0gMTogb2JqQSA+IG9iakIgMDogb2JqQSA9PSBvYmpCIC0xIG9iakEgPCBvYmpCXHJcbiAgICovXHJcbiAgY29tcGFyZShvYmpBOiBhbnksIG9iakI6IGFueSk6IG51bWJlciB7XHJcbiAgICBsZXQgdmFsQTogYW55ID0gb2JqQSxcclxuICAgICAgdmFsQjogYW55ID0gb2JqQjtcclxuICAgIGlmICghdGhpcy5pc0VtcHR5KHZhbEEpICYmICdudW1iZXInID09PSB0eXBlb2YgdmFsQSlcclxuICAgICAgdmFsQSA9IHBhcnNlRmxvYXQodmFsQSk7XHJcbiAgICBpZiAoIXRoaXMuaXNFbXB0eSh2YWxCKSAmJiAnbnVtYmVyJyA9PT0gdHlwZW9mIHZhbEIpXHJcbiAgICAgIHZhbEIgPSBwYXJzZUZsb2F0KHZhbEIpO1xyXG4gICAgcmV0dXJuIHZhbEEgPiB2YWxCID8gMSA6IHZhbEEgPCB2YWxCID8gLTEgOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5a+56LGh5bGe5oCn5YC8XHJcbiAgICog5bGe5oCn5ZCN56ew5pSv5oyB5bWM5aWXXHJcbiAgICog5L6L5aaCOlxyXG4gICAqICBvYmogPSB7YToge2ExOiAxMH19O1xyXG4gICAqICBPYmplY3RVdGlsLmdldFZhbHVlKG9iaiwgJ2EuYTEnKSA9PT0gb2JqW2FdW2ExXVxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9iaiDlr7nosaFcclxuICAgKiBAcGFyYW0gcHJvcGVydHkg5bGe5oCn5ZCN56ewXHJcbiAgICogQHJldHVybnMge29iamVjdH0g5bGe5oCn5YC85a+56LGhXHJcbiAgICovXHJcbiAgZ2V0VmFsdWUob2JqOiBhbnksIHByb3BlcnR5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eShvYmopKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBwcm9wczogQXJyYXkgPCBzdHJpbmcgPiA9IHByb3BlcnR5LnNwbGl0KCcuJyksXHJcbiAgICAgIHJlc3VsdDogYW55ID0gb2JqO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIHNpemUgPSBwcm9wcy5sZW5ndGg7IGkgPCBzaXplOyArK2kpXHJcbiAgICAgIGlmIChwcm9wc1tpXSBpbiByZXN1bHQpIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRbcHJvcHNbaV1dO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KCk7XHJcblxyXG4vKipcclxuICog5pel5b+X5bel5YW35a6e5L6LXHJcbiAqL1xyXG5jb25zdCBMb2dVdGlsID0gbmV3IGNsYXNzIHtcclxuICAvKipcclxuICAgKiDovpPlh7rml6Xlv5fkv6Hmga9cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIOaXpeW/l+S/oeaBr1xyXG4gICAqL1xyXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChpc0RlYnVnKSB7XHJcbiAgICAgIG1vZGFsLmFsZXJ0KHtcclxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn0oKTtcclxuXHJcbi8qKlxyXG4gKiDot6/nlLHlt6Xlhbflrp7kvotcclxuICovXHJcbmNvbnN0IFJvdXRlclV0aWwgPSBuZXcgY2xhc3Mge1xyXG4gIC8qKlxyXG4gICAqIOmhueebruWunumZhei3r+eUseWvueixoVxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfcm91dGVyOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouWIhuS6q+aVsOaNruWvueixoVxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfc2hhcmVzOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIOWvueixoeacieaViOaAp+ajgOa1i1xyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfY2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAoT2JqZWN0VXRpbC5pc0VtcHR5KHRoaXMuX3JvdXRlcikpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUm91dGVyVXRpbCBpcyBub3QgaW5pdCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5Yid5aeL5YyWXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcm91dGVyIOi3r+eUseWunuS+i+WvueixoVxyXG4gICAqL1xyXG4gIGluaXQocm91dGVyOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChPYmplY3RVdGlsLmlzRW1wdHkodGhpcy5fcm91dGVyKSkge1xyXG4gICAgICB0aGlzLl9yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgIHRoaXMuX3NoYXJlcyA9IHt9O1xyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCByb3V0ZXMgPSB0aGlzLl9yb3V0ZXIub3B0aW9ucy5yb3V0ZXMsIGkgPSAwLCBsZW5ndGggPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuZ3RoO1xyXG4gICAgICAgICsraVxyXG4gICAgICApXHJcbiAgICAgICAgaWYgKCFPYmplY3RVdGlsLmlzRW1wdHkocm91dGVzW2ldLnNoYXJlKSkge1xyXG4gICAgICAgICAgdGhpcy5fc2hhcmVzW3JvdXRlc1tpXS5wYXRoXSA9IHJvdXRlc1tpXS5zaGFyZTtcclxuICAgICAgICAgIHRoaXMuX3NoYXJlc1tyb3V0ZXNbaV0ucGF0aF0udXJsID0gZW52Lm9yaWdpbmFsVXJsICsgcm91dGVzW2ldLnBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6I635Y+W5b2T5YmN6aG16Z2i6Lev55Sx5Zyw5Z2AXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSDot6/nlLF1cmzlnLDlnYBcclxuICAgKi9cclxuICBnZXRDdXJyZW50UGF0aCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlci5jdXJyZW50Um91dGUucGF0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluW9k+WJjemhtemdouWIhuS6q+S/oeaBr1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge29iamVjdH0g5b2T5YmN6aG16Z2i5YiG5Lqr5L+h5oGvXHJcbiAgICovXHJcbiAgZ2V0Q3VycmVudFBhdGhTaGFyZSgpOiB7XHJcbiAgICB0eXBlOiAwLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY29udGVudDogc3RyaW5nLFxyXG4gICAgaW1hZ2U6IHN0cmluZ1xyXG4gIH0ge1xyXG4gICAgbGV0IHBhdGg6IHN0cmluZyA9IHRoaXMuZ2V0Q3VycmVudFBhdGgoKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aCBpbiB0aGlzLl9zaGFyZXMgPyB0aGlzLl9zaGFyZXNbcGF0aF0gOiB0aGlzLl9zaGFyZXNbJy8nXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOmhtemdolxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCDpobXpnaLot6/lvoRcclxuICAgKi9cclxuICBwdXNoKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jaGVjaygpO1xyXG4gICAgdGhpcy5fcm91dGVyLnB1c2godXJsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi/lOWbnuS4iuS4gOmhtemdolxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWU65YWz6Zet6aG16Z2iXHJcbiAgICovXHJcbiAgYmFjaygpOiBib29sZWFuIHtcclxuICAgIHRoaXMuX2NoZWNrKCk7XHJcbiAgICBsZXQgcHJldmlvdXNVcmwgPSB0aGlzLmdldEN1cnJlbnRQYXRoKCk7XHJcbiAgICB0aGlzLl9yb3V0ZXIuYmFjaygpO1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVXJsID09PSB0aGlzLmdldEN1cnJlbnRQYXRoKCkgJiYgJy8nID09PSBwcmV2aW91c1VybDtcclxuICB9XHJcbn0oKTtcclxuXHJcbi8qKlxyXG4gKiDmlofku7blt6Xlhbflrp7kvotcclxuICovXHJcbmNvbnN0IEZpbGVVdGlsID0gbmV3IGNsYXNzIHtcclxuICAvKipcclxuICAgKiDojrflj5bmlofku7bmianlsZXlkI1cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlTmFtZSDmlofku7blkI3np7BcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IOaWh+S7tuaJqeWxleWQjSDkvovlpoI6IHRlc3QubWQgPT4gLm1kXHJcbiAgICovXHJcbiAgZ2V0U3VmZml4KGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHN1ZmZpeDogc3RyaW5nID0gJycsXHJcbiAgICAgIHBvczogbnVtYmVyID0gZmlsZU5hbWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIGlmICgtMSAhPSBwb3MpIHN1ZmZpeCA9IGZpbGVOYW1lLnN1YnN0cmluZyhwb3MpO1xyXG5cclxuICAgIHJldHVybiBzdWZmaXg7XHJcbiAgfVxyXG59KCk7XHJcblxyXG4vKipcclxuICog6I635Y+W6ZKJ6ZKJ6Ym05p2D5pWw5o2uXHJcbiAqL1xyXG5jb25zdCBEaW5ndGFsa0NvbmZpZ1V0aWwgPSBuZXcgY2xhc3Mge1xyXG4gIC8qKlxyXG4gICAqIOiOt+WPlmpzdGlja2V05pyq6L+H5pyf55qE6Ym05p2D5pWw5o2uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29ycElkIOS8geS4mklEXHJcbiAgICogQHBhcmFtIHVybCDlvZPliY3pobXpnaJ1cmxcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIOaIkOWKn+Wbnuiwg+WHveaVsFxyXG4gICAqL1xyXG4gIGdldENvbmZpZ0luZm8oY29ycElkLCB1cmwsIHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdHlwZTogJ2pzb24nLFxyXG4gICAgICB1cmw6IGJhc2VVcmwgKyAnL2Rpbmd0YWxrL2dldC1jb25maWc/Y29ycElkPScgKyBjb3JwSWQgKyAnJnVybD0nICsgdXJsLFxyXG4gICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTG9nVXRpbC5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICBMb2dVdGlsLmxvZygn6I635Y+W6ZKJ6ZKJ6Ym05p2D5pWw5o2u5aSx6LSlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDojrflj5bnlKjmiLfor6bnu4bkv6Hmga9cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb3JwSWQg5LyB5LiaaWRcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIOaIkOWKn+Wbnuiwg+WHveaVsFxyXG4gICAqL1xyXG4gIGdldFVzZXJJbmZvKGNvcnBJZCwgc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICBEaW5ndGFsa1V0aWwuZ2V0SXRlbSgndXNlckluZm8nLCBmdW5jdGlvbihpbmZvKSB7XHJcbiAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgaW5mbyA9IEpTT04ucGFyc2UoaW5mbyk7XHJcbiAgICAgICAgaWYgKGluZm8uZXhwaXJhdGlvbiAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gMzAwKSB7XHJcbiAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBzdWNjZXNzQ2FsbGJhY2soaW5mby5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBEaW5ndGFsa1V0aWwuZ2V0Q29kZShjb3JwSWQsIGNvZGUgPT4ge1xyXG4gICAgICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgdXJsOiBiYXNlVXJsICsgJy9kaW5ndGFsay9nZXQtdXNlci1pbmZvP2NvcnBJZD0nICsgY29ycElkICsgJyZjb2RlPScgKyBjb2RlLmNvZGUsXHJcbiAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAzMDAwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEaW5ndGFsa1V0aWwuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBzdWNjZXNzQ2FsbGJhY2socmVzcG9uc2UuZGF0YS5kYXRhKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTG9nVXRpbC5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICBMb2dVdGlsLmxvZygn6I635Y+W55So5oi36K+m57uG5L+h5oGv5aSx6LSlJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn0oKTtcclxuXHJcbi8qKiBhbmltYXRpb27liqjnlLvmlYjmnpwgKi9cclxuY29uc3QgQW5pbWF0aW9uVXRpbCA9IG5ldyBjbGFzcyB7XHJcbiAgLyoqXHJcbiAgICogdHJhbnNpdGlvbuWKqOeUu+aViOaenFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsIOaTjeS9nOWFg+e0oFxyXG4gICAqIEBwYXJhbSB0cmFuc2Zvcm0g5YGP56e75pWI5p6cXHJcbiAgICovXHJcbiAgdHJhbnNpdGlvbkFuaW1hdGlvbihlbCwgdHJhbnNmb3JtKSB7XHJcbiAgICBhbmltYXRpb24udHJhbnNpdGlvbihlbCwge1xyXG4gICAgICBzdHlsZXM6IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxyXG4gICAgICB9LFxyXG4gICAgICBkdXJhdGlvbjogMjAwLCAvLyBtc1xyXG4gICAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UtaW4nLFxyXG4gICAgICBkZWxheTogMCAvLyBtc1xyXG4gICAgfSlcclxuICB9XHJcbn0oKTtcclxuXHJcbmNvbnN0IHBhcnNlVGltZSA9ICh0aW1lLCBjRm9ybWF0KSA9PiB7XHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbnN0IGZvcm1hdCA9IGNGb3JtYXQgfHwgJ3t5fS17bX0te2R9IHtofTp7aX06e3N9J1xyXG4gIGxldCBkYXRlXHJcbiAgaWYgKHR5cGVvZiB0aW1lID09PSAnb2JqZWN0Jykge1xyXG4gICAgZGF0ZSA9IHRpbWVcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKCgnJyArIHRpbWUpLmxlbmd0aCA9PT0gMTApIHRpbWUgPSBwYXJzZUludCh0aW1lKSAqIDEwMDBcclxuICAgIGRhdGUgPSBuZXcgRGF0ZSh0aW1lKVxyXG4gIH1cclxuICBjb25zdCBmb3JtYXRPYmogPSB7XHJcbiAgICB5OiBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICBtOiBkYXRlLmdldE1vbnRoKCkgKyAxLFxyXG4gICAgZDogZGF0ZS5nZXREYXRlKCksXHJcbiAgICBoOiBkYXRlLmdldEhvdXJzKCksXHJcbiAgICBpOiBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgIHM6IGRhdGUuZ2V0U2Vjb25kcygpLFxyXG4gICAgYTogZGF0ZS5nZXREYXkoKVxyXG4gIH1cclxuICBjb25zdCB0aW1lX3N0ciA9IGZvcm1hdC5yZXBsYWNlKC97KHl8bXxkfGh8aXxzfGEpK30vZywgKHJlc3VsdCwga2V5KSA9PiB7XHJcbiAgICBsZXQgdmFsdWUgPSBmb3JtYXRPYmpba2V5XVxyXG4gICAgaWYgKGtleSA9PT0gJ2EnKSByZXR1cm4gWyfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfml6UnXVt2YWx1ZSAtIDFdXHJcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDAgJiYgdmFsdWUgPCAxMCkge1xyXG4gICAgICB2YWx1ZSA9ICcwJyArIHZhbHVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUgfHwgMFxyXG4gIH0pXHJcbiAgcmV0dXJuIHRpbWVfc3RyXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgRm9udFV0aWwsXHJcbiAgUmFuZG9tVXRpbCxcclxuICBTdHJpbmdVdGlsLFxyXG4gIE9iamVjdFV0aWwsXHJcbiAgTG9nVXRpbCxcclxuICBSb3V0ZXJVdGlsLFxyXG4gIEZpbGVVdGlsLFxyXG4gIE5ldHdvcmtVdGlsLFxyXG4gIHBhcnNlVGltZSxcclxuICBDYWNoZVV0aWwsXHJcbiAgRGluZ3RhbGtDb25maWdVdGlsLFxyXG4gIEFuaW1hdGlvblV0aWwsXHJcbiAgU2Nyb2xsVXRpbFxyXG59O1xyXG4iXX0=