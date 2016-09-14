/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','compShortcut','compSet','compTemplate'],function (_app,compShortcut,compSet,compTemplate) {
    var workspace = {};

    workspace.init = function () {
	    compShortcut.init();
        compSet.init();
        _app.init();
        compTemplate.init();
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
