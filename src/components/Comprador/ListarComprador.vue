<template>
    <v-card class="ma-4 pb-3 curvo">
        <v-card-title>            
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            color="cyan"
            clearable
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-progress-linear v-slot:progress color="cyan darken-3" v-show="isLoading" indeterminate></v-progress-linear>
        <v-data-table
        :headers="headers"
        :items="compradores"
        :pagination.sync="pagination"
        :rows-per-page-items="pagination.rowsPerPageItems"
        :search="search">        
        <template v-slot:items="props">
            <tr @click="visualizar(props.item)">
                <td>{{ props.item.nome }}</td>
                <td class="text-xs-left">{{ props.item.login }}</td>        
                <td class="text-xs-left">{{ props.item.cidade }}</td>      
                <td class="text-xs-center">
                    <v-btn @click="editar(props.item.id)" icon>
                        <v-icon>edit</v-icon>
                    </v-btn>    
                </td>           
            </tr>
        </template>
        <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
            Sua busca por "{{ search }}" não retornou nenhum resultado.
            </v-alert>
        </template>
        <template v-slot:no-data>
            <v-alert :value="!isLoading" color="warning" icon="warning">
            Nenhuma informação encontrada!
            </v-alert>
        </template>
        </v-data-table>
        <v-dialog v-model="dialog" persistent width="600">
            <v-card>
                <v-card-title class="title red lighten-2">
                    Selecione os mercados
                </v-card-title>
                <v-card-text v-if="usuario">                    
                    <v-select v-model="usuario.mercados" multiple :items="mercados" 
                        item-value="id" item-text="nome" deletable-chips label="Mercados" color="cyan"
                        chips dense=""/>                    
                    <v-btn depressed color="success" @click="salvarMercado()">Salvar</v-btn>
                    <v-btn depressed color="error" @click="cancelar()">Cancelar</v-btn>                    
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-btn @click="cadastrar()"
               class="v-btn v-btn--bottom v-btn--medium green v-btn--floating v-btn--fixed v-btn--right theme--dark">
          <v-icon>
            add
          </v-icon>
        </v-btn>
    </v-card>
</template>

<script>
export default {
    name: 'listCompradores',
     data () {
      return {
        search: '',
        compradores: [
            {
                nome: 'Comprador Exemplo 1',
                login: 'comprador.exemplo1',
                cidade: 'Cascavel'        
            },
            {
                nome: 'Comprador Exemplo 2',
                login: 'comprador.exemplo2',
                cidade: 'São Paulo'
            },
            {
                nome: 'Comprador Exemplo 3',
                login: 'comprador.exemplo3',
                cidade: 'Porto Alegre'        
            },
        ],
        usuario: null,
        mercados: [],
        dialog: false,
        pagination: {
                sortBy: 'nome',
                page: 1,
                rowsPerPage: 10,
                rowsPerPageItems: [10, 50, 100, {
                    value: -1,
                    text: 'Todos'
                }]
        },
        isLoading: false,
        headers: [
          {
            text: 'Nome',
            align: 'left',            
            value: 'nome'
          },          
          { text: 'Login',  value: 'login' },        
          { text: 'Cidade', value: 'cidade' },
          { text: 'Editar', align:'center', sortable: false}
        ],        
      }
    },
    methods: {
      salvarMercado() {
        this.usuario = null;
        this.dialog = false;                      
      },
      cancelar() {
          this.dialog = false;
      },
      listMercados() {
          let body = {action: 'listarMercadosAtivos'};
          this.service.request(body).then(res => this.mercados = res.data);
      },
      visualizar(usuario){
          this.usuario = usuario;
          this.dialog = true;
      },
      editar(id){
        this.$router.push({ name: 'Editar comprador', params: {id: id} })      
      },
      cadastrar(){
           this.$router.push({ name: 'Novo comprador' })
      }      
    },
    created() {
    }
}
</script>


<style>
.curvo{
    border-radius: 10px
}

</style>

