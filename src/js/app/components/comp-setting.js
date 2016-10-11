/**
 * Created by yanglili on 2016-9-13.
 */
define(function () {
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
            console.log(element,value);

        },
        //获取动画
        getElementAnimate:function () {
            var _this = this;
            $('#base-select-animate-style').change(function(){
                var val = $(this).val();
                $('.demo .edit-area li .demo-area-box').css("animation",val+" 5s");
            });
            //点击添加动画
            $(".animate-btn-add").on("click",function () {
                _this.getAddAnimate();

            });
            _this.getDelAnimate();
            // _this.getSelectAnimate();
        },
        //添加动画
        getAddAnimate:function () {
            if($("#comp-tab2 .style-setting section") && $("#comp-tab2 .style-setting section").length>0){
                var  sLength=$("#comp-tab2 .style-setting section").length+1;
            }else{
                var  sLength=1;
            }
            var data={
                i:sLength
            };

            $("#comp-tab2 .style-setting .animate-btn").before(GTPL.addAnimate(data));
            //选择动画事件
            this.getSelectAnimate(sLength);
            //时间
            this.scrollBarControl($('#base-select-animate-time'+sLength),$('#base-select-animate-time-input'+sLength),0,20,0.1,"animation-duration",$('.demo .edit-area li .demo-area-box'));

            //延迟
            this.scrollBarControl($('#base-select-animate-defer'+sLength),$('#base-select-animate-defer-input'+sLength),0,20,0.1,"animation-delay",$('.demo .edit-area li .demo-area-box'));

            this.getAnimateCirculation(sLength);

        },
        //点击删除动画
        getDelAnimate:function () {
            $("#comp-tab2 .style-setting").on("click",".fa-trash-o",function () {
                var sIndex=$(this).parent().index();
                var  sLength=$("#comp-tab2 .style-setting section").length;
                if(sIndex-sLength <0){
                    for(var i=-1; i>sIndex-sLength; i--){
                        var s_index=sLength-(-i);
                        var s_section = $("#comp-tab2 .style-setting section").eq(i);
                        s_section.find(".style-list").attr("data-target","#base-animate"+s_index);
                        s_section.find(".collapse").attr("id","base-animate"+s_index);
                        s_section.find(".collapse .select-box > select").attr("id","base-select-animate-style"+s_index);
                        s_section.find(".collapse .base-select").eq(-3).find(" > .base-select-style").attr("id","base-select-animate-time"+s_index);
                        s_section.find(".collapse .base-select").eq(-2).find(" > .base-select-style").attr("id","base-select-animate-defer"+s_index);
                        s_section.find(".collapse .base-select").eq(-1).find(" > .base-select-style").attr("id","base-select-animate-number"+s_index);
                        s_section.find(".collapse .base-select input[name='time']").attr("id","base-select-animate-time-input"+s_index);
                        s_section.find(".collapse .base-select input[name='defer']").attr("id","base-select-animate-defer-input"+s_index);
                        s_section.find(".collapse .base-select input[name='number']").attr("id","base-select-animate-number-input"+s_index);
                        s_section.find(".style-list span").eq(0).text("动画"+s_index);
                    }
                }
                $(this).parent().remove();

            });
        },
        //选择动画
        getSelectAnimate:function (i) {
            var _this = this;
            var select=$("#base-select-animate-style"+i);
            if($("#comp-tab2 .style-setting section").length>0){
                select.change(function(){
                    _this.getAnimateValue($(this).val(),i);
                });
            }

        },
        //动画参数值
        getAnimateValue:function(value,i){
            var _this = this;
            var select=$("#base-select-animate-style"+i),
                direction=$("#base-select-animate-direction"+i),
                time = $('#base-select-animate-time'+i),
                defer=$('#base-select-animate-defer'+i),
                circulation=$('#base-select-animate-number-input'+i);
            //当动画为弹入、淡入、滑动进入、缩小进入、弹出、淡出、滑动退出、缩小退出时动画
            if (value == "bounceIn" || value == "fadeIn" || value == "slideIn"  ||value == "zoomIn" | value == "bounceOut" || value == "fadeOut" || value=="slideOut" || value=="zoomOut"){
                direction.parents("li").show();
                time.parents("li").show();
                defer.parents("li").show();
                circulation.parents("li").show();
                var s_time = time.next().find("input").val(),
                    s_defer =  defer.next().find("input").val();
                _this.getElementValue("animation",s_time+"s "+s_defer+"s "+value+ direction.val(),$('.demo .edit-area li .demo-area-box'));
                // $('.demo .edit-area li .demo-area-box').css("animation",s_time+"s "+s_defer+"s "+value+ direction.val());
                _this.getAnimateDirection(value,direction,time,defer);
            }else if(value == "no"){
                direction.parents("li").hide();
                time.parents("li").hide();
                defer.parents("li").hide();
                circulation.parents("li").hide();
            }else{
                direction.parents("li").hide();
                time.parents("li").show();
                defer.parents("li").show();
                circulation.parents("li").show();
                var s_time = time.next().find("input").val(),
                    s_defer =  defer.next().find("input").val();
                _this.getElementValue("animation",s_time+"s "+s_defer+"s "+value,$('.demo .edit-area li .demo-area-box'));
                //$('.demo .edit-area li .demo-area-box').css("animation",s_time+"s "+s_defer+"s "+value);

            }
        },
        //动画方向
        getAnimateDirection:function (value,direction,time,defer) {
            var _this=this;
            direction.change(function(){
                var s_time = time.next().find("input").val(),
                    s_defer =  defer.next().find("input").val();
                // $('.demo .edit-area li .demo-area-box').css("animation",s_time+"s "+s_defer+"s "+value+$(this).val());
                _this.getElementValue("animation",s_time+"s "+s_defer+"s "+value+$(this).val(),$('.demo .edit-area li .demo-area-box'));
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

    };
    return compSet;

});
