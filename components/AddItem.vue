<template>
    <div>
        <form>
            <input type="text" v-model="inputText" placeholder="输入待做事项">
            <button type="submit" @click.prevent='addItem(this.inputText)'>Add Item</button>
        </form>
    </div>
</template>
<style>
    button{
        border:0px;
        background-color: cadetblue;
        color:white;
        width:100px;
        height:50px;
        font-size:16px;
        cursor:pointer;
    }
    button:hover{
        background-color: darkcyan;
        color:white;
    }
</style>
<script>
    import {addItem} from "../vuex/actions";
    export default{
        data(){
            return {
                inputText:""
            }
        },
        vuex:{
            actions:{
                addItem:addItem,
            }
        }
    }
</script>
