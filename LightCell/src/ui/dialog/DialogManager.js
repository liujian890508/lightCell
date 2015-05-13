/**
 * Created by liujian on 15-5-12.
 */

var DialogManager = (function () {
    var _dialogManager = [];

    _dialogManager.showDialog = function(data, resultCallback){
        var dialog = new ui_dialogLayer();
        /**
         * -------------------content
         */
        dialog.showDialog();
        return dialog;
    }

    return _dialogManager;
})();