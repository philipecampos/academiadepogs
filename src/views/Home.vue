<template>
  <v-container fluid>
    <v-row>
<!--      <v-col cols="4" md="3" lg="2">-->
<!--        <Menu class="mt-16" />-->
<!--      </v-col>-->

      <v-col>
        <router-view />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  // import Menu from '../components/Menu'

  export default {
    name: 'Home',

    // components: {
    //   Menu,
    // },
  }
</script>

<style>
h1, h2, h3, h4, h5 {
  padding-bottom: 0.6em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 0.8em;
}
pre {
  margin-bottom: 1em;
}
</style>