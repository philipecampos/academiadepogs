<template>
  <v-container>
    <MigalhaDePao :items="migalhaDePao"></MigalhaDePao>

    <v-card :loading="carregando">
      <v-card-title>
        {{ titulo }}
        <v-spacer/>
        <v-btn
            @click="download"
            small
            rounded

            icon
            fab>
          <v-icon>mdi-cloud-download</v-icon>
        </v-btn>
        <v-btn
            @click="exibirEdicao = !exibirEdicao"
            small
            rounded
            color="yellow darken-4"
            icon
            fab>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider/>

      <v-scroll-y-transition>
        <v-card-text v-show="exibirEdicao">
          <v-textarea
              outlined
              rows="12"
              label="Edição"
              v-model="codigoFonte"></v-textarea>
          <v-btn color="primary"
                 :loading="salvando"
                 @click="salvar">Salvar
          </v-btn>
        </v-card-text>
      </v-scroll-y-transition>

      <v-card-text class="">
        <span v-html="codigoFormatado"></span>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
import MigalhaDePao from "./MigalhaDePao";
import {marked} from "marked";
import 'highlight.js/styles/default.css'
import api from "../api";

export default {
  name: "Conteudo",
  props: [
    "carregando",
    "markdown",
    "migalhaDePao",
    "titulo",
    "menu"
  ],
  components: {
    MigalhaDePao
  },
  data: () => ({
    codigoFonte: '',
    exibirEdicao: false,
    salvando: false,
  }),
  watch: {
    markdown(a) {
      this.codigoFonte = a
    }
  },
  computed: {
    codigoFormatado() {
      if (!this.codigoFonte) {
        return '';
      }

      return marked(this.codigoFonte, {
        highlight(code, lang) {
          const hljs = require('highlight.js');
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, {language}).value;
        },
        langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
        // smartLists: true
      })
    }
  },
  methods: {
    download(filename, text) {
      let pom = document.createElement('a');
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      pom.setAttribute('download', filename);

      // if (document.createEvent) {
      // let event = document.createEvent('MouseEvents');
      // event.initEvent('click', true, true);
      // pom.dispatchEvent(event);
      // create a look event that bubbles up and cannot be canceled

      let evt = new Event("look", {"bubbles": true, "cancelable": false});
      document.dispatchEvent(evt);

      // event can be dispatched from any element, not only the document
      // myDiv.dispatchEvent(evt);
      // } else {
      //   pom.dispatchEvent(evt);
      // }
    },
    salvar() {
      this.salvando = true;
      api.post('/artigos/store', {
        titulo: this.titulo,
        artigo: this.codigoFonte,
        menu: this.menu
      })
          .then(() => {
            this.exibirEdicao = false;
          })
          .catch(() => {
            this.salvando = false
          });
    }
  },
  mounted() {
    this.codigoFonte = this.markdown
  }
}
</script>

<style>
/*h1, h2, h3, h4, h5 {*/
/*  color: blue !important;*/
/*}*/
</style>