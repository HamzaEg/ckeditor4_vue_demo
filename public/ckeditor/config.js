/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'en';
	 //config.uiColor = '#AADC6E';
	 config.uiColor = '#E3F2FD';
	
	config.height = '20em';     // CSS unit (em).
	//config.width = '75%'; 
	

	config.toolbarGroups = [
		{ name: 'about', groups: [ 'about' ] },
		{ name: 'document', groups: [ 'doctools', 'mode', 'document' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] }
	];
	
	// config.extraPlugins = 'timestamp';
	config.removePlugins = 'iframe';
	config.removeButtons = 'Source,Save,NewPage,Preview,Cut,Copy,Paste,PasteText,PasteFromWord,Scayt,Redo,Undo,Find,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Link,Unlink,Anchor,Iframe,Styles,Format,Font,FontSize';
	// config.filebrowserImageBrowserUrl = "imageFolder/";

};
