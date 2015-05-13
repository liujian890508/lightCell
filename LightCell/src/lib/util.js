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
    var frameSize = cc.director.getWinSize();

    var lsSize =  cc.size(960, 640);
    var scaleX = frameSize.width / lsSize.width;  //
    var scaleY = frameSize.height / lsSize.height;

    var scale_width =0, scale_height = 0;

    if (scaleX > scaleY){
        scale_width = scaleX / (frameSize.height / lsSize.height);
        scale_height = scaleY / (frameSize.height / lsSize.height);

    }else{
        scale_width = scaleX / (frameSize.width / lsSize.width);
        scale_height = scaleY / (frameSize.width / lsSize.width);
    }

    var scale = Math.max(scale_width, scale_height);

    if(scaleY<1){
        cc.view.setDesignResolutionSize(lsSize.width * scaleY,
            lsSize.height, cc.ResolutionPolicy.FIXED_HEIGHT);

    }else{
        cc.view.setDesignResolutionSize(lsSize.width * scale,
            lsSize.height * scale, cc.ResolutionPolicy.NO_BORDER);
    }
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