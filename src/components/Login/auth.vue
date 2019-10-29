<template>
<div class="fundo">
    <v-layout row wrap>
        <v-flex xs12>
            <img src="../../../res/RT.png" width="100" class="mt-3 ml-3"/>
        </v-flex>
        <v-flex xs12
                                                    align-center   
                                                    justify-center
                                                    layout
                                                    text-xs-center>
                                                    <span class="display-1 white--text"> Bem vindo ao <p class="font-weight-bold"> Dashboard</p></span>                                                    
        </v-flex>        
    </v-layout>
     <v-layout align-center justify-space-around fill-height
                      row wrap mb-5 >
                      <v-flex xs4 >
                           <v-card class="elevation-15 curvo mb-3 mt-5"> 
                               <v-card-text>                                                                         
                                     <v-container grid-list-md>
                                         <v-layout row wrap>                                          
                                            <v-flex align-center justify-center layout text-xs-center xs12>
                                                <span class="caption grey--text pb-4">Entre usando suas credenciais</span>
                                             </v-flex>                                             
                                            <v-flex xs12>
                                                 <v-text-field v-model="email" prepend-inner-icon="mail" solo label="Email" color="cyan"/>                                                     
                                            </v-flex>
                                            <v-flex xs12>
                                                 <v-text-field v-model="senha" prepend-inner-icon="lock" solo @keydown.enter="logar()" type="password" label="Senha" color="cyan"/>                                                 
                                                 <v-checkbox label="Lembrar meus dados" class="pt-0 mt-0" color="cyan"/>
                                            </v-flex>

                                            <v-flex align-center justify-center layout text-xs-center xs12>
                                                <v-btn depressed round color="cyan white--text" :loading="isLoading" @click="logar()">
                                                     Entrar
                                                </v-btn>                                                     
                                             </v-flex>
                                         </v-layout>                                         
                                     </v-container>
                                            
                               </v-card-text>
                               <v-alert type="error" :value="error">
                                    {{mensagem}}
                               </v-alert>
                           </v-card>                           
                      </v-flex>
                      
     </v-layout>    
     <v-flex align-center justify-center layout text-xs-center>
         <span class="caption pt-5">Made by: Rafael Tapia</span>
     </v-flex>     
</div>
</template>

<script>
export default {
    data(){
        return{
            email: null,
            senha: null,
            isLoading: false,
            mensagem: null,
            error: false
        }
    },
    created() {        
    },
    methods: {
        logar(){
            localStorage.setItem('login', true);
            this.$router.push('/');            
        }
    }
    
}
</script>

<style scoped>
.link {
    cursor: pointer;    
}
.link:hover {
    text-decoration: underline;    
}

.fundo{
    background: linear-gradient(178deg, #3dc4f9 58%, #F6F8FC 58.2%);
}

.botao{
}
</style>


