"use strict";
var ui_sprites_TableView = cc.Layer.extend({
    _uiTableView: null,
    _size: null,
    _target: null,
    _data: [],
    _eventProcesss: [],

    ctor: function (target, size) {
        this._super();
        this._target = target;
        this._size = size;
        this._data = [];
        this._eventProcesss = {};
    },
    init: function () {
        this._super();
        this._uiTableView = cc.TableView.create(this, this._size);
        this._uiTableView.setContentOffset(cc.p(0,0));
        this._uiTableView.setDelegate(this);
        this.addChild(this._uiTableView);
        this._allCells = [];
        return true;
    },

    onExit: function(){
        cc.Layer.prototype.onExit.call(this);
        this._allCells = [];
    },

    setContentOffsetInDuration: function(offset, dt){
        this._uiTableView.setContentOffsetInDuration(offset, dt);
    },

    getContainer:function () {
        return this._uiTableView.getContainer();
    },

    getData: function(){
        return this._data;
    },

    isScrollEnd: function(){
        return this._uiTableView.isScrollEnd();
    },

    /**
     * 注册回调函数
     * @param eventName
     * @param eventFunc
     */
    registerEventFunc: function (eventName, eventFunc) {
        this._eventProcesss[eventName] = eventFunc;
    },

    databind: function (data) {
        this._data = data;
    },
    setPosition: function (x, y) {
        this._uiTableView.setPosition(cc.p(x, y));
    },
    setDelegate: function (delegate) {
        return this._uiTableView.setDelegate(delegate);
    },
    setDirection: function (direction) {
        return this._uiTableView.setDirection(direction);
    },
    reloadData: function () {
        return this._uiTableView.reloadData();
    },
    setTouchEnabled: function( flag){
        this._uiTableView.setTouchEnabled( flag);
    },
    scrollViewDidScroll: function (view) {
        var func = this._eventProcesss["scrollViewDidScroll"];
        if (func) func.call(this._target, view);
    },
    scrollViewDidZoom: function (view) {
        var func = this._eventProcesss["scrollViewDidZoom"];
        if (func) func.call(this._target, view);
    },
    tableCellTouched: function (table, cell) {
        var func = this._eventProcesss["tableCellTouched"];
        if (func) func.call(this._target, table, cell);
    },
    tableCellSizeForIndex: function (table, idx) {
        var func = this._eventProcesss["tableCellSizeForIndex"];
        if (func) this._cellSize = func.call(this._target, table, idx);
        else this._cellSize = cc.size(235, 533);
        return this._cellSize;
    },
    setContentOffset: function (offset, animated) {
        return this._uiTableView.setContentOffset(offset, animated);
    },

    getAllCells: function(){
        return this._allCells;
    },

    _allCells: [],
    tableCellAtIndex: function (table, idx) {
        var cell = table.dequeueCell();
        if (!cell) {
            cell = new cc.TableViewCell();
        }
        var _uiLayer = cell.getChildByTag(7);
        if (!_uiLayer) {
            _uiLayer = new cc.Layer();
            var selfPointer = this;
            _uiLayer = this._eventProcesss["initCellUILayer"].call(this._target, _uiLayer, idx);
            cell.addChild(_uiLayer, 1, 7);
            this._allCells.push(cell);
        }
        if (idx >= 0 && idx < this._data.length) {
            var data = this._data[idx];
            _uiLayer.setVisible(true);
            _uiLayer = this._eventProcesss["bindItemCallback"].call(this._target, _uiLayer, data, idx);
        } else {
            _uiLayer.setVisible(false);
        }
        return cell;
    },
    numberOfCellsInTableView: function (table) {
        return this._data.length;
    },
    getPageInfo: function () {
        return "";
    },

    getPosition: function(){
        return this._uiTableView.getPosition();
    },

    getContentOffset: function(){
        return this._uiTableView.getContentOffset();
    }
});

ui_sprites_TableView.create = function (target, size) {
    var uiTableView = new ui_sprites_TableView(target, size);
    if (uiTableView && uiTableView.init()) {
        return uiTableView;
    }
    return null;
};
