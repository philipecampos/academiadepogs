<template>
  <v-card
      class="mx-auto"
      max-width="500"
      :loading="carregando"
  >
        <v-toolbar
            color="teal"
            dark
        >
<!--          <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

          <v-toolbar-title elevation="1">Assuntos</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

    <v-list>
      <v-list-group
          v-for="item in items"
          :key="item.id"
          v-model="item.active"
          :prepend-icon="item.icone"
          no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.nome"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="child in item.filhos"
            :key="child.hash"
            :to="gerarUrl(child.hash)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.titulo"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script>
import api from "../api";

export default {
  name: "Menu",
  data: () => ({
    carregando: true,
    // items: [
    //   {
    //     action: 'mdi-docker',
    //     items: [
    //         { title: 'Container Vue', link: '/docker/vue' }]
    //     ,
    //     title: 'Docker',
    //   },
    //   {
    //     action: 'mdi-git',
    //     items: [{ title: 'List Item' }],
    //     title: 'Git',
    //   },
    //   {
    //     action: 'mdi-laravel',
    //     items: [{ title: 'Permissões', link: '/linux/permissoes' }],
    //     title: 'Laravel',
    //   },
    //   {
    //     action: 'mdi-penguin',
    //     items: [{ title: 'Permissões', link: '/linux/permissoes' }],
    //     title: 'Linux',
    //   },
    //   {
    //     action: 'mdi-language-php',
    //     items: [
    //       { title: 'Breakfast & brunch' },
    //       { title: 'New American' },
    //       { title: 'Sushi' },
    //     ],
    //     title: 'PHP',
    //   },
    //   {
    //     action: 'mdi-database',
    //     items: [{ title: 'List Item' }],
    //     title: 'Postgres',
    //   },
    //   {
    //     action: 'mdi-vuejs',
    //     items: [{ title: 'List Item' }],
    //     title: 'Vue',
    //   },
    // ],
    items: [],
  }),
  methods: {
    gerarUrl(a) {
      return `/artigo/${a}`
    }
  },
  created() {
    api.get('/menu')
        .then(r => {
          this.items = r.data;
        })
        .finally(() => {
          this.carregando = false;
        });
  }
}
</script>