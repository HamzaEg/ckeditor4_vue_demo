<template>
  <div>
    <!-- <v-sheet class="mx-auto d-flex justify-center" max-width="600">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="template in templates"
          :key="template"
          v-slot="{ isSelected, toggle }"
        >
          <span @click="setTemplate(templates.indexOf(template))">
            <v-btn
              class="ma-2"
              rounded
              :color="isSelected ? 'primary' : undefined"
              @click="toggle"
            >
              {{ template.name }}
            </v-btn>
          </span>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet> -->
    <br />
    <v-container fluid>
      <v-row align="center" class="d-flex justify-center">
        <v-col class="d-flex" cols="12" sm="6">
          <!-- @update:modelValue="setEditorData(select)" -->
          <v-select
            v-if="editorData.vorlage === 0"
            v-model="select"
            :hint="`${select.title}  ${select.name}`"
            :items="recipient"
            item-title="name"
            item-value="title"
            label="Adressaten"
            persistent-hint
            return-object
            @update:modelValue="setInhalt('adressaten', select)"
          ></v-select>
          <v-select
            
            v-model="selectedPriority"
            :items="priority"
            item-title="name"
            item-value="title"
            label="Priority"
            persistent-hint
            return-object
            @update:modelValue="setInhalt('params', selectedPriority)"
          ></v-select>
        </v-col>
        <!-- @click="setEditorData" -->
      </v-row>
      <!-- <v-chip-group v-model="amenities" column multiple v-show="editorData.vorlage === 0">
        <v-chip
          filter
          variant="outlined"
          v-for="paragraph in paragraphs"
          :key="paragraph"
          @click="setParagraph(paragraph)"
        >
          {{ paragraph }}
        </v-chip>
      </v-chip-group> -->
    </v-container>
    
    <!-- <v-chip @click="setInhalt('diagnosen', paragraphs.diagnosen)">
      Diagnosen
    </v-chip>
    <v-chip @click="setInhalt('anamnese', paragraphs.anamnese)">
      Anamnese
    </v-chip>
    <v-chip @click="setInhalt('epikrise', paragraphs.epikrise)">
      Epikrise
    </v-chip>
    <v-chip @click="setInhalt('therapie', paragraphs.therapie)">
      Therapieempfehlungen
    </v-chip> -->

    <v-card color="grey pa-3 mb-3">
      <textarea id="editor1" name=""></textarea>
      <!-- <div name="editor2" contenteditable="true">
        This is inline example
      </div> -->
    </v-card>

    <v-btn @click="printEditorData">Print EditorData in Console</v-btn>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "CkEditor",
  props: ["templateIndex", "templateInhalt"],
  setup(props, { emit }) {
    
      const diagnosen=  ref("iangnosen inhalt as ref value");
      const epikrise = ref("epikrise inhalt as ref value");
      const anamnese = ref("anamnese inhalt as ref value");
      const Therapie = ref("Theramfehlungen inhalt as ref value");
      
  

    const amenities = ref([]);
    const select = ref({ name: "", title: "" });
    const selectedPriority = ref("");
    const selected = ref("");
    // const vorlagen = ref([]);
    // vorlagen.value.push(
    //   //'<table cellpadding="1" cellspacing="1" style="width:500px">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p>Adressaten</p>\n\t\t\t</td>\n\t\t\t<td><span style="font-size:10px">Paracelsus-Elena-Klink</span></td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<h3><strong>Diagnosen</strong></h3>\n\n<p>&nbsp;</p>\n\n<h3><strong>Anamnese</strong></h3>\n\n<p>&nbsp;</p>\n\n<h3><strong>Epikrise</strong></h3>\n\n<p>&nbsp;</p>\n\n<p><strong>Therapieempfehlungen</strong></p>\n\n<p>&nbsp;</p>\n\n<p>Dieser Teil ist f&uuml;r die Empf&auml;nger besonders wichtig. Neben den allgemeinen Therapieempfehlungen enth&auml;lt dieser Teil des Arztbriefes eine vollst&auml;ndige Medikamentenliste (inkl. genauer Angaben zu Dosis, H&auml;ufigkeit, Zeitpunkt und ggf. Zeitspanne der empfohlenen Einnahme). &Auml;nderungen in der haus&auml;rztlichen Medikation m&uuml;ssen, falls noch nicht in der Epikrise geschehen, hier begr&uuml;ndet werden. Wichtig ist, dass die Empfehlungen auch als solche formuliert werden und nicht direktiv wirken.</p>\n\n<p>&nbsp;</p>\n'
    //   "<table cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<div id='addresaten'><p>Adressaten</p></div>\n\t\t\t</td>\n\t\t\t<td><span style=\"font-size:10px\">Paracelsus-Elena-Klink</span></td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<h3><strong>Diagnosen</strong></h3>\n\n<p>&nbsp;</p>\n\n<h3><strong>Anamnese</strong></h3>\n\n<p>&nbsp;</p>\n\n<h3><strong>Epikrise</strong></h3>\n\n<p><input name=\"Epikrise\" type=\"text\" value=\"lsdfjlksa lksdajf lksdjf klsdajflksdjflksdjlkfjsdlkfjsadlöfjsldkf lksdklf klsdjf lksdj flkösdaj flksadjflksdjf.\" /></p>\n\n<p><strong>Therapieempfehlungen</strong></p>\n\n<p>&nbsp;</p>\n\n<p>Dieser Teil ist f&uuml;r die Empf&auml;nger besonders wichtig. Neben den allgemeinen Therapieempfehlungen enth&auml;lt dieser Teil des Arztbriefes eine vollst&auml;ndige Medikamentenliste (inkl. genauer Angaben zu Dosis, H&auml;ufigkeit, Zeitpunkt und ggf. Zeitspanne der empfohlenen Einnahme). &Auml;nderungen in der haus&auml;rztlichen Medikation m&uuml;ssen, falls noch nicht in der Epikrise geschehen, hier begr&uuml;ndet werden. Wichtig ist, dass die Empfehlungen auch als solche formuliert werden und nicht direktiv wirken.</p>\n\n<p>&nbsp;</p>\n"
    // );
    // vorlagen.value.push(
    //   "<h1>Was ist neu bei Vue.js 3?</h1>\n\n<p>Minh Huan Ngo</p>\n\n<p>&nbsp;</p>\n\n<p>Seit der Ver&ouml;ffentlichung von Vue.js 2 ist die Vue.js-Community schnell gewachsen und erh&auml;lt von den Usern gro&szlig;artige Bewertungen. Neben Angular und React z&auml;hlt es zu den beliebtesten JavaScript-Frameworks. Nun steht Vue.js 3 kurz vor der Ver&ouml;ffentlichung und hat in den letzten Monaten f&uuml;r einen ziemlichen Hype in der Welt der Webentwicklung gesorgt.</p>\n\n<h2><strong>Verbesserungen</strong></h2>\n\n<p>Die neue Version von Vue.js ist auf Geschwindigkeit ausgelegt. Obwohl Vue 2 schon relativ schnell war, hat Vue 3 eine bis zu 100% bessere Update-Leistung und bis zu 200% schnellere serverseitige Renderings. Auch die Komponenten-Initialisierung ist jetzt effizienter, sogar mit Compiler-informierten schnellen Pfaden zur Ausf&uuml;hrung. Das virtuelle DOM wurde ebenfalls vollst&auml;ndig neu geschrieben und &uuml;bertrifft in Sachen Geschwindigkeit seine alte Version deutlich.</p>\n\n<p>Auch von der Gr&ouml;&szlig;e her gibt es nun Verbesserungen. Vue 2 war mit einem Gewicht von etwa 20 kB gzipped bereits verdammt klein. Mit einer konstanten Gundliniengr&ouml;&szlig;e von &lt; 10 kB gzipped wiegt Vue 3 nur noch halb so viel. Wie? Gr&ouml;&szlig;tenteils durch Eliminieren nicht genutzter Bibliotheken (Tree Shaking). Wenn du also ein Element nicht verwendest, ist es nicht enthalten.</p>\n\n<p>Vue 3 wird TypeScript unterst&uuml;tzen. Zus&auml;tzlich werden die Pakete entkoppelt, wodurch alles modularer und einfacher zu warten sein wird.</p>\n\n<p>Das Erstellen nativer Anwendungen mit Vue ist gar nicht so schwierig, aber mit Vue 3 ist der Laufzeit-Kern plattformunabh&auml;ngig, wodurch es noch einfacher wird, diese Technologie mit jeder Art von Plattform zu verwenden.</p>\n\n<p>Wie du siehst, lohnt es sich mal anzuschauen, welche Neuerungen es bei Vue geben wird. Werfen wir nun einen Blick auf die wichtigsten Features von Vue 3.</p>\n\n<h2><strong>Composition API</strong></h2>\n\n<p>Bisher griffen wir beim Erstellen neuer Komponenten auf die Options API zur&uuml;ck. Diese API zwang uns, den Code der Komponente durch Optionen zu trennen, was bedeutete, dass wir alle reaktiven Daten an einer Stelle (Data), alle berechneten Eigenschaften an einer Stelle (Computed), alle Methoden an einer Stelle (Methods) usw. haben mussten.</p>\n\n<p>Obwohl es zwar f&uuml;r kleinere Komponenten handlich und lesbar ist, wird es jedoch schmerzhaft, wenn die Komponente komplexer wird und mit mehreren Funktionalit&auml;ten zu tun hat. Gew&ouml;hnlich enth&auml;lt die Logik, die sich auf eine bestimmte Funktionalit&auml;t bezieht, einige reaktive Daten, berechnete Eigenschaften, eine Methode oder einige wenige davon; manchmal beinhaltet sie auch die Verwendung von Component-Lifecylcle-Hooks. Das f&uuml;hrt dazu, dass man bei der Arbeit an einem einzigen logischen Anliegen st&auml;ndig zwischen verschiedenen Optionen im Code hin- und herspringen muss.</p>\n\n<p>Das andere Problem, auf das man bei der Arbeit mit Vue gesto&szlig;en sein k&ouml;nnte, ist die Frage, wie man eine gemeinsame Logik extrahieren kann, die von mehreren Komponenten wiederverwendet werden kann. Vue hat bereits wenige Optionen, um dies zu tun, aber alle haben ihre eigenen Nachteile (z.B. Mixins und Scoped-Slots).</p>\n\n<p>Die L&ouml;sung von Vue 3 hierf&uuml;r ist eine setup()-Methode, die es uns erm&ouml;glicht, die Kompositionssyntax zu verwenden. Jedes St&uuml;ck Logik ist au&szlig;erhalb dieser Methode als Kompositionsfunktion definiert.</p>\n\n<p><strong>Codebeispiel aus einem Color-Picking-Spiel unter Nutzung der Komposition API:</strong></p>\n\n<pre>\n<code>&lt;script&gt;\nimport Vue from &quot;vue&quot;;\nimport ColorChoiceButton from &quot;@/components/ColorChoiceButton&quot;;\nimport GameControlHeader from &quot;@/components/GameControlHeader&quot;;\nimport { reactive } from &quot;vue&quot;;\nimport { getRandomColor } from &quot;@/utils/getRandomColor&quot;;\n \nexport default {\n  components: {\n    GameControlHeader,\n    ColorChoiceButton\n  },\n  setup() {\n    const score = reactive({\n      lost: 0,\n      won: 0\n    });\n \n    const colors = reactive({\n      picked: &quot;&quot;,\n      right: &quot;&quot;,\n      choices: [&quot;&quot;, &quot;&quot;, &quot;&quot;]\n    });\n \n    function pickColor(color = &quot;&quot;) {\n      colors.picked = color;\n      if (colors.picked === colors.right) {\n        //round won\n        score.won++;\n      } else {\n        //round lost\n        score.lost++;\n      }\n    }\n    function setFreshColors() {\n      colors.choices[0] = getRandomColor();\n      colors.choices[1] = getRandomColor();\n      colors.choices[2] = getRandomColor();\n \n      // we should detect the rare case that we get the same color twice and generate colors again\n \n      const randomChoice = Math.round(Math.random() * 2);\n      colors.right = colors.choices[randomChoice];\n      colors.picked = &quot;&quot;;\n    }\n    function resetGame() {\n      score.won = 0;\n      score.lost = 0;\n      setFreshColors();\n    } //new colors, score = 0\n \n    resetGame();\n \n    return { pickColor, resetGame, setFreshColors, score, colors };\n  }\n};\n&lt;/script&gt;</code></pre>\n\n<p>Kurz gesagt, es handelt sich lediglich nur um eine Funktion, die Properties und Funktionen an das Template zur&uuml;ckgibt. Wir deklarieren hier alle reaktiven Properties, computed Properties, Watchers und Lifecycle-Hooks und geben sie dann zur&uuml;ck, damit sie im Template verwendet werden k&ouml;nnen.</p>\n\n<p>Die Composition API ist eine gro&szlig;artige M&ouml;glichkeit, Code lesbarer und wartbarer zu machen. Sie wird dazu beitragen, dass gr&ouml;&szlig;ere Vue-Projekte modularer und wiederverwendbarer sind; ein sehr vielversprechendes Zeichen f&uuml;r die entwicklerfreundlichen &Auml;nderungen, die das Vue-Team vornimmt. Es scheint, als h&auml;tten sie viele Schmerzpunkte der Entwicklerteams entdeckt und versucht, praktikable L&ouml;sungen anzubieten, ohne dabei extrem drastische &Auml;nderungen vorzunehmen.</p>\n\n<h2><strong>Mehrere Root Elemente</strong></h2>\n\n<p>In Vue 2 kann das Template-Tag nur ein Wurzelelement aufnehmen. Selbst wenn wir nur zwei &lt;p&gt;-Tags h&auml;tten, m&uuml;ssten wir sie in ein &lt;div&gt;-Tag einschlie&szlig;en, damit es funktioniert. Aus diesem Grund mussten wir auch den CSS-Code in der &uuml;bergeordneten Komponente so &auml;ndern, dass er wie erwartet aussah.</p>\n\n<p>In Vue 3 wird diese Einschr&auml;nkung aufgehoben. Es wird kein Root-Element mehr ben&ouml;tigt.</p>\n\n<p><strong>Wir k&ouml;nnen eine beliebige Anzahl von Tags direkt innerhalb der Sektion &lt;template&gt;&lt;/template&gt; verwenden:</strong></p>\n\n<pre>\n<code>&lt;template&gt;\n  &lt;p&gt; Count: {{ count }} &lt;/p&gt;\n  &lt;button @click=&quot;increment&quot;&gt; Increment &lt;/button&gt;\n  &lt;button @click=&quot;decrement&quot;&gt; Decrement&lt;/button&gt;\n&lt;/template&gt;</code></pre>\n\n<h2><strong>Suspense</strong></h2>\n\n<p>Suspense ist eine Komponente, die w&auml;hrend des Lazy-Loadings ben&ouml;tigt wird, das im Wesentlichen dazu dient,&nbsp; Lazy-Komponenten zu umh&uuml;llen. Mehrere Lazy-Komponenten k&ouml;nnen mit der Suspense-Komponente umwickelt werden. In der Version 3 von Vue JS wird Suspense eingef&uuml;hrt, um auf verschachtelte asynchrone Abh&auml;ngigkeiten in einem verschachtelten Baum zu warten, und es funktioniert gut mit asynchronen Komponenten. Anstelle unserer Komponente wird ein Fallback-Content angezeigt, bis eine gew&uuml;nschte Bedingung erf&uuml;llt ist. Die Bedingung ist in der Regel ein asynchroner Vorgang, der innerhalb unserer Komponenten-Setup-Funktion stattfindet.</p>\n\n<p><strong>Beispiel:</strong></p>\n\n<pre>\n<code>&lt;Suspense&gt;\n  &lt;template &gt;\n    &lt;suspended-component /&gt;\n  &lt;/template&gt;\n  &lt;template #fallback&gt;\n    Loading...\n  &lt;/template&gt;\n&lt;/Suspense&gt;</code></pre>\n\n<h2><strong>Portals</strong></h2>\n\n<p>Die &lt;teleport to=&rdquo;target&rdquo;&gt;-Komponente verschiebt alle Children zum ersten durch target beschriebenen Element im DOM-Tree. Dabei funktioniert target wie ein herk&ouml;mmlicher Query-Selektor, das hei&szlig;t, ein Element kann &uuml;ber die ID (#target), die Klasse (.target) oder den Tag-Namen (z.B. main) angew&auml;hlt werden.</p>\n\n<p>Mit Teleports k&ouml;nnen sich vor den Content stellende Elemente wie Modals, (Cookie) Banners, Pop Ups etc. von &uuml;berall aus in der App aufgerufen werden, rendern aber stets an derselben Stellen im DOM-Tree.</p>\n\n<p><strong>App.vue</strong></p>\n\n<pre>\n<code>&lt;Component&gt;\n  &lt;teleport to=&quot;#target&quot;&gt;\n    &lt;div&gt;...&lt;/div&gt;\n  &lt;/teleport&gt;\n&lt;/Component&gt;</code></pre>\n\n<p><strong>index.html</strong></p>\n\n<pre>\n<code>&lt;body&gt;\n  ...\n  &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;\n  &lt;div id=&quot;portal-target&quot;&gt;&lt;/div&gt;\n&lt;/body&gt;</code></pre>\n\n<h2><strong>Multiple V-Models</strong></h2>\n\n<p>Wenn du Vue verwendest, wei&szlig;t du bereits, dass v-models f&uuml;r die bidirektionale Datenbindung von Vue-Komponenten verwendet werden. In Vue 2 erh&auml;ltst du ein v-model f&uuml;r eine Komponente, aber in dieser neuen Version gibt es tolle Neuigkeiten!</p>\n\n<p>Du kannst jetzt so viele v-model-Deklarationen und -Bindungen pro Komponente haben wie du willst und die einzelnen v-models auch benennen.</p>\n\n<p><strong>So etwas ist jetzt m&ouml;glich:</strong></p>\n\n<pre>\n<code>&lt;InviteeForm\n   v-model:name=&quot;inviteeName&quot;\n   v-model:email=&quot;inviteeEmail&quot;\n/&gt;</code></pre>\n\n<h2><strong>Global mounting/configuration API &Auml;nderung</strong></h2>\n\n<p>Wir k&ouml;nnen eine weitere wichtige &Auml;nderung in der Art und Weise finden, wie wir unsere Anwendung instanziieren und konfigurieren. Derzeit verwenden wir das globale Vue-Objekt, um jede beliebige Konfiguration bereitzustellen und neue Vue-Instanzen zu erstellen. Jede am Vue-Objekt vorgenommene &Auml;nderung wirkt sich auf jede Vue-Instanz und Komponente aus.</p>\n\n<p><strong>Schauen wir uns nun an, wie es in Vue 3 funktionieren wird:</strong></p>\n\n<pre>\n<code>import { createApp } from &#39;vue&#39;\nimport App from &#39;./App.vue&#39;\n \nconst app = createApp(App)\n \napp.config.ignoredElements = [/^app-/]\napp.use(/* ... */)\napp.mixin(/* ... */)\napp.component(/* ... */)\napp.directive(/* ... */)\n \napp.mount(&#39;#app&#39;)</code></pre>\n\n<h2><strong>Fazit</strong></h2>\n\n<p>Abgesehen von der Composition API, welche die gr&ouml;&szlig;te neue API in Vue 3 ist, k&ouml;nnen wir auch eine Menge kleinerer Verbesserungen finden. Wir k&ouml;nnen sehen, dass sich Vue in Richtung einer besseren Erfahrung f&uuml;r Entwickler und einfachere, intuitivere APIs bewegt. Es ist auch gro&szlig;artig zu sehen, dass das Vue-Team beschlossen hat, viele Ideen, die derzeit nur &uuml;ber Bibliotheken von Drittanbietern verf&uuml;gbar sind, in den Kern des Frameworks zu &uuml;bernehmen.</p>\n\n<p>&nbsp;</p>\n"
    // );
    // vorlagen.value.push(
    //   '<h2>Checkliste vor dem Versand des Arztbriefes XXX</h2>\n\n<p>Um vor dem Versand des Briefes noch einmal alle wichtigen Inhalte und formalen Punkte durchzugehen und um sicherzustellen, dass keine Einzelheiten fehlen, kann folgende Checkliste, welche individuell erweiterbar ist, als Muster bzw. Vorlage dienen:</p>\n\n<table border="1" cellpadding="10px">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>Kriterium</td>\n\t\t\t<td>Frage</td>\n\t\t\t<td>Ja / Nein?</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Form XXX</td>\n\t\t\t<td>Sind alle Daten (Adressdaten, Anrede, Patientendaten, Unterzeichner) korrekt und vollst&auml;ndig?</td>\n\t\t\t<td>XXX</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Diagnosen</td>\n\t\t\t<td>Sind alle Diagnosen vollst&auml;ndig und pr&auml;zise mit der Klassifikation nach ICD-10-Klassifizierung versehen?</td>\n\t\t\t<td>XXX</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Ist die Liste der Diagnosen &uuml;bersichtlich und sinnvoll gegliedert?</td>\n\t\t\t<td>XXX</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Enth&auml;lt die Liste ausschlie&szlig;lich Diagnosen und keine Befunde, Verl&auml;ufe oder Therapieempfehlungen?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Anamnese</td>\n\t\t\t<td>Kann ich die Vorgeschichte des Patienten beim Leser voraussetzen? Wenn nein, habe ich alle aktuellen Beschwerden sowie die Zwischenanamnese vollst&auml;ndig eingebunden?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Untersuchungs&shy;befunde</td>\n\t\t\t<td>Habe ich spezielle Untersuchungen oder Tests am Patienten vorgenommen? Wenn ja, sind alle Untersuchungsbefunde vollst&auml;ndig?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Epikrise</td>\n\t\t\t<td>Wurden die wegweisenden Befunde, &Uuml;berlegungen, Entscheidungen und Unklarheiten nachvollziehbar dargestellt?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Wurde die Ursache der Aufnahmebeschwerden genannt und diskutiert?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Ist auf &uuml;berfl&uuml;ssige Details und Wiederholungen verzichtet wurden?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Ist die Epikrise maximal eine halbe bis eine Seite lang?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Therapie&shy;empfehlungen</td>\n\t\t\t<td>Wurden alle Therapie- und Medikationsvorschl&auml;ge vollst&auml;ndig und verst&auml;ndlich aufgef&uuml;hrt?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Wurde dabei auf einen empfehlenden Ton geachtet?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Sprache / Ausdruck</td>\n\t\t\t<td>Ist der Brief in einem verst&auml;ndlichen und gut lesbaren Deutsch formuliert wurden?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Wurde auf &uuml;berfl&uuml;ssige W&ouml;rter, unbekannte Abk&uuml;rzungen und komplizierte Schachtels&auml;tze verzichtet?</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td>Sind alle Rechtschreib- und Grammatikfehler korrigiert worden?</td>\n\t\t</tr>\n\t</tbody>\n</table>\n'
    // );
    const editorData = reactive({
      inhalt: "<p><strong>Empty template!</strong></p>",
      vorlage: 0,
    });

    const paragraphs = reactive({
      // epikriseHeader: "<h3><strong>Epikrise</strong></h3>\n\n<p></p>",
      // diagnosenHeader: "<h3><strong>Diagnosen</strong></h3>\n\n<p></p>",
      // anamneseHeader: "<h3><strong>Anamnese</strong></h3>\n\n<p></p>",
      epikrise:
        "<h3>Unter einer Epikrise wird die abschlie&szlig;ende Beurteilung eines Krankheitsverlaufs vonseiten des Arztes bzw. der &Auml;rztin verstanden. Sie fasst die bei der Aufnahme bestehenden Hauptsymptome, die daraus resultierenden Untersuchungen sowie deren Ergebnisse zur Diagnose, Therapie und gegebenenfalls Prognose zusammen. Zudem begr&uuml;ndet sie, warum in dem speziellen Fall genau diese Diagnose getroffen und andere Differenzialdiagnosen ausgeschlossen wurden. Ebenfalls wichtig ist eine Stellungnahme, inwieweit die erhobenen Befunde die Beschwerden oder den Grund der Behandlung erkl&auml;ren, ebenso wie die Diskussion eventueller Besonderheiten des Falles.</h3>\n\n<p>&nbsp;</p>\n\n<p>Doch auch hier hei&szlig;t es wieder: In der K&uuml;rze liegt die W&uuml;rze und eine Aneinanderreihung von nicht relevanten und unauff&auml;lligen Befunden sollte auf jeden Fall vermieden werden. Ebenso kann darauf verzichtet werden, dem Leser &uuml;bliche und gel&auml;ufige Standardtherapien zu beschreiben. Die Epikrise ist im Optimalfall eine halbe bis maximal eine Seite lang.</p>\n\n<p>",
      diagnosen:
        "<p>Alle im Behandlungsverlauf erhobenen Diagnosen sollten unter diesem Punkt vollst&auml;ndig und korrekt zusammengefasst bzw. angegeben werden, beginnend mit der Hauptdiagnose. Die weiteren Diagnosen werden nach klinischer Bedeutung gegliedert, um dem Leser das Zurechtfinden zu erleichtern. Wenn bei komplexen und langen Behandlungsverl&auml;ufen verschiedene Diagnosen gestellt werden, muss im Sinne der &Uuml;bersichtlichkeit abgewogen werden, welche davon in der Diagnoseliste aufgef&uuml;hrt werden sollen. Wichtig: Nur wenn sich keine Diagnose stellen l&auml;sst, k&ouml;nnen auch die Befunde und Symptome genannt werden &ndash; sonst werden diese nicht aufgef&uuml;hrt. Die fehlende Diagnose muss zudem anschlie&szlig;end in der Epikrise n&auml;her erl&auml;utert und begr&uuml;ndet werden.</p>\n\n<p>Eine Auflistung der Diagnosen im Arztbrief k&ouml;nnte u.a. so aussehen:</p>\n\n<p><strong>Diagnosen:</strong><br />\nDiabetes mellitus Typ 2 (E11)<br />\nAnhaltende Schmerzst&ouml;rung mit somatischen und psychischen Faktoren (F45.4)<br />\nEssentielle Hypertonie (I10.9)<br />\nReine Hypertriglyzerid&auml;mie (E78.1)</p>\n\n",
      anamnese:
        "<p>Bei der Anamnese wird in den meisten F&auml;llen die allgemeine Vorgeschichte der Patienten, besonders bei einer &Uuml;berweisung durch den Hausarzt bzw. die Haus&auml;rztin, als bekannt vorausgesetzt und, um Wiederholungen zu umgehen, nicht n&auml;her beleuchtet. Eine Standardformulierung im Arztbrief in solchen F&auml;llen kann lauten: &bdquo;Die Vorgeschichte des Patienten / der Patientin m&ouml;chten wir freundlicherweise als bekannt voraussetzen&ldquo;.</p>\n\n<p>Ist das Wissen &uuml;ber die Vorgeschichte jedoch nicht zweifelsfrei vorauszusetzen, wird bei der Anamnese die Art, die Dauer und der Verlauf der vom Patienten beschriebenen Beschwerden wiedergegeben. Au&szlig;erdem m&uuml;ssen hier ebenfalls alle Zwischenanamnesen und Ver&auml;nderungen der Beschwerden bei der Aufnahme und Behandlung des Patienten angegeben werden.</p>\n\n<h3>K&ouml;rperlicher Untersuchungsbefund (je nach Fachgebiet), Eingriffe, Operationen</h3>\n\n<p>K&ouml;rperliche Untersuchungsbefunde, Eingriffe und Operationen werden logischerweise nur dann angegeben, wenn sie tats&auml;chlich in der Praxis oder im Krankenhaus durchgef&uuml;hrt wurden. Bei Fach&auml;rzt:innen k&ouml;nnen solche Untersuchungen beispielsweise spezifische Tests (Lactose-, Seh- und H&ouml;rtest etc.) sein, in Krankenh&auml;usern geh&ouml;ren u.a. EKG-, Labor- und R&ouml;ntgenuntersuchungen zu den h&auml;ufigen Untersuchungen. Sind keine Untersuchungen oder Eingriffe erfolgt, entf&auml;llt dieser Teil im Arztbrief und es wird direkt zum n&auml;chsten Abschnitt, der Epikrise, &uuml;bergegangen.</p>\n\n",
      therapie:
        "<p>Dieser Teil ist f&uuml;r die Empf&auml;nger besonders wichtig. Neben den allgemeinen Therapieempfehlungen enth&auml;lt dieser Teil des Arztbriefes eine vollst&auml;ndige Medikamentenliste (inkl. genauer Angaben zu Dosis, H&auml;ufigkeit, Zeitpunkt und ggf. Zeitspanne der empfohlenen Einnahme). &Auml;nderungen in der haus&auml;rztlichen Medikation m&uuml;ssen, falls noch nicht in der Epikrise geschehen, hier begr&uuml;ndet werden. Wichtig ist, dass die Empfehlungen auch als solche formuliert werden und nicht direktiv wirken.</p>\n\n<p>&nbsp;</p>\n",
    });

    let ckEditor;

    onMounted(() => {
      // initalize ckeditor
      ckEditor = window.CKEDITOR.replace("editor1", {
        // Load the Simple Box plugin.
        extraPlugins: ['simplebox', 'timestamp', 'epikrise', 'codesnippet']
      });

      CKEDITOR.on('dialogDefinition', function(e){
        const dialogName = e.data.name;
        const dialogDefinition = e.data.definition;
        // console.log(dialogDefinition);
        if (dialogName === 'image') {
          dialogDefinition.removeContents('Link');
          dialogDefinition.removeContents('advanced');
          dialogDefinition.removeContents('Upload');
          
          

          var tabContent = dialogDefinition.getContents('info');
          console.log(dialogDefinition);
           tabContent.remove('txtHSpace');
          // tabContent.remove('txtVSpace');
          tabContent.remove('Width');
          
          

          
          
         
        }
      })
      // CKEDITOR.disableAutoInline = true;
      // CKEDITOR.inline('editor2');
      
      ckEditor.setData("");

      // on change eventsendContent
      ckEditor.on("change", () => {
        //console.log('change', ckEditor.getData());
        emit("sendContent", ckEditor.getData());
      });
    });

    // function setEditorData(select) {
    //   amenities.value = [];
    //   const data = ckEditor.getData();
    //   if (select.title === undefined) {
    //     editorData.inhalt = data.replaceAll(
    //       "XXX",
    //       `${select.name}`
    //       //selected.value !== "" ? selected.value : "XXX"
    //     );
    //   } else {
    //     editorData.inhalt = vorlagen.value[editorData.vorlage].replaceAll(
    //       "Adressaten",
    //       `${select.title}  ${select.name} <br> ${select.street} <br> ${select.city} ${select.zip}`
    //       //selected.value !== "" ? selected.value : "XXX"
    //     );
    //   }

    //   ckEditor.setData(editorData.inhalt);
    // }

    function setTemplate(i, toggle) {
      selectedPriority.value = "";
      amenities.value = [];
      select.value = { name: "", title: "" };
      editorData.vorlage = i;
      editorData.inhalt = vorlagen.value[i];

      //setEditorData();
      ckEditor.setData(editorData.inhalt);
      selected.value = "";
      return toggle;
    }

    function printEditorData() {
      editorData.inhalt = ckEditor.getData();
      console.log(editorData);
    }

    function setParagraph(type) {
      const inhalt = editorData.inhalt;
      const h3Epikrise = /<h3><strong>Epikrise<\/strong><\/h3>(.*?)/;
      const h3Therapieempfehlungen = /<strong>Therapieempfehlungen<\/strong>(.*?)/;
      const h3Diagnosen = /<h3><strong>Diagnosen<\/strong><\/h3>(.*?)/;
      const h3Anamnese = /<h3><strong>Anamnese<\/strong><\/h3>(.*?)/;

      let startIndex = "";
      let stopIndex = "";
      let paragraphHeader = "";
      let paragraph = "";

      if (type === "Epikrise") {
        startIndex = inhalt.match(h3Epikrise);
        stopIndex = inhalt.match(h3Therapieempfehlungen); 
        paragraph = paragraphs.epikrise;
        paragraphHeader = paragraphs.epikriseHeader;
      }else if(type === "Diagnosen"){
        startIndex = inhalt.match(h3Diagnosen);
        stopIndex = inhalt.match(h3Anamnese);
        paragraph = paragraphs.diagnosen;
        paragraphHeader = paragraphs.diagnosenHeader;
      }else{
        startIndex = inhalt.match(h3Anamnese); 
        stopIndex = inhalt.match(h3Epikrise);
        paragraph = paragraphs.anamnese;
        paragraphHeader = paragraphs.anamneseHeader;
      }

      if (!startIndex || !stopIndex) return -1;
      const selectedParagraph = inhalt.slice(startIndex.index, stopIndex.index);
      editorData.inhalt = editorData.inhalt.replace(
        selectedParagraph,
        stopIndex.index - startIndex.index !== paragraph.length
          ? paragraph
          : paragraphHeader
      );

      ckEditor.setData(editorData.inhalt);
    }

    function setInhalt(type, val) { 
      console.log(type, val);     
      if(type === 'params' ){
        if(ckEditor.getData().includes('XXX')){
          console.log(ckEditor.getData());
          const paragraph = ckEditor.document.$.getElementById(type);
          paragraph.innerHTML = val.name;
          ckEditor.setData(ckEditor.getData().replaceAll('XXX', val.name));
        }
      }else if (type === 'adressaten') {
        const paragraph = ckEditor.document.$.getElementById(type);
        paragraph.innerHTML = `${val.title}  ${val.name} <br> ${val.street} <br> ${val.city} ${val.zip}`
      }else{
        const paragraph = ckEditor.document.$.getElementById(type);
        paragraph.innerHTML = paragraph.innerHTML.length > 150 ? '...' :val;
      }
    }
    return {
      setInhalt, diagnosen, epikrise, anamnese, Therapie,      
      // setEditorData,
      editorData,
      selected,
      printEditorData,
      setTemplate,
      // vorlagen,
      props,
      setParagraph,
      amenities,
      select,
      selectedPriority,
      paragraphs,
    };
  },

  data() {
    return {
      // paragraphs: ["Diagnosen", "Anamnese", "Epikrise"],
      templates: [
        { name: "ARZTBRIEF", icon: "mdi-space-station" },
        { name: "VUE 3", icon: "mdi-human-greeting" },
        { name: "WELCOME LETTER", icon: "mdi-flag" },
      ],
      recipient: [
        {
          name: "Katarina",
          title: "Frau",
          street: "musterstraße 2",
          zip: "01234",
          city: "Dresden",
        },
        {
          name: "Schmidt",
          title: "Herr",
          street: "leipzigerstraße 5",
          zip: "04444",
          city: "Leipzig",
        },
        {
          name: "Bruce",
          title: "Dr.",
          street: "berlinerstraße 10",
          zip: "04321",
          city: "Berlin",
        },
      ],
      priority: [{ name: "High" }, { name: "Medium" }, { name: "Low" }],
    };
  },
};
</script>
