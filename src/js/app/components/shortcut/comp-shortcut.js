/**
 * Created by liusuling on 2016/9/9.
 */
define(['compShortcutGridBg','compShortcutCache'],function (compShortcutGridBg,compshortcutcache) {
    var shortcut = {};
    shortcut.init=function () {
        compshortcutcache.init();
        compShortcutGridBg.init();
    };


    return shortcut;
});
