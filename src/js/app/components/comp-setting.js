/**
 * Created by yanglili on 2016-9-13.
 * param:组件设置(弹窗)
 */
define(function () {
    var demo=$('.demo .edit-area li .demo-area-box');
    var isReturn = false;
    var compSet = {
        init:function () {
            var _this =this;
            _this.DemoInit();
            _this.getElementAnimate();
        },
        DemoInit:function () {
            //可拖拽
            $(".demo .edit-area li").draggable();
            //使div可调节大小
            $(".demo .edit-area li").resizable();
            /**颜色控制-start**/
            //背景颜色
            this.getSelectColor($('#color-select-bg'),$('.demo .edit-area li .demo-area-box'),"background-color");
            //文字颜色
            this.getSelectColor($('#color-select-text'),$('.demo .edit-area li .demo-area-box'),"color");
            //边框颜色
            this.getSelectColor($('#color-select-border'),$('.demo .edit-area li .demo-area-box'),"border-color");
            //阴影颜色
            this.getSelectColor($('#color-select-shadow'),$('.demo .edit-area li .demo-area-box'),"box-shadow");
            /**颜色控制-end**/

            /**进度条控制-start**/
            //透明度
            this.scrollBarControl($('#base-select-opacity'),$('#base-select-opacity-input'),0,100,1,"opacity",$('.demo .edit-area li .demo-area-box'));
            //边距
            this.scrollBarControl($('#base-select-padding'),$('#base-select-padding-input'),0,20,1,"padding",$('.demo .edit-area li .demo-area-box'));
            //行高
            this.scrollBarControl($('#base-select-height'),$('#base-select-height-input'),0,3,0.1,"line-height",$('.demo .edit-area li .demo-area-box'));
            //边框尺寸
            this.scrollBarControl($('#base-select-border-width'),$('#base-select-border-width-input'),0,20,1,"border-width",$('.demo .edit-area li .demo-area-box'));
            //边框弧度
            this.scrollBarControl($('#base-select-border-radius'),$('#base-select-border-radius-input'),0,29,1,"border-radius",$('.demo .edit-area li .demo-area-box'));
            //旋转
            this.scrollBarControl($('#base-select-trans'),$('#base-select-trans-input'),0,360,1,"transform",$('.demo .edit-area li .demo-area-box'));
            //阴影大小
            this.scrollBarControl($('#base-select-shadow-spread'),$('#base-select-shadow-spread-input'),-20,20,1,"shadowSpread",$('.demo .edit-area li .demo-area-box'));
            //阴影模糊值
            this.scrollBarControl($('#base-select-shadow-blur'),$('#base-select-shadow-blur-input'),0,20,1,"shadowBlur",$('.demo .edit-area li .demo-area-box'));
            //阴影方向
            this.scrollBarControl($('#base-select-shadow-direction'),$('#base-select-shadow-direction-input'),-20,20,1,"shadowDirection",$('.demo .edit-area li .demo-area-box'));
            /**进度条控制-end**/
        },
        //获取颜色
        getSelectColor:function (id,div,element) {
            var _this =this;
            id.colorpicker().on('changeColor', function(e) {
                var value;
                if(element == "box-shadow"){
                    var direction=$("#base-select-shadow-direction-input").val()+"px",
                        spread=$("#base-select-shadow-spread-input").val()+"px",
                        blur=$("#base-select-shadow-blur-input").val()+"px";
                    value=direction+" "+spread+" "+blur+" "+e.color.toHex();
                }else{
                    value=e.color.toHex();
                }
                _this.getElementValue(element,value,div);
            });
        },
        //进度条控制
        scrollBarControl:function(id,id_input,min_val,max_val,step,element,div){
            var _this=this;
            id.slider({
                range: "min",
                min: min_val,
                max: max_val,
                step: step,
                value: id_input.val(),
                slide: function( event, ui ) {
                    id_input.val( ui.value );
                    //判断控制条作用
                    _this.getElementInit(_this,element,ui.value,div);

                }
            });
            id_input.val(id.slider( "value" ));

            id_input.on('input',function() {
                //进行相关操作
                var input_val = id_input.val();
                if (input_val > max_val) {
                    input_val = max_val;
                } else if (input_val < min_val) {
                    input_val = min_val;
                } else {

                }

                id.slider({
                    range: "min",
                    min: min_val,
                    max: max_val,
                    step:step,
                    value: input_val
                });
                _this.getElementInit(_this,element,input_val,div);
            });

        },
        //判断进度条作用
        getElementInit:function (_this,element,value,div) {
            switch (element){
                //透明度
                case "opacity":
                    value = 1-(Math.round(value)/100);
                    break;
                // //行高
                // case "line-height":
                //     break;
                //旋转
                case "transform":
                    value = 'rotateZ('+value+'deg)';
                    break;
                //阴影大小
                case "shadowSpread":
                    var direction=$("#base-select-shadow-direction-input").val()+"px",
                        blur=$("#base-select-shadow-blur-input").val()+"px",
                        color=$("#color-select-shadow input").val();
                    value = direction+" "+value+"px "+blur+" "+color;
                    element ="box-shadow";
                    break;
                //阴影模糊值
                case "shadowBlur":
                    var direction=$("#base-select-shadow-direction-input").val()+"px",
                        spread=$("#base-select-shadow-spread-input").val()+"px",
                        color=$("#color-select-shadow input").val();
                    value = direction+" "+spread+" "+value+"px "+color;
                    element = "box-shadow";
                    break;
                //阴影方向
                case "shadowDirection":
                    var spread=$("#base-select-shadow-spread-input").val()+"px",
                        blur=$("#base-select-shadow-blur-input").val()+"px",
                        color=$("#color-select-shadow input").val();
                    value = value+"px "+spread+" "+blur+" "+color;
                    console.log("阴影方向"+value);
                    element = "box-shadow";
                    break;
                case "animation-duration":
                    value = value+"s";
                    _this.getElementValue("-webkit-animation-duration",value,div);
                    break;
                case "animation-delay":
                    value = value+"s";
                    _this.getElementValue("-moz-animation-delay",value,div);
                    _this.getElementValue("-webkit-animation-delay",value,div);
                    break;
                default:
                    value = value +'px';
                    break;
            }
            _this.getElementValue(element,value,div);
        },
        getElementValue:function (element,value,div) {
            div.css(element,value);
        },
        //获取动画
        getElementAnimate:function () {
            var _this = this;
            //点击添加动画
            $(".animate-btn-add").on("click",function () {
                _this.getAddAnimate();

            });
            _this.getDelAnimate();
            // _this.getSelectAnimate();
            _this.getPreviewAnimate();
        },
        //添加动画
        getAddAnimate:function () {
            if($("#comp-tab2 .style-setting section")){
                var  sLength=$("#comp-tab2 .style-setting section").length+1;
            }else{
                var  sLength=1;
            }
            var data={
                i:sLength
            };

            $("#comp-tab2 .style-setting .animate-btn").before(GTPL.addAnimate(data));
            //选择动画事件
            this.getSelectAnimate();
            //时间
            this.scrollBarControl($('#base-select-animate-time'+sLength),$('#base-select-animate-time-input'+sLength),0,20,0.1,"animation-duration",$('.demo .edit-area li .demo-area-box'));

            //延迟
            this.scrollBarControl($('#base-select-animate-defer'+sLength),$('#base-select-animate-defer-input'+sLength),0,20,0.1,"animation-delay",$('.demo .edit-area li .demo-area-box'));

            this.getAnimateCirculation(sLength);


        },
        //点击删除动画
        getDelAnimate:function () {
            var _this =this;
            $("#comp-tab2 .style-setting").on("click",".fa-trash-o",function () {
                var sIndex=$(this).parent().index();
                var  sLength=$("#comp-tab2 .style-setting section").length;
                if(sIndex-sLength <0){
                    // for(var i=-1; i>sIndex-sLength; i--){
                    for(var i=sIndex-sLength; i<0; i++){
                        var s_index=sLength-(-i);
                        var s_section = $("#comp-tab2 .style-setting section").eq(i);
                        s_section.find(".style-list").attr("data-target","#base-animate"+s_index);
                        s_section.find(".collapse").attr("id","base-animate"+s_index);
                        s_section.find(".collapse .select-box > select").attr("id","base-select-animate-style"+s_index);
                        s_section.find(".collapse .base-select").eq(-4).find(" > .base-select-style").attr("id","base-select-animate-direction"+s_index);
                        s_section.find(".collapse .base-select").eq(-3).find(" > .base-select-style").attr("id","base-select-animate-time"+s_index);
                        s_section.find(".collapse .base-select").eq(-2).find(" > .base-select-style").attr("id","base-select-animate-defer"+s_index);
                        s_section.find(".collapse .base-select").eq(-1).find(" > .base-select-style").attr("id","base-select-animate-number-input"+s_index);
                        s_section.find(".collapse .base-select input[name='time']").attr("id","base-select-animate-time-input"+s_index);
                        s_section.find(".collapse .base-select input[name='defer']").attr("id","base-select-animate-defer-input"+s_index);
                        s_section.find(".collapse .base-select input[name='number']").attr("id","base-select-animate-number-input"+s_index);
                        s_section.find(".style-list span").eq(0).text("动画"+s_index);
                        $(this).parent().remove();
                        _this.getSelectAnimate();

                    }
                }

                console.log("删除"+s_index);


            });

        },
        //选择动画
        getSelectAnimate:function () {
            var _this = this;
            if($("#comp-tab2 .style-setting section")){
                $("#comp-tab2 .style-setting section").each(function(){
                    var i=$(this).index()+1;
                    var select = $('#base-select-animate-style'+i),
                        direction = $('#base-select-animate-direction'+i),
                        time = $('#base-select-animate-time-input'+i),
                        defer = $('#base-select-animate-defer-input'+i),
                        number = $('#base-select-animate-number-input'+i);
                    select.change(function () {
                        var value = $(this).val();
                        if (value == "bounceIn" || value == "fadeIn" || value == "slideIn"  ||value == "zoomIn" | value == "bounceOut" || value == "fadeOut" || value=="slideOut" || value=="zoomOut"){
                            direction.parents("li").show();
                            time.parents("li").show();
                            defer.parents("li").show();
                            number.parents("li").show();
                            setTimeout(function(){

                                // $('.demo .edit-area li .demo-area-box').attr("style").replace(/(-|\w|\s|)*animation(-|\w|\s|:)+;/g,"");
                                $('.demo .edit-area li .demo-area-box').css("animation","none 0s 0s forward");

                            },(parseFloat(defer.val())+parseFloat(time.val()))*1000);
                            _this.getElementValue("animation",time.val()+"s "+defer.val()+"s "+value+direction.val(),$('.demo .edit-area li .demo-area-box'));
                            _this.getAnimateDirection(value,direction,time.val(), defer.val());
                        }else if(value == "no"){
                            direction.parents("li").hide();
                            time.parents("li").hide();
                            defer.parents("li").hide();
                            number.parents("li").hide();
                        }else{
                            time.parents("li").show();
                            defer.parents("li").show();
                            number.parents("li").show();
                            direction.parents("li").hide();
                            setTimeout(function(){
                                $('.demo .edit-area li .demo-area-box').css("animation","none 0s 0s forward");

                            },(parseFloat(defer.val())+parseFloat(time.val()))*1000);
                            _this.getElementValue("animation",time.val()+"s "+defer.val()+"s "+value,$('.demo .edit-area li .demo-area-box'));
                        }

                    });
                });
            }

        },
        //预览动画
        // getPreviewAnimate:function () {
        //     var _this = this;
        //     $("#comp-tab2 .style-setting .animate-btn-preview").on("click",function () {
        //         if($("#comp-tab2 .style-setting section")){
        //             var s_length=$("#comp-tab2 .style-setting section").length;
        //             var a= new Array(s_length-1);
        //             for(var i=1;i<=s_length;i++){
        //                 var value = $('#base-select-animate-style'+i).val(),
        //                     direction = $('#base-select-animate-direction'+i).val(),
        //                     time = $('#base-select-animate-time-input'+i).val(),
        //                     defer = $('#base-select-animate-defer-input'+i).val(),
        //                     number = $('#base-select-animate-number-input'+i).val();
        //                 if (value == "bounceIn" || value == "fadeIn" || value == "slideIn"  ||value == "zoomIn" | value == "bounceOut" || value == "fadeOut" || value=="slideOut" || value=="zoomOut") {
        //                     value =value+ direction;
        //                 }else {
        //
        //                 }
        //
        //                 $('.demo .edit-area li .demo-area-box').delay().css('animation'," 0s 0s no");
        //
        //                 var sss=(parseFloat(defer)+parseFloat(time))*1000;
        //                 var sum=0;
        //                 sum += sss;
        //                 setTimeout(function(){
        //                     $('.demo .edit-area li .demo-area-box').delay().css('animation',time+'s '+defer+'s '+value);
        //                 },sum);
        //
        //                 // _this.animationInit($('.demo .edit-area li .demo-area-box'),(time+'s '+defer+'s '+value));
        //                 console.log(i+"==defer"+sss+"===sun"+sum+"动画"+time+'s '+defer+'s '+value);
        //
        //             }
        //
        //         }else{
        //             console.log("预览2");
        //         }
        //
        //     });
        // },
        getPreviewAnimate:function () {
            var _this = this;
            $("#comp-tab2 .style-setting .animate-btn-preview").on("click",function () {
                if($("#comp-tab2 .style-setting section")){
                    _this.animationInit($('.demo .edit-area li .demo-area-box'),"0s 0s no");
                    var s_length=$("#comp-tab2 .style-setting section").length;
                    var animates= new Array(s_length);

                    var a_sum=0;
                    for(var i=1;i<=s_length;i++){
                        var value = $('#base-select-animate-style'+i).val(),
                            direction = $('#base-select-animate-direction'+i).val(),
                            time = $('#base-select-animate-time-input'+i).val(),
                            defer = $('#base-select-animate-defer-input'+i).val(),
                            number = $('#base-select-animate-number-input'+i).val();

                        if (value == "bounceIn" || value == "fadeIn" || value == "slideIn"  ||value == "zoomIn" | value == "bounceOut" || value == "fadeOut" || value=="slideOut" || value=="zoomOut") {
                            value =value+ direction;
                        }else {

                        }

                        if(i==1){
                            var a=parseFloat(defer);
                            animates[i-1]=time+'s '+a+'s '+value+" 1 both";
                        }else{
                                var a_time = $('#base-select-animate-time-input'+(i-1)).val(),
                                    a_defer = $('#base-select-animate-defer-input'+(i-1)).val();
                                var a=parseFloat(a_time)+parseFloat(a_defer);
                                if(i>2){
                                    var b=animates[i-2].split("s",2)[1];
                                    a+=parseFloat(b);
                                    console.log(b);
                                }else{
                                    a=a+parseFloat(defer);
                                }
                            animates[i-1]=time+'s '+a+'s '+value+" 1 forwards";
                            console.log(i+"  a_time="+a_time+"--a_defer="+a_defer+"---defer="+defer+"---aa="+a);
                        }

                        // $('.demo .edit-area li .demo-area-box').delay().css('animation'," 0s 0s no");

                        // var sss=(parseFloat(defer)+parseFloat(time))*1000;
                        // var sum=0;
                        // sum += sss;
                        // setTimeout(function(){
                        //
                        //     // $('.demo .edit-area li .demo-area-box').attr("style").replace(/(-|\w|\s|)*animation(-|\w|\s|:)+;/g,"");
                        //     $('.demo .edit-area li .demo-area-box').css("animation","");
                        //
                        // },sum);
                        // _this.animationInit($('.demo .edit-area li .demo-area-box'),(time+'s '+defer+'s '+value));
                        // $('.demo .edit-area li').attr({
                        //     "data-animate":value,
                        //     "data-animation-duration":time,
                        //     "data-animation-delay":defer,
                        //     "data-animation-iteration-count":number
                        // });



                        // _this.animationInit($('.demo .edit-area li .demo-area-box'),(time+'s '+defer+'s '+value));
                        // // console.log(i+"==defer"+sss+"===sun"+sum+"动画"+time+'s '+defer+'s '+value);

                    }
                    // a_sum += a;

                    _this.animationInit($('.demo .edit-area li .demo-area-box'),animates);
                    var atime = animates[s_length-1].split("s",2)[0],
                        adefer = animates[s_length-1].split("s",2)[1];
                    a_sum=parseFloat(atime)+parseFloat(adefer);
                    setTimeout(function(){

                        // $('.demo .edit-area li .demo-area-box').attr("style").replace(/(-|\w|\s|)*animation(-|\w|\s|:)+;/g,"");
                        $('.demo .edit-area li .demo-area-box').css("animation","none 0s 0s forward");

                    },a_sum*1000);
                    console.log(animates);

                }else{
                    console.log("预览失败");
                }

            });
        },
        //动画加载
        animationInit:function (div,a) {
                $('.demo .edit-area li .demo-area-box').css("animation",a);
        },

            //动画方向
        getAnimateDirection:function (value,direction,time,defer) {
            var _this=this;
            direction.change(function(){
                _this.getElementValue("animation",time+"s "+defer+"s "+value+$(this).val(),$('.demo .edit-area li .demo-area-box'));
            });
        },
        //动画循环
        /*次数与循环的逻辑
        *次数为执行完次数后动画停止。
        *循环为执行循环动画之前的次数，然后循环标识循环的第一个动画直到结束。
        * */
        getAnimateCirculation:function(i){
            var circulation=$('#base-select-animate-number-input'+i),
                check= circulation.parents("li").find("input[type=checkbox]");
            check.on("click",function (){
                if($(this).parent().hasClass("check")){
                    $(this).parent().removeClass("check");
                    circulation.attr("disabled",false);
                }else{
                    $(this).parent().addClass("check");
                    circulation.attr("disabled",true);
                }

            });


        }

        //确定、关闭按钮



    };
    return compSet;

});
