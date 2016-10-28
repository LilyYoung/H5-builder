/**
 * Created by wangyongqiang-ds1 on 2016/9/19.
 * @param:公用的工具类
 */
define(function () {
    var tools = {};
    //分页方法
    tools.fnPagination = function(option) {
        laypage({
            cont: option.selector, //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: option.pages, //通过后台拿到的总页数
            curr: option.curr || 1, //当前页
            skin: option.skin||'',//皮肤
            groups: option.groups||5,//连续分页数
            skip: false, //是否开启跳页
            jump: function(obj, first){ //触发分页后的回调
                option.callback(obj, first)
            }
        });
    };

    //裁剪图片
    tools.jcrop = function(option) {
        var jcrop_api;
        $(option.selector).Jcrop({
            setSelect: option.setSelect,
            aspectRatio: option.aspectRatio,
            onSelect: updateCoords,
            onRelease: function(){

            }
        },function(){
            jcrop_api = this;

            $('.jcrop-holder').css({
                position: 'absolute',
                left: '50%',
                top: '50%',
                WebkitTransform: 'translate(-50%,-50%)',
                MozTransform: 'translate(-50%,-50%)',
                OTransform: 'translate(-50%,-50%)',
                transform: 'translate(-50%,-50%)'
            });
            $('.jcrop-holder input').css('visibility','hidden');
            return false;
        });
        function updateCoords(c){
        };


    };

    tools.createID = function(msg){
        return msg ? msg + new Date().getTime() : new Date().getTime();
    };

    /**
     * newID 元素的新ID
     * oldID,  元素的旧ID
     **/
    tools.changeStyle = function(oldID, newID){
        var styleElm = $('style.'+oldID) ,cloneStyle = styleElm.clone();
        if(cloneStyle.length){
            cloneStyle.removeClass().addClass(newID);
            cloneStyle.html(cloneStyle.html().replace(new RegExp(oldID,'gi'),newID));
            styleElm.after(cloneStyle);
        }
    };

    /*
     * ajax
     */
    tools.ajax = function(type,url,data,async,dataType,callback,arg){
        $.ajax({
            type: type || "POST",
            url: url,
            data : data,
            async: async || true,
            dataType: dataType || "json",
            success:function(data){
                callback(data,arg);
            },
            error : function(data){
                callback(data,arg);
            }
        });
    };

    /*
     * 删除元素的ID
     */
    tools.removeElmStyle = function(newID){
        $('style.'+newID).remove();
    };
    //创建
    tools.creatElmSetHtml = function(data){
        var setPan = $('#elementSet');
        setPan.find('.box_bd').html(data).end().show();
        $(".nano").nanoScroller({alwaysVisible: false});
    };
    /**
     * [创建元素编辑工具栏]
     * @param {[object]} config
     * @param {[object]} config.element [jquery对象,当前编辑的元素节点],
     * @param {[function]} config.onload [加载完成后回调函数]
     * @param {[Array]}  config.toolbarBtn [按钮集]
     * @param {[string]} config.toolbarBtn[0].identClass [当前按钮的标识class]
     * @param {[object]} config.toolbarBtn[0].btnCss [当前图标样式对象,同jquery.Css]
     * @param {[string]} config.toolbarBtn[0].text [当前按钮文本]
     * @param {[function]} config.toolbarBtn[0].init [加载时回调函数,参数($elm,$btn),元素jquery对象,按钮jquery对象]
     * @param {[function]} config.toolbarBtn[0].onclick [点击回调函数,参数(e,$elm,$btn),元素jquery对象,按钮jquery对象]
     */
    tools.elementToolBar = function (config) {

        $("body").find(".elementToolbar").remove();//移除工具条
        var $toolbar = $("<div class='elementToolbar'></div>"),$elm =config.element,
            toolbarBtn = config.toolbarBtn,offset;
        // 遍历每个按钮
        for (var i = 0; i < toolbarBtn.length; i++) {
            var data = toolbarBtn[i],
                $btn = $("<div class='elemBtnBox "+data.identClass+"' title="+(data.desc || "")+" ></div>");
            $btn.append("<span class='elemBtn'></span><span class='elemText'>"+data.text+"</span>").unbind("click");
            data.btnCss && $btn.css(data.btnCss);//设置样式
            //绑定init
            if(data.init && typeof(data.init) === "function") {
                data.init($elm,$btn);
            }
            //上下文菜单
            if(data.context) {
                var $context = $("<ul class='elenentToolbarContext'></ul>").appendTo($btn),
                    contextList = data.context.list;
                for(var j = 0; j < contextList.length;j++){
                    var $this = $("<li class='etbcli "+contextList[j].identClass+"'>"+contextList[j].text+"</li>").appendTo($context);
                    //绑定点击事件
                    if(contextList[j].onclick && typeof(contextList[j].onclick) === "function") {
                        (function ($this,$elm,thisLi) {
                            $this.bind("click",function (e) {
                                e.stopPropagation();
                                thisLi.onclick(e,$elm);
                                if(thisLi.autohide) {
                                    $context.hide();
                                }
                            })
                        })($this,$elm,contextList[j]);
                    }
                }
                data.onclick = function (e,$elm) {
                    var $handle = $(e.target),
                        $context = $handle.siblings(".elenentToolbarContext"),
                        $elemBtnBox = $handle.parents(".elemBtnBox");
                    $(".elenentToolbarContext").not($context[0]).hide();
                    $context.toggle();
                    $elemBtnBox.toggleClass("on").siblings().removeClass("on");
                }
            }
            //绑定点击事件
            if(data.onclick && typeof(data.onclick) === "function") {
                (function ($elm,$btn,callback) {
                    $btn.bind("click",function (e) {
                        e.stopPropagation();
                        callback(e,$elm);
                    })
                })($elm,$btn,data.onclick)
            }

            $toolbar.append($btn);
        }
        var elmHeight = $elm.innerHeight();
        // 如果元素旋转重置高度
        if($elm.attr("data-rotate")) {
            var rotateDate = require("elementRotate").getOffset($elm);
            elmHeight = rotateDate.bottom - rotateDate.top;
        }

        // 如果旋转角度则工具栏在下面
        var rotate = $elm.attr("data-rotate"),top;
        if(rotate < 156) {
            top = $elm.offset().top + elmHeight;
        }
        $toolbar.appendTo("body").css({
            "top": $('#wqdIphoneContainer').offset().top,
            "left": $('#wqdIphoneContainer').offset().left + $('#wqdIphoneContainer').width() +5
        });
        //绑定onload
        if(data && data.onload && typeof(data.onload) === "function") {
            data.onload($elm);
        }
    };

    tools.overlay = function ($node,$parent) {
        var $overlay = $("<div class='wqd-carouseOverlay'><div class='wqd-carouseOverlay-box moveMainArea'></div></div>").appendTo($("body")),
            $overlayBox = $overlay.find(".wqd-carouseOverlay-box"),$nodeClone;

        $nodeClone = $node.clone(true);
        $nodeClone.find(".wqdCarousel").data("Wqdcarousel","");
        $overlayBox.css({
            width:$parent.width(),
            height:$parent.height(),
            left:$parent.offset().left,
            top:$parent.offset().top - document.documentElement.scrollTop - document.body.scrollTop,
            position:"absolute"
        });
        $("body").attr("data-carouseEditing",true).css("overflow","hidden");
        $overlayBox.append($nodeClone);
        $(document).trigger("wqdComponentD:overlay");
        if($node.parents(".fullscreen").length) {
            $overlayBox.addClass("fullscreen");
        }

        // 点击黑暗处切换回去
        $overlay.bind("click",function (e) {
            if($(e.target).parents("[data-elementtype]").size() == 0) {
                if($("#summerEditor").size()) {
                    return;
                }
                $(document).trigger("texteditor:close");
                $nodeClone.attr("data-elemandgroup",true);
                $node.replaceWith($nodeClone);
                $overlay.remove();
                $("body").attr("data-carouseEditing",false).css("overflow","visible");
                setTimeout(function (argument) {
                    $(document).trigger("wqdComponentD:overlay").trigger("appSetCatch");
                    $("#"+$node.attr("id")).trigger("element.change").trigger("element.changed");
                    $('body').data('exitId','');
                },0);

            }
        })
    };

    /*
     html固定结构
     <div>
     <span>按钮半径</span>
     <div class="scale">
     <span class="moment"></span>
     <div class="slider"></div>
     </div>
     <input type="text" class="r_val" placeholder="0"> px
     </div>

     json.maxval	文本框可显示的最大值
     json.slider	拖拽对象（小点）
     json.effective	可拖拽的有效范围
     json.callback	回调函数
     */
    tools.range = function(json) {
        var json = json || {},
            minval = json.minval||0, //最小值是0
            maxval = json.maxval,
            _this = json.slider,
            effective = json.effective || $(document),
            spaceNumber=json.spaceNumber||1,//步长数据
            maxwidth = _this.parent().width(),
            type=json.type,
            _obj=json.obj,
            decimal=function(){
                if(_this.parent().siblings("input").hasClass("variate")){
                    return 1;
                }else if(spaceNumber){
                    if(spaceNumber.toString().indexOf(".")!=-1){
                        return spaceNumber.toString().split(".")[1].length;
                    }else{
                        return 0;
                    };
                };
            }();
        var ratio; //比例
        var ImmediateChange=function($slder,$input,val,$click){
            var key_val = Number(Number(val).toFixed(decimal)) || 0,rangeNumber,rangeVal,ratio;
            if(!$click.hasClass("slider")&&!$click.hasClass("r_val")){
                if (Math.round(key_val*maxval/maxwidth) > maxval) {
                    rangeNumber=maxval;
                } else if (Math.round(key_val*maxval/maxwidth) < minval) {
                    rangeNumber=maxwidth*(minval/maxval);
                    ratio=minval/maxval;
                }else{
                    rangeNumber=key_val;//直接取值
                    ratio=rangeNumber/maxwidth;
                };
                rangeVal=Math.round(key_val*maxval/maxwidth)<minval?minval:Math.round(key_val*maxval/maxwidth);//只有小于的时候
            }else{
                if (key_val > maxval) {
                    key_val=maxval;
                } else if (key_val < minval) {
                    key_val = minval;
                };
                ratio = key_val / maxval
                rangeNumber=(ratio * maxwidth);
                rangeVal=key_val;
            };
            $input.val(rangeVal);
            json.callback && json.callback(ratio,type,maxval);
            $slder.css({ "left": rangeNumber }).prev().css({ "width": rangeNumber });
            $(document).trigger("appSetCatch");
        };
        //拖拽
        _this.mousedown(function(e) {
            var posL = parseFloat($(this).position().left);//
            var offL = parseFloat($(this).offset().left);//
            // var dx = e.clientX;
            function move(e) {
                // var len = offl + e.clientX - dx;
                var len = e.clientX -offL+posL;//消除点击在小圆内部的误差(尤其是初始值不是0的时候)
                if (len >= 0 && len <= maxwidth) {
                    if(len<=maxwidth*(minval/maxval)){
                        len=maxwidth*(minval/maxval)
                    };
                    _this.css("left", len);
                    _this.prev().css("width", len);
                    ratio = len / maxwidth;
                    _this.parent().siblings("input").val(Math.round(ratio * maxval));
                    json.callback && json.callback(ratio,type,maxval);
                }
                e.stopPropagation();
            };
            function up() {
                $(document).trigger("updatanewlist");
                $(document).trigger("appSetCatch");
                effective.off("mousemove.drop");
                effective.off("mouseup.drop");
            };
            effective.on("mousemove.drop", move);
            effective.on("mouseup.drop", up);
            e.stopPropagation();
        });
        //输入框
        var intval;
        _this.parent().siblings("input").on("keydown", function(e) {
            // this.value = this.value.replace(/[^\d\.]/g, '');
            var intval = Number(this.value) || 0,
                keyval = e.keyCode,
                variate = $(this).hasClass("variate") ? 0.1 : spaceNumber;
            if (e.keyCode == 38) {
                intval = parseInt(Math.round((intval + variate) * 10)) / 10; // 去除存在小数时js的精度误差
                ImmediateChange(_this,$(this),intval,$(e.target));
            } else if (e.keyCode == 40) {
                intval = parseInt(Math.round((intval - variate) * 10)) / 10;
                ImmediateChange(_this,$(this),intval,$(e.target));
            }else if(e.keyCode == 13){
                ImmediateChange(_this,$(this),intval,$(e.target));
            };
            //_this.css({"left":intval*maxwidth/maxval}).siblings(".moment").css({"width":intval*maxwidth/maxval});
        }).on("input",function(){
            this.value = this.value.replace(/[^\d\.]/g, '');
        }).on("blur",function(e){
            var intval = Number(this.value) || 0,
                keyval = e.keyCode,
                variate = $(this).hasClass("variate") ? 0.1 : spaceNumber;
            ImmediateChange(_this,$(this),intval,$(e.target));
        });
        //点击取值
        _this.parent().css({"cursor":"pointer"}).off("click").on("click",function(e){
            if($(e.target).hasClass("slider")) return;
            var ele=$(this);
            var offsetX=ele.offset().left;
            var clickPos=Math.round(e.pageX-offsetX);
            var $input=$(this).siblings("input");
            var $slider=$(this).find(".slider");
            ImmediateChange($slider,$input,clickPos,$(e.target));
            e.stopPropagation();
        });
    };
    /* 返回动画结束事件名称 */
    tools.transitionEndName = function(){
        var el = document.createElement('wqdtransitionEnd');
        var transEndEventNames = {
            WebkitTransition : 'webkitTransitionEnd',
            MozTransition    : 'transitionend',
            OTransition      : 'oTransitionEnd otransitionend',
            transition       : 'transitionend'
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return { end: transEndEventNames[name] };
            }
        }
        return false;
    };
    tools.animatEndName = function(){
        var el = document.createElement('wqdAnimatEnd');
        var transEndEventNames = {
            WebkitTransition : 'webkitAnimationEnd animationend',
            MozTransition    : 'mozAnimationEnd',
            OTransition      : 'oanimationend',
            transition       : 'MSAnimationEnd animationend'
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return { end: transEndEventNames[name] };
            }
        }
        return false;
    };
    $.fn.wqdTransiEnd = function (duration) {
        var called = false;
        var $el = this;
        $(this).one("wqdTransitionEnd", function () { called = true });
        var callback = function () { if (!called) $($el).trigger($.support.wqdTransition.end) };
        setTimeout(callback, duration*1000);
        return this;
    };
    $.fn.wqdAnimatEnd = function (duration) {
        var called = false;
        var $el = this;
        $(this).one("wqdAnimationEnd", function () { called = true });
        var callback = function () { if (!called) $($el).trigger($.support.Animation.end) };
        setTimeout(callback, duration*1000);
        return this;
    };
    $.support.wqdTransition = tools.transitionEndName();
    $.support.Animation = tools.animatEndName();
    if (!$.support.wqdTransition) return;

    $.event.special.wqdTransitionEnd = {
        bindType: $.support.wqdTransition.end,
        delegateType: $.support.wqdTransition.end,
        handle: function (e) {
            if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        }
    };
    $.event.special.wqdAnimationEnd = {
        bindType: $.support.Animation.end,
        delegateType: $.support.Animation.end,
        handle: function (e) {
            if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        }
    };

    return tools;
});