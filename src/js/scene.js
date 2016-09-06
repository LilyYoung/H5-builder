/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 * param:程序入口
 */

//定义配置文件
require.config({
    //查找所有模块的根路径
    baseUrl:'js/app',
    //设置相对路径,映射到不能直接在baseUrl下找到的模块名
    paths: {

    },
    //没有使用 define() 声明依赖项、没有设置模块值,暴露出全局变量
    shim: {

    },
    //对于给定的相同的模块名，加载不同的模块，而不是加载相同的模块。
    map:{
        // '*': { 'jquery': 'jquery-private' },
        // 'jquery-private': { 'jquery': 'jquery' }
    }

});
//入口
require([], function () {

});
