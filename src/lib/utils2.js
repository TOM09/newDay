
export default{
	getArray : function getArray(arr, num) {
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
 }

 