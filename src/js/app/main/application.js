/**
 * Created by wangyongqiang-ds1 on 2016/9/7.
 */
define(['dataCache'],function (_cache) {
    var applicationApp = {};
    var _app = applicationApp;
    var win = $(window);
    var body = $('body');
    var htmlView = $('.edit_wrapper');
    applicationApp.init = function () {
        console.log("duan");
        //拖动
        $(".comp-drag").draggable();
        $(document).on("click",".edit_wrapper a",function (e) {
            e.preventDefault();
        }).on("dragstart",".edit_wrapper a",function (e) {
            e.preventDefault();
        })

    };
    return applicationApp;
});