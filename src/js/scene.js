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

        /*组件类*/
        'compGrid' : 'app/components/comp-grid',
        'compSet' : 'app/components/comp-setting',
        'compShortcut' : 'app/components/comp-shortcut',

        /*插件类*/
        'grid' : 'app/plugin/grid'
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
