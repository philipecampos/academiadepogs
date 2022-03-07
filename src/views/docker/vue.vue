<template>
  <v-container>
<!--    <v-row>-->
<!--      <v-col>-->
<!--        <v-textarea-->
<!--            v-show="edicao"-->
<!--            rows="12"-->
<!--            label="Edição"-->
<!--            v-model="codigoFonte"></v-textarea>-->
<!--      </v-col>-->
<!--    </v-row>-->

    <Conteudo
        titulo="Criar container vue"
        :migalha-de-pao="navegacao"
        :markdown="codigoFonte"
        :menu="menu"
    >
<!--      <span v-html="codigoFormatado"></span>-->


<!--    <v-card>-->
<!--      <v-card-title>Container Para Aplicações Vue</v-card-title>-->
<!--      <v-divider />-->
<!--      <v-card-text>-->
<!--        <span v-html="codigoFormatado"></span>-->
<!--      </v-card-text>-->
<!--    </v-card>-->


<!--      <h1>Permissões Padrão Laravel</h1>-->
<!--      <br>-->

<!--      Pré-requisitos:-->
<!--      <ul>-->
<!--        <li>-->
<!--          <a target="_blank"-->
<!--             href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt">Docker-->
<!--            instalado com permissões de root configuradas</a>-->
<!--        </li>-->
<!--      </ul>-->

<!--      <br>-->



<!--      <h3>Gerar um novo container a partir do ubuntu:</h3>-->
<!--      <Codigo>docker run -it -v $HOME/www:/var/www/html &#45;&#45;network host &#45;&#45;name vue ubuntu:20.04</Codigo>-->

  <!--    <h2>Dentro do container criado:</h2>-->
  <!--    <h3>Atualizar repositório:</h3>-->
  <!--    <Codigo>apt update</Codigo>-->
  <!--    <h3>Instalar curl:</h3>-->
  <!--    <Codigo>apt install curl</Codigo>-->
  <!--    <h3>Instalar curl:</h3>-->
  <!--    <Codigo>curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh</Codigo>-->
  <!--    <Codigo>apt install curl</Codigo>-->
  <!--    <Codigo>bash nodesource_setup.sh</Codigo>-->


    </Conteudo>
  </v-container>

</template>

<script>
import Conteudo from "../../components/Conteudo";

export default {
  name: "permissoes",
  components: {
    Conteudo
  },
  data() {
    return {
      codigoFonte: "## Pré-requisito\n- Docker instalado e configurado para uso sem sudo ([Tutorial Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt))\n\n&nbsp;  \n\n## Criação do container com base Ubuntu\n\n```shell\ndocker run -it -v $(pwd)/www:/var/www/html --network host --name vue ubuntu:20.04\n```  \n&nbsp;\n\n## Atualização de repositório\n```shell-session\napt update\n```\n&nbsp;\n## Instalação do curl\n\n```shell\napt install curl\ncurl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh\n```\n&nbsp;\n## Instalação do Nodejs\n\n```shell\nbash nodesource_setup.sh\napt install nodejs \n```",
      menu: 1,
      edicao: false,
      navegacao: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Dcoker',
          to: '/docker',
        },
        {
          text: 'Container Vue',
        },
      ],
    }
  },
  // computed: {
  //   codigoFormatado() {
  //     return marked(this.codigoFonte, {
  //       highlight(code, lang) {
  //         const hljs = require('highlight.js');
  //         const language = hljs.getLanguage(lang) ? lang : 'plaintext';
  //         return hljs.highlight(code, { language }).value;
  //       },
  //       langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  //       // smartLists: true
  //     })
  //   }
  // }
}
</script>

<style scoped>

</style>