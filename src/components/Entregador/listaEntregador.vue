<template>
    <v-card class="ma-4 pb-3 curvo">
        <v-card-title>            
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            color="cyan"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-progress-linear v-slot:progress color="red darken-3" v-show="isLoading" indeterminate></v-progress-linear>
        <v-data-table
        :headers="headers"
        :items="entregadores"
        :pagination.sync="pagination"
        :rows-per-page-items="pagination.rowsPerPageItems"
        :search="search">        
        <template v-slot:items="props">
            <td>{{ props.item.nome }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">                    
                        {{ props.item.telefone }}                    
                </td>
            <td class="text-xs-left">{{ props.item.veiculo }}</td>
            <td class="text-xs-left">{{ props.item.cidade }}</td>
            <td class="text-xs-left">{{ props.item.dt_cadastro }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-left">
                <v-btn icon flat @click="visualizar(props.item.idUsuario)">
                    <v-icon>remove_red_eye
                    </v-icon>
                </v-btn>
            </td>
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

    </v-card>
</template>

<script>
export default {
    name: 'listaEntregador',
     data () {
      return {
        search: '',
        entregadores: [
            {
                nome: 'Entregador Exemplo 1',
                email: 'entregador1@exemplo.com',
                veiculo: 'Carro',
                cidade: 'Cascavel',
                dt_cadastro: '01/01/2019',
                status: 'APROVADO'
            },
            {
                nome: 'Entregador Exemplo 2',
                email: 'entregador2@exemplo.com',
                veiculo: 'Moto',
                cidade: 'São Paulo',
                dt_cadastro: '01/01/2019',
                status: 'EM ANALISE'
            },
            {
                nome: 'Entregador Exemplo 3',
                email: 'entregador3@exemplo.com',
                veiculo: 'Bicicleta',
                cidade: 'Porto Alegre',
                dt_cadastro: '01/01/2019',
                status: 'REPROVADO'
            },
        ],
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
          { text: 'Email', value: 'email' },
          { text: 'Celular', value: 'telefone' },
          { text: 'Veiculo', value: 'veiculo' },
          { text: 'Cidade', value: 'cidade' },
          { text: 'Data Cadastro', value: 'dt_cadastro'},
          { text: 'Situação', value: 'status' },
          { text: 'Visualizar', value: 'none', sortable: false }
        ],        
      }
    },
    methods: {
      visualizar(id){
          this.$router.push({ name: 'Perfil do Entregador', params: {id: id} })
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

