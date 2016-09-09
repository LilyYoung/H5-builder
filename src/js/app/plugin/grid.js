/**
 * Created by liusuling on 2016/9/9.
 */
define(function () {
	var grid = {
		init: function(selector) {
			var oC = $(selector);
			this.oGC = oC[0].getContext('2d');
			this.width = oC.width();
			this.height = oC.height();

			this.draw();
		},

		//绘制
		draw: function() {
			this.oGC.fillStyle = 'red';
			this.oGC.beginPath();
			this.oGC.moveTo(100,100);
			this.oGC.lineTo(200,200);
			this.oGC.lineTo(300,200);
			this.oGC.lineTo(100,100);
			this.oGC.closePath();
			this.oGC.stroke();
		}







	};
	return grid;
});