/**
 * Created by wangyongqiang-ds1 on 2016/9/6.
 */
define(['modal'],function (_modal) {
	var potoList = {};
	//初始化
	potoList.init = function() {
		this.events();
	};

	potoList.events = function() {
		this.atlasBtnEvent();
		this.addImgEvent();
		this.selectBtnEvent();
		this.selectEvent();
		this.documentEvent();

	};

	//点击头部图集按钮，出现弹窗
	potoList.atlasBtnEvent = function() {
		var that = this;
		$('.comp_panel').on('click','li.images',function() {
			if($('.modal').length>0) $('.modal').remove();
			$('body').append(GTPL.pictures1());
			$('.pictures1').modal({
				backdrop: 'static'
			});

			//裁剪
			that.jcrop({
				selector:'#img_preview',
				aspectRatio: 1
			})

		});
	};

	//点击添加图片事件，弹出选择图片弹窗
	potoList.addImgEvent = function() {
		$(document).on('click','.pictures1 .add-img',function() {
			_modal.createModal();

			$('.img-console').on('show.bs.modal', function () {

				$('.modal-backdrop').eq(0).css('zIndex',1050);
			});
			$('.img-console').modal('show');
			$('.modal-backdrop').eq(1).css('opacity',0);

			$('.img-console').on('hidden.bs.modal', function () {
				$('.modal-backdrop').eq(0).css('zIndex',1042);
			});
		});
	};

	//动画下拉按钮选择框事件
	potoList.selectBtnEvent = function() {
		$(document).on('click','.pictures1 .picture-set .eqc-mask',function() {
			var nextObj = $(this).next();
			if(nextObj.hasClass('visible')) {
				nextObj.removeClass('visible');
			}else {
				nextObj.addClass('visible');
			}
		});
	};

	//动画下拉选择框事件
	potoList.selectEvent = function() {
		$(document).on('click','.pictures1 .picture-set .eqc-drop-down-list li',function() {
			$(this).addClass('active').siblings().removeClass('active');
			$(this).parents('.eqc-drop-down-list').removeClass('visible');
			$(this).parents('.select-contain').find('.eqc-name').text($(this).text());
		});
	};

	//裁剪图片，后期移入公共的地方，
	potoList.jcrop = function(option) {
		var jcrop_api;
		$(option.selector).Jcrop({
			setSelect: [ 0, 0, 340, 340 ],
			aspectRatio: option.aspectRatio,
			onSelect: updateCoords,
			onRelease: function(){

			}
		},function(){
			jcrop_api = this;

			$('.jcrop-holder').css({
				position: 'absolute',
				left: '50%',
				top: '50%',
				WebkitTransform: 'translate(-50%,-50%)',
				MozTransform: 'translate(-50%,-50%)',
				OTransform: 'translate(-50%,-50%)',
				transform: 'translate(-50%,-50%)'
			});
			$('.jcrop-holder input').css('visibility','hidden');
			return false;
		});
		function updateCoords(c){
		};


	};

	//document对应事件
	potoList.documentEvent = function() {

		$(document).on('click.move',function(ev) {

			if(ev.target.closest('.pictures1 .picture-set .eqc-mask') ) {
				ev.preventDefault();
				ev.stopPropagation();
			}else {
				$('.pictures1 .picture-set .eqc-drop-down-list').removeClass('visible');
			}
		});
	};

	return potoList;
});