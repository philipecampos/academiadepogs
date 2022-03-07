<template>
  <v-container fluid class="mb-16">
    <MigalhaDePao :items="navegacao"></MigalhaDePao>
    <v-form @submit.prevent="salvar">
      <v-card @keyup.f2="modificarModo">
        <v-card-title>
          <span v-show="!modoEdicao">
            {{ form.titulo }}
          </span>
        </v-card-title>


        <v-divider v-show="!modoEdicao"/>

        <v-card-text class="text-body-1">
          <v-row>
            <v-col>
              <v-text-field
                  label="Título"
                  placeholder="Título Incrível"
                  v-show="modoEdicao"
                  v-model="form.titulo"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" v-show="modoEdicao">
              <v-textarea
                  label="Escreva aqui a sua gambi em detalhes"
                  v-model="form.artigo"
                  placeholder="Não esqueça que aqui você pode usar markdown. Evite ao máximo usar HTML, a menos que o artigo seja sobre este assunto. Funciona, mas prejudica a leitura e a pesquisa"
                  outlined
                  rows="12"
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <span v-html="codigoFormatado"></span>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-select
                  label="tags"
                  multiple
                  chips
                  v-model="form.tags"
                  :items="tags"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider v-show="modoEdicao"/>
        <v-card-actions v-show="modoEdicao">
          <v-row>
            <v-col>
              <v-btn
                  type="submit"
                  dark
                  color="cyan darken-3">Salvar
              </v-btn>

            </v-col>
          </v-row>
        </v-card-actions>

        <v-fab-transition>
          <v-btn
              ref="botaoEdicao"
              fab
              large
              bottom
              left
              fixed
              color="teal lighten-4"
              @click="modoEdicao = !modoEdicao"
          >
            <v-icon
                color="cyan darken-3"
                v-show="!modoEdicao">mdi-pencil</v-icon>
            <v-icon
                color="cyan darken-3"
                @keyup.alt="modificarModo"
                v-show="modoEdicao">mdi-format-paint
            </v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card>
    </v-form>

    <v-snackbar
        v-model="snack"
        :timeout="8000"
        :color="snackColor"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
            v-bind="attrs"
            text
            @click="snack = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>

  </v-container>

  <!--  <Conteudo-->
  <!--      titulo="olha só que legal"-->
  <!--      markdown="artigo"-->
  <!--      :carregando="false"></Conteudo>-->
</template>

<script>
import api from "../../api";
import {marked} from "marked";
import 'highlight.js/styles/default.css'
import MigalhaDePao from "../../components/MigalhaDePao";
// import Conteudo from "../../components/Conteudo";

export default {
  name: "Create",
  components: {
    MigalhaDePao
  },

  data: () => ({
    snack: false,
    snackColor: '',
    snackText: '',
    modoEdicao: true,
    navegacao: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'Novo Artigo',
      },
    ],
    salvando: false,
    tags: [],
    form: {
      titulo: '',
      artigo: '',
      tags: []
    }
  }),
  computed: {
    codigoFormatado() {
      if (!this.form.artigo) {
        return '';
      }

      return marked(this.form.artigo, {
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
  // watch: {
  //   'form.artigo'() {
  //     this.codigoFormatado()
  //   }
  // },
  methods: {
    modificarModo() {
      this.modoEdicao = !this.modoEdicao
      this.$refs.botaoEdicao.$el.focus()
    },
    salvar() {
      this.salvando = true
      api.post(`artigos/store`, this.form)
          .then(r => {
            console.log(r)
          })
          .catch(() => {
            this.snackText = 'Falha ao executar seu pedido.';
            this.snack = true;
            this.snackColor = 'red darken-2';
          })
          .finally(() => {
            this.salvando = false
          });
    }
  },
  created() {
    //this.algoCarregando = true;
    api.get('/artigos/create')
        .then((r) => {
          this.tags = r.data.tags
        })
        .finally(() => {
          //this.algoCarregando = false;
        });
  }
}
</script>