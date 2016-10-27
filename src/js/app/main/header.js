/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */

define(['application','compFuncAreas','headSetting'],function (_app,funcAreas,headSetting) {
    var header = {};
    header.init = function () {
        // _app.init();
        funcAreas.init();
        headSetting.init();
        console.log('header 我进来啦');
    };
    return header;
});