<!-- 面板框架布局 -->
<div id="comp_setting" class="comp-drag">
    <div class="cancel">
        <span class="set-title">组件设置</span>
        <i class="fa fa-times set-close" aria-hidden="true"></i>
    </div>

    <ul class="nav nav-tabs">
        <li class="active"><a href="#comp-tab1" data-toggle="tab">样式</a></li>
        <li><a href="#comp-tab2" data-toggle="tab">动画</a></li>
        <li><a href="#comp-tab3" data-toggle="tab">触发</a></li>
    </ul>

    <div class="tab-content">
        <div class="tab-pane fade in active" id="comp-tab1">
            <div class="style-content"  >
                <div class="panel-group style-setting"  id="styleSetting">
                    <section class="panel">
                        <div class="style-list active" data-toggle="collapse" data-parent="#styleSetting" data-target="#base-style">
                            <span>基础样式</span>
                            <span class="caret off"></span>
                        </div>
                        <div class="collapse in"  id="base-style"  >
                            <ul class="base-style-list">
                                <li>
                                    <label>背景颜色</label>
                                    <div class="color-select clearfix" id="color-select-bg">
                                        <div class="input-group-addon color-select-bg"></div>
                                        <input  class="form-control" type="text" value="rgba(0,0,0,0.5)">
                                    </div>
                                </li>
                                <li>
                                    <label>文字颜色</label>
                                    <div class="color-select clearfix" id="color-select-text">
                                        <div class="input-group-addon color-select-text"></div>
                                        <input class="form-control" type="text" value="rgba(0,0,0,0.8)">
                                    </div>
                                </li>
                                <li>
                                    <label>透明度</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-opacity"></div>
                                        <p class="name">
                                            <input id="base-select-opacity-input" type="number"  name="points" min="0" max="100" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>边距</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-padding"></div>
                                        <p class="name">
                                            <input id="base-select-padding-input" type="number"  name="points" min="0" max="20" step="1" value="0"  >
                                        </p>
                                    </div>

                                </li>
                                <li class="no-border-bottom">
                                    <label>行高</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-height"></div>
                                        <p class="name">
                                            <input id="base-select-height-input" type="number"  name="points" min="0" max="3" step="0.1" value="1"  >
                                        </p>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </section>
                    <section class="panel">
                        <div class="style-list active collapsed" data-toggle="collapse" data-parent="#styleSetting"  data-target="#base-border-style">
                            <span>边框样式</span>
                            <span class="caret off"></span>
                        </div>
                        <div class="collapse"  id="base-border-style"  >
                            <ul class="base-style-list">
                                <li>
                                    <label>尺寸</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-border-width"></div>
                                        <p class="name">
                                            <input id="base-select-border-width-input" type="number"  name="points" min="0" max="20" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>弧度</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-border-radius"></div>
                                        <p class="name">
                                            <input id="base-select-border-radius-input" type="number"  name="points" min="0" max="29" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>样式</label>
                                    <div class="base-select clearfix">
                                        <div class="select-box">
                                            <select id="base-select-border-style" >
                                                <option value="solid">直线</option>
                                                <option value="dashed">破折线</option>
                                                <option value="dotted">点状线</option>
                                                <option value="double">双划线</option>
                                                <option value="groove">3D凹槽</option>
                                                <option value="ridge">3D垄状</option>
                                                <option value="inset">3D内嵌</option>
                                                <option value="outset">3D外嵌</option>
                                            </select>
                                        </div>

                                    </div>

                                </li>
                                <li>
                                    <label>颜色</label>
                                    <div class="color-select clearfix" id="color-select-border">
                                        <div class="input-group-addon color-select-text"></div>
                                        <input class="form-control" type="text" value="rgba(0,0,0,0.8)">
                                    </div>
                                </li>
                                <li class="no-border-bottom">
                                    <label>旋转</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-trans"></div>
                                        <p class="name">
                                            <input id="base-select-trans-input" type="number"  name="points" min="0" max="360" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section class="panel">
                        <div class="style-list active collapsed" data-toggle="collapse" data-parent="#styleSetting"  data-target="#base-shadow-style">
                            <span>阴影样式</span>
                            <span class="caret off"></span>
                        </div>
                        <div class="collapse"  id="base-shadow-style"  >
                            <ul class="base-style-list">
                                <li>
                                    <label>大小</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-shadow-spread"></div>
                                        <p class="name">
                                            <input id="base-select-shadow-spread-input" type="number"  name="points" min="-20" max="20" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>模糊</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-shadow-blur"></div>
                                        <p class="name">
                                            <input id="base-select-shadow-blur-input" type="number"  name="points" min="0" max="20" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>颜色</label>
                                    <div class="color-select clearfix" id="color-select-shadow">
                                        <div class="input-group-addon color-select-text"></div>
                                        <input class="form-control" type="text" value="rgba(0,0,0,0.5)">
                                    </div>
                                </li>
                                <li class="no-border-bottom">
                                    <label>方向</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-shadow-direction"></div>
                                        <p class="name">
                                            <input id="base-select-shadow-direction-input" type="number"  name="points" min="-20" max="20" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div class="btn-option">
                    <a class="btn btn-sm btn-green" href="javascript:;">确定</a>
                    <a class="btn btn-sm btn-red" href="javascript:;">清除样式</a>
                </div>
            </div>

        </div>
        <div class="tab-pane fade" id="comp-tab2">
            <div class="style-content">
                <!--模板addAnimate-->
                <div class="style-setting">
                    <div class="animate-btn">
                        <a class="btn btn-sm btn-green animate-btn-add" href="javascript:;"><i class="fa fa-plus-square" aria-hidden="true"></i>添加动画</a>
                        <a class="btn btn-sm btn-blue animate-btn-preview" href="javascript:;"><i class="fa fa-play-circle-o" aria-hidden="true"></i>预览动画</a>
                    </div>
                </div>

                <div class="btn-option">
                    <a class="btn btn-sm btn-green" href="javascript:;">确定</a>
                    <a class="btn btn-sm btn-red" href="javascript:;">清除动画</a>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="comp-tab3">
            <div class="style-content">
                <div class="style-setting">
                    <div class="style-list active">
                        <span>浏览页面时，当</span>
                        <select>
                            <option value="click">点击</option>
                            <option value="yao">摇一摇</option>
                        </select>

                    </div>
                    <div class="style-list active">
                        <span>页面元素</span>
                        <select>
                            <option value="text">文字1</option>
                            <option value="div">点击选择元素</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
