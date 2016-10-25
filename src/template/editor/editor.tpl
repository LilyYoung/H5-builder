<div id="editor-box">
    <div class="btn-group fontFamily">
        <div class="dropdown font-dropdown">
            <a class="dropdown-toggle hint--bottom hint--rounded text-btn-border" data-toggle="dropdown" data-hint="字体"  aria-haspopup="true" aria-expanded="false"><span >默认字体</span> <b class="caret"></b></a>

            <ul class="dropdown-menu" role="menu" aria-labelledby="fontMenu"  >
                <li set-txt="Microsoft YaHei">微软雅黑</li>
                <li set-txt="SimSun">宋体</li>
                <li set-txt="SimHei">黑体</li>
            </ul>
        </div>
    </div>

    <div class="btn-group fontSize">
        <div class="dropdown font-dropdown">
            <a class="dropdown-toggle hint--bottom hint--rounded text-btn-border" data-toggle="dropdown" data-hint="字号"  aria-haspopup="true" aria-expanded="false"><span >24</span> <b class="caret"></b></a>

            <ul class="dropdown-menu"  role="menu" aria-labelledby="fontMenu"  >
                <li set-txt="96">96px</li>
                <li set-txt="64">64px</li>
                <li set-txt="48">48px</li>
                <li set-txt="32">32px</li>
                <li set-txt="24">24px</li>
                <li set-txt="20">20px</li>
                <li set-txt="18">18px</li>
                <li set-txt="16">16px</li>
                <li set-txt="14">14px</li>
                <li set-txt="12">12px</li>
            </ul>
        </div>
    </div>
    
    <div class="btn-group intersected"></div>

    <div class="btn-group txtFontColor">
        <div class="dropdown dropdown-toggle hint--bottom hint--rounded text-btn-border" data-hint="颜色" aria-haspopup="true" aria-expanded="false">
            <a class="" data-toggle="dropdown"><span class="text-btn-border-color">A <i class="change-font-btn" style="background-color: rgba(118, 130, 142,1);"></i></span></a>


            <div class="select-color colorpicker-element" id="selTxtFontColor">
                <input type="text" value="rgba(118, 130, 142,1)" class="form-control hide">
                <span class="input-group-addon" ><i style="background-color: rgba(118, 130, 142,1);"></i></span>
            </div>
        </div>
    </div>

    <div class="btn-group txtBackgroundColor">
        <div class="dropdown dropdown-toggle hint--bottom hint--rounded text-btn-border" data-hint="颜色" aria-haspopup="true" aria-expanded="false">
            <a class="" data-toggle="dropdown">
                <span class="text-btn-border-color change-font-btn"></span>
            </a>


            <div class="select-color colorpicker-element" id="selTxtBgColor">
                <input type="text" value="rgba(118, 130, 142,1)" class="form-control hide">
                <span class="input-group-addon" ><i style="background-color: rgba(118, 130, 142,1);"></i></span>
            </div>
        </div>
    </div>

    <div class="btn-group intersected"></div>

    <div class="btn-group txtFontStyle" >
        <div class="hint--bottom hint--rounded text-btn-border text-style">
            <a class="hint--bottom hint--rounded bolded" data-hint="加粗">
                <i class="fa fa-bold" aria-hidden="true"></i>
            </a>
            <a class="hint--bottom hint--rounded italic" data-hint="倾斜">
                <i class="fa fa-italic" aria-hidden="true"></i>
            </a>
            <a class="hint--bottom hint--rounded underline" data-hint="下划线">
                <i class="fa fa-underline" aria-hidden="true"></i>
            </a>
            <a class="hint--bottom hint--rounded strikeThrough" data-hint="删除线">
                <i class="fa fa-strikethrough" aria-hidden="true"></i>
            </a>
        </div>
    </div>

    <div class="btn-group intersected"></div>

    <div class="btn-group textAlignment">
        <div class="dropdown font-dropdown">
            <a class="dropdown-toggle hint--bottom hint--rounded text-btn-border" data-toggle="dropdown" data-hint="字号"  aria-haspopup="true" aria-expanded="false"><i class="fa fa-align-left" aria-hidden="true"></i> <b class="caret"></b></a>

            <ul class="dropdown-menu"set-txt="Microsoft YaHei" role="menu" aria-labelledby="fontMenu"  >
                <li data-hint="居左" class="hint--bottom hint--rounded" set-txt="left"><i class="fa fa-align-left" aria-hidden="true"></i></li>
                <li data-hint="居中" class="hint--bottom hint--rounded" set-txt="center"><i class="fa fa-align-center" aria-hidden="true"></i></li>
                <li data-hint="居右" class="hint--bottom hint--rounded" set-txt="right"><i class="fa fa-align-right" aria-hidden="true"></i></li>
            </ul>
        </div>
    </div>

    <div class="btn-group textLineHeight">
        <div class="dropdown font-dropdown">
            <a class="dropdown-toggle hint--bottom hint--rounded text-btn-border" data-toggle="dropdown" data-hint="行高"  aria-haspopup="true" aria-expanded="false"><i class="fa fa-text-height" aria-hidden="true"></i> <b class="caret"></b></a>

            <ul class="dropdown-menu"  role="menu" aria-labelledby="fontMenu"  >
                <li set-txt="0%">0%</li>
                <li set-txt="10%">10%</li>
                <li set-txt="25%">25%</li>
                <li set-txt="50%">50%</li>
                <li set-txt="75%">75%</li>
                <li set-txt="100%">100%</li>
            </ul>
        </div>
    </div>

    <div class="btn-group textLetterspace">
        <div class="dropdown font-dropdown">
            <a class="dropdown-toggle hint--bottom hint--rounded text-btn-border" data-toggle="dropdown" data-hint="调整字间距"  aria-haspopup="true" aria-expanded="false"><i class="fa fa-text-width" aria-hidden="true"></i><b class="caret"></b></a>

            <ul class="dropdown-menu"  role="menu" aria-labelledby="fontMenu"  >
                <li set-txt="0.25">0.25</li>
                <li set-txt="0.5">0.5</li>
                <li set-txt="0.75">0.75</li>
                <li set-txt="1.0">1.0</li>
                <li set-txt="1.5">1.5</li>
                <li set-txt="1.75">1.75</li>
                <li set-txt="2.0">2.0</li>
                <li set-txt="2.5">2.5</li>
                <li set-txt="3.0">3.0</li>
                <li set-txt="12">12px</li>
            </ul>
        </div>
    </div>

    <div class="btn-group intersected"></div>

    <div class="btn-group textLink">
        <div class="dropdown font-dropdown">
            <a class="dropdown-toggle hint--bottom hint--rounded text-btn-border" data-toggle="dropdown" data-hint="添加超链接"  aria-haspopup="true" aria-expanded="false"><i class="fa fa-link" aria-hidden="true"></i><b class="caret"></b></a>

            <ul class="dropdown-menu"set-txt="Microsoft YaHei" role="menu" aria-labelledby="fontMenu"  >
                <li data-hint="添加超链接：先选中要加链接的文字" class="hint--bottom hint--rounded" set-txt="left"><i class="fa fa-link" aria-hidden="true"></i></li>
                <li data-hint="清除超链接" class="hint--bottom hint--rounded" set-txt="center"><i class="fa fa-chain-broken" aria-hidden="true"></i></li>
            </ul>
        </div>
    </div>

    <div class="btn-group intersected"></div>

    <div class="btn-group txtEraser" >
        <div class="hint--bottom hint--rounded text-btn-border text-style">
            <a class="hint--bottom hint--rounded bolded" data-hint="清除样式">
                <i class="fa fa-eraser" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>