{% import "widget/macro.tpl" as macroset %}
<!doctype html>
<html lang="en">
<head>
	{{ macroset.normalHead(config,"微海报")}}
	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}/{% include 'widget/common-css.tpl' %}" />
	{{ macroset.linkcsss(config,[
		"build/js/lib/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css"
		,"build/js/lib/colorbox/expample1/colorbox.min.css"
		,"build/js/lib/jquery-jcrop/jquery.Jcrop.min.css"
		,"build/js/lib/nanoscroller/nanoscroller.min.css"
		,"build/js/lib/jquery-ui/css/jquery-ui.min.css"
		,"build/css/main.min.css"
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
		"build/js/lib/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"
		,"build/js/lib/cheditor/ckeditor.min.js"
		,"build/js/lib/colorbox/jquery.colorbox.min.js"
		,"build/js/lib/dragsort/jquery.dragsort-0.4.min.js"
		,"build/js/lib/jquery-ui/jquery-ui.min.js"
		,"build/js/lib/widget/jquery.ui.widget.min.js"
		,"build/js/lib/fileupload/jquery.iframe-transport.min.js"
		,"build/js/lib/fileupload/jquery.fileupload.min.js"
		,"build/js/lib/fileupload/jquery.fileupload-process.min.js"
		,"build/js/lib/fileupload/jquery.fileupload-validate.min.js"
		,"build/js/lib/jquery-jcrop/jquery.Jcrop.min.js"
		,"build/js/lib/nanoscroller/jquery.nanoscroller.min.js"
		,"build/js/lib/qrcode/jquery.qrcode.min.js"
		,"build/js/lib/require/require.min.js"
	]) }}
</body>
</html>






