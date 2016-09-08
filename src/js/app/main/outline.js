/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 * param：视图大纲
 */
define(['application'],function (_app) {
    var outline = {};
    //初始化加载
    outline.init = function () {
        console.log('outline，我进来啦！');
        $(".ui-sortable").sortable({
            placeholder: "ui-state-highlight",
            axis: "y"
        });
        $(".ui-sortable").disableSelection();

        outline.action();
    };
    //视图操作
    outline.action = function () {
        $('.blurClass').on('click',function () {
            $('.page-uls').find('.current').removeClass();
            $(this).addClass('current');
        });
        // $('_delete_page').find('.current').remove();
    };

    return outline;
});