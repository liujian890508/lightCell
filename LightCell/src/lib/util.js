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
    cc.log(layer);
    cc.log(logic);
    if( layer && layer.init()){
        if( logic){
            layer.setLogic(logic);
            logic.databind(data);
        }
        var scene = new cc.Scene();
        cc.director.runScene(scene);
        scene.addChild(layer);
        return scene;
    }
    return null;
}