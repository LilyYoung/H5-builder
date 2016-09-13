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
                    <a class="delete _delete_page hint--right hint--rounded" data-hint="删除当前页">
                        <i class="eqf-scene-delete fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                    <a class="copy _copy_page hint--right hint--rounded" data-hint="复制当前页">
                        <i class="eqf-scene-copy fa fa-files-o" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="my-tpl-title">存为</div>
                <!--<div class="btn-group" style="display: none;">-->
                    <!--<button type="button" class="btn" style="border-right: 0;">-->
                        <!--<a onclick="creatMyTemplate()" title="当前页存为我的模板">-->
                            <!--<span>我的模板</span>-->
                        <!--</a>-->
                        <!--<a style="display: none;" title="当前页存为企业模板">-->
                            <!--<span>企业模板</span>-->
                        <!--</a>-->
                        <!--<a style="display: none;" title="当前页存为我的秀版">-->
                            <!--<span>我的秀版</span>-->
                        <!--</a>-->
                    <!--</button>-->
                    <!--<button type="button" class="btn dropdown-toggle" style="border-left: 0;" onclick="openMenu()">-->
                        <!--<span class="caret"></span>-->
                    <!--</button>-->
                    <!--<ul class="dropdown-menu" style="display: none;">-->
                        <!--<li>-->
                        <!--<a class="hint&#45;&#45;left hint&#45;&#45;rounded template-active">-->
                            <!--<span>企业模板</span>-->
                        <!--</a>-->
                        <!--</li>-->
                        <!--<li onclick="creatMyTemplate();selectedTemplate('myTemplate');btnGroup.caretSwitch = false">-->
                            <!--<a class="hint&#45;&#45;left hint&#45;&#45;rounded">-->
                                <!--<span>我的模板</span>-->
                            <!--</a>-->
                        <!--</li>-->
                        <!--<li>-->
                            <!--<a class="hint&#45;&#45;left hint&#45;&#45;rounded">-->
                                <!--<span>我的秀版</span>-->
                            <!--</a>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <div class="btn-group">
                    <div class="btn">
                        <a onclick="creatMyTemplate()" class="hint--right hint--rounded" data-hint="保存到我的模板">我的模板</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-content">
        <div eqd-scroll="" style="height: 100%; position: relative; overflow: hidden;overflow-y: auto;">
            <ul class="page-uls ui-sortable" id="pageList" ui-sortable="sortableOptions" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                <li class="blurClass current">
                    <span class="number">
                        <em class="page-num">1</em>
                    </span>
                    <span class="page-name">第1页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">2</em>
                    </span>
                    <span class="page-name" >第2页</span>
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">3</em>
                    </span>
                    <span class="page-name" >第3页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">4</em>
                    </span>
                    <span class="page-name" >第4页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">5</em>
                    </span>
                    <span class="page-name" >第5页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">6</em>
                    </span>
                    <span class="page-name" >第6页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">7</em>
                    </span>
                    <span class="page-name" >第7页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">8</em>
                    </span>
                    <span class="page-name" >第8页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass " >
                    <span class="number">
                        <em class="page-num">9</em>
                    </span>
                    <span class="page-name" >第9页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass " >
                    <span class="number">
                        <em class="page-num">10</em>
                    </span>
                    <span class="page-name" >第10页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass">
                    <span class="number">
                        <em class="page-num">11</em>
                    </span>
                    <span class="page-name" >第11页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
                <li class="blurClass " >
                    <span class="number">
                        <em class="page-num">12</em>
                    </span>
                    <span class="page-name" >第12页</span>
                    <!--<input style="width: 110px;display:inline-block; height: 25px; line-height: 25px; color: #999;margin-top:22px;margin-left:2px;box-shadow:none;" type="text" class="ng-pristine ng-valid">-->
                </li>
            </ul>
            <!--<div class="iScrollVerticalScrollbar iScrollLoneScrollbar" style="position: absolute; z-index: 9999; width: 7px; bottom: 2px; top: 2px; right: 1px; overflow: hidden;">-->
                <!--<div class="iScrollIndicator" style="box-sizing: border-box; position: absolute; border: 1px solid rgba(255, 255, 255, 0.901961); border-radius: 3px; width: 100%; transition-duration: 0ms; display: block; height: 235px; transform: translate(0px, 0px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); background: rgba(0, 0, 0, 0.498039);"></div>-->
            <!--</div>-->
        </div>
        <!--每个页面视图对应的右侧页面-->
        <div class="page-list-label ui-draggable page-label-hide" panel-draggable="" style="left: 1476px; top: 50px;display:none;">
            <div ng-include="'scene/page/page-tpl.tpl.html'" ng-controller="PageTplController" class="">
                <div ng-show="scene.isTpl==2 || isTplEditor" class=" ng-hide">
                    <h4>元素特性设置</h4>
                    <div>
                        <ul class="tpl-uls " ng-repeat="tplElement in textElements">
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
        <a class="_insert_page hint--top hint--rounded fade-color" data-hint="添加一页">+</a>
    </div>
</div>