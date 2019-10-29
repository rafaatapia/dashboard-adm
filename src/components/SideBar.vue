<template>
    <v-navigation-drawer 
        width="250"        
        app             
        fixed
        permanent>
       
       <v-layout align-center justify-center row pt-4 pb-4 mb-3>
            <img src="../../res/RafaelTapia.png"                             
                width="40%"/>
       </v-layout>

        <v-list dense class="pt-0">        
        <v-list-tile 
            v-for="rota in rotas"
            :key="rota.path"
            active-class="selected"
            :to="rota.path">            
            
            <v-list-tile-action>
                <v-icon color="cyan darkeen-3">{{ rota.icone }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title class="font-weight-regular">{{ rota.nome }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>       
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            rotas: []
        }
    },
    created() {
        this.carregaLista();
    },
    methods: {
        carregaLista(){
            this.$router.options.routes.forEach(route => {                
                if(route.menu){
                    this.rotas.push({
                        nome: route.name,
                        path: route.path,
                        icone: route.icone,
                        meta: route.meta
                    })
                }
            });
      },
    }

}
</script>

<style>
.selected{    
    border-left: 3px solid #08abeb;        
}
</style>


