<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-spacer />
        <v-btn
            class="ma-2"
            rounded
            dark
            color="cyan darken-3"
            to="/artigo/create"
            x-large>
          Novo Artigo
        </v-btn>
        <v-btn
            class="ma-2"
            rounded
            @click="exibirFiltros = true"
            x-large>
          <v-icon large>mdi-filter-outline</v-icon>
          Filtros
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-data-table
            class="mb-4 elevation-2"
            :headers="tabela.colunas"
            :items="tabela.dados"
            show-select
            single-select="single-select"
            :loading="tabela.carregando"
            checkbox-color="deep-orange accent-4"
            fixed-header
            :height="tabela.dados.length > 0 ? 600 : 100"
        >
          <template v-slot:item.titulo="{ item }">
            <router-link :to="gerarLink(item)">{{ item.titulo }}</router-link>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-dialog
        v-model="exibirFiltros"
        max-width="600"
    >
      <v-card>
        <v-toolbar
            elevation="2"
            dark
            color="cyan darken-3">

          <v-toolbar-title>Filtros de pesquisa</v-toolbar-title>
          <v-spacer/>
          <v-btn
              icon
              dark
              @click="exibirFiltros = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="mt-2">
          <v-container>
            <v-form @submit.prevent="pesquisar">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      label="Título"
                      v-model="filtros.titulo"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-select
                      label="Tags"
                      multiple
                      chips
                      :items="tags"
                      clearable
                      v-model="filtros.tags"></v-select>
                </v-col>

              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                      :loading="carregandoPesquisa"
                      class="mr-2"
                      @click="pesquisar"
                      dark
                      color="cyan darken-3">Pesquisar
                  </v-btn>
                  <v-btn
                      class="mr-2"
                      @click="exibirFiltros = false">Fechar
                  </v-btn>
                </v-col>
                <v-col>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>

      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import api from "../api";

export default {
  name: "Dashboard",
  data: () => ({
    carregandoPesquisa: false,
    exibirFiltros: false,
    tags: [],
    filtros: {
      titulo: '',
      tags: []
    },
    tabela: {
      linhaSelecionada: [],
      carregando: false,
      colunas: [
        {text: 'Título', value: 'titulo'},
        {text: 'Tags', value: 'tags'},
        {text: 'Data de Cadastro', value: 'dt_cadastro'},
        {text: 'Opções', value: 'opcoes'},
      ],
      dados: []
    }
  }),
  methods: {
    gerarLink(item) {
      return `/artigo/${item.hash}`
    },
    pesquisar() {
      this.carregandoPesquisa = true;

      api.get('/artigos/grid', {params: this.filtros})
          .then((r) => {
            this.tabela.dados = r.data;
          })
          .finally(() => {
            this.carregandoPesquisa = false;
          });
    }
  },
  created() {
    api.get('/artigos')
        .then((r) => {
          this.tabela.dados = r.data.artigos;
          this.tags = r.data.tags;
        });
  }
}
</script>