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
                                                    <v-avatar size="150">
                                                        <img :src="dados.avatar"/>
                                                    </v-avatar>
                                                </viewer>
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
                                             <v-flex xs12                                                    
                                                    align-center
                                                    justify-center
                                                    layout
                                                    text-xs-center>
                                                 <v-rating
                                                    v-model="dados.nota"
                                                    color="yellow darken-3"
                                                    background-color="grey darken-1"
                                                    empty-icon="$vuetify.icons.ratingFull"
                                                    readonly
                                                    half-increments>
                                                </v-rating>
                                             </v-flex>

                                             <v-flex xs12
                                                    align-center
                                                    justify-center
                                                    layout
                                                    text-xs-center>

                                                <v-dialog
                                                    v-model="dialog"
                                                    width="500">
                                                    <template v-slot:activator="{ on }">
                                                        <v-btn color="green" v-on="on"  depressed :outline="isAprovado" round>Aprovado</v-btn>
                                                    </template>

                                                    <v-card>
                                                        <v-card-title
                                                        class="headline red lighten-1"
                                                        primary-title>
                                                        Atenção
                                                        </v-card-title>

                                                        <v-card-text>
                                                            <strong>Tem certeza que deseja aprovar o usuário {{dados.nome}} ? </strong>
                                                            <br>
                                                            Após realizar a ação, será enviado um e-mail e um SMS para o usuário notificando sobre a aprovação!
                                                        </v-card-text>

                                                        <v-divider></v-divider>

                                                        <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn
                                                            color="success"
                                                            depressed
                                                            @click="aprovacao('APROVADO')">
                                                            Confirmar
                                                        </v-btn>
                                                        <v-btn
                                                            color="error"
                                                            flat
                                                            @click="dialog = false">
                                                            Cancelar
                                                        </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                    </v-dialog>

                                                <v-btn color="grey" @click="aprovacao('EM_ANALISE')" depressed :outline="isAnalise" round>Em Analise</v-btn>
                                                 
                                                 <v-btn color="red" @click="aprovacao('REPROVADO')" depressed :outline="isReprovado" round>Reprovado</v-btn>
                                             </v-flex>

                                         </v-layout>
                                     </v-container>
                                     
                                     <span class="caption grey--text">Informações Pessoais</span>
                                     <v-container grid-list-md>
                                         <v-layout row wrap>
                                             <v-flex xs6>
                                                 <v-text-field v-model="dados.nome" label="Nome" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs4>
                                                 <v-text-field v-model="dados.login" label="Login" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs2>
                                                 <v-text-field v-model="dados.telefone" label="Telefone" mask="(##) # ####-####" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs4>
                                                 <v-text-field v-model="dados.email" label="Email" color="cyan"/>                     
                                             </v-flex>
                                             <v-flex xs2>
                                                 <v-text-field v-model="dados.cpf" mask="###.###.###-##" label="CPF" color="cyan"/>                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.dataNascimento" mask="##/##/####" label="Nascimento" color="cyan"/>
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-select :items="sexo" item-value="valor" item-text="descricao" v-model="dados.sexo" label="Sexo" color="cyan"/>                                                     
                                             </v-flex>
                                         </v-layout>
                                     </v-container>

                                     <v-divider class="mb-4 ml-3 mr-3" />

                                     <span class="caption grey--text">Endereço</span>
                                     <v-container grid-list-md>
                                         <v-layout row wrap>
                                             <v-flex xs9>
                                                 <v-text-field v-model="dados.endereco.logradouro" label="Logradouro" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.endereco.numero" label="Número" type="number" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.endereco.bairro" label="Bairro" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.endereco.cep" label="CEP" mask="#####-###" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs6>
                                                 <v-text-field v-model="dados.endereco.cidade" label="Cidade" color="cyan"/>                                                     
                                             </v-flex>                                            
                                         </v-layout>
                                     </v-container>

                                    <v-divider class="mb-4 ml-3 mr-3"/>

                                     <span class="caption grey--text">Veículo</span>
                                     <v-container grid-list-md>
                                         <v-layout row wrap>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.veiculo.marca" label="Marca" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs6>
                                                 <v-text-field v-model="dados.veiculo.modelo" label="Modelo" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.veiculo.cor" label="Cor" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.veiculo.ano" label="Ano" type="number" mask="####" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs3>
                                                 <v-text-field v-model="dados.veiculo.placa" label="Placa" mask="AAA-#N##" color="cyan"/>                                                     
                                             </v-flex>
                                             <v-flex xs6>
                                                 <v-select 
                                                    label="Tipo" 
                                                    v-model="dados.veiculo.tipo"
                                                    :items="veiculos"
                                                    item-text="descricao"
                                                    item-value="valor"
                                                    color="cyan"/>                                                     
                                             </v-flex>
                                             <v-btn depressed color="success" @click="salvarVeiculo()">Salvar</v-btn>
                                         </v-layout>
                                     </v-container>

                                 </v-card-text>                                 
                            </v-card>
                      </v-flex>
                     

                      <v-flex xs12>
                          <v-card class="curvo">
                              <v-card-title @click="exibeCnh = !exibeCnh" class="image">
                                  <span class="subheading">Carteira Nacional de Habilitação</span>
                                  <v-spacer/>
                                  <v-icon>
                                      keyboard_arrow_down
                                  </v-icon>
                              </v-card-title>
                              <v-card-text v-show="exibeCnh">
                                  <v-flex xs12
                                                    align-center   
                                                    justify-center
                                                    layout
                                                    text-xs-center>
                                    <viewer :images="dados.docs.cnh">
                                        <img class="ma-4" 
                                            width="80%"
                                            :src="dados.docs.cnh"/>
                                    </viewer>
                                  </v-flex>
                              </v-card-text>
                          </v-card>
                      </v-flex>

                      <v-flex xs12>
                          <v-card class="curvo">
                              <v-card-title @click="exibeCompRes = !exibeCompRes" class="image">
                                  <span class="subheading">Comprovante de Residência</span>
                                  <v-spacer/>
                                  <v-icon>
                                      keyboard_arrow_down
                                  </v-icon>
                              </v-card-title>
                              <v-card-text v-show="exibeCompRes">
                                  <v-flex xs12
                                                    align-center   
                                                    justify-center
                                                    layout
                                                    text-xs-center>
                                        <viewer :images="dados.docs.compRes">
                                            <img class="ma-4" 
                                                width="80%"
                                                :src="dados.docs.compRes"/>
                                        </viewer>
                                  </v-flex>
                              </v-card-text>
                          </v-card>
                      </v-flex>                      

                      <v-flex xs12>
                          <v-card class="curvo">
                              <v-card-title @click="exibeDocVeic = !exibeDocVeic" class="image">
                                  <span class="subheading">Documento do Veículo</span>
                                  <v-spacer/>
                                  <v-icon>
                                      keyboard_arrow_down
                                  </v-icon>
                              </v-card-title>
                              <v-card-text v-show="exibeDocVeic">
                                  <v-flex xs12
                                                    align-center   
                                                    justify-center
                                                    layout
                                                    text-xs-center>
                                        <viewer :images="dados.docs.docVeic">
                                            <img class="ma-4" 
                                                width="80%"
                                                :src="dados.docs.docVeic"/>
                                        </viewer>
                                  </v-flex>
                              </v-card-text>                              
                          </v-card>
                      </v-flex>
                                          
            </v-layout>
        </v-container>

         <v-snackbar
                v-model="snack"
                bottom
                :timeout="6000">
                {{ msgSnack }}
                <v-btn
                    color="cyan"
                    flat
                    icon
                    @click="snack = false">
                    <v-icon>clear</v-icon>
                </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
