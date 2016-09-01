/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.baseHref = 'http://libs.wqdian.net/ckeditor/';
	config.enterMode = CKEDITOR.ENTER_BR;  
	config.shiftEnterMode = CKEDITOR.ENTER_P;  
	config.pasteFromWordIgnoreFontFace = true; 
	config.pasteFromWordRemoveFontStyles = true;
	config.pasteFromWordRemoveStyles = true;
	config.forcePasteAsPlainText = true;
	config.pasteFromWordPromptCleanup = true;
	config.fontSize_sizes = '12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;30/30px;32/32px;34/34px;36/36px;38/38px;40/40px;42/42px;44/44px;46/46px;48/48px;50/50px;52/52px;54/54px;56/56px;58/58px;60/60px;62/62px;64/64px;66/66px;68/68px;70/70px;72/72px;74/74px;76/76px;78/78px;80/80px;82/82px;84/84px;86/86px;88/88px;90/90px;92/92px;';
	config.font_names='宋体/宋体;新宋体/新宋体;黑体/黑体;微软雅黑/微软雅黑;Arial/Arial,Helvetica,sans-serif;Verdana/Verdana,Arial,Helvetica,sans-serif;';
	config.extraPlugins += (config.extraPlugins ?',lineheight' :'lineheight');
	config.line_height="20px;22px;24px;26px;28px;30px;32px;34px;36px;38px;40px;42px;44px;46px;48px;50px;52px;54px;56px;58px;60px;62px;64px;66px;68px;70px;72px;74/74px;76/76px;78/78px;80/80px;82/82px;84/84px;86/86px;88/88px;90/90px;92/92px;";
	config.removeDialogTabs = 'link:advanced;image:advanced;image:target;';
};
