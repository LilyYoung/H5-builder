/**
 * Created by wangyongqiang-ds1 on 2016/9/14.
 * param:文本编辑
 */
define(function () {
    var compText = {
        init: function () {
            this.action();
        },
        action: function () {
            $('body').on('dblclick','.editable-text',function (event) {
                event.preventDefault;
                $('.comp-drag').draggable('disable');
                $(this).attr('contenteditable','true');
                if (window.getSelection) {
                    var sel = window.getSelection();
                    sel.modify('move','left','documentboundary');
                    sel.modify('extend','right','documentboundary');
                }
                var isFireFox = function() {
                    var ua = navigator.userAgent.toLowerCase();
                    return !!ua.match(/firefox\/([\d.]+)/);
                };
                if (isFireFox()) {
                    var count = htmlElement.innerHTML.split('').length;
                    for (var i = 0; i < count; i++) {
                        sel.modify('extend', 'right', 'line');
                    }
                }

            });
            $(document).click(function () {
                $('.editable-text').removeAttr('contenteditable','true');
                $('.comp-drag').draggable('enable');
            });
        }
    };
    return compText;
});