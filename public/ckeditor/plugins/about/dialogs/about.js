/*
 Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/

CKEDITOR.dialog.add("about", function (a) {
    a = a.lang.about; 
    var b = CKEDITOR.getUrl(CKEDITOR.plugins.get("about").path + "dialogs/" + (CKEDITOR.env.hidpi ? "hidpi/" : "") + "logo_ckeditor.png"); 
    const paragraphs = {
        epikrise:
        "<h3>Unter einer Epikrise wird die abschlie&szlig;ende Beurteilung eines Krankheitsverlaufs vonseiten des Arztes bzw. der &Auml;rztin verstanden. Sie fasst die bei der Aufnahme bestehenden Hauptsymptome, die daraus resultierenden Untersuchungen sowie deren Ergebnisse zur Diagnose, Therapie und gegebenenfalls Prognose zusammen. Zudem begr&uuml;ndet sie, warum in dem speziellen Fall genau diese Diagnose getroffen und andere Differenzialdiagnosen ausgeschlossen wurden. Ebenfalls wichtig ist eine Stellungnahme, inwieweit die erhobenen Befunde die Beschwerden oder den Grund der Behandlung erkl&auml;ren, ebenso wie die Diskussion eventueller Besonderheiten des Falles.</h3>\n\n<p>&nbsp;</p>\n\n<p>Doch auch hier hei&szlig;t es wieder: In der K&uuml;rze liegt die W&uuml;rze und eine Aneinanderreihung von nicht relevanten und unauff&auml;lligen Befunden sollte auf jeden Fall vermieden werden. Ebenso kann darauf verzichtet werden, dem Leser &uuml;bliche und gel&auml;ufige Standardtherapien zu beschreiben. Die Epikrise ist im Optimalfall eine halbe bis maximal eine Seite lang.</p>\n\n<p>",
      diagnosen:
        "<p>Alle im Behandlungsverlauf erhobenen Diagnosen sollten unter diesem Punkt vollst&auml;ndig und korrekt zusammengefasst bzw. angegeben werden, beginnend mit der Hauptdiagnose. Die weiteren Diagnosen werden nach klinischer Bedeutung gegliedert, um dem Leser das Zurechtfinden zu erleichtern. Wenn bei komplexen und langen Behandlungsverl&auml;ufen verschiedene Diagnosen gestellt werden, muss im Sinne der &Uuml;bersichtlichkeit abgewogen werden, welche davon in der Diagnoseliste aufgef&uuml;hrt werden sollen. Wichtig: Nur wenn sich keine Diagnose stellen l&auml;sst, k&ouml;nnen auch die Befunde und Symptome genannt werden &ndash; sonst werden diese nicht aufgef&uuml;hrt. Die fehlende Diagnose muss zudem anschlie&szlig;end in der Epikrise n&auml;her erl&auml;utert und begr&uuml;ndet werden.</p>\n\n<p>Eine Auflistung der Diagnosen im Arztbrief k&ouml;nnte u.a. so aussehen:</p>\n\n<p><strong>Diagnosen:</strong><br />\nDiabetes mellitus Typ 2 (E11)<br />\nAnhaltende Schmerzst&ouml;rung mit somatischen und psychischen Faktoren (F45.4)<br />\nEssentielle Hypertonie (I10.9)<br />\nReine Hypertriglyzerid&auml;mie (E78.1)</p>\n\n",
      anamnese:
        "<p>Bei der Anamnese wird in den meisten F&auml;llen die allgemeine Vorgeschichte der Patienten, besonders bei einer &Uuml;berweisung durch den Hausarzt bzw. die Haus&auml;rztin, als bekannt vorausgesetzt und, um Wiederholungen zu umgehen, nicht n&auml;her beleuchtet. Eine Standardformulierung im Arztbrief in solchen F&auml;llen kann lauten: &bdquo;Die Vorgeschichte des Patienten / der Patientin m&ouml;chten wir freundlicherweise als bekannt voraussetzen&ldquo;.</p>\n\n<p>Ist das Wissen &uuml;ber die Vorgeschichte jedoch nicht zweifelsfrei vorauszusetzen, wird bei der Anamnese die Art, die Dauer und der Verlauf der vom Patienten beschriebenen Beschwerden wiedergegeben. Au&szlig;erdem m&uuml;ssen hier ebenfalls alle Zwischenanamnesen und Ver&auml;nderungen der Beschwerden bei der Aufnahme und Behandlung des Patienten angegeben werden.</p>\n\n<h3>K&ouml;rperlicher Untersuchungsbefund (je nach Fachgebiet), Eingriffe, Operationen</h3>\n\n<p>K&ouml;rperliche Untersuchungsbefunde, Eingriffe und Operationen werden logischerweise nur dann angegeben, wenn sie tats&auml;chlich in der Praxis oder im Krankenhaus durchgef&uuml;hrt wurden. Bei Fach&auml;rzt:innen k&ouml;nnen solche Untersuchungen beispielsweise spezifische Tests (Lactose-, Seh- und H&ouml;rtest etc.) sein, in Krankenh&auml;usern geh&ouml;ren u.a. EKG-, Labor- und R&ouml;ntgenuntersuchungen zu den h&auml;ufigen Untersuchungen. Sind keine Untersuchungen oder Eingriffe erfolgt, entf&auml;llt dieser Teil im Arztbrief und es wird direkt zum n&auml;chsten Abschnitt, der Epikrise, &uuml;bergegangen.</p>\n\n",
      therapie:
        "<p>Dieser Teil ist f&uuml;r die Empf&auml;nger besonders wichtig. Neben den allgemeinen Therapieempfehlungen enth&auml;lt dieser Teil des Arztbriefes eine vollst&auml;ndige Medikamentenliste (inkl. genauer Angaben zu Dosis, H&auml;ufigkeit, Zeitpunkt und ggf. Zeitspanne der empfohlenen Einnahme). &Auml;nderungen in der haus&auml;rztlichen Medikation m&uuml;ssen, falls noch nicht in der Epikrise geschehen, hier begr&uuml;ndet werden. Wichtig ist, dass die Empfehlungen auch als solche formuliert werden und nicht direktiv wirken.</p>\n\n<p>&nbsp;</p>\n",
    }
    
    return {
        title: 'Epikrise',//a.dlgTitle, 
        minWidth: 390, 
        minHeight: 210, 
        contents: [{
            id: "tab1", 
            label: "", 
            title: "", 
            expand: !0, 
            padding: 0, 
            elements: [{
                type: "html", 
                html: '<html> <head> <title>Der Titel des Dokuments</title> </head> <body>  <textarea name="comment" rows="12" cols="35">Unter einer Epikrise wird die abschlie&szlig;ende Beurteilung eines Krankheitsverlaufs vonseiten des Arztes bzw. der ...</textarea><br></body></html>'
                // html: '\x3cstyle type\x3d"text/css"\x3e.cke_about_container{color:#000 !important;padding:10px 10px 0;margin-top:5px}.cke_about_container p{margin: 0 0 10px;}.cke_about_container .cke_about_logo{height:81px;background-color:#fff;background-image:url(' +
                //     b + ");" + (CKEDITOR.env.hidpi ? "background-size:194px 58px;" : "") + 'background-position:center; background-repeat:no-repeat;margin-bottom:10px;}.cke_about_container a{cursor:pointer !important;color:#00B2CE !important;text-decoration:underline !important;}.cke_about_container \x3e p,.cke_rtl .cke_about_container \x3e p{text-align:center;}\x3c/style\x3e\x3cdiv class\x3d"cke_about_container"\x3e\x3cdiv class\x3d"cke_about_logo"\x3e\x3c/div\x3e\x3cp\x3eCKEditor ' + CKEDITOR.version + " (revision " + CKEDITOR.revision +
                //     ')\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://ckeditor.com/"\x3ehttps://ckeditor.com\x3c/a\x3e\x3c/p\x3e\x3cp\x3e' + a.moreInfo + '\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://ckeditor.com/legal/ckeditor-oss-license/"\x3ehttps://ckeditor.com/legal/ckeditor-oss-license/\x3c/a\x3e\x3c/p\x3e\x3cp\x3e' + a.copy.replace("$1", '\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://cksource.com/"\x3eCKSource\x3c/a\x3e Holding sp. z o.o') +
                //     "\x3c/p\x3e\x3c/div\x3e"
            }]
        }], buttons: [CKEDITOR.dialog.cancelButton, CKEDITOR.dialog.okButton]
    }
});