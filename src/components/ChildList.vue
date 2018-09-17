<template>
    <div>
        <h2>{{ message }}</h2>
        <button @click="show"></button>
    </div>        
</template>

<script>
    export default {
        data: {
            message: "this is message"
        },

        methods: {
            show: function () {
                alert(this.message);
            }
        }
    };
</script>