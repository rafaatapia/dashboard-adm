<template>
    <v-card class="curvo ma-4">
        <v-card-text>
             <span class="caption grey--text">Informações do ganho</span>
             <v-container grid-list-xl>            
                <v-layout align-center 
                        row wrap >
                        <v-flex xs2>
                            <v-text-field v-model="ganho.valor" label="Valor" 
                                    hint="Utilizar ponto para casas decimais"
                                    prefix="R$" 
                                    type="number" 
                                    color="cyan"/>                                                     
                        </v-flex>
                        <v-flex xs5>
                            <v-select v-model="ganho.usuario" 
                                        label="Usuario"
                                        :items="usuarios"
                                        item-text="nome"
                                        item-value="id"
                                        mask="(##) #####-####" 
                                        :loading="loading"
                                        color="cyan"/>                                                     
                        </v-flex>
                        <v-flex xs3>
                            <v-select v-model="ganho.tipoGanho" color="cyan" 
                                    label="Tipo do ganho" 
                                    :items="opcoesTipoGanho"/>
                        </v-flex>
                        <v-flex xs2 v-if="ganho.tipoGanho === 'PEDIDO' || ganho.tipoGanho === 'GORJETA'">
                            <v-text-field v-model="ganho.pedido" label="Pedido" mask="######" color="cyan"/>
                        </v-flex>
                    <v-flex xs12>
                        <v-btn color="success" @click="salvar()">Salvar</v-btn>
                        <v-btn color="error" @click="voltar()">Cancelar</v-btn>
                    </v-flex>   
                </v-layout>
             </v-container>
             <v-snackbar v-model="snackbar" :color="colorSnack" bottom :timeout="timeSnack">
                 As senhas não coincidem!
             </v-snackbar>
        </v-card-text>
    </v-card>
</template>

<script>
    import Api from "../plugins/Api";
    import Ganho from "../model/Ganho";
import { reject } from 'q';
    export default {
        name: 'Ganhos',
        data () {
            return {
                opcoesTipoGanho: [
                    {value: 'MEASY', text: 'Adicional Measy'},
                    {value: 'GORJETA', text: 'Gorjeta'},
                    {value: 'PEDIDO', text: 'Pedido'}
                ],
                loading: false,
                usuarios : [],
                snackbar: false,
                timeSnack: 5000,
                colorSnack: 'error',
                ganho: new Ganho(),
                 
            }
        },
        methods: {
            async buscarUsuarios() {
                this.loading = true;
                let response = await this.getUsuarios();
                this.loading = false;
                this.usuarios = response.data;
            },
            async getUsuarios() {
                let body = { action: "listarEntregadoresAprovados" }
                return await this.service.request(body);
            }
        },
        created() {
            this.service = new Api(this.$http); 
            this.buscarUsuarios();
        }
    }
</script>


<style>

</style>