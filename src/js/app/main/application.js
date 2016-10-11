/**
 * Created by wangyongqiang-ds1 on 2016/9/7.
 */

define(['drag','rotate','dataCache'],function (drag,rotate,_cache) {
    var _app = {};
    _app.init = function () {
        //拖动
        $(".comp-drag").draggable();
        drag.init();
        //旋转
        rotate.init();

        $(document).on("click",".edit_wrapper a",function (e) {
            e.preventDefault();
        }).on("dragstart",".edit_wrapper a",function (e) {
            e.preventDefault();
        })

    };
    return _app;
});