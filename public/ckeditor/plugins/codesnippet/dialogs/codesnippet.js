/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

( function() {
	CKEDITOR.dialog.add( 'codeSnippet', function( editor ) {
		var snippetLangs = editor._.codesnippet.langs,
			lang = editor.lang.codesnippet,
			clientHeight = document.documentElement.clientHeight,
			langSelectItems = [],
			snippetLangId;

		langSelectItems.push( [ editor.lang.common.notSet, '' ] );

		for ( snippetLangId in snippetLangs )
			langSelectItems.push( [ snippetLangs[ snippetLangId ], snippetLangId ] );

		// Size adjustments.
		var size = CKEDITOR.document.getWindow().getViewPaneSize(),
			// Make it maximum 800px wide, but still fully visible in the viewport.
			width = Math.min( size.width - 70, 800 ),
			// Make it use 2/3 of the viewport height.
			height = size.height / 1.5;

		// Low resolution settings.
		if ( clientHeight < 650 ) {
			height = clientHeight - 220;
		}

		return {
			title: 'Paragraphs', //lang.title,
			minHeight: 200,
			resizable: CKEDITOR.DIALOG_RESIZE_NONE,
			contents: [
				{
					id: 'info',
					elements: [
						{
							id: 'lang',
							type: 'select',
							label: 'Headers', //lang.language,
							items: langSelectItems,
							setup: function( widget ) {
								console.log(widget);
								if ( widget.ready && widget.data.lang )
								console.log(widget);
									this.setValue( widget.data.lang );

								// The only way to have an empty select value in Firefox is
								// to set a negative selectedIndex.
								if ( CKEDITOR.env.gecko && ( !widget.data.lang || !widget.ready ) )
								console.log(widget);
									this.getInputElement().$.selectedIndex = -1;
							},
							commit: function( widget ) {
								widget.setData( 'lang', this.getValue() );
							}
						},
						{
							id: 'code',
							type: 'textarea',
							label: 'Header Content',// lang.codeContents,
							setup: function( widget ) {
								console.log(widget.data.code);
								this.setValue( widget.data.code );
							},
							commit: function( widget ) {
								widget.setData( 'code', this.getValue() );
							},
							required: true,
							validate: CKEDITOR.dialog.validate.notEmpty( 'a header Content cannot be empty.'),//lang.emptySnippetError ),
							inputStyle: 'cursor:auto;' +
								'width:' + width + 'px;' +
								'height:' + height + 'px;' +
								'tab-size:4;' +
								'text-align:left;',
							'class': 'cke_source'
						}
					]
				}
			]
		};
	} );
}() );
