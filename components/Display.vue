<template>
    <div>
        <ul>
            <li class="item"
                v-for="item in list"
                track-by="$index"
                @click="deleteItem($index)"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>
<style>
    ul{
        list-style-type: none;
    }
    .item{
        font-size:16px;
        color:chocolate;
    }
</style>

<script>
    import {deleteItem} from "../vuex/actions";
    export default{
        vuex:{
            getters:{
                list:state=>state.list
            },
            actions:{
                deleteItem:deleteItem
            }
        },
    }
</script>
