
<div id="clipImage" class="modal fade gome-modal pictures1" style="z-index:1050" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">
                    图集组件
                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                    <span class="action">通过图片裁切可制作超酷图集</span>
                </h4>
            </div>
            <div class="modal-body dialog-contain cropimage">
                <div class="image-con hide">
                    <div class="add-img">
                        <i>点击添加图片</i>
                        <p><i>（最多可添加6张图片）</i></p>
                    </div>
                </div>
                <div class="picture-images-wrap clearfix">
                    <div class="picture-img">
                        <div class="image_crop">
                            <img src="build/img/212.jpg" id="img_preview" style="">
                        </div>

                       <!-- <div class="img-abbre">
                            <ul class="clearfix">
                                <li class="active">
                                    <div class="img-set">
                                        <div class="delete-img hint&#45;&#45;top hint&#45;&#45;rounded" data-hint="删除图片"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
                                        <div class="abbre hint&#45;&#45;bottom hint&#45;&#45;rounded" data-hint="更换图片"><i class="fa fa-picture-o" aria-hidden="true"></i></div>
                                    </div>

                                    <p class="eqf-plus2 hide">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </p>
                                </li>

                                <li>
                                    <div class="img-set hide">
                                        <div class="delete-img hint&#45;&#45;top hint&#45;&#45;rounded" data-hint="删除图片"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
                                        <div class="abbre hint&#45;&#45;bottom hint&#45;&#45;rounded" data-hint="更换图片"><i class="fa fa-picture-o" aria-hidden="true"></i></div>
                                    </div>

                                    <p class="eqf-plus2">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </p>
                                </li>

                                <li>
                                    <div class="img-set hide">
                                        <div class="delete-img hint&#45;&#45;top hint&#45;&#45;rounded" data-hint="删除图片"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
                                        <div class="abbre hint&#45;&#45;bottom hint&#45;&#45;rounded" data-hint="更换图片"><i class="fa fa-picture-o" aria-hidden="true"></i></div>
                                    </div>

                                    <p class="eqf-plus2">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </p>
                                </li>

                                <li>
                                    <div class="img-set hide">
                                        <div class="delete-img hint&#45;&#45;top hint&#45;&#45;rounded" data-hint="删除图片"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
                                        <div class="abbre hint&#45;&#45;bottom hint&#45;&#45;rounded" data-hint="更换图片"><i class="fa fa-picture-o" aria-hidden="true"></i></div>
                                    </div>

                                    <p class="eqf-plus2">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </p>
                                </li>

                                <li>
                                    <div class="img-set hide">
                                        <div class="delete-img hint&#45;&#45;top hint&#45;&#45;rounded" data-hint="删除图片"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
                                        <div class="abbre hint&#45;&#45;bottom hint&#45;&#45;rounded" data-hint="更换图片"><i class="fa fa-picture-o" aria-hidden="true"></i></div>
                                    </div>

                                    <p class="eqf-plus2">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </p>
                                </li>

                                <li>
                                    <div class="img-set hide">
                                        <div class="delete-img hint&#45;&#45;top hint&#45;&#45;rounded" data-hint="删除图片"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
                                        <div class="abbre hint&#45;&#45;bottom hint&#45;&#45;rounded" data-hint="更换图片"><i class="fa fa-picture-o" aria-hidden="true"></i></div>
                                    </div>

                                    <p class="eqf-plus2">
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </p>
                                </li>
                            </ul>
                        </div>-->
                    </div>
                    <div class="picture-size">
                        <ul>
                            <li>
                                <label class="icheck radio-square">
                                    <input type="radio" checked name="ratio" value="1:1"><span><i></i></span>1:1
                                </label>
                            </li>
                            <li>
                                <label class="icheck radio-square">
                                    <input type="radio" name="ratio" value="4:3"><span><i></i></span>4:3
                                </label>
                            </li>
                            <li>
                                <label class="icheck radio-square">
                                    <input type="radio" name="ratio" value="3:4"><span><i></i></span>3:4
                                </label>
                            </li>
                            <li>
                                <label class="icheck radio-square">
                                    <input type="radio" name="ratio" value="自定义"><span><i></i></span>自定义
                                </label>
                            </li>
                        </ul>
                        <ul class="picture-set">
                            <li class="clearfix">
                                <em>自动切换</em><span class="switch-circle on"><i></i></span>
                            </li>
                            <li>切换时间：<span>2</span>秒</li>
                            <li class="switch-time">

                            </li>
                            <li>切换动画</li>
                            <li>
                                <div class="select-contain clearfix ">
                                    <div class="eqc-mask">
                                        <div class="eqc-name">轮播</div>
                                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    </div>

                                    <div class="eqc-drop-down-list transform-change">
                                        <div class="list">
                                            <ul class="clearfix">
                                                <li class="active">轮播</li>
                                                <li>下落</li>
                                                <li>百叶窗</li>
                                                <li>消隐</li>
                                                <li>渐变</li>
                                                <li>梳理</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-footer no-line">
                <a href="javascript:;" class="modal-cancle" data-dismiss="modal" >取消</a>
                <a href="javascript:;" class="btn btn-green"  data-dismiss="modal" >确定</a>
            </div>
        </div>
    </div>
</div>