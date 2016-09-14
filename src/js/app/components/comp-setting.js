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
            this.scrollBarControl($('#base-select-border'),$('#base-select-border-input'),0,20,1,"borderWidth");
            //行高
            this.scrollBarControl($('#base-select-height'),$('#base-select-height-input'),0,3,0.1,"lineHeight");

        },
        //改变div的背景颜色
        chooseBgColorWay:function () {
            $('#color-select-bg').colorpicker().on('changeColor', function(e) {
                $('.demo .edit-area li')[0].style.backgroundColor = e.color.toHex();
            });
        },
        //改变div的文字颜色
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
            }else if(element == "lineHeight"){
                _this.getLineHeight(value);
            }else if(element == "borderWidth"){
                _this.getBorderWidth(value);
            }else{
                console.log("报错啦");
            }
        },
        //改变div的透明度
        getOpacity:function (val) {
            var opa_val =  (1-Math.round(val)/100);
            $(".demo .edit-area .demo-area-box").css("opacity",opa_val);

        },
        //改变div的边距
        getBorderWidth:function (val) {
            $(".demo .edit-area .demo-area-box").css("padding",val);
        },
        //改变div的行高
        getLineHeight:function (val) {
            $(".demo .edit-area .demo-area-box").css("line-height",val);

        }

        
    };
    return compSet;
});
