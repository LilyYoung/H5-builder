{% import "widget/macro.tpl" as macroset %}
<!doctype html>
<html lang="en">
<head>
	{{ macroset.normalHead(config,"微海报")}}

	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}/??/{% include 'widget/common-css.tpl' %}" />
	{{ macroset.linkcsss(config,[
		"bulid/js/lib/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css"
		,"bulid/js/lib/colorbox/expample1/colorbox.min.css"
		,"bulid/js/lib/jcrop/jquery.Jcrop.min.css"
		,"bulid/js/lib/nanoscroller/nanoscroller.min.css"
		,"bulid/css/main.min.css"
	]) }}
</head>
<body>
	<!-- 头部模板 -->
	<header class="nav-header">
		{% include "widget/header.tpl" %}
	</header>

	<div class="scene">
		<!-- start 大纲视图 -->
		<div class="outline">
			{% include "widget/outline.tpl" %}
		</div><!-- end 大纲视图 -->

		<!-- start 工作区 -->
		<div class="workspace">
			{% include "widget/workspace.tpl" %}
		</div><!-- end 工作区 -->
	</div>
	{% include "widget/global.tpl" %}
	<script src="{{ config.jsServer }}/??/{% include 'widget/common-js.tpl' %}"></script>
	{{ macroset.scripts(config,[
		"bulid/js/lib/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"
		,"bulid/js/lib/cheditor/ckeditor.min.js"
		,"bulid/js/lib/colorbox/jquery.colorbox.min.js"
		,"bulid/js/lib/dragsort/jquery.dragsort-0.4.min.js"
		,"bulid/js/lib/widget/jquery.ui.widget.min.js"
		,"bulid/js/lib/fileupload/jquery.iframe-transport.min.js"
		,"bulid/js/lib/fileupload/jquery.fileupload.min.js"
		,"bulid/js/lib/fileupload/jquery.fileupload-process.min.js"
		,"bulid/js/lib/fileupload/jquery.fileupload-validate.min.js"
		,"bulid/js/lib/jquery-jcrop/jquery.Jcrop.min.js"
		,"bulid/js/lib/nanoscroller/jquery.nanoscroller.min.js"
		,"bulid/js/lib/qrcode/jquery.qrcode.min.js"
		,"bulid/js/lib/require/require.min.js"
	]) }}
</body>
</html>






