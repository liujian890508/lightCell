/**
 * Created by liujian18 on 14-6-16.
 */
var ui_TouchLayer = cc.Node.extend({
    _touchEnabled: false,
    _touchListener: null,
    _isBindEvent: false,

    init: function(){
        this._super();

        this.setTouchEnabled(true);

        return true;
    },

    setTouchPriority: function(priority){
        this.setLocalZOrder(priority);
    },

    setSwallowTouches: function(flag){
        if( this._touchListener){
            this._touchListener.setSwallowTouches(flag);
        }
    },

    getTouchEnabled: function(){
        return this._touchEnabled;
    },

    setTouchEnabled: function(enable){
        if (this._touchEnabled === enable)
            return;
        this._touchEnabled = enable;
        if (this._touchEnabled) {
            this._touchListener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan: this.onTouchBegan.bind(this),
                onTouchMoved: this.onTouchMoved.bind(this),
                onTouchEnded: this.onTouchEnded.bind(this)
            });
            cc.eventManager.addListener(this._touchListener, this);
        } else {
            cc.eventManager.removeListener(this._touchListener);
            this._touchListener = null;
        }
    },

    onTouchBegan: function(touch, event){
        return true;
    },

    onTouchMoved: function(touch, event){

    },

    onTouchEnded: function(touch, event){

    }
});

ui_TouchLayer.create = function(){
    var layer = new ui_TouchLayer();
    if( layer && layer.init()){
        return layer;
    }
    return null;
}