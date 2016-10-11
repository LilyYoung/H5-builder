/**
 * Created by liusuling on 2016/10/9.
 * @param 背景，音乐，图片，图形按钮点击事件，以及所对应弹窗等功能
 */

define(['modal'],function (_modal) {
	var headerToolModal = {};
	//初始化
	headerToolModal.init = function() {
		this.events();
	};

	 headerToolModal.events = function() {
		this.headerBtnEvent();
	};

	//点击背景，音乐，图片，图形按钮按钮，出现弹窗
	headerToolModal.headerBtnEvent = function() {
		$('.comp_panel').on('click','li.bg,li.music,li.image',function() {
			if($('.modal').length>0) $('.modal').remove();
			_modal.createModal();

			$('.img-console').modal();
		});
	};

	return headerToolModal;
});




