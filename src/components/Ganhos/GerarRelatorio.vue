<template>
    <download-excel
        class   = "btn btn-default"
        :data   = "data"
        :fields = "json_fields"
        worksheet = "My Worksheet"
        :name    = "arquivo">
    
        <v-btn icon medium color="cyan">
            <v-icon color="white">
                get_app
            </v-icon>
        </v-btn>
    
    </download-excel>
</template>

<script>
export default {
    data() {
        return {
            json_fields: {
                'Nome': 'nome',
                'CPF': 'cpf',
                'Banco': 'banco',
                'Tipo de Conta' : 'tipo',
                'Número' : 'numero',
                'Agência' : 'agencia',
                'Valor' : 'valor',
            },
            json_data: [],
            json_meta: [
                [
                    {
                        'key': 'charset',
                        'value': 'utf-8'
                    }
                ]
            ],
        }
    },
    props: {
        data: Array
    },
    computed: {
        arquivo() {
            let data = new Date();
            return `entregadores-${data.getDate()}/${data.getMonth()+1}.xlsx`;
        }
    }

}
</script>

<style>

</style>