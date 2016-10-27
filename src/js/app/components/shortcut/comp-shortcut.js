/**
 * Created by liusuling on 2016/9/9.
 */
define(['compShortcutGrid','compShortcutCache'],function (shortcutgrid,compshortcutcache) {
    var shortcut = {};
    shortcut.init=function () {
        compshortcutcache.init();
        shortcutgrid.init();
    }
    return shortcut;
});
