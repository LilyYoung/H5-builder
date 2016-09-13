/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','compGrid','compSet'],function (_app,compGrid,compSet) {
    var workspace = {};

    workspace.init = function () {
        compGrid.init();
        compSet.init();
        _app.init();
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
