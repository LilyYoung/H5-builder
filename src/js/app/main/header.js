/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['application','headSetting'],function (_app,headSetting) {
    var header = {};
    header.init = function () {
        _app.init();
        //console.log('header 我进来啦');
        headSetting.init();
       // console.log('傻叉');
    };
    return header;
});