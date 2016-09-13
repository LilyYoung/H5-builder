/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','compGrid'],function (_app,compGrid) {
    var workspace = {};

    workspace.init = function () {
        compGrid.init();
        _app.init();
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
