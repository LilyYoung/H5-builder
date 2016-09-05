<div id="containment" class="view-space">
    <ul class="nav nav-tabs" style="display: none;">
        <li ng-class="{active:pagetab=='page'}" class="active">
            <a onclick="pagetab='page'">页面模板</a>
        </li>
        <li ng-class="{active:pagetab=='comp'}">
            <a onclick="pagetab='comp'">组件管理</a>
        </li>
    </ul>
    <div class="nav-top">
        <div class="nav-top-list">
            <div class="save-template">
                <div class="operate">
                    <a class="delete" title="删除当前页" onclick="deletePage($event)">
                        <i class="eqf-scene-delete glyphicon glyphicon-asterisk"></i>
                    </a>
                    <a onclick="duplicatePage()" class="copy" title="复制当前页">
                        <i class="eqf-scene-copy glyphicon glyphicon-plus"></i>
                    </a>
                </div>
                <div class="my-tpl-title">存为</div>
                <div class="btn-group" style="display: none;">
                    <button type="button" class="btn" style="border-right: 0;">
                        <a onclick="creatMyTemplate()" title="当前页存为我的模板">
                            <span>我的模板</span>
                        </a>
                        <a style="display: none;" title="当前页存为企业模板">
                            <span>企业模板</span>
                        </a>
                        <a style="display: none;" title="当前页存为我的秀版">
                            <span>我的秀版</span>
                        </a>
                    </button>
                    <button type="button" class="btn dropdown-toggle" style="border-left: 0;" onclick="openMenu()">
                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" style="display: none;">
                        <li>
                        <a class="hint--left hint--rounded template-active">
                            <span>企业模板</span>
                        </a>
                        </li>
                        <li onclick="creatMyTemplate();selectedTemplate('myTemplate');btnGroup.caretSwitch = false">
                            <a class="hint--left hint--rounded">
                                <span>我的模板</span>
                            </a>
                        </li>
                        <li>
                            <a class="hint--left hint--rounded">
                                <span>我的秀版</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="btn-group">
                    <div class="btn">
                        <a onclick="creatMyTemplate()" class="hint--left hint--rounded" title="保存到我的模板">我的模板</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-content">
        <div eqd-scroll="" style="height: 100%; position: relative; overflow: hidden;">
            <ul class="page-uls ui-sortable" id="pageList" ui-sortable="sortableOptions" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                <li class="blurClass current">
                    <span class="number"><em>1</em></span>
                    <span ng-show="page.properties.xb" class="pushXB">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name">第1页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">2</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第2页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">3</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第3页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">4</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第4页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">5</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第5页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">6</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第6页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">7</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第7页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">8</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第8页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">9</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第9页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">10</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第10页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">11</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第11页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass ng-scope" onclick="navTo(page, $index, $event);">
                    <span class="number">
                        <em class="ng-binding">12</em>
                    </span>
                    <span class="pushXB ng-hide">
                        <span class="small">推</span>
                        <span class="normal">推客任务</span>
                    </span>
                    <span class="page-name" onclick="pageNum-1 == $index?setEditableStatus($index,true,$event):return;">第12页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
            </ul>
            <div class="iScrollVerticalScrollbar iScrollLoneScrollbar" style="position: absolute; z-index: 9999; width: 7px; bottom: 2px; top: 2px; right: 1px; overflow: hidden;">
                <div class="iScrollIndicator" style="box-sizing: border-box; position: absolute; border: 1px solid rgba(255, 255, 255, 0.901961); border-radius: 3px; width: 100%; transition-duration: 0ms; display: block; height: 235px; transform: translate(0px, 0px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); background: rgba(0, 0, 0, 0.498039);"></div>
            </div>
        </div>
        <!--每个页面视图对应的右侧页面-->
        <div class="page-list-label ui-draggable ng-hide" panel-draggable="" style="left: 1476px; top: 50px;">
            <div ng-include="'scene/page/page-tpl.tpl.html'" ng-controller="PageTplController" class="ng-scope">
                <div ng-show="scene.isTpl==2 || isTplEditor" class="ng-scope ng-hide">
                    <h4>元素特性设置</h4>
                    <div>
                        <ul class="tpl-uls ng-scope" ng-repeat="tplElement in textElements">
                        <li hover-element="" id="tplElement.id" class="ng-isolate-scope">
                            <span class="ng-binding">文字&nbsp;1</span>
                            <span>类型</span>
                            <select ng-model="tplElement.properties.type" class="ng-pristine ng-valid">
                                <option value="? undefined:undefined ?"></option>
                                <option value="0">无</option>
                                <option value="1">收卡人</option>
                                <option value="2">发卡人</option>
                                <option value="3">祝福语</option>
                            </select>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="tpl-option"></div>
    </div>
    <div class="nav-bottom">
        <a class="eqf-more ng-isolate-scope glyphicon glyphicon-chevron-down" close-panel="" model="showPage" pause="false" onclick="showPage=true;hidePageTip();"></a>
        <a onclick="longAction()" class="insert hint--top hint--rounded fade-color" title="添加一页" data-event="12022">+</a>
        <div style="display: none" class="ng-hide">
            <ul>
                <li onclick="insertPage();showPage=false;" data-event="12022">新建页面</li>
                <li onclick="addLongPage()" data-event="12023">新建纵向长页面</li>
            </ul>
        </div>
    </div>
</div>