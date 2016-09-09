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

        //选中当前视图页面
        $('.blurClass').on('click',function () {
            $(this).siblings()
                .removeClass('current').end()
                .addClass('current');
            //调用对应的右边手机场景的控件和组件
        });
        //删除当前选中的视图页面
        $('._delete_page').on('click',function () {
            $('.blurClass').siblings('.current')
                .next().addClass('current').end()
                .remove();
            //调用对应的右边手机场景的控件和组件
        });
        //复制当前视图页面
        $('._copy_page,._insert_page').on('click',function () {
            //取最大值
            function  maxNum(numArr) {
                if (!numArr.length) {
                    return false;
                }
                var num = 0;
                for (var i = 0;i <numArr.length; i++) {
                    if (numArr[i] > num) {
                        num = numArr[i];
                    }
                }
                return num;
            }
            //获取复制的当前页码数
            var curtNum = $('.blurClass').siblings('.current').find('.page-num').text();
            var temp = new Array();
            $('.blurClass .page-num').each(function (index) {
                temp[index] = $(this).text()-0;
            });

            var nextNum = maxNum(temp)+1;
            $('.page-uls').append("<li class='blurClass'><span class='number'><em class='page-num'>"+nextNum+"</em></span> <span class='page-name'>第"+nextNum+"页</span></li>");
        });
        //弹出新建页面选项
        // $('._add_more_page').on('click',function (event) {
        //     //取消事件冒泡
        //     event.stopPropagation();
        //     $('._more_page_option')
        //         .removeClass('hide-page')
        //         .end()
        //         .addClass('show-page');
        //
        // });
        // $(document).click(function (event) {
        //     $('._more_page_option').removeClass('show-page');
        //     $('._more_page_option').addClass('hide-page');
        // });
        // $('._more_page_option').click(function (event) {
        //     $(this).removeClass('show-page');
        //     $(this).addClass('hide-page');
        // });

    };

    return outline;
});