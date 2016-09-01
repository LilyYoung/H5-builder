{% macro scripts(config, srcs) %}
  {% if config.originResource %}
  	{% for key, val in srcs%}
	  <script src="{{ config.jsServer }}/{{ val }}?v={{ config.version }}"></script>
  	{% endfor %}
  {% else %}
	  <script src="{{ config.jsServer }}/??/{{ srcs|join(',') }}?v={{ config.version }}"></script>
  {% endif %}
{% endmacro %}


{% macro script(config, src) %}
  <script src="{{ config.jsServer }}/{{ src }}?v={{ config.version }}"></script>
{% endmacro %}

{% macro linkcsss(config,csss) %}
  {% if config.originResource %}
  	{% for key, val in csss%}
	  <link rel="stylesheet" type="text/css"  href="{{ config.cssServer }}/{{ val }}?v={{ config.version }}">
  	{% endfor %}
  {% else %}
  	  <link rel="stylesheet" type="text/css"  href="{{ config.cssServer }}/??/{{ csss|join(',') }}?v={{ config.version }}">
  {% endif %}
{% endmacro %}


{% macro linkcss(config, css) %}
  <link rel="stylesheet" type="text/css"  href="{{ config.cssServer }}/{{ css }}?v={{ config.version }}">
{% endmacro %}

{% macro normalHead(config,title) %}
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="telephone=no" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
	<meta name="applicable-device" content="pc">
	<meta name="keyword" content="">
	<meta name="description" content="">
	<title>{{ title }}</title>
	<link rel="dns-prefetch" href="//img.gomein.net.cn">
	<link rel="dns-prefetch" href="//js.gomein.net.cn">
	<link rel="dns-prefetch" href="//css.gomein.net.cn">
	<link rel="dns-prefetch" href="//app.gomein.net.cn">
	<link rel="canonical" href="http://www.gome.com.cn/">
	<link rel="shortcut icon" href="http://app.gomein.net.cn/favicon.ico" type="image/x-icon">
	
{% endmacro %}
