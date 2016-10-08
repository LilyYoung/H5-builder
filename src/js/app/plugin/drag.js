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
                console.info($this);
            });

            // 鼠标抬起时解绑移动事件并更新缓存
            _docu.on("mouseup.elem",function (e) {
                //删除参考线
                // $(".wqdAdsorbGuides").remove();
                $("body").off("mousemove.elem");

                self.removeElementEditBtn({elm:$(e.target)});

                this.releaseCapture && this.releaseCapture();
                if(self.elementChange) {
                    var $node = self.editingNode;
                    if($node && $node instanceof jQuery) {
                        //drag：拖动，size：拉伸
                        var changeType = ($(e.target).attr("class")||"").match("resize") ? "size" : "drag";
                        $node.trigger("element.changed",changeType);
                        // 拖拽出通条一部分时候回滚
                        if($node.parent().hasClass('sectionV2') && !$node.closest('.articleDetails').length) {
                            self.setNewPosition({
                                element:$node,
                                parent:$node.parent(),
                                width:$node.width(),
                                height:$node.height(),
                                left:parseFloat($node.css("left")),
                                top:parseFloat($node.css("top")),
                                isChangeSection:true
                            })
                        }
                    }
                    _docu.trigger("elementDragEnd").trigger("appSetCatch");
                    self.elementChange = false;
                }
                $(".onRotating").removeClass("onRotating");
            });

            //元素改变的时候更新editingNode
            _docu.on("element.change",function (e) {
                self.elementChange = true;
            });

            //显示元素信息事件
            _docu.on("elemResizeInfo:show",function (e) {
                self.showElemResizeInfo($(e.target));
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
            //双击编辑元素
            _docu.on("dblclick",".wqdelementEdit",function (e) {
                var $group = $(this).closest(".wqdGroup");
                // 如果是通条编辑界面下的非组合容器，不让里面内容可以选中,然后向上冒泡到容器本身
                if($(this).parents(".elementsContainer").length > 1 && $("body").attr("data-carouseediting") != "true" && !$group.length) return;
                if($(this).parents(".wqdCarousel").length && $("body").attr("data-carouseediting") == "true") e.stopPropagation();
                // 容器修改状态下禁止双击弹出编辑器
                if($(this).hasClass("elementsContainer") && $(this).parent().hasClass("wqd-carouseOverlay-box") && $("body").attr("data-carouseediting") == "true") return false;
                self.removeElementEditBtn({toolbar:true,elm:$(e.target)});
                if($('body').data('exitId') != $(this).attr('id')) _docu.trigger("elmenentEdit",{element:$(this)});
            });

            // 通条高度改变时重置通条内元素的高度
            // _docu.on("changeHeight:section",function(e,data){
            //     self.updateElements(data.parent);
            // });
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
            var $elm  = data.element, $parent = data.parent,
                width = data.width, height = data.height, left = data.left, top = data.top,
                parentWidth  = $parent.innerWidth(),
                parentHeight = $parent.innerHeight(),
                minWidth     = 10,
                minHeight    = 10,
                maxLeft      = parentWidth - width,
                maxTop       = parentHeight - height,
                isFreeMove   = data.isFreeMove || this.isFreeMove($elm,data.isDrag),
                // $parPrev     = $parent.parents(".yzmoveContent").prev().find("section.sectionV2"),
                // $parNext     = $parent.parents(".yzmoveContent").next().find("section.sectionV2"),
                canOverTop,canOverBottom;

            if(data.isDrag && $elm.parent().hasClass('sectionV2')) {//切换通条，可以拖出上边缘，下边缘
                canOverTop = $parPrev.length ? true : false;
                canOverBottom = $parNext.length ? true : false;
            }

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
                $group       = $elm.parents(".wqdGroup"),
                isDrag       = data.isDrag,
                newElementId = tools.createID("elementId");
            // 如果是刚创建分组,更新位置
            if(data.group == "join") {
                data.left = data.left - parseFloat($group.css("left"));
                data.top  = data.top - parseFloat($group.css("top"));
            } else if(!$elm.attr("elementId") && !$elm.hasClass("wqdGroup")){
                $elm.attr({"elementId":newElementId,"id":newElementId});
            }
            // 解组时重新计算位置
            if(data.group == "disjoin") {
                data.left += data.groupleft;
                data.top  += data.grouptop;
            }

            if($group.length) data.parent = $group;
            if(!data.parent.length) data.parent = this.getNode($elm).parent;
            //悬浮容器改变父元素
            if($elm.hasClass("wqdFixedContainer")) {
                data.parent = $elm.parents(".wqdFixedContainerWrap");
            }
            if(data.width === 0 || data.height === 0) return this;
            var newCss = this.getInfo(data);
            if(isDrag) {
                if(data.parent.hasClass('sectionV2') && newCss.top < 0 || newCss.top > data.parent.height() - $elm.height() / 2) {
                    data.top = newCss.top;
                    this.changeSection(data);
                    newCss.top = parseFloat(data.top);
                }
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
            if($elm.hasClass('dragMar')) {
                delete css.top;
                delete css.height;
                css.marginTop = newCss.top;
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
            if( data.isAdd || data.group === "joinGroup" || data.group === "disjoin" ) this.getElemZindex($elm,"top",data.parent,data.isAdd,data.group);
            data.elemKeyDown && this.showElemResizeInfo($elm);
            return this;
        },

        changeSection:function (data) {
            var $elm  = data.element,
                $clone= $elm.clone(),
                $prev = $elm.parents(".yzmoveContent").prev().find(".sectionV2"),
                $next = $elm.parents(".yzmoveContent").next().find(".sectionV2"),
                $parent = this.getNode($elm).parent,
                elemH = $elm.height(),isAppend = false,$newPar,top = data.top;
            if(-top > elemH / 2 && $prev.length) {
                $elm.css("top",$prev.height() + parseFloat($elm.css("top")) );
                isAppend = true;
                $newPar = $prev;
                top = $prev.height() - elemH;
            }else if(top > data.parent.height() - elemH / 2 && $next.length) {
                $elm.css("top",parseFloat($elm.css("top")) - data.parent.height() );
                isAppend = true;
                $newPar = $next;
                top = 0;
            }

            if(isAppend) {
                var $siblings = $elm.siblings("[data-elemandgroup='true']") ,style = $('style.'+$elm.attr('id'));
                $newPar.append($elm.css("top",top));
                data.parent = $newPar;
                data.isAdd = true;
                data.top = top;
                this.setNewPosition(data);
                $("body").off("mousemove.elem");
                style.length && $newPar.before(style[0]);
                this.getElemZindex($siblings.eq(0),"reset",$siblings.length ? void 0 : $parent,void 0,void 0,true);
            }
        },

        getNode:function ($this) {
            var $elm = $this,
                $parent = $elm.parents(".wqdGroup,.wqdCarousel,.wqd-form,.elemContBox,.elementsContainer,.bannerContainer,.sectionV2").eq(0);
            if($parent.hasClass("wqdGroup")) $parent = $parent.children(".wqdelementEditBox");
            return {
                element:$elm,
                parent:$parent
            };
        },

        isFreeMove:function ($elm,isDrag) {
            if($elm.hasClass("correlationBox") ||
                $elm.hasClass('freeMove') ||
                // ($elm.parent().hasClass('sectionV2') && $elm.parents(".yzmoveContent").siblings().find("section.sectionV2").length && isDrag) ||
                $elm.parents(".fullscreen").length &&
                $elm.parent().hasClass('sectionV2') &&
                !$("#wqdIphoneContainer").length &&
                $("body").attr("data-carouseediting") == "true") {
                return true;
            };
            return false;
        },

        /** [获得元素层级]
         * @param  {[object]}   $elm [元素对象]
         * @param  {[string]}   indexType [定位类型 up,down,top,bottom]
         * @param  {[object]}   parent [元素父节点对象]
         * @param  {[boolean]}  isAdd [是否新加元素]
         * 层级提高 ,向上一层，向下一层，顶层，底层
         */
        getElemZindex:function ($elm,indexType,parent,isAdd,group,notSetCatch) {
            if(group === "join") return;
            var $parent   = $(parent).length ? $(parent) : this.getNode($elm).parent,
                isDisjoin = group == "disjoin",isResetOther = group == "resetother",isJoinGroup = group == "joinGroup",
                $allEment = isResetOther? $elm.siblings("[data-elemandgroup='true']") : $parent.find(">[data-elemandgroup='true']"),
                maxzIndex,zindex;

            maxzIndex = $allEment.length - (isDisjoin ? 1 : 0);//如果是解组的话maxzindex为元素数减去分组本身
            zindex    = isAdd || isDisjoin ? maxzIndex : $elm.css("z-index");
            zindex    = zindex == "auto" || isNaN(zindex) ? 1 : zindex;

            // 兼容之前已经可能因误操作引起的排列混乱
            if($parent.attr("data-maxZindex") > maxzIndex && maxzIndex != 0 && !isDisjoin && !isResetOther && !isJoinGroup && indexType != "reset") {
                $parent.attr("data-maxZindex",maxzIndex);
                this.getElemZindex($elm,"reset",$parent,false,false);
            }
            // 根据选择切换需改变的元素们的z-index,向上一层，向下一层，顶层，底层
            switch(indexType || "top") {
                case "up":
                    var newzIndex = parseInt(zindex,10)+1;
                    $allEment.each(function (i,_) {
                        var tzindex = $(this).attr("data-zindex") || 1;
                        if(+tzindex == newzIndex) {
                            $(this).css("z-index",tzindex-1).attr("data-zindex",tzindex-1);
                        }
                    });
                    zindex = newzIndex > maxzIndex ? maxzIndex : newzIndex;
                    break;
                case "down":
                    var newzIndex = parseInt(zindex,10)-1;
                    $allEment.each(function (i,_) {
                        var tzindex = $(this).attr("data-zindex") || 1;
                        if(+tzindex == newzIndex) {
                            $(this).css("z-index",parseInt(tzindex,10)+1).attr("data-zindex",parseInt(tzindex,10)+1);
                        }
                    });
                    zindex = newzIndex > maxzIndex ? maxzIndex : newzIndex;
                    break;
                case "top":
                    $allEment.each(function (i,_) {
                        var tzindex = $(this).attr("data-zindex") || 1;

                        if(+tzindex > zindex) {
                            $(this).css("z-index",parseInt(tzindex,10)-1).attr("data-zindex",parseInt(tzindex,10)-1);
                        }
                    });
                    zindex = maxzIndex;
                    break;
                case "bottom":
                    $allEment.each(function (i,_) {
                        var tzindex = $(this).attr("data-zindex") || 1;
                        if(+tzindex < zindex) {
                            $(this).css("z-index",parseInt(tzindex,10)+1).attr("data-zindex",parseInt(tzindex,10)+1);
                        }
                    });
                    zindex = 1;
                    break;
                case "reset":
                    var newAllElem = $allEment.sort(function(a, b) {
                        return $(a).attr("data-zindex") - $(b).attr("data-zindex");
                    });
                    for(var i = 0; i < newAllElem.length; i++) {
                        $(newAllElem[i]).attr("data-zindex",i+1).css("z-index",i+1);
                    }
                    zindex = $elm.attr("data-zindex");
                    break;
            }

            if(zindex < 1) zindex = 1;
            if(zindex >= maxzIndex) maxzIndex = zindex;
            $parent.attr("data-maxZindex",maxzIndex);
            indexType != "reset" && $elm.css({"z-index":zindex}).attr("data-zindex",zindex);

            if(group=="joinGroup") {
                // 如果是新添加组,重置组内zindex
                this.getElemZindex($elm.children("[data-elemandgroup='true']").eq(0),"reset",$elm.attr("data-maxZindex",0),false,false);
                this.getElemZindex($elm,"reset",$elm.parents(".sectionV2"),false,"resetother");
            }
            if( !notSetCatch && !isAdd && !group) $(document).trigger("appSetCatch");
        },

        /** [生成拖拽节点]
         * @param {[object]} $elm  [选中元素]
         * @param {[boolean]} onlyX [是否仅允许拖拽X方向]
         */
        setResizeUI:function ($elm,onlyX) {
            var elmDragDom = [];
            this.removeElementEditBtn();
            elmDragDom.push("<div class='resizeL'></div><div class='resizeR'></div>");
            if(!onlyX) {
                elmDragDom.push("<div class='resizeT'></div>","<div class='resizeB'></div>","<div class='resizeLT'></div>","<div class='resizeTR'></div>","<div class='resizeBR'></div>","<div class='resizeLB'></div>");
            }
            $elm.append(elmDragDom.join(""));
        },

        /** 绑定拖动
         * @param  {[string]} elm [拖动元素的上下文选择器字符串]
         */
        bindDrag:function (elm) {
            // 默认整个div可拖动
            var self = this;

            $(document).on("mousedown",elm,function (e) {
                // $(".wqdNavMenuWrap").remove();  //删除手机导航自定义的菜单
                if(e.button == 2) return false; //右键按下的时候阻止默认事件
                var $elm          = $(this),
                    isEditable    = true,   //可编辑的
                    $group        = $elm.parents(".wqdGroup");

                //编辑模式
                if($("body").attr("data-carouseediting") == "true"){
                    if($elm.hasClass("elementsContainer")){
                        isEditable = false;
                        $('#elementSet').hide();
                    }
                }else{
                    //容器内的元素
                    if($(this).closest(".wqdelementEdit.elementsContainer").length){
                        $elm = $(this).closest(".wqdelementEdit.elementsContainer");
                    }
                }
                //触发元素的设置编辑器
                if(($elm.attr("data-unused") || '').indexOf("set") == -1){
                    if($elm.attr("data-elementtype") != "img" && $elm.attr("data-elementtype") != "picture"){
                        $(document).trigger("texteditor:close");
                        $('#wqdpHeaderD .tool-list2').removeClass('have');
                        $('body').data('exitId',$elm.attr('id'));
                        isEditable && $(document).trigger("elmenentEdit",{element:$elm});
                    }else{
                        $('#elementSet').hide();
                    }
                }else{
                    $('body').data('exitId','');
                    $('#elementSet').hide();
                }

                $('.wqdelementEdit').removeClass('wqdselected wqdGroupmove');

                //没有元素id的话主动添加一个新id
                if(!$elm.attr("elementId") && !$elm.hasClass("wqdGroup")){
                    var newElementId = tools.createID("elementId");
                    $elm.attr({"elementId":newElementId,"id":newElementId});
                }

                if($elm.attr("data-elementtype") == "articleListContainer") $elm = $elm.parents("[data-elementtype='article']").eq(0);//文章时拖动父节点

                var unused = $elm.attr("data-unused") || "";
                // 如果handle是分组中的元素并且是第一次点击，向上冒泡到分组元素
                if($group.length && $group.attr("data-groupstatus") != "on") return;
                // 如果是通条编辑界面下的非分组容器下元素，不允许拖动,向上冒泡到容器元素
                if(unused.indexOf("bubble") == -1 && $elm.parents(".elementsContainer").length > 1 && $("body").attr("data-carouseediting") != "true" && !$group.length) return;
                if($(e.target).closest("[data-slide]").length) return;// 如果点击的是轮播的按钮，return;


                self.editingNode = $elm;

                if(unused.indexOf("drag") != -1 || unused.indexOf("move") != -1) return false;//因为导航一级菜单禁止删除失效问题打开

                var $parent = self.getNode($elm).parent;
                var isFreeMove = false;

                // 修改模式下容器可以拖动
                if($elm.parent().hasClass('wqd-carouseOverlay-box')) {
                    $elm = $elm.parent();
                    $parent = $elm.parents(".wqd-carouseOverlay");
                    isFreeMove = true;
                }
                //悬浮容器改变父元素
                if($elm.hasClass("wqdFixedContainer")) {
                    $parent = $elm.parents(".wqdFixedContainerWrap");
                }

                if(!$elm.length || !$parent.length) return false;
                $elm.addClass("wqdselected");
                var disX = e.clientX,disY = e.clientY;
                e.stopPropagation();
                this.setCapture && this.setCapture();
                self.showElemResizeInfo($elm);
                //初始化吸附线的坐标数据
                adsorb.dataInit($elm);

                var left = parseFloat($elm.css("left")),top = $elm.hasClass('dragMar') ? parseFloat($elm.css("marginTop")):parseFloat($elm.css("top"));

                $("body").off("mousemove.elem").on("mousemove.elem.drag",function (e) {
                    e.stopPropagation();
                    var eLeft   = e.clientX - disX, eTop = e.clientY - disY;
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
                    //拖拽吸附 参考线出现
                    adsorb.moveAdsorb($elm, $elm.position().left, $elm.position().top,true);
                    // 拖拽结束时触发改动事件
                    $elm.trigger("element.change");
                    self.showElemResizeInfo($elm);
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
                var $group = $(this).parents(".wqdGroup");
                if($group.length && $group.attr("data-groupstatus") != "on") return false;
                e.stopPropagation();
                var $this    = $(this),
                    $elm     = $this.parents(elm).eq(0),
                    $parent  = self.getNode($elm).parent,
                    $editBox = $elm.children('.wqdelementEditBox'),
                    offLeft  = $(handle).offset().left, offTop = $(handle).offset().top,//当前相对文档left,top
                    clientX  = e.clientX, clientY = e.clientY, disX = clientX - offLeft, disY = clientY - offTop,//x,y,偏移x,偏移y
                    top      = $elm.hasClass('dragMar') ? parseFloat($elm.css("marginTop")):parseFloat($elm.css("top")), left = parseFloat($elm.css("left")),//元素离通条顶部、左边距离
                    width    = $elm.outerWidth(), height = $elm.outerHeight();//元素宽高
                //悬浮容器改变父元素
                if($elm.hasClass("wqdFixedContainer")) {
                    $parent = $elm.parents(".wqdFixedContainerWrap");
                }
                //初始化吸附线的坐标数据
                adsorb.dataInit($elm);
                self.editingNode = $elm;
                $("body").off("mousemove.elem").on("mousemove.elem.resize",function (e) {
                    e.stopPropagation();
                    var ndisX = e.clientX - disX, ndisY = e.clientY - disY,//偏移距离
                        addWidth   = isLeft ? offLeft - ndisX : e.clientX - clientX,//增加/减少的宽度
                        parWidth   = $parent.width(),
                        parHeight  = $parent.height(),
                        maxWidth   = parWidth - left,
                        newLeft    = isLeft ? left-addWidth : left,
                        newWidth   = lockX ? width : width + (isLeft ? addWidth >= left ? left : addWidth:addWidth),//新宽度，如果为向左拉则不能超过元素离左边距离
                        addHeight  = isTop ? offTop - ndisY : e.clientY - clientY,
                        maxHeight  = parHeight - top,
                        newTop     = isTop ? top - addHeight : top,
                        newHeight  = lockY ? height : height + (isTop ? addHeight >= top ? top : addHeight:addHeight),//新高度，如果为向上拉则不能超过元素离上边距离
                        isPhone    = $("#wqdIphoneContainer").length > 0,
                        isFreeMove = self.isFreeMove($elm),minTop,maxTop,maxLeft;

                    // 图片元素高度最大不超过图片的高度
                    var $img = $elm.find(".wqd-img");
                    if($elm.attr("data-elementtype") == "img" && $img.length && newHeight > $img.outerHeight()) {
                        var $editBox = $elm.find(".wqdelementEditBox"),border = $editBox.css("border-width"),padding = $editBox.css("padding");
                        newHeight = $img.outerHeight() + (border ? parseFloat(border) * 2 : "") + (padding ? parseFloat(padding) * 2 : "");
                        minTop = top + height - newHeight;
                        newTop < minTop && (newTop = minTop);
                    }
                    // 如果拖动的是左边框，距离左边最小left为0,向右最大left不能超过原right的距离
                    if(isLeft && (!isFreeMove || isPhone)) {
                        newLeft = newLeft >= 0 ? newLeft : 0;
                        maxLeft = left + width - 10;
                        newLeft = newLeft > maxLeft ? maxLeft : newLeft;
                    }else if(newWidth >= maxWidth && (!isFreeMove || isPhone)) {//手机或自由拖动状态下可以拖出主区域
                        newWidth = maxWidth;
                    }
                    // 如果拖动的是上边框，距离上边最小top为0
                    if(isTop) {
                        newTop = newTop >= 0 ? newTop :0;
                        maxTop = top + height - 10;
                        newTop = newTop > maxTop ? maxTop : newTop;
                    }else if(newHeight >= maxHeight && !isFreeMove) {
                        newHeight = maxHeight;
                    }

                    // 如果宽度达到97%,自动100%
                    if(newWidth/parWidth > 0.97 && !isFreeMove) {
                        newWidth = parWidth;
                        newLeft = 0;
                    }
                    var newPosition = {
                        element:$elm,
                        parent:$parent,
                        width:newWidth,
                        height:newHeight,
                        left:newLeft,
                        top:newTop,
                        isLeft:true
                    };
                    // 兼容已使用百分比的容器 拉伸容器的时候子元素转换为px
                    if($elm.hasClass("elementsContainer") && $elm[0].style.width.indexOf("%") != -1) {
                        self.updateElements(self.getNode($elm.find(".wqdelementEdit").eq(0)).parent);
                    }

                    //拖拽吸附
                    adsorb.moveAdsorb($elm, newLeft, newTop,false);
                    self.setNewPosition(newPosition).showElemResizeInfo($elm);
                    // 拖拽结束时触发改动事件 导航用到
                    $elm.trigger("element.change").trigger("element.resize");
                    // 拖动时候其他元素透明
                    $elm.addClass("onDragingElement").parents(".sectionV2,.wqd-carouseOverlay").addClass("onDraging");
                    /*$(".elementToolbar").css({
                     "top": $elm.offset().top+$elm.outerHeight(),
                     "left":$elm.offset().left
                     });*/
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

        /** 设置宽高位移提示信息
         * @param  {[object]} $elm [元素对象]
         */
        showElemResizeInfo:function ($elm) {
            var self = this,
                deg  = +$elm.attr("data-rotate") || 0;
            $(".elemResizeInfo").show().css({
                "top": $elm.offset().top-40,
                "left":$elm.offset().left
            }).attr("data-unused",$elm.attr("data-unused"))
                .find(".elemResizeInfoX").html(Math.round($elm.position().left))
                .siblings(".elemResizeInfoY").html(Math.round($elm.position().top))
                .siblings(".elemResizeInfoW").html(Math.round($elm.outerWidth()))
                .siblings(".elemResizeInfoH").html(Math.round($elm.outerHeight()))
                .siblings(".elemResizeInfoDeg").html(( deg >=0 ? deg : 360 + deg ).toFixed(1));

            $(document).off("elemResizeInfo:change").on("elemResizeInfo:change",function (e,data) {
                var $parent = $elm.parents(".elementsContainer"),
                    newData = {
                        element:$elm,
                        parent:$parent,
                        width:data.width || $elm.width(),
                        height:data.height || $elm.height(),
                        left:data.left - _rotate.getDiffInfo($elm).left || (data.left === 0 ? data.left : parseFloat($elm.css("left"))),
                        top:data.top - _rotate.getDiffInfo($elm).top || (data.top === 0 ? data.top : parseFloat($elm.css("top"))),
                        deg:data.deg
                    };
                if(data.width || data.height) {
                    var maxWidth  = $parent.width() - parseFloat($elm.css("left"));
                    var maxHeight = $parent.height() - parseFloat($elm.css("top"));
                    //导航二级菜单不限制
                    if($elm.hasClass("wqdSecondNavbox")) maxHeight = 999999;
                    newData.width = data.width > maxWidth ? maxWidth : data.width;
                    newData.height = data.height > maxHeight ? maxHeight : data.height;
                }
                self.setNewPosition(newData);
                data.setCatch && $(document).trigger("appSetCatch");
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
            this.getElemZindex($siblings,"reset",$siblings.length ? void 0 : $parent);
            //$(document).trigger("appSetCatch");
        }
    };

    return getElementInfo;
});