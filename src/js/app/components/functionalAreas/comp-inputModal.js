/**
 * Created by liusuling on 2016/10/10.
 * @param:头部点击表单按钮相关内容
 */

define(function () {
	var compInputModal = {};
	//初始化
	compInputModal.init = function() {
		this.events();
	};

	compInputModal.events = function() {
		this.headerFormBtnEvent();
	};

	compInputModal.headerFormBtnEvent = function() {
		$('.comp_panel').on('click','li.form .header-input ',function() {
			if($('.modal').length>0) $('.modal').remove();
			$('body').append(GTPL.inputBoxModal());
			$('.input-box-modal').modal();
		});
	};



	return compInputModal;
});

