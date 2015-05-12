/**
 * Created by liujian on 15-5-12.
 */

var ui_main = ui_base.extend({

    ctor: function () {
        this._super();
    },

    init: function () {

        var sprite = new cc.Sprite("res/HelloWorld.png");
        this.addChild(sprite);
        
        var size = cc.director.getWinSize();
        sprite.setPosition(cc.pMult(cc.pFromSize(size), 0.5));
        sprite.setScale(0.5);

        return true;
    }

});