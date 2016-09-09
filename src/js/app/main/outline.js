/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 * param：视图大纲
 */
define(['application'],function (_app) {
    var outline = {};
    //初始化加载
    outline.init = function () {
        console.log('outline，我进来啦！');
        //拖动
        $(".ui-sortable").sortable({
            placeholder: "ui-state-highlight",
            axis: "y"
        });
        $(".ui-sortable").disableSelection();

        outline.action();
    };
    //视图操作
    outline.action = function () {
        //视图列表当前页
        var $current = $('.page-uls').find('.current');
        //选中当前视图页面
        $('.blurClass').on('click',function () {
            $current.removeClass('current');
            $(this).addClass('current');
            //调用对应的右边手机场景的控件和组件
        });
        //删除当前选中的视图页面
        $('._delete_page').on('click',function () {
            $current.remove();
            $('.page-uls li:first').addClass('current');
            //调用对应的右边手机场景的控件和组件
        });
        //复制当前视图页面
        $('._copy_page').on('click',function () {
            //
            alert('别捉急，待开通中......');
        });
        //弹出新建页面选项
        $('._add_more_page').on('click',function (event) {
            //取消事件冒泡
            event.stopPropagation();
            $('._more_page_option')
                .removeClass('hide-page')
                .end()
                .addClass('show-page');

        });
        $(document).click(function (event) {
            $('._more_page_option').removeClass('show-page');
            $('._more_page_option').addClass('hide-page');
        });
        $('._more_page_option').click(function (event) {
            $(this).removeClass('show-page');
            $(this).addClass('hide-page');
        });
        $('._insert_page').on('click',function () {
            alert('别捉急，待开通中......');
        });
        $('._add_long_page').on('click',function () {
            alert('暂未开通，敬请期待哦！O(∩_∩)O');
        });
    };

    return outline;
});