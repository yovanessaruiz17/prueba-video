<template>
    <div>
        <h1 class="titulo">Descripcion de Producto</h1>
        <div class="card" v-for="producto in getListaArticulos" :key="producto.id">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="producto.main_image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {useArticulosTienda} from '@/stores/ArticulosTienda.js'
    import {mapState} from 'pinia'
    export default {
        computed:{
            ...mapState(useArticulosTienda,['getListaArticulos'])
        },
    }
</script>

<style lang="scss" scoped>

</style>