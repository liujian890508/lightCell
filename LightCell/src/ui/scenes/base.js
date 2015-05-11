/**
 * Created by liujian on 15-5-12.
 */

var ui_base = cc.Layer.extend({
    _logic: null,

    ctor: function () {
        this._super();
        this._logic = null;
    },

    setLogic: function(logic){
        this._logic = logic;
    }
});