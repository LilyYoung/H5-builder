/**
 * Created by wangyongqiang-ds1 on 2016/9/18.
 * @param:旋转控件
 */
define(['dynamicStyle'],function (_css) {
    var rotate = {
        // 旋转
        init:function () {
            this.bindRotation("[data-elemandgroup='true']",".bar-rotate");//配置参数：旋转的dom对象
            // 清除角度
            $(document).on("click.rotate.clear",".rotationClear",function (e) {
                var $elm = $(this).parents("[data-elemandgroup='true']").eq(0);
                $elm.trigger('clearRotate');
            });
            $(document).on("clearRotate",".bar-rotate",function (e) {
                e.stopPropagation();
                var $elm = $(this);
                var $style = $("style."+$elm.attr("id")),
                    styleString = $style.html();
                $style.html(styleString.replace(/(-|\w|\s|)*transform:([^;])+;/g,""));
                $elm.css("transform","").removeAttr("data-rotate")
                    .trigger("appSetCatch");
            });
        },

        /**
         * [bindRotation 旋转元素]
         * @param  {[String]} elm              [元素选择器]
         * @param  {[String]} handle           [触发的元素选择器]
         */
        bindRotation:function (elm,handle) {
            $(document).on("mousedown",handle,function (e) {
                var $elm = $(this).parents(elm).eq(0);
                var pageX,pageY,offsetX,offsetY,centerX,centerY;
                offsetX = $elm.offset().left;
                offsetY = $elm.offset().top;
                e.stopPropagation();
                $("body").off("mousemove.elem.rotate").on("mousemove.elem.rotate",function (e) {
                    e.stopPropagation();
                    pageX = e.pageX;
                    pageY = e.pageY;
                    centerX = $elm.width()/2 + offsetX;
                    centerY = $elm.height()/2 + offsetY;
                    var rotat,rotat2,y,x;

                    y = Math.abs(centerY - pageY);
                    x = Math.abs(centerX - pageX);
                    rotat2 = Math.atan(($elm.height()/2)/($elm.width()/2))*180/Math.PI;
                    rotat = Math.atan(y/x)*180/Math.PI;
                    //第一象限
                    if(pageX < centerX && pageY < centerY){
                        rotat = rotat -rotat2;
                    }
                    //第二象限
                    if(pageX > centerX && pageY < centerY ){
                        rotat = 180 - rotat - rotat2;
                    }
                    //第三象限
                    if(pageX > centerX && pageY > centerY ){
                        rotat = 180 + rotat -rotat2;
                    }
                    //第四象限
                    if(pageX < centerX && pageY > centerY){
                        rotat = 360 - rotat -rotat2;
                    }
                    if(rotat) {
                        _css.styleInit($elm.attr("id")," ",{
                            "transform":"rotateZ("+rotat+"deg)",
                            "-webkit-transform":"rotateZ("+rotat+"deg)"
                        });
                        $elm.attr("data-rotate",rotat)
                            .css("transform","")
                            .addClass("onRotating")
                            .trigger('element.rotate').trigger("element.change").trigger("element.changed")
                            .trigger('elemResizeInfo:show',{element:$elm});
                    }

                })
            });
        },

        getInfo:function ($elm) {
            var width  = $elm.width(),
                height = $elm.height(),
                left   = parseFloat($elm.css("left")) || 0,
                right  = left + width,
                top    = parseFloat($elm.css("top")) || 0,
                bottom = top + height;

            return {
                width:width,
                height:height,
                left:left,
                right:right,
                top:top,
                bottom:bottom,
                angle : $elm.attr("data-rotate") * Math.PI / 180
            };
        },

        //获得旋转后的上下左右相对中心点的坐标
        getOffset:function ($elm) {
            var data = this.getInfo($elm),
                w    = data.width / 2,
                h    = data.height / 2,
                l    = - w,t = - h,r = w ,b = h,
                angle  = data.angle,sin = Math.sin(angle),cos = Math.cos(angle),
                newLTX  = l * cos - t * sin,
                newLTY  = l * sin + t * cos,
                newLBX  = l * cos - b * sin,
                newLBY  = l * sin + b * cos,
                newRTX  = r * cos - t * sin,
                newRTY  = r * sin + t * cos,
                newRBX  = r * cos - b * sin,
                newRBY  = r * sin + b * cos;
            return {
                left:Math.min(newLTX,newLBX,newRTX,newRBX),
                top :Math.min(newLTY,newLBY,newRTY,newRBY),
                right:Math.max(newLTX,newLBX,newRTX,newRBX),
                bottom:Math.max(newLTY,newLBY,newRTY,newRBY)
            }
        },

        /**
         * [旋转后元素坐标与旋转前的差值]
         * @param  {[object]} $elm [jQuery 对象]
         * @return {[object]}      [description]
         */
        getDiffInfo:function ($elm) {
            var posi = this.getOffset($elm);
            return {
                left:posi.left + $elm.width() / 2 || 0,
                top:posi.top + $elm.height() / 2 || 0,
                right:posi.right - $elm.width () / 2 || 0,
                bottom:posi.bottom - $elm.height() / 2 || 0
            }
        },

        /**
         * [旋转后新坐标]
         * @param  {[object]} $elm [jQuery 对象]
         * @return {[object]}      [description]
         */
        getNewInfo:function ($elm) {
            var diffInfo = this.getDiffInfo($elm),
                info     = this.getInfo($elm);
            return {
                left:info.left + diffInfo.left,
                top:info.top + diffInfo.top,
                right:info.right + diffInfo.right,
                bottom:info.bottom + diffInfo.bottom
            }
        },

        updateAngleInfo:function ($elm) {
            var deg = +$elm.attr("data-rotate") || 0;
            deg = deg >=0 ? deg : 360 + deg;
            $elm.find(".rotationAngle").text(deg.toFixed(1) + "°");
        }
    };

    return rotate;
});