/**
 * Created by liujian on 15-5-12.
 */

var ui_base_logic = cc.Class.extend({
    _mainLayer: null,
    _logicData: null,

    ctor: function (layer) {
        this._mainLayer = layer;
    },

    databind: function(data){
        this._logicData = data;
    },

    logic: function(){
        //logic pro
    }
});