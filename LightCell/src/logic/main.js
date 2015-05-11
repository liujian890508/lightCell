/**
 * Created by liujian on 15-5-12.
 */

var ui_main_logic = ui_base_logic.extend({

    logic: function(){
        cc.log("test");
        cc.log("--" + this._mainLayer);
        cc.log("--" + this._logicData);
    }
});