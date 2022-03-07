<template>
    <Conteudo
        :titulo="titulo"
        :markdown="artigo"
        :carregando="carregando"
        :migalha-de-pao="navegacao"
    ></Conteudo>
</template>

<script>
import api from "../../api";
import Conteudo from "../../components/Conteudo";

export default {
  name: "index",
  components: {
    Conteudo,
  },
  data: () => ({
    titulo: '',
    artigo: '',
    carregando: false,
    navegacao: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'Artigo',
      },
    ],
  }),
  watch: {
    '$route.params.hash'() {
      this.carregarArtigo()
    }
  },
  methods: {
    carregarArtigo() {
      this.carregando = true
      api.get(`/artigos/${this.$route.params.hash}`)
          .then(r => {
            this.titulo = r.data.titulo
            this.artigo = r.data.artigo
          })
          .finally(() => {
            this.carregando = false;
          })
    }
  },
  created() {
    this.carregarArtigo()
  }
}
</script>

<style scoped>

</style>