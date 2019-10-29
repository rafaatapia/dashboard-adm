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
        <v-flex class="md12">
          <Pedidos7Dias :dados="pedidos7"/>
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
import UsuariosDia from '../components/Charts/UsuariosPorDia'
import CuponsPedido from '../components/Charts/CuponsPedido'
import PesquisaSatisfacao from '../components/Charts/PesquisaSatisfacao'
import InstalacaoDispositivo from '../components/Charts/InstalacaoDispositivo'
  export default {
    components: {Threads, Indicador, CuponsPedido, InstalacaoDispositivo, PesquisaSatisfacao, Pedidos7Dias, UsuariosDia},
    created() {
    },
    methods: {      
    },
    data() {
      return {
        cupons: [
          ['Label', 'Valor'],
          ['Cupom1', 20],
          ['Cupom2', 40],
          ['Cupom3', 90],
          ['Cupom4', 10],
        ],
        avaliacoes: [
          ['Label', 'Valor'],
          ['Ótimo', 50],
          ['Regular', 20],
          ['Ruim', 10]
        ],
        instalacoes: [
          ['Label', 'Valor'],
          ['Android', 50],
          ['iOS', 25]
        ],
        pedidos7: [
          ['Dias', 'Pedidos'],
          ['Out 22', 6],
          ["Out 23", 10],
          ["Out 24", 3],
          ["Out 25", 3],
          ["Out 26", 5],
          ["Out 28", 6],
          ["Out 29", 1],
        ],
        usuariosDia: [
          ['Dias', 'Usuarios'],
          ["Out 18", 95],
          ["Out 19", 93],
          ["Out 20", 20],
          ["Out 21", 92],
          ["Out 22", 35],
          ["Out 23", 44],
          ["Out 24", 21],
          ["Out 25", 26],
          ["Out 26", 109],
          ["Out 27", 23],
          ["Out 28", 56],
        ]
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
