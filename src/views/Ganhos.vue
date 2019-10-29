<template>
    <v-card class="ma-4 pb-3 curvo">
        <v-card-title>
            <v-flex xs3>
                <v-text-field
                    v-model="inicio"
                    class="pr-4 xs2"
                    prepend-inner-icon="calendar_today"
                    label="Inicio"
                    type="date"
                    color="cyan"
                    outline
                    hide-details/>
            </v-flex>
            <v-flex xs3>
                <v-text-field
                    v-model="fim"
                    prepend-inner-icon="calendar_today"
                    label="Fim"
                    type="date"
                    color="cyan"
                    outline
                    hide-details/>
            </v-flex>
            <v-spacer></v-spacer>
            <v-btn round color="cyan" @click="listarGanhos()">
                <v-icon color="white">search</v-icon>
                <span class="white--text pl-2">Consultar</span>
            </v-btn>
            <relatorio :data="ganhos"/>
        </v-card-title>
        <v-progress-linear v-slot:progress color="red darken-3" v-show="isLoading" indeterminate></v-progress-linear>
        <v-data-table
        :headers="headers"
        :items="ganhos"
        :pagination.sync="pagination"
        :rows-per-page-items="pagination.rowsPerPageItems">        
            <template v-slot:items="props">
                <td>{{ props.item.nome }}</td>
                <td class="text-xs-left">{{ props.item.cpf }}</td>
                <td class="text-xs-left">{{ props.item.banco }}</td>            
                <td class="text-xs-left">{{ props.item.tipo }}</td>
                <td class="text-xs-left">{{ props.item.numero }}</td>
                <td class="text-xs-left">{{ props.item.agencia }}</td>
                <td class="text-xs-left">{{ props.item.valor }}</td>
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
    import relatorio from '../components/Ganhos/GerarRelatorio.vue'
    export default {
        components:{relatorio},
        name: 'Ganhos',
        data () {
            return {
                inicio: '',
                fim: '',
                ganhos: [
                    {
                        nome: 'Exemplo 1',
                        cpf: '012.234.456-45',
                        banco: 'Banco Exemplo',
                        tipo: 'Conta Corrente',
                        numero: '00000-0',
                        agencia: '000',
                        valor: 'R$100,00'
                    },
                    {
                        nome: 'Exemplo 2',
                        cpf: '012.234.456-45',
                        banco: 'Banco Exemplo',
                        tipo: 'Conta Corrente',
                        numero: '00000-0',
                        agencia: '000',
                        valor: 'R$232,00'
                    }
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
                    { text: 'CPF', value: 'cpf' },
                    { text: 'Banco', value: 'banco' },
                    { text: 'Tipo de conta', value: 'tipo' },      
                    { text: 'Número', value: 'numero' },
                    { text: 'Agência', value: 'agencia' },
                    { text: 'Valor', value: 'valor' }
                ],        
            }
        },
        computed: {
            dataInicio() {
                let data = new Date();
                data.setDate(data.getDate() - 7);
                let dia = data.getDate() <= 9 ? `0${data.getDate()}` : `${data.getDate()}`;
                return `${data.getFullYear()}-${data.getMonth()+1}-${dia}`;
            },
            dataFim() {
                let data = new Date();
                let dia = data.getDate() <= 9 ? `0${data.getDate()}` : `${data.getDate()}`;
                return `${data.getFullYear()}-${data.getMonth()+1}-${dia}`;
            }
        },
        methods: {
        },
        created() {
            this.inicio = this.dataInicio;
            this.fim = this.dataFim;
        }
    }
</script>


<style>

</style>