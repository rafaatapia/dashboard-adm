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
                                                 <v-avatar size="150">
                                                    <img :src="dados.avatar"/>
                                                </v-avatar>                       
                                             </v-flex>

                                             <v-flex xs12
                                                    align-center   
                                                    justify-center
                                                    layout
                                                    text-xs-center>
                                                    <v-btn icon flat @click="mailto()">
                                                        <v-icon color="cyan">
                                                            mail
                                                        </v-icon>
                                                    </v-btn>
                                                    <v-btn icon flat @click="whatsappto()">
                                                        <v-icon color="green">  
                                                            mdi-whatsapp
                                                        </v-icon>
                                                    </v-btn>
                                             </v-flex>

                                         </v-layout>
                                     </v-container>
                                     
                                     <span class="caption grey--text">Informações Pessoais</span>
                                     <v-container grid-list-md>
                                         <v-layout row wrap>
                                             <v-flex xs6>
                                                 <v-text-field v-model="dados.nome" readonly label="Nome" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs4>
                                                 <v-text-field v-model="dados.login" readonly label="Login" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs2>
                                                 <v-text-field v-model="dados.telefone" readonly label="Telefone" mask="(##) # ####-####" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs4>
                                                 <v-text-field v-model="dados.email" readonly label="Email" color="cyan"/>                     
                                             </v-flex>
                                             <v-flex xs2>
                                                 <v-text-field v-model="dados.cpf" readonly mask="###.###.###-##" label="CPF" color="cyan"/>                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.dataNascimento" readonly mask="##/##/####" label="Nascimento" color="cyan"/>
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-select :items="sexo" item-value="valor" readonly item-text="descricao" v-model="dados.sexo" label="Sexo" color="cyan"/>                                                     
                                             </v-flex>
                                         </v-layout>
                                     </v-container>

                                     <v-divider class="mb-4 ml-3 mr-3" />
                                    
                                     <span class="caption grey--text">Endereços</span>
                                     <v-container grid-list-md v-for="(endereco, i) in dados.enderecos" :key="endereco.id">
                                         <v-layout row wrap>
                                             <v-flex xs9>
                                                 <v-text-field v-model="endereco.logradouro" readonly label="Logradouro" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="endereco.numero" readonly label="Número" type="number" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="endereco.bairro" readonly label="Bairro" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="endereco.cep" readonly label="CEP" mask="#####-###" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs6>
                                                 <v-text-field v-model="endereco.cidade" readonly label="Cidade" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-divider class="mb-3 mt-3 ml-5 mr-5" v-if="dados.enderecos.length !== i+1"/>
                                         </v-layout>
                                     </v-container>

                                     <v-divider class="mb-4 ml-3 mr-3" />

                                     <span class="caption grey--text">Pagamentos</span>
                                                                        
                                         <v-list three-line>
                                          <v-list-tile
                                            v-for="(item) in dados.cartoes"
                                            :key="item.holder"
                                            avatar>
                                            <v-list-tile-avatar>
                                            <img :src="getBandeira(item.bandeira)"/>
                                            </v-list-tile-avatar>

                                            <v-list-tile-content>
                                            <v-list-tile-title>{{ item.holder }}</v-list-tile-title>
                                            <v-list-tile-sub-title>{{ item.numero }}</v-list-tile-sub-title>
                                            <v-list-tile-action-text>{{ item.vencimento }}</v-list-tile-action-text>                                            
                                            </v-list-tile-content>                                                                                        

                                            <v-list-tile-action>                                            
                                            <v-icon v-if="item.isPrincipal" color="red lighten-1">star</v-icon>                                                                            
                                            </v-list-tile-action>                                            
                                        </v-list-tile>                                                                                
                                        </v-list>                                     

                                 </v-card-text>                                 
                            </v-card>
                      </v-flex>
                                          
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Api from "../../plugins/Api";
export default {    
    data(){
        return{
            dados: {
                id: 1,
                avatar: 'https://i.pinimg.com/originals/6e/af/d4/6eafd448ca908f781dc79dc60757dd5d.jpg',
                login: 'tony.stark',
                cpf: 123456789101,
                dataNascimento: '01/01/1990',
                sexo: 'M',
                nome: 'Cliente Exemplo 1',
                email: 'cliente@exemplo.com',
                telefone: '(45) 9 9999-9999',
                cidade: 'Cascavel',
                enderecos: [
                    {
                        logradouro: 'Avenida Brasil',
                        numero: 2458,
                        bairro: 'Centro',
                        cep: '85802-001',
                        cidade: 'Cascavel'
                    },                                        
                ],
                cartoes: [
                    {
                        bandeira: 'VISA',
                        holder: 'Tony Stark',
                        numero: '4567 **** **** 1234',
                        vencimento: '10/2020',
                        isPrincipal: true,
                    },
                    {
                        bandeira: 'MASTERCARD',
                        holder: 'Tony Stark',
                        numero: '5565 **** **** 5468',
                        vencimento: '07/2025',
                        isPrincipal: false,
                    }
                ]
            },
            sexo: [{descricao: "Masculino", valor: "M"}, {descricao: "Feminino", valor: "F"}],
        }
    },
    created(){
        this.service = new Api(this.$http);
    },
    mounted() {    
    },
    computed:{
        isAnalise() {        
            return !(this.dados.status === 'EM_ANALISE');
        },
        isAprovado() {            
            return !(this.dados.status === 'APROVADO');            
        },
        isReprovado() {
            return !(this.dados.status === 'REPROVADO');
        },
        avatar(){
            return this.dados.avatar;
        }        
    },
    methods: {      
        mailto(){
            window.open(`mailto:${this.dados.email}`);
        },
        whatsappto(){
            window.open(`https://web.whatsapp.com/send?phone=55${this.dados.telefone}`);
        },        
        getBandeira(bandeira){
            if(bandeira === "MASTERCARD"){
                return "https://newsroom.mastercard.com/latin-america/files/2016/07/Linkedin_MC1.jpg";
            } else if(bandeira === "VISA"){
                return "data:image/jpeg;base64,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";
            } else if(bandeira === "AMEX") {
                return "http://www.botecodesign.org/wp-content/uploads/2018/06/American-Express_Pentagram_Boteco-Design_04-800x600.jpg"
            } else if(bandeira === "DINERS") {
                return "data:image/png;base64,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";                
            } else if(bandeira === "ELO") {
                return "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/686355/regular_f4df08f505a58b45a13913522c79add5.png";                
            } else {
                return "https://freeiconshop.com/wp-content/uploads/edd/creditcard-flat.png";                
            }            
        },
        aprovacao(status) {
            let body = {action: 'alterarStatusEntregador', status: status, idEntregador: this.dados.idEntregador}
            this.service.request(body)
                .then(res => {
                    this.dados.status = res.data.status;                    
                });
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

