/**
 * Created by liusuling on 2016/9/9.
 */
define(['grid'],function (grid) {
	var compGrid = {
		init: function() {
			grid.init('#grid');
			compGrid.chooseColorWay();
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
		}


	};

	return compGrid;
});
