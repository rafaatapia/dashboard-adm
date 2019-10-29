<template>
    <v-card class="curvo ma-4">
        <v-card-text>
            <span class="caption grey--text">Aplicativo</span>
             <v-container grid-list-xl>            
                <v-layout align-center justify-space-around 
                        row wrap >
                        <v-flex xs6>
                            <v-text-field v-model="dados.login" hint="Necessário ser um email" label="Login" color="cyan"/>                                                     
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field v-model="dados.email" label="Email" color="cyan"/>                                                     
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field v-model="dados.senha" label="Senha" type="password" color="cyan"/>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field v-model="confirmaSenha" label="Confirmar senha" type="password" color="cyan"/>
                        </v-flex>                                                
                </v-layout>
             </v-container>
             <span class="caption grey--text">Informações pessoais</span>
             <v-container grid-list-xl>            
                <v-layout align-center justify-space-around 
                        row wrap >
                        <v-flex xs8>
                            <v-text-field v-model="dados.nome" label="Nome" color="cyan"/>                                                     
                        </v-flex>
                        <v-flex xs4>
                            <v-text-field v-model="dados.telefone" label="Telefone" mask="(##) #####-####" color="cyan"/>                                                     
                        </v-flex>
                        <v-flex xs3>
                            <v-text-field v-model="dados.cpf" label="CPF" mask="###.###.###-##" color="cyan"/>
                        </v-flex>
                        <v-flex xs3>
                            <v-select v-model="dados.cidade" color="cyan" label="Cidade" :items="['Cascavel']"/>
                        </v-flex>
                        <v-flex xs3>
                            <v-text-field v-model="dados.nascimento" label="Data de nascimento" type="date" color="cyan"/>
                        </v-flex>
                        <v-flex xs3>
                            <v-select label="Sexo" v-model="dados.sexo" :items="sexoEnum" item-text="nome" item-value="valor" color="cyan"/>
                        </v-flex>
                        <v-flex xs12>
                            <v-btn color="blue" dark @click="$refs.imagem.click()"><v-icon>add</v-icon>Adicionar avatar</v-btn>
                            <input v-show="false" ref="imagem" type="file" @change="salvarImagem()" >                                                 
                        </v-flex>
                    <v-flex xs12>
                        <v-btn color="success" @click="salvar()">Salvar</v-btn>
                        <v-btn color="error" @click="voltar()">Cancelar</v-btn>
                    </v-flex>   
                </v-layout>
             </v-container>
             <v-snackbar v-model="snackbar" color="error" bottom timeout="5000">
                 As senhas não coincidem!
             </v-snackbar>
        </v-card-text>
    </v-card>
</template>

<script>
import Comprador from '../../model/Comprador';
import Api from '../../plugins/Api';
export default {
    data() {
        return {
            dados: new Comprador(),
            snackbar: false,
            confirmaSenha: '',
            sexoEnum: [
                {nome: 'Masculino', valor: 'M'},
                {nome: 'Feminino', valor: 'F'},
                {nome: 'Outro', valor: 'O'}
            ]
        }
    },
    created() {
        this.service = new Api(this.$http);
    },
    mounted() {        
        if(this.$route.params.id){
           this.buscarUsuario();
        }
    },
    methods: {
        salvar() {
            console.log(this.dados);
            if(this.dados.senha !== this.confirmaSenha) {
                this.snackbar = true;
                return;
            }
            this.dados.action = 'salvarComprador';
            this.service.request(this.dados)
                .then(res => {
                    if(res.resposta === 'Comprador salvo com sucesso!'){
                        this.$router.push({ name: 'Comprador'});
                    } else {
                        console.log(res);
                    }
                });
        },
        buscarUsuario() {
            let body = {action: 'buscarComprador', id: this.$route.params.id};
            this.service.request(body)
                .then(res => {
                    this.dados = res.data;
                })
        },
        voltar() {
            this.$router.push({ name: 'Comprador' })
        }
    }

}
</script>

<style>

</style>
