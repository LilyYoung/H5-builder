/**
 * Created by wangyongqiang-ds1 on 2016/9/7.
 */

define(['drag','rotate','dataCache','editTool'],function (drag,rotate,_cache,editTool) {
    var _app = {};
    _app.init = function () {
        //拖动
        $(".comp-drag").draggable();
        drag.init();
        //旋转
        rotate.init();
        //编辑工具
        editTool.init();
        //阻止事件
        $(document).on("click",".edit_wrapper a",function (e) {
            e.preventDefault();
        }).on("dragstart",".edit_wrapper a",function (e) {
            e.preventDefault();
        })

    };
    return _app;
});