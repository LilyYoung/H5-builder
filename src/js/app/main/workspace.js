/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','compShortcut','compSet'],function (_app,compShortcut,compSet) {
    var workspace = {};

    workspace.init = function () {
	    compShortcut.init();
        compSet.init();
        _app.init();
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
