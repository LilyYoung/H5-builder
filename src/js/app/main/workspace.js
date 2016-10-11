/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */

define(['application','compShortcut','compSet','compText','compTemplate'],function (_app,compShortcut,compSet,compText,compTemplate) {
    var workspace = {};
    workspace.init = function () {
	    compShortcut.init();
        compSet.init();
        _app.init();
        compText.init();
        compTemplate.init();
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
