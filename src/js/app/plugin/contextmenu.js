/**
 * Created by liusuling on 2016/10/22.
 */

define(function () {
	var Contextmenu ={};

	Contextmenu.init = function () {
		Contextmenu.shortcutEvent();

	};

	//事件集合
	Contextmenu.shortcutEvent = function() {
		var that = this;
		$(document).on('contextmenu',function(ev) {
			$target = $(ev.target);
			var pos = {
				left: ev.pageX,
				top: ev.pageY
			};
			var elem = $target.closest('.edit-workspace .edit_area .element');
			var contenteditable =elem .attr('contenteditable');
			if( elem.length) {
				if( !elem.hasClass('.editable-text') || (elem.hasClass('.editable-text') && (contenteditable=='false'||!contenteditable)) ) {
					that.showShortcut(pos);
				}
			}
			ev.stopPropagation();
			ev.preventDefault();

		})

		$(document).on('click',function () {
			if($('#contextmenuPhone').length) {
				$('#contextmenuPhone').hide();
			}
		});

		$(document).on('click','#contextmenuPhone li', function (ev) {

			that.itemEvent($(this).attr('class'));

			$('#contextmenuPhone').hide();
			ev.preventDefault()
		});
	};

	//点击列表事件函数
	Contextmenu.itemEvent = function(name) {
		var that = this;
		switch (name) {
			//编辑
			case 'edit':
				that.fnEdit();
				break;
			//样式
			case 'style':
				break;
			//动画
			case 'animation':
				break;
			//触发
			case 'trigger':
				break;
			//复制
			case 'copy':
				break;
			//复制动画
			case 'copyAnime':
				break;
			//删除
			case 'bottom_bar':
				break;
		}
	};

	//编辑函数
	Contextmenu.fnEdit = function() {

	};


	Contextmenu.showShortcut = function(pos) {
		//创建右键元素
		if(!$('#contextmenuPhone').length) {
			$('#scene').append(GTPL.contextmenu());
		}

		var height = $('#contextmenuPhone').innerHeight();
		if(pos.top+height > window.innerHeight) {
			pos.top = pos.top-height;
		}

		$('#contextmenuPhone').css({
			left: pos.left + 20,
			top: pos.top -50
		}).show();
	};





	return Contextmenu;
});