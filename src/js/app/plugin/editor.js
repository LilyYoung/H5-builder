/**
 * Created by liusuling on 2016/9/9.
 */
define(function () {
	var Editor ={};

	Editor.init = function () {


		$('._edit_area').append(GTPL.dragRotate());
		this.editorEvent();

		//this.txtEditor();
		//this.txtEvent();

	};

	//双击document事件弹窗文字编辑框
	Editor.editorEvent = function() {
		var that = this;
		$(document).on('dblclick','.editable-text',function(ev) {
			var elem = $(this);
			that.showEditor(elem);


		});
		$(document).on('click.editor',function(ev) {

			var elem = $(ev.target);

			var elemTarget = elem.closest('[contenteditable]');
			var contenteditable = elemTarget.attr('contenteditable');

			if(contenteditable !=undefined ){
				if(!contenteditable){
					that.hideEditor($('[contenteditable="true"]'));
				}
			}else{
				if(!elem.closest('.cke_float').length){
					that.hideEditor($('[contenteditable="true"]'));
				}
			}
		});
	};
	Editor.enableEditing  = function(id) {
		if ( !CKEDITOR.instances[id] ) {
			CKEDITOR.inline( id, {
				startupFocus: true
			} );
		}
	};

	Editor.disableEditing = function(id) {
		if ( CKEDITOR.instances[id] )
			CKEDITOR.instances[id].destroy();
	};

	Editor.showEditor = function(elem) {
		var that = this;
		var isEditingEnabled = elem.attr('isEditingEnabled');
		var id = elem.attr('id');
		if(!isEditingEnabled) {
			elem.attr('isEditingEnabled','false');
		}
		if(elem.attr('isEditingEnabled') == 'false') {
			elem.attr('isEditingEnabled','true');
		}else if(isEditingEnabled == 'true'){
			return false;
		}

		elem.attr( 'contenteditable', true );

		that.enableEditing(id);
	};

	Editor.hideEditor = function(elem) {
		var that = this;
		elem.attr('isEditingEnabled','false');
		var id = elem.attr('id');
		that.disableEditing(id);
		elem.attr( 'contenteditable', false );
	};



	//网格颜色选择器初始化
	Editor.chooseColorWay = function(option) {
		var that = this;
		this.colorOption = {
			colorSelectors: {
				'default': '#777777',
				'primary': '#337ab7',
				'success': '#5cb85c',
				'info': '#5bc0de',
				'warning': '#f0ad4e',
				'danger': '#d9534f'
			},
			customClass: 'colorpicker-2x',
			sliders: {
				saturation: {
					maxLeft: 200,
					maxTop: 200
				},
				hue: {
					maxTop: 200
				},
				alpha: {
					maxTop: 200
				}
			}
		};
		option.selectorObj.colorpicker(this.colorOption).on('changeColor',function(ev) {
			option.callback();
		});
	};

	//拖拽或双击元素出现文字编辑框
	Editor.createEditorBox = function(elem) {
		var that = this;
		var contenteditable = elem.attr('contenteditable');

		if(contenteditable == 'true') {

			if(!$('#editor-box').length) {
				$('body').append(GTPL.editor());

				var pos = that.editorPosition(elem);
				$('#editor-box').css({
					left: pos.left,
					top: pos.top
				});



				that.chooseColorWay({
					selectorObj: $('#selTxtFontColor'),
					callback: function() {
						var color = $('#selTxtFontColor .input-group-addon i').css('background-color');
						$('#editor-box .txtFontColor .change-font-btn').css('background-color',color);
					}
				});
				that.chooseColorWay({
					selectorObj: $('#selTxtBgColor'),
					callback: function() {
						var color = $('#selTxtBgColor .input-group-addon i').css('background-color');
						$('#editor-box .txtBackgroundColor .change-font-btn').css('background',color);
					}
				});
			}
		}
		this.txtEditor();
	};

	//双击document事件弹窗文字编辑框，单击移除文字编辑框
	Editor.txtEditor = function() {
		var that = this;
		$(document).on('dblclick.editor',function(ev) {
			var elem = $(ev.target);
			that.createEditorBox(elem);
		});

		$(document).on('mousedown.editor',function(ev) {
			var elem = $(ev.target);
			var elemTarget = elem.closest('[contenteditable]');
			if(elemTarget.length){
				var contenteditable = elemTarget.attr('contenteditable');

				if(contenteditable != 'true' &&　!elem.closest('.cke_float').length) {
					$('#editor-box').remove();
				}
			}


		});
	};
	//文本编辑框事件
	Editor.txtEvent = function() {
		this.fontPullDown();
		//this.fontFamily();
	};
	//设置字体事件
	Editor.fontFamily = function() {

	};
	Editor.fontPullDown = function() {
		var that = this;
		$(document).on('click','#editor-box .dropdown-toggle',function() {

		});
		$(document).on('click','#editor-box .dropdown-menu li',function() {
			if($(this).closest('.fontFamily').length || $(this).closest('.fontSize').length) {
				var text = $(this).text().replace(/px/g,'');
				$(this).parent().siblings('.dropdown-toggle').find('span').text(text);

				that.txtStyle();

			}
		});
	};
	Editor.txtStyle = function () {
		var that = this;

	};

	//计算文本编辑框的位置
	Editor.editorPosition = function(elem) {
		var pos = {};
		var elemL = elem.offset().left;
		var elemT = elem.offset().top;
		pos.left = elemL + elem.innerWidth()/2 - $('#editor-box').innerWidth()/2;
		pos.top = elemT - $('#editor-box').innerHeight() -10;
		if(elemT < ($('header.nav-header').innerHeight()+$('#editor-box').innerHeight() +10) ) {
			pos.top = elemT + elem.innerHeight() + 10;
		}

		return pos;

	}

	return Editor;
});