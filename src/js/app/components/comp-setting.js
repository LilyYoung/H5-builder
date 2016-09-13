/**
 * Created by yanglili on 2016-9-13.
 */
define(function () {
    var compSet = {
        init:function () {
            var _this =this;
            _this.chooseBgColorWay();
            _this.getOpacity();
        },
        //改变div的背景颜色
        chooseBgColorWay:function () {
            console.log("compSet-1");
        },
        //改变div的透明度
        getOpacity:function () {
            console.log("compSet-2");
        }
        
    };
    return compSet;
});
