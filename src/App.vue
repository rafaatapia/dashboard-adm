<template>
  <v-app>
   <SideBar v-if="$route.name != 'Login'"/>
   <v-toolbar 
      absolute
      v-if="$route.name != 'Login'"
      flat
      color="transparent"
      app>
      <v-toolbar-title >        
        <span class="white--text font-weight-regular">{{ getNome }}</span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-model="menu" offset-y>
        <template v-slot:activator="{ on }">
          <div class="profile" @click="menu = !menu">
            <v-avatar size="35" class="mr-2">        
              <img :src="avatar"/>
            </v-avatar>
            <span class="white--text font-weight-medium">{{ nome }}</span>         
          </div>
        </template>
        <v-list dense> 
          <v-list-tile @click="logout()">Sair</v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content class="fundo">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from '../src/components/SideBar'

export default {
  name: 'App',
  components: {
    SideBar
  },
  data () {
    return {      
      menu: false
    }
  },
  computed: {
    getNome(){      
      return this.$route.name;
    },
    nome(){
      return 'Rafael Tapia';
    },
    avatar(){
      return 'https://i.imgur.com/d0CHaWb.jpg';
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }  
}
</script>

<style>
.profile{
  cursor: pointer;  
}

.profile:hover{
  text-decoration: underline;
  color: white;
}

.fundo{
  background: linear-gradient(178deg, #5dc5ee 58%, #F6F8FC 58.2%);
}

.curvo{
  border-radius: 10px;
}
</style>

