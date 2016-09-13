/**
 * Created by wangyongqiang-ds1 on 2016/9/7.
 */
define(function () {
    var _app = {};
    _app.init = function () {
        //拖动
        $(".comp-drag").draggable();
    };
    return _app;
});