<template>
    <v-container grid-list-lg>        
        <v-layout class="mb-4" row wrap>        
            <v-flex xs12>
                <span class="subheading pr-1 font-weight-bold black--text">Monitoramento Threads</span>           
            </v-flex>                                 
            <v-flex>
                <v-card class="curvo">    
                    <v-card-text class="headline">
                        Thread Comprador:
                        <span :class="getClassComprador">{{ getTextComprador }}</span>
                    </v-card-text>    
                    <v-card-text class="headline">
                        Thread Leilão:
                        <span :class="getClassLeilao">{{ getTextLeilao }}</span>
                    </v-card-text>
                    <v-card-text class="headline">
                        Thread Pedido:
                        <span :class="getClassPedido">{{ getTextPedido }}</span>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){        
        return{
            leilao: true,
            pedido: true,
            comprador: false,
        }
    },
    computed: {
        getClassLeilao() {
            return this.leilao ? "green--text" : "red--text";
        },
        getTextLeilao() {
            return this.leilao ? "Ativo" : "Inativo"
        },
        getClassPedido() {
            return this.pedido ? "green--text" : "red--text";
        },
        getTextPedido() {
            return this.pedido ? "Ativo" : "Inativo"
        },
        getClassComprador() {
            return this.comprador ? "green--text" : "red--text";
        },
        getTextComprador() {
            return this.comprador ? "Ativo" : "Inativo"
        }
    },    

}
</script>

<style>

</style>
