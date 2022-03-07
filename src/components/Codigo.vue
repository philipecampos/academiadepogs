<template>
  <v-card
      flat
      class="mb-4"
      color="grey lighten-5">
    <v-card-text>
      <v-row>
        <v-col
            style="font-family: monospace"
            cols="11"
            ref="conteudo">
          <div ref="slotConteudo">
            <slot></slot>
          </div>

        </v-col>
        <!--        <v-col cols="1">-->
        <!--          <v-btn-->
        <!--              @click="copiar"-->
        <!--              fab-->
        <!--              small-->
        <!--              depressed>-->
        <!--            <v-icon>mdi-content-copy</v-icon>-->
        <!--          </v-btn>-->
        <!--        </v-col>-->
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Codigo",
  components: {
    // htmlEscaper: {
    //   template: 'html-escaper',
    //   directives: {
    //     escapeContent: {
    //       bind(el) {
    //         const html = el.innerHTML;
    //
    //         el.textContent = html;
    //       }
    //     }
    //   }
    // }
  },
  methods: {
    copiar() {
      console.log(this.$refs.conteudo.innerText);
    }
  },
  mounted() {
    console.log(this.$refs.slotConteudo.textContent);
  }
}
</script>

<style scoped>

</style>