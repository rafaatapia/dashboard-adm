<template>
    <v-card class="white elevation-8 mb-4 pa-2 card">
        <v-card-title><span class="grey--text body-1">Usuários por dia</span></v-card-title>          
            <GChart
               type="LineChart"
               :data="dados"/>              
    </v-card>
</template>

<script>
export default {
    props: ['dados'],
}
</script>

<style>

</style>
