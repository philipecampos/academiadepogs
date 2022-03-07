<template>
  <v-data-table
      class="mb-4 elevation-2"
      :headers="colunas"
      :items="dados"
      show-select
      single-select="single-select"
      :loading="tabela.carregando"
      v-model="tabela.linhaSelecionada"
      checkbox-color="yellow darken-4"
      fixed-header
      :height="dados.length > 0 ? 600 : 100"
  >
  </v-data-table>
</template>

<script>
export default {
  name: "TabelaPaginada",
  props: {
    colunas: {
      type: Array,
      default: () => []
    },
    dados: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tabela: {
        colunas: [],
        dados: [],
        carregando: false,
        linhaSelecionada: [],
      }
    }
  },
  watch: {
    'tabela.linhaSelecionada'() {
      this.$emit('nova-linha-selecionada', this.tabela.linhaSelecionada)
    }
  },
  methods: {
    avisarLinhaSelecionada(a) {
      this.$emit('nova-linha-selecionada', a);
    },
    ativarOcupado() {
      this.tabela.carregando = true;
    },
    desativarOcupado() {
      this.tabela.carregando = false;
    },
    linhaSelecionada() {
      return this.tabela.linhaSelecionada[0];
    }
  }
}
</script>

<style scoped>

</style>