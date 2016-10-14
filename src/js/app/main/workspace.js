/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */

define(['application','compShortcut','compSet','compText','compTemplate'],function (_app,compShortcut,compSet,compText,compTemplate) {
    var workspace = {};
    workspace.init = function () {
        _app.init();//全局公用方法
	    compShortcut.init();//快捷区
        compSet.init();//组件设置
        compText.init();//文本控件
        compTemplate.init();//模板组件
    };
    return workspace;
});
