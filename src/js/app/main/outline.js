/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 * param：视图大纲
 */
define(['application'],function (_app) {
    var outline = {};
    //初始化加载
    outline.init = function () {
        //拖动
        $(".ui-sortable").sortable({
            placeholder: "ui-state-highlight",
            axis: "y"
        });
        $(".ui-sortable").disableSelection();

        outline.hideDelete();
        outline.action();
    };
    //是否隐藏删除按钮
    outline.hideDelete = function () {
        var isLi = $('.page-uls .blurClass').length;
        var isShow = 0;
        if (isLi >1) {
            $('._delete_page').show();
            isShow = 0;
        }
        else {
            $('._delete_page').hide();
            isShow = 1;
        }
        return isShow;
    };
    //视图操作
    outline.action = function () {
        //选中当前视图页面
        $('body').on('click','.blurClass',function () {
            $(this).siblings()
                .removeClass('current').end()
                .addClass('current');
            //调用对应的右边手机场景的控件和组件
        });
        //删除当前选中的视图页面
        $('._delete_page').on('click',function () {
            if (outline.hideDelete() ==0) {
                // alert('当删除视图页面的时候，是否做个toast提示？');
                if ($('.blurClass:last').is('.current')) {
                    $('.blurClass:last')
                        .prev().addClass('current').end()
                        .remove();
                    outline.hideDelete();
                }
                else {
                    $('.blurClass').siblings('.current')
                        .next().addClass('current').end()
                        .remove();
                    outline.hideDelete();
                }
            }
            else {}

            //调用对应的右边手机场景的控件和组件
        });
        //复制当前视图页面
        $('._copy_page').on('click',function () {
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
            $('._delete_page').show();
        });
        //添加一页
        $('._insert_page').on('click',function () {
            //获取当前视图页数
            var curtNum = $('.page-uls .blurClass').length;
            if (curtNum>15) {
                alert('当视图页面到达一个数量时，是否做个toast提示？');
                return false;
            }
            else {
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
                var temp = new Array();
                $('.blurClass .page-num').each(function (index) {
                    temp[index] = $(this).text()-0;
                });
                var nextNum = maxNum(temp)+1;
                $('.page-uls').append("<li class='blurClass'><span class='number'><em class='page-num'>"+nextNum+"</em></span> <span class='page-name'>第"+nextNum+"页</span></li>");
            }
            $('._delete_page').show();

        });

    };

    return outline;
});