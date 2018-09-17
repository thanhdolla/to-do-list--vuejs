<template>
    <div id="add">
      <div class="circle">
        <div id="addcart">
            <img @click="newCard" src=".././assets/plus.jpeg" height="70px" width="70px"/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                addCard: false,
            };
        },

        methods: {
            newCard: function () {
                this.addCard = true;
                // console.log(this.addCard);
                this.$emit('newCard', this.addCard)
            }
        }
    }
</script>

<style>
#add {
    position: fixed;
    bottom: 5px;
    right: 5px;
    width: 100px;
    height: 100px;
}
.circle {
    background: white;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    /* background-color: rgb(44, 108, 128); */
    position: relative;
}

#addcart {
    position: absolute;
    margin: 16%;
    width: 60px;
    height: 60px
}
</style>
