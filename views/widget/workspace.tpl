<div class="edit-workspace">
    <div class="container">
        <div class="edit-common">
            <div class="nr" id="nr">
                <div class="edit_wrapper">
                    <!-- 背景元素 -->
                    <div class="wrapper-background"></div>

                    <!-- 手机编辑区 -->
                    <ul class="edit_area weebly-content-area weebly-area-active">

                    </ul>
                </div>
            </div>

            <!-- 模拟手机 -->
            <div class="phone">
                <h4 class="name">标题</h4>
            </div>

            <!-- 手机场景右侧的工具 -->
            <div class="history history2" id="speedy-toolbar">
                <a class="active hint--right hint--rounded" href="javascript:;" data-hint="撤消(ctrl+z)"><i class="fa fa-reply" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded" href="javascript:;" data-hint="恢复(ctrl+y)"><i class="fa fa-share" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded" href="javascript:;" data-hint="刷新预览"><i class="fa fa-play-circle-o" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded" href="javascript:;" data-hint="复制当前页"><i class="fa fa-files-o" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded background-tool" href="javascript:;" data-hint="背景"><i class="fa fa-th-large" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded" href="javascript:;" data-hint="音乐"><i class="fa fa-music" aria-hidden="true"></i></a>
                <a class="hint--right hint--rounded" href="javascript:;"  data-hint="特效"><i class="fa fa-star-o" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded grid-guide" href="javascript:;" data-hint="网格设置"><i class="fa fa-table" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded" href="javascript:;" data-hint="手机边框"><em class="imp heart"></em><i class="fa fa-mobile" aria-hidden="true"></i></a>
                <a class="active hint--right hint--rounded" href="javascript:;" id="warn" data-hint="警告"><i class="fa fa-exclamation-circle" aria-hidden="true"></i></a>

                <div class="grid-guide-container">
                    <div class="grid-guide-setting">
                        <div class="setting-group">
                            <span>网络开关</span>
                            <div class="setting-choice">
                                <div class="switch switch-open">
                                    <div class="circle-con">
                                        <i class="circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setting-group">
                            <label>网格颜色</label>
                        </div>
                        <div class="setting-group choose-color-box">
                            <div class="eqc-input-color">
                                <input type="text" value="" class="form-control hide">
                                <span class="input-group-addon"><i ></i></span>
                            </div>
                        </div>
                        <div class="setting-group">
                            <span>智能参考</span>
                            <div class="setting-choice">
                                <div class="switch switch-open">
                                    <div class="circle-con">
                                        <i class="circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="setting-group">
                            <span>吸附效果</span>
                            <div class="setting-choice">
                                <div class="switch switch-open">
                                    <div class="circle-con">
                                        <i class="circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="background-container">
                    <div class="background-pane">
                        <div class="setting-group">
                            <div class="setting-btn"><i class="fa fa-scissors" aria-hidden="true"></i></div>
                            <span>裁剪</span>
                        </div>
                        <div class="setting-group">
                            <div class="setting-btn"><i class="fa fa-repeat" aria-hidden="true"></i></div>
                            <span>更换</span>
                        </div>
                        <div class="setting-group">
                            <div class="setting-btn"><i class="fa fa-moon-o" aria-hidden="true"></i></div>
                            <span>效果</span>
                        </div>
                        <div class="setting-group">
                            <div class="setting-btn"><i class="fa fa-trash" aria-hidden="true"></i></div>
                            <span>删除</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--此处放栅格线-->
        <div class="eq-block-guides"></div>
        <div class="eq-block-grid">
            <canvas class="eq-block-grid-inner" id="grid" width="320" height="486"></canvas>
        </div>
    </div>
   <div class="demo">
       <div class="edit_wrapper">
           <!-- 背景元素 -->
           <div class="wrapper-background"></div>
       </div>
   </div>
</div>
