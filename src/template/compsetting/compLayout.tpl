<!-- 面板框架布局 -->
<div id="comp_setting">
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
            <div class="style-content">
                <div class="style-setting">
                    <section>
                        <div class="style-list active " data-toggle="collapse" data-target="#base-style">
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
                                        <div class="base-select-style" id="base-select-border"></div>
                                        <p class="name">
                                            <input id="base-select-border-input" type="number"  name="points" min="0" max="20" step="1" value="0"  >
                                        </p>
                                    </div>

                                </li>
                                <li>
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
                    <section>
                        <div class="style-list active collapsed" data-toggle="collapse" data-target="#base-border-style">
                            <span>边框样式</span>
                            <span class="caret off"></span>
                        </div>
                        <div class="collapse"  id="base-border-style"  >
                            bbb
                        </div>
                    </section>
                    <section>
                        <div class="style-list active collapsed" data-toggle="collapse" data-target="#base-shadow-style">
                            <span>阴影样式</span>
                            <span class="caret off"></span>
                        </div>
                        <div class="collapse"  id="base-shadow-style"  >
                            ccccccccc
                        </div>
                    </section>
                </div>

                <div class="btn-option">
                    <a class="btn btn-sm btn-green" href="javascript:;">确定</a>
                    <a class="btn btn-sm btn-red" href="javascript:;">清除样式</a>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="comp-tab2">aaaaaaaaaaaaaaaaaaaaaaa</div>
        <div class="tab-pane fade" id="comp-tab3">aaaaaaaaaaaaaaaaaaaaa</div>
    </div>


</div>


