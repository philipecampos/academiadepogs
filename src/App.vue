<template>
  <v-app>
    <v-app-bar
        app
        color="cyan darken-3"
        dark
    >
      <div class="d-flex align-center">

          <v-app-bar-nav-icon>
            <v-icon color="yellow" @click="home">mdi-weight-lifter</v-icon>
          </v-app-bar-nav-icon>
          <v-app-bar-title>Academia de Pogs</v-app-bar-title>
      </div>

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--          href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--          target="_blank"-->
<!--          text-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    home() {
      this.$router.push('/')
    }
  }
};
</script>

<style>
  .primaria {
    color: #45858c;
    background-color: #45858c;
  }
</style>