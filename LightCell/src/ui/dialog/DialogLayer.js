/**
 * Created by liujian on 15-5-12.
 */

var ui_dialogLayer = ui_base.extend({
	_touchEnabled: false,
	_touchListener: null,

	init: function(){
		this._super();

		this.setTouchEnabled(true);

		return true;
	},

	setTouchEnabled: function(enable){
        if (this._touchEnabled === enable)
            return;
        this._touchEnabled = enable;
        if (this._touchEnabled) {
            if(!this._touchListener)
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

    onTouchMoved: function(touch, type){

    },

    onTouchEnded: function(touch, type){

    },

    showDialog: function(){

    },

    hideDialog: function(){

    }
});