/**
 * Created by liusuling on 2016/9/9.
 */
define(['grid'],function (grid) {
	var compGrid = {
		init: function() {
			grid.init('#grid');
			compGrid.chooseColorWay();
			compGrid.chooseBgColorWay();
			compGrid.getOpacity();
		},

		//网格颜色选择器初始化
		chooseColorWay: function() {
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
			$('.grid-guide-setting').append($('<div class="gridColorPicker"></div>'));
			$('.grid-guide-container .eqc-input-color').colorpicker(this.colorOption).on('changeColor',function(e) {
				var color = $('.grid-guide-container .input-group-addon i').css('background-color')
				grid.draw(color)
			});
		},

		//背景颜色选择器初始化
		chooseBgColorWay:function() {
			$('#color-select-bg').colorpicker({
				color: '#eee', format: 'rgba'
			}).on('changeColor', function(e){
				$('.scene .workspace .nr .edit_wrapper .wrapper-background')[0].style.backgroundColor = e.color.toHex();
				// $('body')[0].style.backgroundColor = e.color.toHex();
			})
		},

		//设置透明度
		getOpacity:function () {

		}


	};

	return compGrid;
});
