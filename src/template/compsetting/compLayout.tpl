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
                <div class="style-setting">
                    <section>
                        <div class="style-list active" data-toggle="collapse" data-target="#base-animate1">
                            <span>动画1</span>
                            <a class="fa fa-trash-o"  href="javascript:;" aria-hidden="true"></a>
                            <span class="caret off"></span>
                        </div>
                        <div class="collapse in"  id="base-animate1">
                            <ul class="base-style-list">
                                <li>
                                    <label>方式</label>
                                    <div class="base-select clearfix">
                                        <div class="select-box">
                                            <select id="base-select-animate-style" >
                                                <option value="no">无</option>
                                                <optgroup label="进入" class="show">
                                                    <option value="bounceIn">弹入</option>
                                                    <option value="flipInX">翻转进入（水平）</option>
                                                    <option value="flipInY">翻转进入（垂直）</option>
                                                    <option value="fadeIn">淡入</option>
                                                    <option value="slideInUp">滑动进入</option>
                                                    <option value="wqdZoomin">放大进入</option>
                                                    <option value="rotateIn">旋转进入</option>
                                                    <option value="rollIn">滚入</option>
                                                    <option value="lightSpeedIn">飞入</option>
                                                </optgroup>
                                                <optgroup label="强调" class="accentuate">
                                                    <option value="wqdZoomin">中心放大</option>
                                                    <option value="bounceIn">震动</option>
                                                    <option value="bounce">弹跳</option>
                                                    <option value="flash">闪烁</option>
                                                    <option value="pulse">脉搏</option>
                                                    <option value="rubberBand">橡皮筋</option>
                                                    <option value="shake">晃动</option>
                                                    <option value="swing">摇摆</option>
                                                    <option value="tada">中心摆动</option>
                                                    <option value="wobble">颤动</option>
                                                    <option value="jello">果冻</option>
                                                    <option value="flip">3D旋转</option>
                                                </optgroup>
                                                <optgroup label="退出">
                                                    <option value="popOut">弹出</option>
                                                    <option value="flipOutX">翻转退出（水平）</option>
                                                    <option value="flipOutY">翻转退出（垂直）</option>
                                                    <option value="wqdFadeOut">淡出</option>
                                                    <option value="wqdSlideOutUp">滑动退出（上）</option>
                                                    <option value="zoomOut">缩小退出</option>
                                                    <option value="wqdRollout">滚出</option>
                                                    <option value="wqdLightSpeedout">飞出</option>
                                                    <option value="hinge">悬挂退出</option>
                                                    <option value="wqdRotateOut">旋转退出</option>
                                                </optgroup>

                                            </select>
                                        </div>
                                    </div>

                                </li>
                                <li>
                                    <label>时间</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-animate-time"></div>
                                        <p class="name">
                                            <input id="base-select-animate-time-input" type="number"  name="points" min="0" max="20" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>延迟</label>
                                    <div class="base-select clearfix">
                                        <div class="base-select-style" id="base-select-animate-defer"></div>
                                        <p class="name">
                                            <input id="base-select-animate-defer-input" type="number"  name="points" min="0" max="20" step="1" value="0"  >
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <label>次数</label>
                                    <div class="base-select clearfix">
                                        <input id="base-select-animate-number-input" type="number"  name="points" min="0" max="20" step="1" value="0"  >
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </section>
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
        <div class="tab-pane fade" id="comp-tab3">aaaaaaaaaaaaaaaaaaaaa</div>
    </div>


</div>


