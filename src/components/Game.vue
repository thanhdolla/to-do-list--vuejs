<template>
    <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-4">
            <h1 class="text-center">YOU</h1>
            <img src=".././assets/you.jpg" style="height:300px; width:300px;">
            <div class="hp">
                <div class="hp text-center" :style="{width: youHp + '%'}">
                </div>
                {{ youHp }}
            </div>
        </div>
        <div class="col-md-4">
            <h1 class="text-center">MONSTER</h1>
            <img src=".././assets/monster.jpg" style="height:300px; width:300px;">
            <div class="hp">
                <div class="hp text-center" :style="{width: monsterHp/3 + '%'}">
                </div>
                {{ monsterHp }}
            </div>
        </div>
        <div class="col-md-2">
        </div>
        <div class="select">
            <div class="option">
                <div v-if="!isRunning">
                    <div class="pull start">
                        <button class="btn btn-success" id="start" @click="start">New Game</button>
                    </div>
                    <div class="pull" >
                        <button class="btn btn-default" id="stop">
                            <router-link to="/" id="back">Quit</router-link>
                        </button>
                    </div>
                </div>
                <div class="running" v-if="isRunning">
                    <div class="pull"  v-on:click="attach">
                        <button class="btn btn-warning" id="attach">Attach</button>
                    </div>
                    <div class="pull" v-if="skillUse < 3">
                        <button class="btn btn-info" id="attach-special" @click="skill">Special Skill</button>
                    </div>
                    <div class="pull" v-if="healUse < 3"  @click="heal">
                        <button class="btn btn-success" id="heal">+ Heal</button>
                    </div>
                    <div class="pull">
                        <button class="btn btn-default" id="stop">
                            <router-link to="/" id="back">Quit</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
        name: 'Game',

        data() {
            return {
                isRunning: false,
                monsterHp: 300,
                youHp: 100,
                skillUse: 0,
                healUse: 0,
            };
        },

        methods: {
            start: function() {
                this.isRunning = true;
                this.monsterHp = 300;
                this.youHp = 100;
                this.healUse = 0;
                this.skillUse = 0;
            },

            randomNumber: function(min, max) {
                return Math.floor(Math.random() * (max -min +1)) + min;
            },

            attach: function() {         
                if(this.checkContinue()){
                    return false;
                };

                let damageYou = this.randomNumber(5, 10);
                this.youHp = this.youHp - damageYou;
                if(this.youHp < 0){
                    this.youHp =0
                }
                
                //monster
                let damageMonster = this.randomNumber(7, 15);
                this.monsterHp = this.monsterHp - damageMonster;
                if(this.monsterHp < 0){
                    this.monsterHp =0
                }
            },
            
            checkContinue: function() {
                if(this.youHp <= 0){
                    if(confirm("You Lose! Do you want to start new game ?")){
                        this.start();
                    }else{
                        this.isRunning =false;
                    }

                    return true;
                } else if(this.monsterHp <= 0){
                    if(confirm("You ! Do you want to start new game ?")){
                        this.start();
                    }else{
                       this.isRunning =false;
                    }

                    return true;
                }

                return false;
            },

            skill: function() {
                this.monsterHp -= 30;
                this.skillUse ++;
                if(this.monsterHp <= 0){
                    this.monsterHp =0;
                }
            },

            heal: function() {
                if(this.youHp >= 70 ){
                    return false;
                }

                this.youHp += 20;
                this.healUse ++;
                if(this.youHp >= 100){
                    this.youHp = 100;
                }
            },

            stop: function() {
                this.isRunning = false;
            }
        },
    }
</script>

<style>
    .col-md-4 {
        text-align: center;
        background: white;
        height: 420px;
        margin-top: 50px;
    }
    
    .pull{
        display: inline;
    }

    .select {
        margin-top: 50px;
        background: white;
        height: 100px;
        width: 66.666666%;
        margin: auto;
        border: 1px solid whitesmoke;
    }

    .option{
        margin-top: 20px;
        text-align: center;
    }

    .hp .text-center {
        width: 300px;
        height: 40px;
        text-align: center;
        background-color: Red;
        margin: 0;
    }

    .hp {
        text-align: left;
        margin: auto;
        width: 280px;
    }

    #stop{
        width:100px;
    }

    #back{
        text-decoration: none;
    }
</style>


