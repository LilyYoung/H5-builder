/**
 * Created by yanglili on 2016-9-13.
 */
define(function () {
    var compSet = {
        init:function () {
            var _this =this;
            _this.DemoInit();
        },
        DemoInit:function () {
            //可拖拽
            $("#comp_setting").draggable();
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
                //行高
                case "line-height":
                    break;
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
                default:
                    value = value +'px';
                    break;
            }
            _this.getElementValue(element,value,div);
        },
        getElementValue:function (element,value,div) {
            div.css(element,value);
        }

        
    };
    return compSet;

});
