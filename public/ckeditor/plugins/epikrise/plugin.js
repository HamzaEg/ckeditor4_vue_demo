CKEDITOR.plugins.add( 'epikrise', {
    icons: 'epikrise',
    init: function( editor ) {
        editor.ui.addButton('epikrise', {
            label: 'Insert Current Datetime',
            command: 'insertEpikrise',
            toolbar: 'document'
        })

        editor.addCommand('insertEpikrise', {
            exec: function(editor) {
                var now = new Date();
                console.log();
                editor.setData( editor.getData().includes('Current Datetime is') ? '' :("Current Datetime is: " + now.toString()) )
                //editor.insertHtml("Current Datetime is: " + now.toString());
            }
        })
    }
})