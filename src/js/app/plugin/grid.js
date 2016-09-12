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

			this.draw('rgba(0,0,0,0)');
		},

		//绘制
		draw: function(color) {
			this.oGC.clearRect(0,0,this.width,this.height);
			this.oGC.save();
			this.oGC.strokeStyle = color;
			this.oGC.lineWidth = 1;
			this.oGC.beginPath();
			for(var i=0; i<9; i++) {
				this.oGC.moveTo((32*(i+1))+0.5,0);
				this.oGC.lineTo((32*(i+1))+0.5,486);
			}
			for(var i=0; i<16; i++) {
				this.oGC.moveTo(0,(30*(i+1))+0.5);
				this.oGC.lineTo(320,(30*(i+1))+0.5);
			}
			this.oGC.closePath();
			this.oGC.stroke();
			this.oGC.restore();
		}
	};

	return grid;
});