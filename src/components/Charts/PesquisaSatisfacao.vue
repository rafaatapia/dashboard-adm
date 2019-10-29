<template>
    <v-card class="white elevation-8 mb-4 pa-2 card">
        <v-card-title><span class="grey--text body-1">Pesquisa de satisfação</span></v-card-title>
        <GChart
            type="PieChart"
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
