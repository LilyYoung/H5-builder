/**
 * Created by liusuling on 2016/9/9.
 * param:快捷区
 * 网格和背景快捷区
 */
define(['grid','tools','modal'],function (grid,tools,_modal) {
	var compGridBg = {
		init: function() {
			this.gridColor = '#76828e';//默认颜色值
			this.timer = 0;
			this.chooseColorWay();
			this.events();
		},

		//网格颜色选择器初始化
		chooseColorWay: function() {
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
				container: '.gridColorPicker',
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
			var chooseColorL = $('#speedy-toolbar').offset().left-218-178;
			var chooseColorT = $('.grid-guide-setting .choose-color-box').offset().top + 8;
			$('.grid-guide-setting input').val(this.gridColor);
			$('.grid-guide-setting .choose-color-box span i').css('background-color',this.gridColor);
			grid.init('#grid',this.gridColor);

			$('body').append($('<div class="gridColorPicker hide" style="left:'+chooseColorL+'px;top:'+chooseColorT+'px"></div>'));

			$('.grid-guide-container .eqc-input-color').colorpicker(this.colorOption).on('changeColor',function(e) {
				that.gridColor = $('.grid-guide-container .input-group-addon i').css('background-color');
				if($('.grid-guide-setting .switch').eq(0).hasClass('switch-open')) {
					grid.draw(that.gridColor);
				}
			});
		},

		//事件集合
		events: function() {
			this.btnEvent();
			this.gridColorEvent();
			this.switchEvent();
			this.setBgEvent();
			this.documentEvent();
		},

		//网格颜色事件
		gridColorEvent: function() {
			$('.grid-guide-setting .eqc-input-color').on('mousedown',function() {
				if($('.gridColorPicker').is(':hidden')) {
					$('.gridColorPicker').removeClass('hide');
				}else {
					$('.gridColorPicker').addClass('hide');
				}
			});

			$('.gridColorPicker').on('mousedown',function(ev){
				ev.preventDefault();
				ev.stopPropagation();
			});
			$(".gridColorPicker").draggable();//拖拽
		},

		//开关事件
		switchEvent: function() {
			var that = this;
			$('.grid-guide-setting .switch').on('click',function() {
				if($(this).hasClass('switch-open')) {//关
					$(this).removeClass('switch-open').addClass('switch-close');
					if($(this).closest('.setting-group').index() == 0) {
						grid.clearRect();
					}
				}else {//开
					$(this).removeClass('switch-close').addClass('switch-open');
					if($(this).closest('.setting-group').index() == 0) {
						grid.draw(that.gridColor);
					}
				}
			})
		},

		//快捷区按钮事件
		btnEvent: function() {
			var that = this;
			//网格按钮事件
			$('#speedy-toolbar .grid-guide').on('click',function() {
				that.dealOnClass($('#speedy-toolbar .grid-guide-container'));
			})
			//背景按钮事件
			$('#speedy-toolbar .background-tool').on('click',function() {
				
				var bgImg = that.dealBgImg($('#nr .wrapper-background').css('background-image'));
				var bgColor = that.dealBgColor($('#nr .wrapper-background').css('background-color'));
				var clipElem = $('.background-pane .setting-group.clip');

				if($('#nr .wrapper-background').length>0) {

					if( !bgImg &&  !bgColor){
						_modal.createModal({
							handle: 'bg'
						});
						return false;
					}else if(!bgImg &&  bgColor) {
						clipElem.hide();
					}else {
						clipElem.show();
					}
					that.dealOnClass($('#speedy-toolbar .background-container'));
				}else {
					_modal.createModal({
						handle: 'bg'
					});
				}
			})
		},

		//处理获取背景颜色的兼容性问题
		dealBgColor: function(bgColor) {
			if(!bgColor) {
				return false;
			}else {
				if(bgColor == 'rgba(0, 0, 0, 0)') {
					return false;
				}else if (bgColor == 'transparent'){
					return false;
				}
			}
			return true;
		},
		//处理是否有背景图片
		dealBgImg: function(bgImg) {
			if(!bgImg || bgImg == 'none') {
				return false;
			}
			return true;
		},

		//背景设置按钮事件
		setBgEvent: function() {
			var that = this;
			$(document).on('click','.background-pane .setting-group,.bgoption-container .setting-group',function () {
				var name = $.trim( $(this).attr('class').replace('setting-group ','') );
				that.fnSetBgEvent(name);
			});

			$(document).on('mouseover','.background-pane .setting-group.effect,#speedy-toolbar .bgoption-container',function () {
				clearTimeout(that.timer);
				if($(this).hasClass('effect')) {
					if(!$('#nr .wrapper-background').attr('move') || $('#nr .wrapper-background').attr('move') == 'none') {
						$('#speedy-toolbar .bgoption-container .deleteEffect').hide();
					}else {
						$('#speedy-toolbar .bgoption-container .deleteEffect').show();
					}
					if(!$('#speedy-toolbar .background-container').hasClass('on')) {
						$('#speedy-toolbar .bgoption-container').removeClass('on');
					}else {
						$('#speedy-toolbar .bgoption-container').addClass('on');
					}
				}else {

				}

			});
			$(document).on('mouseout','.background-pane .setting-group.effect,#speedy-toolbar .bgoption-container',function () {
				that.timer = setTimeout(function() {
					$('#speedy-toolbar .bgoption-container').removeClass('on');
				},100);
			});
		},

		//背景设置按钮事件函数
		fnSetBgEvent: function(name) {
			var that = this;
			switch (name) {
				//裁剪
				case 'clip':
					that.fnClip();
					break;
				//更换
				case 'renewal':
					that.fnRenewal();
					break;
				//效果
				case 'effect':
					that.fnEffect();
					break;
				//删除背景
				case 'deleteBg':
					that.fnDeleteBg();
					break;
				//放大
				case 'enlarge':
					that.fnEnlargeOrNarrow('enlarge');
					break;
				//缩小
				case 'narrow':
					that.fnEnlargeOrNarrow('narrow');
					break;
				//删除背景效果
				case 'deleteEffect':
					that.fnEnlargeOrNarrow('deleteEffect');
					break;
			}
			that.dealOnClass($('#speedy-toolbar .background-container'));

			if(!$('#speedy-toolbar .background-container').hasClass('on')) {
				$('#speedy-toolbar .bgoption-container').removeClass('on');
			}

		},

		//背景裁剪, 需要设置一个标识符，来区分是背景图，还是页面的编辑图
		fnClip: function() {
			if($('.modal').length>0) $('.modal').remove();
			$('body').append(GTPL.clipImage());
			$('#clipImage').modal({
				backdrop: 'static'
			});

			$('#clipImage').attr('handle','bg');//表示操作的是背景

			$('#img_preview').parent().css({
				width: 738,
				height: 430
			});
			$('#clipImage .picture-size').hide();

			//裁剪
			tools.jcrop({
				selector:'#img_preview',
				aspectRatio: 1,
				setSelect: [0,0,738,430]
			})
		},

		//更换背景图
		fnRenewal: function() {
			_modal.createModal({
				handle: 'bg'
			});
		},

		//背景图效果
		fnEffect: function() {
		},

		//删除背景图
		fnDeleteBg: function() {
			$('#nr .wrapper-background').css({
				'background-image': 'none',
				'background-color': 'transparent'
			});
		},

		//放大或者缩小背景图效果
		fnEnlargeOrNarrow: function(name) {
			var move;
			if(name == 'enlarge') {
				move = 'scaleUp 7s ease 1s both';
			}else if(name == 'narrow'){
				move = 'scaleDown 7s ease 1s both';
			}else {
				move = 'none';
			}
			$('#nr .wrapper-background').css({
				'animation': 'none',
				'-webkit-animation': 'none',
				'-moz-animation': 'none'
			}).attr('move',move);
			setTimeout(function() {
				$('#nr .wrapper-background').css({
					'animation': move,
					'-webkit-animation': move,
					'-moz-animation': move
				}).attr('move',move);
			},30);

		},

		//快捷区按钮添加或删除on的class名
		dealOnClass: function(obj) {
			obj.hasClass('on') ? obj.removeClass('on') : obj.addClass('on');
		},

		//document对应事件
		documentEvent: function() {
			//此处用mousedown而不用click，是因为颜色选择的插件是消失的事件是mousedown，为了同步消失，所以用mousedown
			$(document).on('mousedown.tool',function(ev) {
				if(ev.target.closest('.gridColorPicker') ) {
					ev.preventDefault();
					ev.stopPropagation();
				}else {
					if(!ev.target.closest('.eqc-input-color')){
						$('.gridColorPicker').addClass('hide');
					}
				}
			});

			$(document).on('click.tool',function(ev) {
				if(ev.target.closest('.grid-guide-container') ) {
					ev.preventDefault();
					ev.stopPropagation();
				}else {
					if(!ev.target.closest('.grid-guide')){
						if($('.gridColorPicker').is(':hidden')) {
							$('.grid-guide-container').removeClass('on');
						}
					}
				}
				if(ev.target.closest('.background-container') ) {
					ev.preventDefault();
					ev.stopPropagation();
				}else {
					if(!ev.target.closest('#speedy-toolbar .background-tool')){
						$('.background-container').removeClass('on');
					}
				}
			});
		}


	};

	return compGridBg;
});
