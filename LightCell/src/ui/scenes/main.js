/**
 * Created by liujian on 15-5-12.
 */

var ui_main = ui_base.extend({

    ctor: function () {
        this._super();

        return true;
    },

    onEnter: function(){
        ui_base.prototype.onEnter.call(this);
        this.bindBtnListener();
    },

    bindBtnListener: function () {

    }
});