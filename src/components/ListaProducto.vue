<template>
    <div class="contenedor">
        <h1 class="titulo"> Productos en stock</h1>
        <h3 class="subtitulo">Agregar al carrito de compras</h3>

        <div class="secundario">
            <div class="column is-3" v-for="producto in productos" :key="producto.id">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="producto.main_image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            
                            <div class="media-content">
                                <p class="title is-4">{{ producto.name }}</p>
                                <p class="subtitle is-6">{{ producto.category.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content" style="padding: 10px;">
                        <button class="button is-success" @click="addItem(producto)">Agregar</button>
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
        data() {
            return {
                productos:[]
            }
        },
        computed:{
            ...mapState(useArticulosTienda,['getListaArticulos'])
        },
        methods: {
            ...mapActions(useArticulosTienda, ['addItem']),
            cargarProductos() {
                fetch("https://servicios.neunapp.com/api/tienda/productos/lista/")
                .then(
                    (response) => {
                        return response.json();
                    }
                )
                .then(
                    (data) => {
                        this.productos = data.results;
                    },
                )

            }
        },
        beforeMount() {
            this.cargarProductos();
        },  
    }
</script>

<style lang="scss" scoped>

</style>