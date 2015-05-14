/**
 * Created by liujian on 15-5-12.
 */

var util = util || {};

/**
 * 切换场景
 * @param layerName
 * @param data
 * @returns {*}
 */
util.replaceScene = function(layerName, data){
    var layer = new window[layerName]();
    var logic = new window[layerName + "_logic"](layer);
    if( layer && layer.init()){
        if( logic){
            layer.setLogic(logic);
            logic.databind(data);
        }
        var scene = new cc.Scene();
        cc.director.runScene(scene);
        scene.addChild(layer, 0, LayerTag.MAINLAYER);
        return scene;
    }
    return null;
}

util.setScreenSolutions = function(){
    var frameSize = cc.view.getVisibleSize();
    cc.log("------------------------------------a:" + frameSize.width);
    cc.log("------------------------------------b:" + frameSize.height);

    var lsSize =  cc.size(640, 960);
    var k1 = frameSize.width / lsSize.width;  //
    var k2 = frameSize.height / lsSize.height;

cc.log("----------------------------width:" + lsSize.width * k1);
cc.log("----------------------------height:" + lsSize.height * k1);
    cc.view.setDesignResolutionSize(lsSize.width * k1,
        lsSize.height * k1, cc.ResolutionPolicy.FIXED_WIDTH);

}

util.setTouchFilter = function(flag, zorder){
    var scene = cc.director.getRunningScene();
    var touchLayer = scene.getChildByTag(LayerTag.TOUCH);
    if( touchLayer == null){
        touchLayer = ui_TouchLayer.create();
        scene.addChild(scene);
    }
    if( arguments.length >= 2)
        touchLayer.setTouchPriority(zorder);
    else
        touchLayer.setTouchPriority(LayerZOrder.TOUCH);
    touchLayer.setTouchEnabled(flag);
}