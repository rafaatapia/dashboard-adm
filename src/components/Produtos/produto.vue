<template>
    <div>
        <v-container grid-list-xl>            
            <v-layout align-center justify-space-around 
                      row wrap >
                      <v-flex xs12 >
                           <v-card class="curvo">                              
                                 <v-card-text>                                                                         
                                     <v-container grid-list-md>
                                         <v-layout row wrap>                                             
                                             <v-flex xs12
                                                    align-center   
                                                    justify-center
                                                    layout
                                                    text-xs-center>                                                            
                                                <viewer :images="dados.avatar">
                                                    <img :src="getAvatar"/>
                                                </viewer>
                                             </v-flex>
                                           </v-layout>
                                     </v-container>
                                     
                                     <span class="caption grey--text">Informações do Produto</span>
                                     <v-container grid-list-md>
                                         <v-layout row wrap>
                                             <v-flex xs9>
                                                 <v-text-field v-model="dados.descricao" readonly label="Descricao" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.ean" readonly label="EAN" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs5>
                                                 <v-text-field v-model="dados.categoria" readonly label="Categoria" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs4>
                                                <v-text-field v-model="dados.gtin" readonly label="GTIN" color="cyan"/>                     
                                             </v-flex>
                                             <v-flex xs3>
                                                <v-text-field v-model="dados.dhAtualizacao" readonly label="Data atualização" color="cyan"/>                     
                                             </v-flex>
                                             <v-flex xs12>
                                                 <v-btn color="blue" dark @click="$refs.imagem.click()"><v-icon>add</v-icon>Adicionar imagem</v-btn>
                                                    <input v-show="false" ref="imagem" type="file" @change="salvarImagem(dados)" >                                                 
                                             </v-flex>
                                             <v-flex xs12>                                                 
                                                 <v-btn class="success" @click="salvarProduto()" depressed>Salvar</v-btn>
                                                 <v-btn class="error" @click="voltar()" depressed>Cancelar</v-btn>
                                             </v-flex>
                                             <v-snackbar
                                                v-model="snackbar"
                                                bottom
                                                :timeout="snackTime">
                                                {{ textoSnack }}
                                                <v-btn
                                                    color="blue"
                                                    flat
                                                    icon
                                                    @click="snackbar = false">
                                                    <v-icon>clear</v-icon>
                                                </v-btn>
                                            </v-snackbar>
                                         </v-layout>
                                     </v-container>
                                 </v-card-text>                                                    
                           </v-card>
                      </v-flex>                                       
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
export default {    
    data(){
        return{
            dados:            
            {
                avatar: 'https://static.carrefour.com.br/medias/sys_master/images/images/h42/h06/h00/h00/13740663898142.jpg',
                codigo: '02',
                descricao: 'Sabão em Pó Omo Multiação 2Kg',
                categoria: 'Sabão em Pó',
                ean: '7891150036840',
                dhAtualizacao: '01/01/2019'
            },
            arquivo: null,
            base: '',
            request: {},
            snackbar: false,
            textoSnack: '',
            snackTime: 1500
        }
    },
    computed: {
        getAvatar() {            
            return this.dados.avatar;
        }
    },
    created(){        
    },
    mounted() {           
    },
    methods: {      
        voltar(){
            this.$router.push({ name: 'Produtos'});
        },
        salvarProduto() {      
            this.textoSnack = 'Imagem enviada com sucesso!';
            this.snackbar = true;                
            setTimeout(() => {
                location.reload();
            }, 1000)            
        }
    }
}
</script>


<style>
.perfil{
    margin-top: -150px;
}

.image{
    cursor: pointer;    
}

</style>

