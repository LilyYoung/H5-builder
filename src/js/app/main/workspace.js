/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['compGrid'],function (compGrid) {
    var workspace = {};

    compGrid.init();
    workspace.init = function () {
        console.log('workspace 我进来啦！');
    };
    return workspace;
});
