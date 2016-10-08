/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','compFuncAreas'],function (_app,funcAreas) {
    var header = {};
    header.init = function () {
        // _app.init();
        funcAreas.init();
        console.log('header 我进来啦');
    };
    return header;
});