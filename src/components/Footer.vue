<template>
    <footer class="footer">
        <div class="container-info-footer">
            <h3 class="text-info-footer">Accede para conocer más de la TREC y comenzar a practicarla.</h3>
            <router-link to="/signup"><button class="button-footer">Registrarse</button></router-link>
            <router-link to="/signin"><button class="button-footer">Iniciar sesión</button></router-link>
        </div>
        <div class="container-footer-menu">
            <div class="footer-column">
                <h3>Sobre nosotros</h3>
                <ul class="ul-footer">
                    <li>Investigación</li>
                    <li>Equipo</li>
                    <li>Contáctanos</li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Términos y privacidad</h3>
                <ul class="ul-footer">
                    <li>Términos</li>
                    <li>Privacidad</li>
                </ul>
            </div>
        </div>
        <p class="text-footer">@2019 - Neuro APP</p>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    background: #273036;
    padding: 20px;
}

.button-footer{
    width: 20%;
    padding: 15px;
    background: #2F89FC;
    border: 0px; 
    border-radius: 5px;
    color: white;
    font-size: 15px;
    margin: 10px;
}

.container-info-footer{
    text-align: center;
    margin: 20px 0px;
}

.text-info-footer{
    color: white;
}

.text-footer{
    text-align: end;
    color: white;
}

.container-footer-menu{
    width: 80%;
    margin: 0px auto;
    display: flex;
    justify-content: center;

}

.footer-column{
    margin: 10px 40px;
    color: white;
}

.ul-footer{
    list-style: none;
}
</style>
