/**
 * Created by wangyongqiang-ds1 on 2016/10/8.
 * @param: 功能区
 */
define(['compPotoList','compHeaderToolModal','compInputModal'],function (compPotoList,compHeaderToolModal,compInputModal) {
    var funcAreas = {};
    funcAreas.init = function () {
        console.log('头部功能区');
        compPotoList.init();
        compHeaderToolModal.init();
        compInputModal.init();
    };
    return funcAreas;
});
