<template>
    <div>
        <Nav />
        <Inicio />
        <Footer />
    </div>
</template>


<script>
import Inicio from "@/components/Inicio.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: 'Main',
    components: {
        Inicio,
        Nav,
        Footer
    }    
}
</script>


<style>

</style>
