<template>
    <div>
        <h3>Count is <span>{{counterValue}}</span></h3>
    </div>
</template>
<style>
    span{
        color:red;
    }
</style>

<script>
    export default{
        vuex:{
            getters:{
                counterValue:state=>state.count
            }
        },
    }
</script>
