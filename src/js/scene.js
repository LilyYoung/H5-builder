/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 * param:程序入口
 */

//定义配置文件
require.config({
    //查找所有模块的根路径
    baseUrl:'/build/js',
    //设置相对路径,映射到不能直接在baseUrl下找到的模块名
    paths: {
        /*主模块*/
        'scene' : 'scene',
        'application' : 'app/main/application',
        'outline' : 'app/main/outline',
        'header' : 'app/main/header',
        'workspace' : 'app/main/workspace',
        /*公共类*/
        'tools' : 'app/public/tools',
        'modal' : 'app/public/modal',

        /*组件类*/
        'compSet' : 'app/components/comp-setting',
        'compShortcut' : 'app/components/shortcut/comp-shortcut',
        'compShortcutGrid':'app/components/shortcut/comp-shortcut-grid',
        'compShortcutCache':'app/components/shortcut/comp-shortcut-cache',
        'compTemplate' : 'app/components/comp-template',
        'compFuncAreas' : 'app/components/functionalAreas/comp-funcAreas',
        'compText' : 'app/components/functionalAreas/comp-text',
        'compPotoList':'app/components/functionalAreas/comp-photoList',
        'compHeaderToolModal':'app/components/functionalAreas/comp-headerToolModal',
        'compInputModal':'app/components/functionalAreas/comp-inputModal',


        /*插件类*/
        'grid' : 'app/plugin/grid',
        'dataCache':'app/plugin/dataCache',
        'dynamicStyle' : 'app/plugin/dynamicStyle',
        'rotate' : 'app/plugin/rotate',
        'drag' : 'app/plugin/drag',
        'adsorbConfig' : 'app/plugin/adsorbConfig',
        'Editor': 'app/plugin/editor'
    },
    //没有使用 define() 声明依赖项、没有设置模块值,暴露出全局变量
    shim: {
        //例子
        // 'backbone': {
        //     //deps需要加载的依赖项的数组
        //     deps: ['underscore', 'jquery'],
        //     //导出名称
        //     exports: 'Backbone',
        //     init: function (bar) {
        //         return this.Foo.noConflict();
        //     }
        // }
    },
    //对于给定的相同的模块名，加载不同的模块，而不是加载相同的模块。
    map:{
        //例子
        // '*': { 'jquery': 'jquery-private' },
        // 'jquery-private': { 'jquery': 'jquery' }
    }

});
//入口
require(['application','outline','header','workspace'], function (_app,outline,header,workspace) {
    _app.init();
    outline.init();
    header.init();
    workspace.init();
});
