<template>
    <div class="Daily">
        <div v-if="level[0] === 1" class="container-emotions">
            <h3 class="title-emotions">¿Cómo te sientes hoy?</h3>
            <div id="Happy" v-on:click="chooseEmotions('Happy')" class="background-happy">
                <img src="@/assets/emotions/Recurso 1.svg" width="150px">
                <h3>Feliz</h3>
            </div>
            <div id="Sad" v-on:click="chooseEmotions('Sad')" class="background-sad">
                <img src="@/assets/emotions/Recurso 3.svg" width="115px">
                <h3>Triste</h3>
            </div>
            <div id="Bored" v-on:click="chooseEmotions('Bored')" class="background-bored">
                <img src="@/assets/emotions/Recurso 5.svg" width="120px">
                <h3>Aburrido</h3>
            </div>
            <div id="Anxiety" v-on:click="chooseEmotions('Anxiety')" class="background-anxiety">
                <img src="@/assets/emotions/Recurso 6.svg" width="115px">
                <h3>Ansioso </h3>
            </div>
            <div id="Angry" v-on:click="chooseEmotions('Angry')" class="background-angry">
                <img src="@/assets/emotions/Recurso 4.svg" width="150px">
                <h3>Enojado</h3>
            </div>
        </div>
        <div v-if="level[1] === 1" class="container-emotions">
            <h3 class="title-emotions">¿Qué fue lo que te pasó hoy?</h3>
            <textarea class="input-emotions" cols="100" rows="3"  maxlength="250" type="text"></textarea>
        </div>
        <div v-if="level[2] === 1" class="container-emotions">
            <h3>Otro</h3>
        </div>
        <hr />
        <div class="buttons-debate">
            <b-button v-on:click="levelDown()" variant="primary" class="button-left">Atrás</b-button>
            <b-button v-on:click="levelUp()" variant="primary" class="button-right">Siguiente</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            emotions: "Ninguno",
            level: [1,0,0]
        }
    },
    methods:{
        hello() {
            alert("Hola mundo");
        },
        chooseEmotions(emocion) {

            if(this.emotions != "Ninguno"){
                var emotion = document.getElementById(this.emotions);
                emotion.style.border = "0px";
                this.emotions = emocion;
                emotion = document.getElementById(emocion);
                emotion.style.border = "3px solid green"; 
            }else {
                this.emotions = emocion;
                emotion = document.getElementById(emocion);
                emotion.style.border = "3px solid green";  
            }
        },
        levelUp() {
            if(this.level[0] === 1){
                if(this.emotions != "Ninguno"){
                    this.level = [0,1,0];
                    this.emotions = "Ninguno";
                }
            }
            else if(this.level[1] === 1){
                this.level = [0,0,1];
            }
            else if(this.level[2] === 1){
                this.level = [1,0,0];
            }
        },
        levelDown() {
            if(this.level[1] === 1){
                this.level = [1,0,0];
            }
            else if(this.level[2] === 1){
                this.level = [0,1,0];
            }
        }
    }
}
</script>

<style>
.Daily{
    text-align: center;
}

.background-happy, .background-sad, .background-angry, .background-bored, .background-anxiety{
    border-radius: 10px;
    padding: 30px;
    display: inline-block;
    margin: 20px 10px;
}

.background-happy{
    background: #ffffba;
}

.background-sad{
    background: #bae1ff;
}

.background-angry{
    background: #ffb3ba;
}

.background-bored{
    background: #baffc9;
}

.background-anxiety{
    background:	#ffdfba;
}

.background-happy:hover, .background-sad:hover, .background-angry:hover, .background-bored:hover, .background-anxiety:hover{
    cursor: pointer;
}

.container-emotions{
    margin: 50px 0px;
}

.title-emotions{
    font-size: 40px;
    margin: 20px;
}

.buttons-debate{
    margin: 30px 40px;
}

.button-left{
    float: left;
    padding: 5px 20px;
    font-size: 20px;
}

.button-right{
    float: right;
    padding: 5px 20px;
    font-size: 20px;
}

.input-emotions{
    border-radius: 10px;
    font-size: 16px;
    padding: 10px;
}
</style>
