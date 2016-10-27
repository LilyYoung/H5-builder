/**
 * Created by liusuling on 2016/9/13.
 * @param:模板中心
 */
define(function () {
	var compTemplate = {
		init: function() {
			this.initStyle();
			this.events();
		},
		//初始化样式
		initStyle: function() {
			$('.template .tpl-container li:nth-of-type(3n+1)').removeClass('hint--left').addClass('hint--right');
		},

		//事件集合
		events: function() {
			this.templateEvent();
			this.myTemplateEvent();
			this.selectBtnEvent();
			this.selectEvent();
			this.searchEvent();
			this.templateListEvent();
			this.modalSureCancelEvent();
			this.documentEvent();
		},

		//主模板tab切换事件
		templateEvent: function() {
			$('.template').on('click','#template-nav li',function() {
				var $index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$('.tpl-tab-panel-wrap').children().addClass('hide').eq($index).removeClass('hide');

			})
		},

		//我的模板切换事件
		myTemplateEvent: function() {
			$('.template').on('click','#my-template-nav li',function() {
				var $index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$('.tpl-panel-my .tag-tpl-tab-con').children().addClass('hide').eq($index).removeClass('hide');
			})
		},

		//下拉按钮选择框事件
		selectBtnEvent: function() {
			$('.template').on('click','.sel-contain .sel-btn',function() {
				var nextObj = $(this).next();
				$(this).parent('.sel-contain').siblings().find('.eqc-drop-down-list').removeClass('visible');
				if(nextObj.hasClass('visible')) {
					nextObj.removeClass('visible');
				}else {
					nextObj.addClass('visible');
				}
			});
		},

		//下拉选择框事件
		selectEvent: function() {
			$('.template').on('click','.eqc-drop-down-list li',function() {
				$(this).addClass('active').siblings().removeClass('active');
				$(this).parents('.eqc-drop-down-list').removeClass('visible');
				$(this).parents('.sel-contain').find('.sel-btn em').text($(this).text());
			});
		},

		//搜索事件
		searchEvent: function() {
			$('.template').on('click','.search-wrap .fa-search',function() {
				var oInput = $(this).siblings('input');
				if( $.trim(oInput.val()) != '') {
					$(this).addClass('hide').next().removeClass('hide');
				}else {
					oInput.val('');
				}
			})
			$('.template').on('click','.search-wrap .fa-times',function() {
				$(this).siblings('input').val('');
				$(this).addClass('hide').prev().removeClass('hide');
			})
		},

		//模板列表点击出现弹窗
		templateListEvent: function() {
			$('.template').on('click','.tpl-container li',function(){
				if($('.modal').length>0) $('.modal').remove();
				$('body').append(GTPL.confirm());
				$('.confirm-modeal').modal({
					backdrop: 'static'
				});
			});
		},

		//模板列表弹框确定取消事件
		modalSureCancelEvent: function() {
			$('body').on('click','.confirm-modeal .btn-contain a',function() {
				var confirmObj = $(this).parents('.confirm-modeal');
				var $index = $(this).index();
				confirmObj.removeClass('in');
				setTimeout(function() {
					confirmObj.hide();
				},150)
				$('.modal-backdrop').remove();
				if($index == 0) {

				}
			})

		},

		//document对应事件
		documentEvent: function() {

			$(document).on('click.tool',function(ev) {

				if(ev.target.closest('.template .sel-contain') ) {
					ev.preventDefault();
					ev.stopPropagation();
				}else {
					$('.template .sel-contain .eqc-drop-down-list').removeClass('visible');
				}
			});
		}
	};

	return compTemplate
})