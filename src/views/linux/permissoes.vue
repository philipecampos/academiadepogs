<template>
  <Conteudo
      titulo="Permissões Linux"
      :migalha-de-pao="navegacao"
  >
    <h3>Permissões Padrão Laravel</h3>

    <p>Execute os comandos abaixo na raiz do projeto:</p>

    <h4>Para todo o projeto:</h4>
    <Codigo>sudo chown -R `whoami`:www-data $(pwd)</Codigo>

    <h4>Para arquivos:</h4>
    <Codigo>sudo find $(pwd) -type f -exec chmod 664 {} \;</Codigo>

    <h4>Para diretórios:</h4>
    <Codigo>sudo find $(pwd) -type d -exec chmod 775 {} \;</Codigo>

    <h3>Mudar dono do Diretório</h3>
    <Codigo>sudo chown -R $USER:$USER</Codigo>

  </Conteudo>
</template>

<script>
import Codigo from "../../components/Codigo";
import Conteudo from "../../components/Conteudo";

export default {
  name: "permissoes",
  components: {
    Codigo,
    Conteudo
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