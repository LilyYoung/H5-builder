/**
 * Created by liusuling on 2016/10/9.
 * @param 背景，音乐，图片，图形按钮点击事件，以及所对应弹窗等功能
 */

define(['modal'],function (_modal) {
	var headerToolModal = {};
	//初始化
	headerToolModal.init = function() {
		this.events();

		//3333 测试用
		//this.testAjax();

	};

	 headerToolModal.events = function() {
		this.headerBtnEvent();
		 this.headerDragEvent();
	};

	//点击背景，音乐，图片，图形按钮按钮，出现弹窗
	headerToolModal.headerBtnEvent = function() {
		var that = this;
		$('.comp_panel').on('click','li.bg,li.music,li.image',function() {
			_modal.createModal({

			});
			//3333333
			that.uploading();
		});
	};
	headerToolModal.headerDragEvent= function () {
		//拖拽
		$(".comp_panel li").draggable({
			helper: "clone"
		});
		//鼠标松开后事件
		$(".comp_panel li.bg,li.music,li.image").bind('dragstop', function(event, ui) {
			if($('.modal').length>0) $('.modal').remove();
			_modal.createModal();

			$('.img-console').modal();
		});

	};

	//测试用3333
	headerToolModal.testAjax = function() {
		var data = {
			salesAmount: 2,
			description: "h5构造器，h5生成器",
			keyWords: "h5构造器，h5生成器！！！！！！！！！！",
			pageTitle: "h5生成器",
			srcHtml: '<div class="grid-guide-container"> <div class="grid-guide-setting"> <div class="setting-group"> <span>网络开关</span> <div class="setting-choice"> <div class="switch switch-open"> <div class="circle-con"> <i class="circle"></i> </div> </div> </div> </div> <div class="setting-group"> <label>网格颜色</label> </div> <div class="setting-group choose-color-box"> <div class="eqc-input-color"> <input type="text" value="" class="form-control hide"> <span class="input-group-addon"><i ></i></span> </div> </div> <div class="setting-group"> <span>智能参考</span> <div class="setting-choice"> <div class="switch switch-open"> <div class="circle-con"> <i class="circle"></i> </div> </div> </div> </div> <div class="setting-group"> <span>吸附效果</span> <div class="setting-choice"> <div class="switch switch-open"> <div class="circle-con"> <i class="circle"></i> </div> </div> </div> </div> </div> </div> <div class="background-container"> <div class="background-pane"> <div class="setting-group"> <div class="setting-btn"><i class="fa fa-scissors" aria-hidden="true"></i></div> <span>裁剪</span> </div> <div class="setting-group"> <div class="setting-btn"><i class="fa fa-repeat" aria-hidden="true"></i></div> <span>更换</span> </div> <div class="setting-group"> <div class="setting-btn"><i class="fa fa-moon-o" aria-hidden="true"></i></div> <span>效果</span> </div> <div class="setting-group"> <div class="setting-btn"><i class="fa fa-trash" aria-hidden="true"></i></div> <span>删除</span> </div> </div> </div>'
		};
		$.ajax({
			url: 'http://ngcc.atguat.com.cn:3205/gome-gcc-web/poster/addPoster.do',
			type: 'post',
			data: data,
			dataType: 'jsonp',
			success:function(data) {
				alert('成功')
			},
			error: function() {
				alert('error')
			}
		})
	};

	//上传测试 33333
	headerToolModal.uploading = function() {
		//$(document).on('change','#fileupload',function() {
			$('#fileupload').fileupload({
				type:"POST",
				url: 'http://ngcc.atguat.com.cn:3205/gome-gcc-web/posterImg/upload.do?groupId=0',
				dataType: 'json',
				acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
				maxFileSize: 2000000, // 2 MB
				sequentialUploads : true,
				autoUpload: true,//是否自动上传
				//fileInput: $('#fileupload'),
				forceIframeTransport: true,//用来解决跨域
				multipart: true,
				done: function (e, data) {
					console.log(2)
				}
			});
		/*$('#fileupload').attr('action','http://ngcc.atguat.com.cn:3205/gome-gcc-web/posterImg/upload.do?groupId=0');
		$('#fileupload').fileupload({
			dataType: 'json',
			acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
			maxFileSize: 2000000, // 2 MB
			sequentialUploads : true,
			autoUpload: true,//是否自动上传
			multipart: true,

			done: function (e, data) {
				console.log(2)
			}
		});*/
		//});
	};

	return headerToolModal;
});




