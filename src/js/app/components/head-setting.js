/**
 * Created by xiejunmei on 2016/10/25.
 */
define(function () {
    var headSetting = {
        data:[],
        init: function () {
            this.ismobileSet();
            this.creatBombbox();
        },
        //创建弹出层
        creatBombbox: function () {
            var _this=this;
            $('.header_setting').click(function () {
                $('.mobile-preview').css({'z-index':'1050'});
                $('.setting-bg').show().css({'z-index':'1042'});
                $('.phone_panel').show().css({'left':'50%',"margin-top":'-328px','margin-left':'-160px','z-index':'1050'});
                _this.switchingEffect();
            });
            $('.create-action .publish,.create-action .save,.create-action .quit').click(function () {
                $('.mobile-preview').css({'z-index':'0'});
                $('.setting-bg').css({'z-index':'0'}).hide();
                $('.phone_panel').css({'left':'35%',"margin-top":'-320px','margin-left':'-130px','z-index':'0'}).hide();
            });
        },
        //初始化缩放
        setScale: function () {
            if (window.top !== window) {
                return;
            }
            var pageScale = 1;

            var width = document.documentElement.clientWidth || 320;
            var height = document.documentElement.clientHeight || 486;

            if (width / height >= 320 / 486) {
                pageScale = height / 486;
            } else {
                pageScale = width / 320;
            }
            // meta
            var content = 'width=320, initial-scale=' + pageScale + ', maximum-scale=' + pageScale + ', user-scalable=no';
            document.getElementById('viewport').setAttribute('content', content);
        },
        isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent) ||
                window.innerWidth < 500;
        },
        ismobileSet: function () {
            var _this = this;
            if (_this.isMobile()) {
                _this.setScale();
                //获取可视区高度;
                var winHeight = $(window).height();
                //修改移动端的结构
                $('.phone_panel').removeClass('phone_panel');
                $('.phoneBox').find('.scene_title_baner').hide();
                $('.ctrl_panel').hide();
                $('.phoneBox').css({'width': '100%', 'height': '100%'});
                $('.swiper-container').css({'width': '100%', 'height': winHeight + 'px','top':'0px'});
                $('.edit_area').css({'margin-top': "41px"});
            }
        },
        //动画数组回调
        animateCss:function(obj,animatelist){
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            var animate=[];
            if(animatelist) animate=$.extend(true, [], animatelist);

            //执行每个元素的动画数组
            function animateFn(obj){
                if(animate&&animate.length){
                    obj.css('animation',animate[0]).one(animationEnd,function(){
                        //去掉animate 动画
                        obj.css('animation','');
                        //已执行的动画，移除数组
                        animate.splice(0,1);
                        //执行后续动画
                        animateFn(obj);
                    });
                }
            }
            animateFn(obj);
        },
        //模拟滑屏效果
        switchingEffect:function(){
            var _this=this;
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.next_btn',
                prevButton: '.pre_btn',
                direction: 'vertical',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                loop: true,
                pagination : '.swiper-pagination',
                paginationType : 'custom',
                paginationCustomRender: function (swiper, current, total) {
                    var bfb=(current/total)*100;
                    return '<span style="width:'+bfb+'%;"></span><em class="page-tip">'+current+'/'+total+'</em>'
                },
                onInit: function(swiper){
                    //Swiper初始化了
                    //模拟设置元素的data 动画数组
                   /* $('.inside_1448735641').find('.element-box').data('animation',['zoomIn 1.4s ease 1.1s 1 both','fadeInRight 1.4s ease 1.4s 1 both']);*/

                    //取data 属性放入数组
                    $('.swiper-slide').each(function(index, el) {
                        var animationList=$(this).find('.element-box');
                        var animateData=[];
                        animationList.each(function(index, el) {
                            var animation= $(this).data('animation');
                            animateData.push(animation);
                        });
                        headSetting.data.push({'index':index,'animation':animateData});
                    });
                    //隐藏加载图
                    $('#loading').hide();
                    //加载第一屏的动画
                    $('.swiper-slide').eq(1).find('.element-box').each(function(index, el) {
                        _this.animateCss($(this),headSetting.data[1].animation[index]);
                    });
                },
                onSlideChangeStart: function(swiper){
                    //开始切换时
                    var activeIndex=swiper.activeIndex;
                    //加载切换当前页的动画效果
                    $('.swiper-slide').eq(activeIndex).each(function(index, el) {
                        var animationList=$(this).find('.element-box');

                        animationList.each(function(index, el) {
                            if(headSetting.data[activeIndex]){
                                _this.animateCss($(this),headSetting.data[activeIndex].animation[index]);
                            }
                        });
                    });
                }
            });
        }

    };

    return headSetting;
})