<template>
    <v-card class="ma-4 pb-3 curvo">
        <v-card-title>            
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            color="cyan""
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-progress-linear v-slot:progress color="red darken-3" v-show="isLoading" indeterminate></v-progress-linear>
        <v-data-table
        :headers="headers"
        :items="produtos"
        :pagination.sync="pagination"
        :rows-per-page-items="pagination.rowsPerPageItems"
        :search="search">        
        <template v-slot:items="props">
            <td>
                <v-avatar size="85">
                    <img :src="props.item.avatar"/>
                </v-avatar>
            </td>
            <td class="text-xs-left">{{ props.item.codigo }}</td>
            <td class="text-xs-left">{{ props.item.descricao }}</td>
            <td class="text-xs-left">{{ props.item.categoria }}</td>
            <td class="text-xs-left">{{ props.item.ean }}</td>             
            <td class="text-xs-left">{{ props.item.dhAtualizacao }}</td>
            <td class="text-xs-left">
                <v-btn icon flat @click="visualizar(props.item.codigo)">
                    <v-icon>edit
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
    name: 'listaProdutos',
     data () {
      return {
        search: '',
        produtos: [
            {
                avatar: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/1984_Refrigerante_Coca_Cola_Lata_350_ml.1534621776.jpg',
                codigo: '01',
                descricao: 'Coca-Cola Lata',
                categoria: 'Refrigerantes',
                ean: '7894900700046',
                dhAtualizacao: '01/01/2019'
            },
            {
                avatar: 'https://static.carrefour.com.br/medias/sys_master/images/images/h42/h06/h00/h00/13740663898142.jpg',
                codigo: '02',
                descricao: 'Sabão em Pó Omo Multiação 2Kg',
                categoria: 'Sabão em Pó',
                ean: '7891150036840',
                dhAtualizacao: '01/01/2019'
            },
            {
                avatar: 'https://www.widestock.com.br/media/catalog/product/cache/1/image/736x460/9df78eab33525d08d6e5fb8d27136e95/c/a/cafe-3-corac_es-a-vacuo-tradicional-500gr.jpg',
                codigo: '03',
                descricao: 'Café 3 Corações a Vácuo Tradicional 500gr',
                categoria: 'Café',
                ean: '7894900700046',
                dhAtualizacao: '01/01/2019'
            }
        ],
        pagination: {
                sortBy: 'codigo',
                page: 1,
                rowsPerPage: 10,
                rowsPerPageItems: [10, 50, 100, {
                    value: -1,
                    text: 'Todos'
                }]
        },
        isLoading: false,
        headers: [
          { text: 'Imagem', value: 'avatar', sortable: false },
          { text: 'Código', align: 'left', value: 'codigo' },
          { text: 'Descrição', value: 'descricao' },
          { text: 'Categoria', value: 'categoria' },
          { text: 'EAN', value: 'ean' },          
          { text: 'Data Atualização', value: 'dhAtualizacao' },
          { text: 'Editar', value: 'none', sortable: false }
        ],        
      }
    },
    methods: {           
      visualizar(id){
          this.$router.push({ name: 'Editar Produto', params: {id: id} })
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

