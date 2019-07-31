<template>
    <div>
        <Nav />
        <div class="container-signup">
            <form class="form" action="">
                <h3 class="title-form">Inicia sesión</h3>
                <input class="input-signup" type="email" placeholder="Correo electrónico">
                <input class="input-signup" type="password" placeholder="Contraseña"> 
                <button class="button-form margin-button">Iniciar sesión</button>
                <hr />
                <p class="text-form">¿No tienes cuenta?</p>
                <router-link to="/signup"><button class="button-form">Registrarse</button></router-link>
            </form>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
    components: {
        Nav
    }
}
</script>

<style>
.container-signup{
    width: 30%;
    padding: 20px;
    margin: 40px auto;
    border: #273036 1px solid; 
}

.form{
    width: 90%;
    margin: 10px auto;
}

.input-signup{
    padding: 18px;
    border-radius: 5px;
    border: #273036 1px solid; 
    width: 100%;
    margin: 10px 0px;
}

.button-form{
    width: 100%;
    padding: 15px;
    background: #2F89FC;
    border: 0px; 
    border-radius: 5px;
    color: white;
    font-size: 15px;
}

.text-form{ 
    text-align: center;
    font-size: 15px;
}

.margin-button{
    margin: 20px 0px;
}

.title-form{
    text-align: center;
    margin: 10px 0px;
}
</style>
