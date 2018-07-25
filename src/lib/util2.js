exports.CacheUtil = undefined;

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);


var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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


exports.CacheUtil = CacheUtil;