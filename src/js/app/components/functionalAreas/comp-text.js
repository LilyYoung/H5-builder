/**
 * Created by wangyongqiang-ds1 on 2016/9/14.
 * param:文本可编辑状态切换
 */
define(['Editor'],function (Editor) {
    var compText = {
        init: function () {
            this.action();
            Editor.init();
        },
        action: function () {
            $('body').on('dblclick','.editable-text',function (event) {
                event.preventDefault;
                $('.editable-text').editable();
                $('.comp-drag').draggable('disable');
                $('.editable-text').attr('contenteditable','true');
                $('.editable-text').addClass('contentEdit');

                // 创建一个textarea元素
                // var textAreaElement = document.createElement("textarea");
                // var divElement = $(this);

                // // 把obj里面的元素以及文本内容赋值给新建的textAreaElement
                // textAreaElement.value = divElement.innerHTML;
                //
                // // 用新建的textAreaElement代替原来的oldDivElement元素
                // divElement.parentNode.replaceChild(textAreaElement, divElement);
                // // 当textAreaElement失去焦点时触发下面函数，使得textarea变成div
                // textAreaElement.onblur = function() {
                //     //把input的值交给原来的div
                //     divElement.innerHTML = textAreaElement.value;
                //     //用原来的div重新替换textAreaElement
                //     textAreaElement.parentNode.replaceChild(divElement, textAreaElement);
                // };

                // if (window.getSelection) {
                //     var sel = window.getSelection();
                //     sel.modify('move','left','documentboundary');
                //     sel.modify('extend','right','documentboundary');
                // }
                // var isFireFox = function() {
                //     var ua = navigator.userAgent.toLowerCase();
                //     return !!ua.match(/firefox\/([\d.]+)/);
                // };
                // if (isFireFox()) {
                //     var count = htmlElement.innerHTML.split('').length;
                //     for (var i = 0; i < count; i++) {
                //         sel.modify('extend', 'right', 'line');
                //     }
                // }

            });
            $(document).click(function () {
                $('.editable-text').removeAttr('contenteditable','true');
                $('.editable-text').removeClass('contentEdit');
                $('.comp-drag').draggable('enable');
            });
        }
    };
    return compText;
});