/**
 * Created by liusuling on 2016/10/9.
 *  @param:弹窗公共类方法
 */

define(['tools'],function (tools) {
	var modal = {};

	//初始化
	modal.createModal = function(option) {
		$('body').append(GTPL.imgModal());
		tools.fnPagination({
			selector: 'img-pagination',
			pages: 800,
			curr: 2,
			groups: 4,
			skin: '#59c7f9',
			callback: function(obj, first) {

			}
		});
	};

	return modal;
});