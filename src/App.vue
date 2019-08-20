<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: {
        Nav
    }  
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
} 
</style>
