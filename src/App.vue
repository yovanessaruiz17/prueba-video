<template>
  
  <div class="container">
    <nav>
    <router-link to="/">Tiendita</router-link> |
    <router-link to="/car">Carrito</router-link> |
    <router-link to="/description">Descripcion</router-link>
  </nav>
  <router-view/>
  </div>

</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
};

nav {
  padding: 30px;
}
</style>
