var $ = {};
$.parseJSON = JSON.parse;
$.toJSON = JSON.stringify;

$.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
}

$.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
}

$.isUndefined = function(obj) {
    if(typeof(obj) == "undefined" || obj == null){
      return true;
    }
    return false;
}