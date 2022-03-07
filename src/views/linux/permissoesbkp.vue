<template>
  <v-container>
    <MigalhaDePao :items="navegacao"></MigalhaDePao>
    <v-card>
      <v-card-title>Permissões Linux</v-card-title>
      <v-divider/>

      <v-card-text>
        <h3 class="mb-1">Permissões Padrão Laravel</h3>
        <br>
        <h4>Para arquivos:</h4>
        <Codigo>sudo find $(pwd) -type f -exec chmod 664 {} \;</Codigo>

        <h4>Para diretórios:</h4>
        <Codigo>sudo find $(pwd) -type d -exec chmod 775 {} \;</Codigo>

        <h3>Mudar dono do Diretório</h3>
        <Codigo>sudo chown -R $USER:$USER</Codigo>

      </v-card-text>

    </v-card>
  </v-container>
</template>

<script>
import MigalhaDePao from "../../components/MigalhaDePao";
import Codigo from "../../components/Codigo";

export default {
  name: "permissoes",
  components: {
    Codigo,
    MigalhaDePao
  },
  data() {
    return {
      tela: {
        titulo: 'Permissões'
      },
      navegacao: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Linux',
          to: '/linux',
        },
        {
          text: 'Permissões',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>