<template>
    <v-card class="ma-4 pb-3 curvo">
        <v-card-title class="headline">
        Entregadores disponíveis
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
        no-data-text="Nenhum entregador online no momento 😢"
        :search="search">        
        <template v-slot:items="props">
            <td>
                <v-avatar size="50" class="mb-1 mt-1">
                    <img :src="props.item.avatar"/>
                </v-avatar>
            </td>
            <td class="text-xs-left">{{ props.item.login }}</td>
            <td class="text-xs-left">
                {{ props.item.isEntregando ? 'Sim' : 'Não' }}
            </td>
            <td class="text-xs-left" :class="props.item.online ? verde : vermelho">
                {{ props.item.online ? 'Sim' : 'Não' }}
            </td>
            <td>
                <v-btn icon flat :disabled="props.item.gps == ''" @click="posicaoEntregador(props.item.gps)" >
                    <v-icon v-if="props.item.gps" flat small>mdi-map-marker</v-icon>
                    <v-icon v-else flat small>mdi-map-marker-off</v-icon>
                </v-btn>
            </td>
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
        </v-data-table>        

    </v-card>
</template>

<script>
export default {
    name: 'listaEntregadorOnline',
     data () {
      return {
        search: '',
        entregadores: [
            {
                avatar: 'https://i.pinimg.com/originals/6e/af/d4/6eafd448ca908f781dc79dc60757dd5d.jpg',
                login: 'login1@exemplo.com',
                isEntregando: true,
                online: true,
                gps: {
                    latitude: '-24.943404',
                    longitude: '-53.457875'
                }
            },
            {
                avatar: 'https://pbs.twimg.com/profile_images/1144194489646379009/f0zq54gM_400x400.jpg',
                login: 'login2@exemplo.com',
                isEntregando: false,
                online: false,
                gps: ''
            },
            {
                avatar: 'https://nyppagesix.files.wordpress.com/2019/06/chris-hemsworth.jpg?quality=90&strip=all&w=618&h=410&crop=1',
                login: 'login1@exemplo.com',
                isEntregando: false,
                online: true,
                gps: {
                    latitude: '-24.943404',
                    longitude: '-53.457875'
                }
            }
        ],
        pagination: {
                sortBy: 'login',
                page: 1,
                rowsPerPage: 10,
                rowsPerPageItems: [10, 20, 40, {
                    value: -1,
                    text: 'Todos'
                }]
        },
        isLoading: false,
        headers: [
          {
            text: 'Avatar',
            align: 'left', 
            sortable: false,           
            value: 'avatar'
          },          
          { text: 'Login', value: 'login' },
          { text: 'Em Entrega', value: 'isEntregando' },
          { text: 'Online', value: 'online' },
          { text: 'Localização', value: 'gps' },
          { text: 'Visualizar', value: 'none', sortable: false }
        ],        
      }
    },
    computed: {
        verde() {
            return 'green--text';
        },
        vermelho() {
            return 'red--text';
        }
    },
    methods: {
        posicaoEntregador(props) {            
            let url = `http://www.google.com/maps/place/${props.latitude},${props.longitude}`
            window.open(url);
        },
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

