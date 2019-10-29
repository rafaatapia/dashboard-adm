<template>
<div>
    <v-card class="ma-4 pb-3 curvo">
        
        <v-card-title class="headline">Leilões sem ganhadores</v-card-title>
             <v-switch
                class="ml-3"
                v-model="switch1"
                color="cyan"
                label="Ativar botão">
                </v-switch>
            <v-btn v-show="switch1" class="ml-3 mb-3" @click="getPedidos()" depressed color="error">Buscar</v-btn>
         <v-data-table
                :items="pedidos"
                class="elevation-1"                
                hide-actions
                no-data-text="Nenhum leilão sem ganhador até o momento!"
                :headers="headers">
            <template v-slot:items="props">                
                <td>{{ props.item.pedido }}</td>
                <td>{{ props.item.mercado }}</td>
                <td>{{ props.item.pessoa }}</td>                
                <td>{{ props.item.frete }}</td>
                <td>{{ props.item.status }}</td>
                <td>{{ props.item.data_entrega }}</td>      
                <td class="text-xs-center">
                    <v-btn icon flat @click="reiniciarLeilao(props.item)" >
                        <v-icon flat small>autorenew</v-icon>
                    </v-btn>
                </td>           
                <td class="text-xs-center">
                    <v-btn icon flat @click="modalProdutos(props.item)" >
                        <v-icon flat small>mdi-cart</v-icon>
                    </v-btn>
                </td>
                <td class="text-xs-center">
                    <v-btn icon flat @click="modalEntrega(props.item)" >
                        <v-icon flat small>mdi-map-marker</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
    </v-card>
    <v-dialog v-model="dialogProdutos" max-width="600">
        <v-card>
        <v-card-title class="headline red--text">Produtos</v-card-title>

        <v-card-text>
          <v-list two-line>
          <template v-for="(item) in produtos">

            <v-list-tile              
              :key="item.title"
              avatar
              @click="1">
              <v-list-tile-avatar size="70" class="mr-2">
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.descricao"></v-list-tile-title>
                <v-list-tile-sub-title>Quantidade: {{ item.quantidade }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Valor: {{ item.valorString }}</v-list-tile-sub-title>                
              </v-list-tile-content>                        
            </v-list-tile>
            <v-divider :key="item.descricao" class="ma-2 ml-4 mr-4"/>
          </template>
        </v-list>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="cyan"
            flat
            depressed
            @click="dialogProdutos = false">
            Ok
          </v-btn>
        </v-card-actions>        
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
import Api from '../plugins/Api';
export default {
    data() {
        return {
            pedidos: [],
            switch1: false,
            headers: [
                {   text: 'Pedido',
                    align: 'left',
                    sortable: true,
                    value: 'pedido'
                },
                { text: 'Mercado', value: 'mercado' },
                { text: 'Cliente', value: 'pessoa' },
                { text: 'Valor Frete', value: 'frete' },
                { text: 'Status', value: 'status' },
                { text: 'Data Entrega', value: 'data_entrega' },
                { text: 'Reiniciar', sortable: false },
                { text: 'Produtos', sortable: false},
                { text: 'Entrega', sortable: false}                
            ],
        }
    },
    created() {
        this.service = new Api(this.$http);
    },
    methods: {
        getPedidos(){
            let body = {"action": "recuperaLeilaoSemLance"}
            this.service.request(body)
                .then(res => this.pedidos = res.data.pedidos);
            this.switch1 = false;
        },
        reiniciarLeilao(item){
            console.log(item);
            let req = {
                        "action": "reiniciarLeilao",
                        "idLeilao": item.leilao,
                    };
            this.service.request(req)
                .then();            
        }
    }
}
</script>

<style>

</style>
    