<template>
    <div id="app">
        <router-view>

        </router-view>
    </div>
</template>

<script>

    import Home from "@/components/Home";
    import CreateYourList from "@/components/CreateYourList";
    import CircleAdd from "@/components/CircleAdd";

    export default {
        name: "App"
    };
</script>

<style>
    #app {
        display: block;
        background-color: #fff;
        position: absolute;
        width: 100%;
        height: 100%;
        /* min-height:600px; */
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background: linear-gradient(to right, rgb(76, 0, 255), rgb(0, 219, 222));
        background-image: linear-gradient(
                to right,
                rgb(135, 140, 175),
                rgb(0, 219, 222)
        );
        background-position-x: initial;
        background-position-y: initial;
        background-size: initial;
        background-repeat-x: initial;
        background-repeat-y: initial;
        background-attachment: initial;
        background-origin: initial;
        background-clip: initial;
        background-color: initial;
    }
</style>

