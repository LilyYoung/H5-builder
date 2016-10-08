/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','compShortcut','compSet','compText'],function (_app,compShortcut,compSet,compText) {
    var workspace = {};

    workspace.init = function () {
	    compShortcut.init();
        compSet.init();
        _app.init();
        compText.init();
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
