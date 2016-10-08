/**
 * Created by duanning on 2016/9/22.
 */
define(['dataCache'],function (datacache) {
    var compShortcutCache = {};
    function testCacheInsert(){
        var aaaa = datacache.testCatchPush();
        var bbbb = datacache.getCancel();
        console.log(bbbb);
        $(".edit_wrapper").html(bbbb.htmlData);
    }
    compShortcutCache.init = function () {
        $(".btn-cache-test").click(function () {
            testCacheInsert();
        })
    }
    return compShortcutCache;
})