/**
 * Created by liujian on 15-5-12.
 */

var ui_main = ui_base.extend({


    init: function () {
        
        var bgSprite = new cc.Sprite("res/e_main_bg.png");
        this.addChild(bgSprite);
        bgSprite.x = cc.visibleRect.width / 2;
        bgSprite.y = cc.visibleRect.height / 2;

       	this.bindButtonListener();

        return true;
    },

    bindButtonListener: function(){

    }

});