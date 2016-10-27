{{if i}}
    <section>
        <div class="style-list active" data-toggle="collapse" data-target="#base-animate${i}" aria-expanded="true">
            <span>动画${i}</span>
            <span class="caret off"></span>
        </div>
        <a class="fa fa-trash-o" href="javascript:;" aria-hidden="true"></a>
        <div class="collapse in" id="base-animate${i}" aria-expanded="true">
            <ul class="base-style-list">
                <li>
                    <label>
                        方式
                    </label>
                    <div class="base-select clearfix">
                        <div class="select-box">
                            <select id="base-select-animate-style${i}">
                                <option value="no">
                                    无
                                </option>
                                <optgroup label="进入" class="show">
                                    <option value="bounceIn">
                                        弹入
                                    </option>
                                    <option value="flipInX">
                                        翻转进入（水平）
                                    </option>
                                    <option value="flipInY">
                                        翻转进入（垂直）
                                    </option>
                                    <option value="fadeIn">
                                        淡入
                                    </option>
                                    <option value="slideIn">
                                        滑动进入
                                    </option>
                                    <option value="zoomIn">
                                        放大进入
                                    </option>
                                    <option value="rotateIn">
                                        旋转进入
                                    </option>
                                    <option value="rollIn">
                                        滚入
                                    </option>
                                    <option value="lightSpeedIn">
                                        飞入
                                    </option>
                                </optgroup>
                                <optgroup label="强调" class="accentuate">
                                    <option value="bounceIn">
                                        震动
                                    </option>
                                    <option value="bounce">
                                        弹跳
                                    </option>
                                    <option value="flash">
                                        闪烁
                                    </option>
                                    <option value="pulse">
                                        脉搏
                                    </option>
                                    <option value="rubberBand">
                                        橡皮筋
                                    </option>
                                    <option value="shake">
                                        晃动
                                    </option>
                                    <option value="swing">
                                        摇摆
                                    </option>
                                    <option value="tada">
                                        中心摆动
                                    </option>
                                    <option value="wobble">
                                        颤动
                                    </option>
                                    <option value="jello">
                                        果冻
                                    </option>
                                    <option value="flip">
                                        3D旋转
                                    </option>
                                </optgroup>
                                <optgroup label="退出">
                                    <option value="bounceOut">
                                        弹出
                                    </option>
                                    <option value="flipOutX">
                                        翻转退出（水平）
                                    </option>
                                    <option value="flipOutY">
                                        翻转退出（垂直）
                                    </option>
                                    <option value="fadeOut">
                                        淡出
                                    </option>
                                    <option value="slideOut">
                                        滑动退出
                                    </option>
                                    <option value="zoomOut">
                                        缩小退出
                                    </option>
                                    <option value="rollOut">
                                        滚出
                                    </option>
                                    <option value="lightSpeedout">
                                        飞出
                                    </option>
                                    <option value="hinge">
                                        悬挂退出
                                    </option>
                                    <option value="rotateOut">
                                        旋转退出
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </li>
                <li class="animate-direction">
                    <label>方向</label>
                    <div class="base-select clearfix">
                        <select id="base-select-animate-direction${i}">
                            <option value="Left">从左到右</option>
                            <option value="Right">从右到左</option>
                            <option value="Down">从上到下</option>
                            <option value="Up">从下到上</option>
                        </select>
                    </div>
                </li>
                <li class="animate-time">
                    <label>时间</label>
                    <div class="base-select clearfix">
                        <div class="base-select-style" id="base-select-animate-time${i}">
                        </div>
                        <p class="name">
                            <input id="base-select-animate-time-input${i}" type="number" name="time"
                                   min="0" max="20" step="0.1" value="2">
                        </p>
                    </div>
                </li>
                <li class="animate-defer">
                    <label>延迟</label>
                    <div class="base-select clearfix">
                        <div class="base-select-style" id="base-select-animate-defer${i}">
                        </div>
                        <p class="name">
                            <input id="base-select-animate-defer-input${i}" type="number" name="defer"
                                   min="0" max="20" step="0.1" value="0">
                        </p>
                    </div>
                </li>
                <li class="animate-number">
                    <label>次数</label>
                    <div class="base-select clearfix">
                        <p class="animate-number-input">
                            <input id="base-select-animate-number-input${i}" type="number" name="number"
                                   min="1" max="20" step="1" value="1">
                        </p>
                        <div class="animate-number-checkbox">
                            <i class="fa fa-check checkbox-yes" aria-hidden="true"></i>
                            <input data-toggle="toggle"  type="checkbox">
                        </div>
                        <span class="animate-number-text">循环</span>

                    </div>
                </li>
            </ul>
        </div>
    </section>
{{else}}
程序错误
{{/if}}