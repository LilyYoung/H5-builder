/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','compShortcut'],function (_app,compShortcut) {
    var workspace = {};

    workspace.init = function () {
	    compShortcut.init();
        _app.init();
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
