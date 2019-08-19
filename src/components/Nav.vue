<template>
  <b-navbar sticky type="dark" variant="primary" toggleable="lg">
    <div class="container">
      <router-link class="Logo" to="/">Neuro App</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link class="text-nav" to="/signup">Comienza</router-link>
          <router-link class="text-nav" to="signin">Acceder</router-link>
        </b-navbar-nav>
      </b-collapse>
    </div>
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
  color: white;
}

.Logo:hover{
  text-decoration: none;
  color: white;
}
</style>
