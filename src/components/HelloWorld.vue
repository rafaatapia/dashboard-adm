<template>
<div>  
    <Indicador/>
    <Threads/>
    <v-container grid-list-lg>      
      <v-layout row wrap>
        <v-flex xs11>                
          <span class="subheading pr-1 font-weight-bold black--text">Gráficos</span>                                          
          <v-spacer></v-spacer>                
        </v-flex>
        <v-flex class="md4">
          <CuponsPedido :dados="cupons"/>
        </v-flex>
        <v-flex class="md4">
          <PesquisaSatisfacao :dados="avaliacoes"/>
        </v-flex>
        <v-flex class="md4">
          <InstalacaoDispositivo :dados="instalacoes"/>
        </v-flex>
        <v-flex class="md6">
          <Pedidos7Dias :dados="pedidos7"/>
        </v-flex>
        <v-flex class="md6">
          <UsuariosHora :dados="usuariosHora"/>
        </v-flex>
        <v-flex class="md12">
          <UsuariosDia :dados="usuariosDia"/>
        </v-flex>
      </v-layout>
    </v-container>
</div>
</template>

<script>
import Threads from '../components/Monitoramento/monitorThreads'
import Indicador from '../components/Indicadores/Indicador'
import Pedidos7Dias from '../components/Charts/Pedido7Dias'
import UsuariosHora from '../components/Charts/UsuarioPorHora'
import UsuariosDia from '../components/Charts/UsuariosPorDia'
import CuponsPedido from '../components/Charts/CuponsPedido'
import PesquisaSatisfacao from '../components/Charts/PesquisaSatisfacao'
import InstalacaoDispositivo from '../components/Charts/InstalacaoDispositivo'
  export default {
    components: {Threads, Indicador, CuponsPedido, InstalacaoDispositivo, PesquisaSatisfacao, Pedidos7Dias, UsuariosHora, UsuariosDia},
    created() {
    },
    methods: {      
    },
    data() {
      return {
        cupons: [],
        avaliacoes: [],
        instalacoes: [],
        pedidos7: [],
        usuariosHora: [],
        usuariosDia: []
      }
    }
  }
</script>

<style>
.w {
  background: white;
}

.indicador{
  width: 180px;
  height: 95px;
  border-radius: 8px
}

.icone {  
  left: 100%;
}

</style>
