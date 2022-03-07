<template>
  <v-breadcrumbs :items="links">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "MigalhaDePao",
  props: ["items"],
  data: () => ({
    links: '',
  }),
  created() {
    this.links = this.items;

    for (let i in this.links) {
      this.items[i].disabled = typeof this.items[i].to === 'undefined';
      this.items[i].exact = typeof this.items[i].to !== 'undefined';
    }
  }
}
</script>

<style scoped>

</style>