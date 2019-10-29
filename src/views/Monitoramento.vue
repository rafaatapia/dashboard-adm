<template>
<div>
    <EntregadorOnline/>

    
</div>
</template>

<script>
import Api from "../plugins/Api";
import EntregadorOnline from "../components/Monitoramento/listaEntregadorOnline"
import { clearInterval } from 'timers';
export default {    
    components: {EntregadorOnline},
    data(){        
        return{            
            leiloes: [],
            lances: [],            
            dialogProdutos: false,  
            modalLance: false,                      
            expand: false,
            headersLeilao: [
                {   text: 'Leilao',
                    align: 'left',
                    sortable: true,                    
                    value: 'leilao'
                },
                { text: 'Pedido', value: 'pedido' },
                { text: 'Mercado', value: 'mercado' },
                { text: 'Cliente', value: 'pessoa' },
                { text: 'Participantes', value: 'participantes' },
                { text: 'Valor Máximo', value: 'valorMaximoValido' },
                { text: 'Status', value: 'status' },
                { text: 'Data Entrega', value: 'data_entrega' }            
            ],
            pedidos: []        
        }
    },
    created() {
        this.service = new Api(this.$http);
        this.getLeilao();        
        setInterval(() => {            
            this.getLeilao();
        }, 3000)    
    },
    watch: {
        pedidos: function(novo, velho) { 
  
            if(!velho && novo) {
                if(novo.length > velho.length) {
                    let sound = 'http://soundbible.com/mp3/Siren_Noise-KevanGC-1337458893.mp3';
                    var audio = new Audio(sound);            
                    audio.play();    
                }
            }
        }
    },
    methods: {        
        classLance(lance, maximo) {
            if(lance > maximo) {
                return 'red--text'
            }
            return 'green--text'
        },
        modalProdutos(props) {
            this.dialogProdutos = true;
            let body = {"action": "listarItens", "id": JSON.stringify(props.pedido)}
            this.service.request(body)
                .then(res => this.produtos = res.data );
        },
        getLeilao() {
            let body = {"action": "listarLeiloes"}
            this.service.request(body)
                .then(res => this.leiloes = res.data );   
        },
        getLances(props) {            
            this.modalLance = true;
            let body = {"action": "listarLancesLeilao", "leilao": JSON.stringify(props.leilao)}
            this.service.request(body)
                .then(res => this.lances = res.data );
            let interval = setInterval(() => {
                 if(this.modalLance) {
                    this.service.request(body)
                        .then(res => this.lances = res.data );
                 } else {
                     clearInterval(interval);
                 }
             }, 1000);            
        },
        modalEntrega(props) {
            console.log(props);
            let url = `http://www.google.com/maps/place/${props.latitude},${props.longitude}`
            window.open(url);
        },
    }

}
</script>

<style>

</style>

