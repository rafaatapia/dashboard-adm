<template>
    <v-container grid-list-lg>        
        <v-layout class="mb-4" row wrap>            
            <v-flex xs11>                
                <span class="subheading pr-1 font-weight-bold black--text">Situação Pedido</span>                                
                <v-icon small color="grey darken-2" @click="modal = !modal">settings</v-icon>                
                <v-spacer></v-spacer>                
            </v-flex>
            <v-flex xs1>                
                    <v-icon right @click="refreshPedido()" color="black">mdi-reload</v-icon>                
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="pink lighten-2" :valor="carrinhoAberto" titulo="Carrinho Aberto" icone="mdi-cart"/>                
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="purple lighten-2" :valor="erroPagamento" titulo="Erro de pagamento" icone="mdi-credit-card"/>                
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="purple" :valor="procurandoComprador" titulo="Procurando comprador" icone="mdi-account"/>
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="purple darken-2" :valor="comprando" titulo="Comprando" icone="mdi-store"/>               
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="blue darken-2" :valor="procurandoEntregador" titulo="Procurando entregador" icone="mdi-account-search"/>
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="blue lighten-2" :valor="esperandoColeta" titulo="Esperando coleta" icone="mdi-truck-delivery"/>
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="cyan lighten-2" :valor="entregando" titulo="Entregando" icone="mdi-car"/>
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="green lighten-1" :valor="concluido" titulo="Concluído" icone="mdi-check"/>                
            </v-flex>
        </v-layout>                    
        <v-layout row wrap>
            <v-flex xs11>
                <span class="subheading font-weight-bold">Estatísticas de usuários</span>                
                <v-spacer></v-spacer>                
            </v-flex>
            <v-flex xs1>
                <v-icon right @click="refreshUsuario()" color="black">mdi-reload</v-icon>
            </v-flex>                        
            <v-flex xs6 md3>
                <CardIndicador color="green lighten-1" :valor="totalOnline" titulo="Usuários online" icone="mdi-account-check"/>                
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="purple lighten-1" :valor="totalVisita" titulo="Visitas hoje" icone="mdi-account-group"/>                
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="blue lighten-1" :valor="totalInstalado" titulo="Pushs recebidos" icone="mdi-briefcase-download"/>                
            </v-flex>
            <v-flex xs6 md3>
                <CardIndicador color="cyan lighten-1" :valor="totalCadastro" titulo="Cadastro" icone="mdi-clipboard-account"/>                
            </v-flex>
        </v-layout>
        <v-dialog v-model="modal" max-width="700">
            <v-card>
                <v-card-title class="headline red--text">
                    Notificação de pedido
                </v-card-title>
                <v-card-text>    
                    <v-flex xs12>               
                    <v-text-field label="Audio"
                                class="ml-2"
                                hint="Informe a URL do audio desejado."
                                required
                                color="cyan"
                                v-model="novo">                        
                    </v-text-field>                    
                    </v-flex>
                    <v-flex xs12>                                            
                    <v-btn @click="setAudio" depressed color="success">Confirmar</v-btn>                    
                    <v-btn @click="modal = !modal" flat color="cyan">Cancelar</v-btn> 
                    </v-flex>
                </v-card-text>
            </v-card>
        </v-dialog>        
    </v-container>
</template>

<script>
import CardIndicador from './CardIndicador'
export default {    
    components: {
        CardIndicador
    },
    data() {
        return {            
            modal: false,
            totalOnline: 3,
            totalCadastro: 100,
            totalCadastroHoje: 10,
            totalInstalado: 98,
            totalVisita: 15,
            carrinhoAberto: 2,
            erroPagamento: 0,
            procurandoComprador: 1,
            comprando: 1,
            procurandoEntregador: 0,
            esperandoColeta: 0,
            entregando: 0,
            concluido: 5
        }
    }
}
</script>

