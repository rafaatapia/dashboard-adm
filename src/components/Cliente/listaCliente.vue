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
        <v-progress-linear v-slot:progress color="cyan darken-3" v-show="isLoading" indeterminate></v-progress-linear>
        <v-data-table
        :headers="headers"
        :items="clientes"
        :pagination.sync="pagination"
        :rows-per-page-items="pagination.rowsPerPageItems"
        :search="search">        
        <template v-slot:items="props">
            <td>{{ props.item.nome }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.telefone }}</td>            
            <td class="text-xs-left">{{ props.item.cidade }}</td>            
            <td class="text-xs-left">
                <v-btn icon flat @click="visualizar(props.item.id)">
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
        clientes: [
            {
                id: 1,
                nome: 'Cliente Exemplo 1',
                email: 'cliente@exemplo.com',
                telefone: '(45) 9 9999-9999',
                cidade: 'Cascavel'
            },
            {
                id: 2,
                nome: 'Cliente Exemplo 2',
                email: 'cliente2@exemplo.com',
                telefone: '(11) 9 9999-9999',
                cidade: 'São Paulo'
            },
            {
                id: 3,
                nome: 'Cliente Exemplo 3',
                email: 'cliente3@exemplo.com',
                telefone: '(51) 9 9999-9999',
                cidade: 'Porto Alegre'
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
          { text: 'Cidade', value: 'cidade' },          
          { text: 'Visualizar', value: 'none', sortable: false }
        ],        
      }
    },
    methods: {            
      visualizar(id){
          this.$router.push({ name: 'Perfil do Cliente', params: {id: id} })
      }
    },    
}
</script>


<style>
.curvo{
    border-radius: 10px
}

</style>