export default {    
    data(){
        return{
            dados: {
                avatar: 'https://i.pinimg.com/originals/6e/af/d4/6eafd448ca908f781dc79dc60757dd5d.jpg',
                login: 'tony.stark',
                telefone: '(45) 9 9999-9999',
                cpf: 123456789101,
                dataNascimento: '01/01/1990',
                sexo: 'M',
                nome: 'Entregador Exemplo 1',
                email: 'entregador1@exemplo.com',                
                cidade: 'Cascavel',
                dt_cadastro: '01/01/2019',
                status: 'APROVADO',
                nota: 4.9,
                endereco: {
                    logradouro: 'Avenida Brasil',
                    numero: 25,
                    bairro: 'Centro',
                    cep: 88855123,
                    cidade: 'Cascavel'
                },
                veiculo: {
                    marca: 'Peugeot',
                    modelo: '208 Allure',
                    cor: 'Prata',
                    ano: 2013,
                    placa: 'IUH2525',
                    tipo: 'CARRO'
                },
                docs: {
                    cnh: 'https://www.infoescola.com/wp-content/uploads/2010/05/cnh.jpg',
                    compRes: 'http://www.eletronenergia.com.br/wp-content/uploads/2016/08/conta-3-GRANDE-1.1.jpg',
                    docVeic: 'http://www.gpleiloes.com.br/site_arquivos/arq_593_004_20150515150334.jpg'
                }
            },            
            loadingCartao: false,
            snack: false,
            msgSnack: '',
            dialog: false,            
            veiculos: [{descricao: "Bicicleta", valor:"BICICLETA"}, 
                        {descricao: "Carro", valor: "CARRO"},
                        {descricao: "Moto", valor: "MOTO"}],
            sexo: [{descricao: "Masculino", valor: "M"}, {descricao: "Feminino", valor: "F"}],
            exibeCnh: false,
            exibeCompRes: false,
            exibeFoto: false,
            exibeDocVeic: false,            
        }
    },
    created(){
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
        },
    },
    methods: {
        mailto(){
            window.open(`mailto:${this.dados.email}`);
        },
        whatsappto(){
            window.open(`https://web.whatsapp.com/send?phone=55${this.dados.telefone}`);
        },
        aprovacao(status) {
            this.dados.status = status;                    
            this.dialog = false;
        },
        salvarVeiculo() {
            this.msgSnack = 'Veiculo salvo com sucesso!';
        },
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

