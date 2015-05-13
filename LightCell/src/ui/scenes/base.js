/**
 * Created by liujian on 15-5-12.
 */

var ui_base = cc.Layer.extend({
    _logic: null,
    _ee: null,


    ctor: function () {
        this._super();
        this._logic = null;

        this._ee = new EventEmitter();
    },

    setLogic: function(logic){
        this._logic = logic;
    },

    setTouchFilter: function(flag, zOrder){
    	util.setTouchFilter(flag, zOrder);
    },

    addListener: function(evt, listener, target){
    	this._ee.addListener(evt, listener, target);
    },

    emitEvent:function(evt, args){
        this._ee.emitEvent(evt,[args]);
    },
    
    removeListener:function(evt, listener){
        this._ee.removeListener(evt, listener);
    }
});