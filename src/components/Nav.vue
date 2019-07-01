<template>
  <b-navbar class="navbar" toggleable="lg">
    <a class="Logo" href="/">TREC APP</a>

    <b-navbar-toggle target="nav-collapse">
      <img src="@/assets/menu.svg" width="30px">
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">   
        <a class="text-nav" href="#TREC">TREC</a>
        <button class="button-nav">Registrarse</button>
        <button class="button-nav">Iniciar sesión</button>
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
}

.text-nav{
  font-size: 17px;
  margin-right: 10px;
}

.Logo{
  font-size: 25px;
}


.Logo:hover, .text-nav:hover{
  text-decoration: none;
  color: white;
}

.button-nav{
  color: #2F89FC;
  background: white;
  border: #2F89FC 2px solid;
  border-radius: 15px;
  margin: 0px 5px;
  padding: 5px 25px;
  font-size: 17px;
}
</style>
