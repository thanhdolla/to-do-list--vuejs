<template>
    <div class="wrap">
        <div v-if="check">
            <card-list></card-list>
        </div> 
        <div class="game">
            <div class="game-room">
                <router-link id="link-game" to="game">
                    <h5>Game Room</h5>
                    <img src=".././assets/g.png" style="height:50px; width:70px;">
                </router-link>
            </div>
        </div>
        <div  v-if="!check">
            <create-your-list></create-your-list>
        </div>
        <div v-if="!check">
             <circle-add @newCard="addNewCard"></circle-add>
        </div>
    </div>
</template>

<script>
    import CreateYourList from "@/components/CreateYourList";
    import CircleAdd from "@/components/CircleAdd";
    import ChildList from "@/components/ChildList";
    import CardList from "@/components/CardList";

    export default {
        name: "Home",

        components: {
            CreateYourList,
            CircleAdd,
            ChildList,
            CardList,
        },

        data() {
            return {
                check: false,
            };
        },

        methods: {
            addNewCard: function (addCard) {
                console.log(addCard);
                this.check = addCard;
                console.log(this.check);
            }
        },
    };
</script>

<style>
    .list{
        float:left;
        width:80%;
        background: rgb(247, 126, 14);
        height: 100px;
    }
    
    .game{
        width:150px;
        height:100px;
        top: 0;
        right: 0;
        margin-top:10px;
        position:absolute;
        text-align: center;
    }

    .wrap{
        width: 100%;
        margin: 0 auto;
    }

    #link-game{
        text-decoration: none;
    }

    a{
        color:white;
        font-size: 20px;
        font: bold;
    }
</style>
