/**
 * Created by liusuling on 2016/9/9.
 */
define(['grid'],function (grid) {

	var compGrid = {
		init: function() {
			this.gridColor = '#ccc';//默认颜色值
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
			$('.grid-guide-setting .choose-color-box span').css('background-color',this.gridColor);
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
			this.documentEvent();
		},

		//有网格颜色事件
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

		//网格按钮事件
		btnEvent: function() {
			var that = this;
			$('#speedy-toolbar .grid-guide').on('click',function() {
				that.fnBtnEvent($('#speedy-toolbar .grid-guide-container'));
			})
			$('#speedy-toolbar .background-tool').on('click',function() {
				that.fnBtnEvent($('#speedy-toolbar .background-container'));
			})
		},

		//工具栏按钮弹窗事件函数
		fnBtnEvent: function(obj) {
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

	return compGrid;
});
