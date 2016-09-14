/**
 * Created by yanglili on 2016-9-13.
 */
define(function () {
    var compSet = {
        init:function () {
            var _this =this;
            _this.DemoInit();
            _this.chooseBgColorWay();
            _this.chooseColorWay();
            // _this.getOpacity();
        },
        DemoInit:function () {
            //可拖拽
            $("#comp_setting").draggable();
            $(".demo .edit-area li").draggable();
            //使div可调节大小
            $(".demo .edit-area li").resizable();
            //进度条控制
            //透明度
            this.scrollBarControl($('#base-select-opacity'),$('#base-select-opacity-input'),0,100,1,"Opacity");
            //边距
            this.scrollBarControl($('#base-select-padding'),$('#base-select-padding-input'),0,20,1,"paddingWidth");
            //行高
            this.scrollBarControl($('#base-select-height'),$('#base-select-height-input'),0,3,0.1,"lineHeight");
            //边框尺寸
            this.scrollBarControl($('#base-select-border-width'),$('#base-select-border-width-input'),0,20,1,"borderWidth");
            //边框弧度
            this.scrollBarControl($('#base-select-trans'),$('#base-select-trans-input'),0,360,1,"transForm");
            //边框样式
            this.getSelectBorderStyle();
            //边框颜色
            this.getBorderColor();
            //旋转
            this.scrollBarControl($('#base-select-border-radius'),$('#base-select-border-radius-input'),0,29,1,"borderRadius");
            //阴影大小
            this.scrollBarControl($('#base-select-shadow-spread'),$('#base-select-shadow-spread-input'),-20,20,1,"shadowSpread");
            //阴影模糊值
            this.scrollBarControl($('#base-select-shadow-blur'),$('#base-select-shadow-blur-input'),0,20,1,"shadowBlur");
            //阴影颜色
            this.getBorderShadowColor();
            //阴影方向
            this.scrollBarControl($('#base-select-shadow-direction'),$('#base-select-shadow-direction-input'),-20,20,1,"shadowDirection");

        },
        //改变背景颜色
        chooseBgColorWay:function () {
            $('#color-select-bg').colorpicker().on('changeColor', function(e) {
                $('.demo .edit-area li')[0].style.backgroundColor = e.color.toHex();
            });
        },
        //改变文字颜色
        chooseColorWay:function () {
            $('#color-select-text').colorpicker().on('changeColor', function(e) {
                $('.demo .edit-area li')[0].style.color = e.color.toHex();
            });
        },
        //进度条控制
        scrollBarControl:function(id,id_input,min_val,max_val,step,element){
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
                    _this.getElementInit(_this,element,ui.value );

                }
            });
            id_input.val(id.slider( "value" ));

            id_input.on('input',function() {
                //进行相关操作
                var input_val = id_input.val();
                if (input_val > max_val) {
                    input_val = max_val;
                    id_input.val(max_val);
                } else if (input_val < min_val) {
                    input_val = min_val;
                    id_input.val(min_val);
                } else {

                }

                id.slider({
                    range: "min",
                    min: min_val,
                    max: max_val,
                    step:step,
                    value: input_val
                });
                console.log(input_val);
                _this.getElementInit(_this,element,input_val);
            });

        },
        //判断进度条作用
        getElementInit:function (_this,element,value ) {
            if(element == "Opacity"){
                _this.getOpacity(value);
            }else if(element == "paddingWidth"){
                _this.getPaddingWidth(value);
            }else if(element == "lineHeight"){
                _this.getLineHeight(value);
            }else if(element == "borderWidth"){
                _this.getBorderWidth(value);
            }else if(element == "borderRadius"){
                _this.getBorderRadius(value);
            }else if(element == "transForm"){
                _this.getTransForm(value);
            }else if(element == "shadowSpread"){
                _this.getShadowSpread(value);
            }else if(element == "shadowBlur"){
                _this.getShadowBlur(value);
            }else if(element == "shadowDirection"){
                _this.getShadowDirection(value);
            }else{
                console.log("报错啦");
            }
        },
        //改变透明度
        getOpacity:function (val) {
            var opa_val =  (1-Math.round(val)/100);
            $(".demo .edit-area .demo-area-box").css("opacity",opa_val);

        },
        //改变边距
        getPaddingWidth:function (val) {
            $(".demo .edit-area .demo-area-box").css("padding",val);
        },
        //改变行高
        getLineHeight:function (val) {
            $(".demo .edit-area .demo-area-box").css("line-height",val);

        },
        //改变边框尺寸
        getBorderWidth:function (val) {
            $(".demo .edit-area .demo-area-box").css("border-width",val);
        },
        //改变边框弧度
        getBorderRadius:function (val) {
            $(".demo .edit-area .demo-area-box").css("border-radius",val);
            $(".demo .edit-area .demo-area-box").css("-moz-border-radius",val);
        },
        //改变边框样式
        getSelectBorderStyle:function () {
            $('#base-select-border-style').on("click",function () {
                var val_select = $(this).val();
                $(".demo .edit-area .demo-area-box").css("border-style",val_select);

            });

        },
        //改变文字颜色
        getBorderColor:function () {
            $('#color-select-border-color').colorpicker().on('changeColor', function(e) {
                $('.demo .edit-area li div')[0].style.borderColor = e.color.toHex();
            });
        },
        //旋转div
        getTransForm:function (val) {
            $(".demo .edit-area li").css("transform",('rotateZ('+val+'deg)'));
        },
        //改变阴影大小
        getShadowSpread:function (val) {
            var direction=$("#base-select-shadow-direction-input").val()+"px",
                blur=$("#base-select-shadow-blur-input").val()+"px",
                color=$("#color-select-shadow-color input").val();
            val = val +"px";
            $(".demo .edit-area .demo-area-box").css("box-shadow",(direction+" "+val+" "+blur+" "+color));
        },
        //改变阴影模糊值
        getShadowBlur:function (val) {
            var direction=$("#base-select-shadow-direction-input").val()+"px",
                spread=$("#base-select-shadow-spread-input").val()+"px",
                color=$("#color-select-shadow-color input").val();
            val = val +"px";
            $(".demo .edit-area .demo-area-box").css("box-shadow",(direction+" "+spread+" "+val+" "+color));
        },
        //改变阴影颜色值
        getBorderShadowColor:function () {
            $('#color-select-shadow-color').colorpicker().on('changeColor', function(e) {
                $('.demo .edit-area li div')[0].style.borderColor = e.color.toHex();
                var direction=$("#base-select-shadow-direction-input").val()+"px",
                    spread=$("#base-select-shadow-spread-input").val()+"px",
                    blur=$("#base-select-shadow-blur-input").val()+"px",
                    col=e.color.toHex();
                $(".demo .edit-area .demo-area-box").css("box-shadow",(direction+" "+spread+" "+blur+" "+col));
            });
        },
        //改变阴影方向
        getShadowDirection:function (val) {
            if(val == 0){

            }else{
                var direction=val+"px",
                    spread=$("#base-select-shadow-spread-input").val()+"px",
                    blur=$("#base-select-shadow-blur-input").val()+"px",
                    col=$("#color-select-shadow-color input").val();
                $(".demo .edit-area .demo-area-box").css("box-shadow",(direction+" "+spread+" "+blur+" "+col));
            }

        },


        
    };
    return compSet;

});
