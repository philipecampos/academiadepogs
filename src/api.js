import axios from "axios";
// import router from "./router";

const api = axios.create({
    withCredentials: true,
    baseURL: `${process.env.VUE_APP_API}`,
});

// api.defaults.headers.common['Authorization'] = `Bearer ${store.state.usuario.token}`;
// api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.usuario}`;
api.defaults.timeout = 8000;
// axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.usuario}`}

api.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {


        // if (!error.status) {
        //     alert('Falha ao acessar o servidor. Verifique sua conexão e tente novamente.');
        //     return Promise.reject(error);
        // }

        switch (error.response.status) {
            case 401: //Não está logado
            case 419: //Sessão expirada
                // if (confirm('Sessão expirada. Deseja entrar novamente no sistema?')) {
                //     router.push('/');

                // window.location.reload();//vai executar novamente created() de App_que_funciona.vue
                // }
                if (window.location.pathname !== '/autenticacao')
                    alert('Sessão expirada. Faça o login e tente novamente.');
                return Promise.reject(error);
            case 500:
                // alert('Falha ao tentar executar seu pedido.');
                return Promise.reject(error);
            case 503: //Sistema em manutenção
                alert('Sistema em manutenção. Por Favor, tente mais tarde');
                return Promise.reject(error);
            default:
                // Allow individual requests to handle other errors
                return Promise.reject(error);
        }
    });

export default api;