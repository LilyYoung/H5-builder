/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */

define(['application','compShortcut','compSet','compText','compTemplate','modal'],function (_app,compShortcut,compSet,compText,compTemplate,_modal) {
    var workspace = {};
    workspace.init = function () {
        _app.init();//全局公用方法
	    compShortcut.init();//快捷区
        compSet.init();//组件设置
        compText.init();//文本控件
        compTemplate.init();//模板组件
        this.events();
    };

    workspace.events = function() {
        this.dbImgEvent();
    };

    //双击编辑区的图片出现弹窗
    workspace.dbImgEvent = function() {
        var that = this;
        $(document).on('dblclick','.editable-image',function(ev) {
            var elem = $(this);
            if($('.modal').length>0) $('.modal').remove();
            _modal.createModal();

            $('.img-console').modal();
        });
    };
    return workspace;
});
