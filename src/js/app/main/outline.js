/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 * param：视图大纲
 */
define(['application'],function (_app) {
    var outline = {};
    outline.init = function () {
        console.log('outline，我进来啦！');
        _app.init();
    };
    return outline;
});