/**
 * Created by wangyongqiang-ds1 on 2016/9/19.
 * @param:拖动
 */
define(['tools','rotate','dynamicStyle','adsorbConfig'],function (tools,_rotate,_css,adsorb) {
    var getElementInfo = {

        init:function () {
            this.bindEvent("[data-elemandgroup='true']");
        },

        bindEvent:function (elementSelector) {
            var self = this,
                _docu = $(document);
            // 绑定拖动
            this.bindDrag(elementSelector);
            // 绑定拖动改变大小
            this.bindResize(elementSelector, elementSelector+">.bar-n",false, true, true, false);//上
            this.bindResize(elementSelector, elementSelector+">.bar-s",false, false, true, false);//下
            this.bindResize(elementSelector, elementSelector+">.bar-w",true,false,false,true);//左
            this.bindResize(elementSelector, elementSelector+">.bar-e",false, false, false, true);//右

            this.bindResize(elementSelector, elementSelector+">.bar-nw3",true, true, false, false);//左上
            this.bindResize(elementSelector, elementSelector+">.bar-ne3",false, true, false, false);//右上
            this.bindResize(elementSelector, elementSelector+">.bar-sw3",true, false, false, false);//左下
            this.bindResize(elementSelector, elementSelector+">.bar-se3",false,false,false,false);//右下

            //选中元素，添加拖拽节点
            _docu.on("click.elem",elementSelector,function(e) {
                var $this = $(this);
                $this.attr("elementId") && !$this.attr("id") && $this.attr("id",$this.attr("elementId"));//给可以拖拽的元素添加id
            });

            // 点击非元素时移除拖拽，旋转
            _docu.on("click",function (e) {
                $this = $(e.target);
<<<<<<< HEAD
                // console.info($this);
=======
>>>>>>> 4f65f7c10e65552c9ebbc9878bf6bf56cba9a8fd
            });

            // 鼠标抬起时解绑移动事件并更新缓存
            _docu.on("mouseup.elem",function (e) {
                $("body").off("mousemove.elem");
                self.removeElementEditBtn({elm:$(e.target)});
                this.releaseCapture && this.releaseCapture();
                if(self.elementChange) {
                    var $node = self.editingNode;
                    if($node && $node instanceof jQuery) {
                        //drag：拖动，size：拉伸
                        var changeType = ($(e.target).attr("class")||"").match("resize") ? "size" : "drag";
                        $node.trigger("element.changed",changeType);
                    }
                    self.elementChange = false;
                }
                $(".onRotating").removeClass("onRotating");
            });

            //元素改变的时候更新editingNode
            _docu.on("element.change",function (e) {
                self.elementChange = true;
            });

            //按下方向键调整元素位置
            _docu.on('keydown',function(e){
                if($.inArray(e.keyCode,[37,38,39,40]) == -1 || !self.editingNode || !self.editingNode instanceof jQuery || (self.editingNode.attr("data-unUsed") || "").indexOf("move") != -1) {
                    return;
                }
                e.preventDefault();
                var left = parseFloat(self.editingNode.css("left")),top = parseFloat(self.editingNode.css("top"));
                if(e.keyCode === 37){
                    left -= 1;
                    top = false;
                }else if(e.keyCode === 38){
                    top -= 1;
                    left = false;
                }else if(e.keyCode === 39){
                    left += 1;
                    top = false;
                }else if(e.keyCode === 40){
                    top += 1;
                    left = false;
                }

                self.setNewPosition({
                    element:self.editingNode,
                    parent:self.editingNode.parents(".elementsContainer"),
                    width:self.editingNode.outerWidth(),
                    height:self.editingNode.outerHeight(),
                    left:left || (left === 0 ? 0 : parseFloat(self.editingNode.css("left"))),
                    top:top || (top === 0 ? 0 : parseFloat(self.editingNode.css("top"))),
                    isDrag:true,
                    elemKeyDown:true
                }).editingNode.trigger("element.change");
            });
        },

        /** [返回元素/元素组的换算后数据]
         * @param  {[object]}  data
         * @param  {[jQuery object]} data.element [元素的jquery对象]
         * @param  {[jQuery object]} data.parent [元素所在/将插入的父节点]
         * @param  {[number]} data.width [元素宽度]
         * @param  {[number]} data.height [元素高度]
         * @param  {[number]} data.minWidth [最小宽度]
         * @param  {[number]} data.minHeight [最小高度]}
         * @return {[object]} [新宽度高度定位 width,height,left,top]
         */
        getInfo:function (data) {
            var $elm  = data.element,
                $parent = data.parent,
                width = data.width,
                height = data.height,
                left = data.left,
                top = data.top,
                parentWidth  = $parent.innerWidth(),
                parentHeight = $parent.innerHeight(),
                minWidth     = 10,
                minHeight    = 10,
                maxLeft      = parentWidth - width,
                maxTop       = parentHeight - height,
                isFreeMove   = data.isFreeMove || this.isFreeMove($elm,data.isDrag),
                canOverTop,
                canOverBottom;

            if(width < minWidth) width = minWidth;
            if(height < minHeight) height = minHeight;
            if($elm.attr('data-elementtype')=='line') height = 2;

            if(maxTop < 0) maxTop = 0;
            top = top ? top > 0 || (isFreeMove && $elm.parents(".wqd-carouseOverlay").length) || canOverTop ? top : 0 : 0;
            if(!data.keepChildren && top > maxTop && !isFreeMove && !canOverBottom) top = maxTop;

            if(left > maxLeft) left = maxLeft;
            if(left <=0 || left.toString().indexOf('px')>0 ) left = 0;

            return {
                width:width,
                height:height,
                left:left,
                top:top
            };
        },

        /** [更新元素定位]
         * @param  {[object]} data
         * @param  {[object]} data.element [元素的jQuery对象]
         * @param  {[object]} data.parent [元素所在/将插入的通条的jQuery对象]
         * @param  {[number]} data.width [元素宽度]
         * @param  {[number]} data.height [元素高度]
         * @param  {[number]} data.left []
         * @param  {[number]} data.top []
         * @param  {[number]} data.minWidth [最小宽度]
         * @param  {[number]} data.minHeight [最小高度]
         * @param  {[boolean]} data.keepChildren [保持子节点位置]}
         */
        setNewPosition:function (data) {
            var $elm         = data.element,
                isDrag       = data.isDrag;

            if(!data.parent.length) data.parent = this.getNode($elm).parent;

            if(data.width === 0 || data.height === 0) return this;
            var newCss = this.getInfo(data);
            if(isDrag) {
                css = {
                    left:newCss.left,
                    top:newCss.top
                }
            }else {
                css = {
                    width:newCss.width,
                    height:newCss.height,
                    left:newCss.left,
                    top:newCss.top
                }

            }

            $elm.css(css);

            if(data.deg && typeof +data.deg === "number") {
                _css.styleInit($elm.attr("id")," ",{
                    "transform":"rotateZ("+data.deg+"deg)",
                    "-webkit-transform":"rotateZ("+data.deg+"deg)"
                });
                $elm.attr("data-rotate",data.deg);
            }
            if(data.deg == 0) $elm.trigger('clearRotate');
            return this;
        },

        getNode:function ($this) {
            var $elm = $this,
                $parent = $elm.parents(".edit_area").eq(0);
            return {
                element:$elm,
                parent:$parent
            };
        },

        isFreeMove:function ($elm,isDrag) {
            if($elm.parents('.scene') || $("body").attr("data-carouseediting") == "true") {
                return true;
            }
            return false;
        },

        /** 绑定拖动
         * @param  {[string]} elm [拖动元素的上下文选择器字符串]
         */
        bindDrag:function (elm) {
            // 默认整个div可拖动
            var self = this;
            $(document).on("mousedown",elm,function (e) {
                if(e.button == 2) return false; //右键按下的时候阻止默认事件
                var $elm          = $(this),
                    isEditable    = true;   //可编辑的

                //没有元素id的话主动添加一个新id
                if(!$elm.attr("elementId")){
                    var newElementId = tools.createID("elementId");
                    $elm.attr({"elementId":newElementId,"id":newElementId});
                }

                if($elm.attr("data-elementtype") == "articleListContainer") $elm = $elm.parents("[data-elementtype='article']").eq(0);//文章时拖动父节点

                var unused = $elm.attr("data-unused") || "";

                self.editingNode = $elm;

                var $parent = self.getNode($elm).parent;
                var isFreeMove = false;

                if(!$elm.length || !$parent.length) return false;

                var disX = e.clientX,
                    disY = e.clientY;
                e.stopPropagation();
                this.setCapture && this.setCapture();

                var left = parseFloat($elm.css("left")),
                    top = $elm.hasClass('dragMar') ? parseFloat($elm.css("marginTop")):parseFloat($elm.css("top"));

                $("body").off("mousemove.elem").on("mousemove.elem.drag",function (e) {
                    e.stopPropagation();
                    var eLeft   = e.clientX - disX,
                        eTop = e.clientY - disY;
                    // 设置定位
                    self.setNewPosition({
                        element:$elm,
                        parent:$parent,
                        width:$elm.outerWidth(),
                        height:$elm.outerHeight(),
                        left: left + eLeft,
                        top: top + eTop,
                        isDrag:true,
                        isFreeMove:isFreeMove,
                        event:e
                    });

                    self.removeElementEditBtn({type:"move",toolbar:false});//拖动时也显示拖拽节点
                    // 拖拽结束时触发改动事件
                    $elm.trigger("element.change");
                    // 拖动时候其他元素透明
                    $elm.addClass("onDragingElement").parents(".sectionV2,.wqd-carouseOverlay").addClass("onDraging");
                });
            });
        },

        /** 拖动改变元素大小
         * @param  {[String]} elEditosSelector [元素所在/将插入的通条选择器字符串]
         * @param  {[String]} elm [元素选择器]
         * @param  {[String]} handle [触发的元素(上下左右 左上 左下 右上 右下)选择器]
         * @param  {[Boolean]} isLeft [是否左侧]
         * @param  {[Boolean]} isTop [是否上]
         * @param  {[Boolean]} lockX [锁定x轴]
         * @param  {[Boolean]} lockY [锁定y轴]
         * @return {[object]} {width,height,left,top} [新宽度高度定位]
         */
        bindResize:function (elm,handle,isLeft,isTop,lockX,lockY) {
            var self = this;
            $(document).on("mousedown",handle,function (e) {
                if(e.button == 2) return false; //右键按下的时候阻止默认事件
                e.stopPropagation();
                var $this    = $(this),
                    $elm     = $this.parents(elm).eq(0),
                    $parent  = self.getNode($elm).parent,
                    offLeft  = $(handle).offset().left,
                    offTop = $(handle).offset().top,//当前相对文档left,top
                    clientX  = e.clientX,
                    clientY = e.clientY,
                    disX = clientX - offLeft,
                    disY = clientY - offTop,//x,y,偏移x,偏移y
                    top = $elm.hasClass('dragMar') ? parseFloat($elm.css("marginTop")):parseFloat($elm.css("top")),
                    left = parseFloat($elm.css("left")),//元素离通条顶部、左边距离
                    width    = $elm.outerWidth(),
                    height = $elm.outerHeight();//元素宽高

                self.editingNode = $elm;
                $("body").off("mousemove.elem").on("mousemove.elem.resize",function (e) {
                    e.stopPropagation();
                    var ndisX = e.clientX - disX,
                        ndisY = e.clientY - disY,//偏移距离
                        addWidth   = isLeft ? offLeft - ndisX : e.clientX - clientX,//增加/减少的宽度
                        addHeight  = isTop ? offTop - ndisY : e.clientY - clientY,
                        newLeft    = isLeft ? left-addWidth : left,
                        newWidth   = lockX ? width : width + (isLeft ? (addWidth >= left ? left : addWidth):addWidth),//新宽度，如果为向左拉则不能超过元素离左边距离
                        newHeight  = lockY ?  height : height + (isTop ? (addHeight >= top ? top : addHeight):addHeight),//新高度，如果为向上拉则不能超过元素离上边距离
                        newTop     = isTop ? top - addHeight : top,
                        isFreeMove = self.isFreeMove($elm),
                        minTop,
                        maxTop,
                        maxLeft;

                    var newPosition = {
                        element:$elm,
                        parent:$parent,
                        width:newWidth,
                        height:newHeight,
                        left:newLeft,
                        top:newTop,
                        isLeft:true
                    };

                    self.setNewPosition(newPosition);
                    // 拖拽结束时触发改动事件(以后备用)
                    $elm.trigger("element.change").trigger("element.resize");
                });
            });
        },
        /** 更新元素宽高定位 (父节点改变宽高等)
         * @param  {[object]} $parent       [父节点对象]
         */
        updateElements:function ($parent) {
            var self = this;
            $parent.find(">[data-elemandgroup='true']").each(function(i,_){
                var $elm = $(_);
                var newData = {
                    element:$elm,
                    parent:$parent,
                    width:$elm.outerWidth(),
                    height:$elm.outerHeight(),
                    left:parseFloat($elm.css("left")),
                    top:parseFloat($elm.css("top")),
                    keepChildren:true
                };
                self.setNewPosition(newData);
                $elm.trigger('element.change').trigger("element.changed","size");
            });
        },

        /** [移除选中元素时显示的按钮节点等]
         * @param  {[object]} list [移除的借点列表]
         */
        removeElementEditBtn:function (list) {
            list = list || {};
            var resizeTool = $(".resizeT,.resizeB,.resizeL,.resizeR,.resizeLT,.resizeTR,.resizeLB,.resizeBR");
            resizeTool.length && list.type != "move" && resizeTool.remove();

            list.toolbar && $(".elementToolbar,.rotationdiv").remove();// 移除元素浮动工具栏
            $(".onDraging").removeClass("onDraging").find(".onDragingElement").removeClass("onDragingElement");// 移除正在拖动class
            $(document).trigger("removeGroup");

            if (list.elm) {//双击元素编辑时触发的操作
                var $group = list.elm.parents(".wqdGroup");
                $group.length ? $group.siblings("[data-groupstatus='on']").attr("data-groupstatus","off") : $("[data-groupstatus='on']").attr("data-groupstatus","off");
            }
        },

        deleteElement:function ($elm) {
            $elm.trigger("element.remove");
            var $siblings = $elm.siblings().eq(0),
                $parent   = $elm.parents("[data-elemandgroup=true]").eq(0);
            $("style."+$elm.attr("elementid")+",style."+$elm.attr("groupid")).remove();
            $elm.remove();
            //悬浮容器
            if($elm.hasClass("wqdFixedContainer") && !$(".wqdFixedContainerWrap").find(".wqdFixedContainer").length){
                $(".wqdFixedContainerWrap, .fixedController").remove();
            }
            // this.getElemZindex($siblings,"reset",$siblings.length ? void 0 : $parent);
            //$(document).trigger("appSetCatch");
        }
    };

    return getElementInfo;
});