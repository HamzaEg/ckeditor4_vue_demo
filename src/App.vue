<template>
  <v-card>
    <v-layout>
      <!-- image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" -->
      <v-navigation-drawer
        v-model="drawer"
        class="bg-deep-purple"
        @click.stop="drawer = !drawer"
        theme="dark"
        location="left"
        permanent
      >
        <v-list>
          <v-list-item
            prepend-icon="mdi-mother-nurse"
            title="Nursit"
            value="nursit"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item
            prepend-icon="mdi-email"
            title="Dokumentverwaltung s"
            value="Dokumentverwaltung"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar color="grey-lighten-2"
        ><v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon
      ></v-app-bar>
      <v-btn @click.stop="isCkEditor = !isCkEditor">
        Switch Editor
      </v-btn>

      <v-main>
        <CkEditor @sendContent="getContent" :templateIndex="templateIndex" v-if="isCkEditor" />

        <div style="font-family: Avenir, sans-serif" v-else>
    <vue-document-editor v-model:content="content" /> <!-- Vue 3 syntax -->
    <v-btn @click.stop="content">print</v-btn>
    <!-- <vue-document-editor :content.sync="content" /> --> <!-- Vue 2 syntax -->

  </div>

      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import CkEditor from "./components/CkEditor.vue";
import VueDocumentEditor from 'vue-document-editor'

//import { ref, reactive } from "vue";
export default {
  name: "App",
  components: {
    CkEditor,
    VueDocumentEditor
  },
  setup() {
    const getContent = (val) => {
      console.log(val[0]);
    };
    return { getContent };
  },
  data() {
    return {
      drawer: false,
      isCkEditor: true,
      content: ["<h1>Hello!</h1>Fill this page with text and new pages will be created as it overflows."]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
