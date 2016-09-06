<template>
    <div>
        <button @click='increment'>Increment +1</button>
        <button @click='reduce'>Reduce -1</button>
    </div>
</template>
<style>
    button{
        border:0px;
        background-color: cadetblue;
        color:white;
    }
    button:hover{
        background-color: brown;
        color:white;
    }
</style>
<script>
    import {incrementCounter,reduceCounter} from "../vuex/actions";
    export default{
        vuex:{
            actions:{
                increment:incrementCounter,
                reduce:reduceCounter
            }
        }
    }
</script>
