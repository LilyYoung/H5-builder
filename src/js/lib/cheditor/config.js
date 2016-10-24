/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbar =
		[
		['Bold','Italic','Underline','Strike','Subscript','Superscript','-', 'RemoveFormat'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Link','Unlink'],
		['Font','FontSize'],
		['Cut','Copy','Paste','PasteText'],
		['TextColor','BGColor']
	];

	config.uiColor = '#48d5b2';
	config.font_defaultLabel = '微软雅黑';
	config.font_names = '宋体;微软雅黑;黑体;Arial';
	config.fontSize_defaultLabel = '14px';
	config.fontSize_sizes ='12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px';

};
