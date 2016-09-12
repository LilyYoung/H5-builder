/**
 * Created by wangyongqiang-ds1 on 2016/9/7.
 */
define(function () {
    var _app = {};
    _app.init = function () {
        //拖动
        $(".ui-sortable").sortable({
            placeholder: "ui-state-highlight",
            axis: "y"
        });
        $(".ui-sortable").disableSelection();
    };
    return _app;
});