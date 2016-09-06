<template>
    <div>
        <p>{{msg}}</p>
        <Display></Display>
        <Increment></Increment>
    </div>
</template>

<script>
    import store from "../vuex/store";
    import Increment from "./Increment.vue";
    import Display from "./Display.vue";
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            Display,
            Increment
        },
        store
    }
</script>
