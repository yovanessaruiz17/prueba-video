<template>
    <div>
        <h1 class="titulo">Productos Seleccionados</h1>
        <div class="card" v-for="producto in getListaArticulos" :key="producto.id">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img :src="producto.main_image" >
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ producto.name }}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                    <button class="button is-success" @click="clearItem(producto)">Eliminar</button>
                </div>
                </div>
            </div>
</div>
    </div>
</template>

<script>
    import {useArticulosTienda} from '@/stores/ArticulosTienda.js'
    import {mapState, mapActions} from 'pinia'
    export default {
        
        computed:{
            ...mapState(useArticulosTienda,['getListaArticulos'])
            
        },
        methods: {
            ...mapActions(useArticulosTienda, ['clearItem']),
            ...mapActions(useArticulosTienda, ['MantenerItem']),
            
        },
    }
</script>

<style lang="scss" scoped>

</style>