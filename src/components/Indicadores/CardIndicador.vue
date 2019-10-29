<template>
    <v-card class="white elevation-8 pl-3 pa-2 card">
                    <span class="grey--text body-1">{{ titulo }}</span>
                    <v-flex right class="pt-4">
                        <v-avatar size="55" :color=color>
                            <v-icon medium color="white">{{ icone }}</v-icon>
                        </v-avatar>
                    </v-flex>
                    <p class="display-1 pt-4 text-lg-center">{{ valor }}</p>                    
    </v-card>
</template>

<script>
export default {
    props: {
        titulo: String,
        icone: String,
        valor: Number,
        color: String,
    }
}
</script>

<style>
.card {
    border-radius: 7px;
}
</style>
