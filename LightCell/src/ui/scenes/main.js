/**
 * Created by liujian on 15-5-12.
 */

var ui_main = ui_base.extend({


    init: function () {
        
        var sprite = new cc.Sprite("res/HelloWorld.png");
        this.addChild(sprite);
        sprite.x = cc.visibleRect.width / 2;
        sprite.y = cc.visibleRect.height / 2;

        cc.log("------------------------------------------------hello World");

       	this.bindButtonListener();

        return true;
    },

    bindButtonListener: function(){

    }

});