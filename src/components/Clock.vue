<template>
    <div class="Clock">
        <h3 class="timer-title">Temporizador</h3>
        <div class="container-timer">
            <p v-if="min<10 && sec<10" class="timer-text">0{{min}} : 0{{sec}}</p>
            <p v-if="min<10 && sec>=10" class="timer-text">0{{min}} : {{sec}}</p>
            <p v-if="min>=10 && sec<10" class="timer-text">{{min}} : 0{{sec}}</p>
            <p v-if="min>=10 && sec>=10" class="timer-text">{{min}} : {{sec}}</p>
            <div class="container-min">
                <b-button v-on:click="plusMin()" variant="primary" class="button-timer">+</b-button>
                <b-button v-on:click="minusMin()" variant="primary" class="button-timer">-</b-button>
            </div>
            <div class="container-sec">
                <b-button v-on:click="plusSec()" variant="primary" class="button-timer">+</b-button>
                <b-button v-on:click="minusSec()" variant="primary" class="button-timer">-</b-button>
            </div>
        </div>
        <div class="container-buttons">
            <b-button v-on:click="playTimer()" variant="primary" class="button-clock">Empezar</b-button>
            <b-button v-on:click="stopTimer()" variant="primary" class="button-clock">Detener</b-button>
            <b-button v-on:click="resetTimer()" variant="primary" class="button-clock">Reiniciar</b-button>
        </div>
    </div>
</template>

<script>
var timer;

export default {
    data() {
        return {
            min: 0,
            sec: 0,
            estado: false
        }
    },
    methods: {
        plusMin(){
            if(this.min<60){
                this.min = this.min + 1;
            }
        },
        minusMin(){
            if(this.min>0){
                this.min = this.min - 1;
            }
        },
        plusSec(){
            if(this.sec<60){
                this.sec = this.sec + 1;
            }
        },
        minusSec(){
            if(this.sec>0){
                this.sec = this.sec - 1;
            }
        },
        playTimer() {
            if(this.estado === false){
                this.estado = true; 
                timer = setInterval(()=>{
                    if(this.sec>0){
                        this.sec = this.sec - 1;
                    }
                    else if(this.min>0){
                        this.min = this.min - 1;
                        this.sec = 59;
                    }
                    else{
                        this.estado = false;
                        clearInterval(timer);
                    } 
                }, 1000);

            }
        },
        stopTimer() {
            if(this.estado === true){
                this.estado = false;
                clearInterval(timer);
            }
        },
        resetTimer() {
            if(this.estado === true){
                this.estado = false;
                clearInterval(timer);
                this.min = 0;
                this.sec = 0;
            }
            else {
                this.min = 0;
                this.sec = 0;
            }
        }
    }
}
</script>

<style>
.Clock{
    background: white;
    width: 30%;
    margin: 40px auto;
    text-align: center;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid #2F89FC;
}

.container-min, .container-sec{
    display: inline-block;
    width: 45%;
}

.button-timer{
    width: 40%;
    margin: 5px;
    font-size: 20px;
    border-radius: 10px;
    background: #2F89FC;
    border: 0px;
    color: white;
}

.timer-title{
    font-size: 35px;
}

.timer-text{
    font-size: 50px;
    margin-bottom: 0px;
}

.container-buttons{
    width: 90%;
    margin: 0px auto;
}

.button-clock{
    width: 80%;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background: #2F89FC;
    border: 0px;
    font-size: 20px;
    color: white;
}
</style>
