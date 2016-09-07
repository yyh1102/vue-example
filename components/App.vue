<template>
    <div>
        <p class="todoTitle">{{msg}}</p>
        <Add-item></Add-item>
        <Display></Display>
    </div>
</template>
<style>
    .todoTitle{
        color:cadetblue;
        font-size:18px;
    }
</style>
<script>
    import store from "../vuex/store";
    import AddItem from "./AddItem.vue";
    import Display from "./Display.vue";
    export default{
        data(){
            return{
                msg:'todoList'
            }
        },
        components:{
            Display,
            AddItem
        },
        store
    }
</script>
