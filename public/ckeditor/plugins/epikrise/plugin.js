CKEDITOR.plugins.add( 'epikrise', {
    icons: 'epikrise',
    init: function( editor ) {
        editor.ui.addButton('epikrise', {
            label: 'Inser Epikrise',
            command: 'insertEpikrise',
            toolbar: 'document'
        })

        editor.addCommand('insertEpikrise', {
            exec: function(editor) {
                var now = new Date();
                console.log(editor);
                editor.insertHtml("Current Datetime is: " + now.toString());
            }
        })
    }
})