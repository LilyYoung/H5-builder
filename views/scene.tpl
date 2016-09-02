{% import "widget/macro.tpl" as macroset %}
<!doctype html>
<html lang="en">
<head>
	{{ macroset.normalHead(config,"微海报")}}
	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}build/js/lib/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}build/js/lib/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css" />
	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}build/js/lib/colorbox/expample1/colorbox.css" />
	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}build/js/lib/jquery-jcrop/jquery.Jcrop.min.css" />
	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}build/js/lib/nanoscroller/nanoscroller.min.css" />
	<link rel="stylesheet" type="text/css" href="{{ config.cssServer }}build/js/lib/jquery-ui/css/jquery-ui.min.css" />
	{{ macroset.linkcsss(config,[
		"build/css/main.min.css"
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
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/jquery/js/jquery-1.11.2.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/bootstrap/js/bootstrap.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/cheditor/ckeditor.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/colorbox/jquery.colorbox.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/dragsort/jquery.dragsort-0.4.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/widget/jquery.ui.widget.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/jquery-ui/jquery-ui.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/fileupload/jquery.iframe-transport.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/fileupload/jquery.fileupload.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/fileupload/jquery.fileupload-process.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/fileupload/jquery.fileupload-validate.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/jquery-jcrop/jquery.Jcrop.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/nanoscroller/jquery.nanoscroller.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/qrcode/jquery.qrcode.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/jquery-slides/jquery.slides.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/iScroll/iscroll.min.js" />
	<link rel="stylesheet" type="text/css" href="{{ config.jsServer }}build/js/lib/require/require.js" />

</body>
</html>






