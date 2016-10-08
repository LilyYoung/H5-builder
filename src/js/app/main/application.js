/**
 * Created by wangyongqiang-ds1 on 2016/9/7.
 */
define(['drag','rotate'],function (drag,rotate) {
    var _app = {};
    _app.init = function () {
        //拖动
        $(".comp-drag").draggable();
        drag.init();
        //旋转
        rotate.init();
    };
    return _app;
});