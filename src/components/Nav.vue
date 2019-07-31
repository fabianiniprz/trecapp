<template>
  <b-navbar sticky="true" class="navbar" toggleable="lg">
    <a class="Logo" href="/">Neuro App</a>

    <b-navbar-toggle target="nav-collapse">
      <img class="menu-collapse" src="@/assets/menu.svg" width="30px">
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/signup"><b-button variant="light" class="button-nav">Registrarse</b-button></router-link>
        <router-link to="signin"><b-button variant="light" class="button-nav">Iniciar sesión</b-button></router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    
}
</script>

<style>
.navbar{
  background: #2F89FC;
}

.Logo, .text-nav{
  padding: 5px;
  color: white;
  font-family: 'Roboto', sans-serif;
}

.text-nav{
  font-size: 17px;
  margin-right: 10px;
}

.Logo{
  font-size: 25px;
}

.text-nav:hover{
  text-decoration: none;
  color: #2F89FC;
}

.Logo:hover{
  text-decoration: none;
  color: white;
}

.button-nav{
  color: #2F89FC;
  background: white;
  border: #2F89FC 2px solid;
  border-radius: 5px;
  margin: 0px 5px;
  padding: 5px 25px;
  font-size: 17px;
}

.menu-collapse{
  color: #2F89FC;
}
</style>
