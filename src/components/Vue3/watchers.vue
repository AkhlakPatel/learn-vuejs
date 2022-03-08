<template>
    <div>
        <h1>Watchers</h1>
        <h2>{{count}}</h2>
        <button v-on:click="count=count+1"> + </button>
        <button v-on:click="count=count-1"> - </button>
    </div>
</template>
<script>
export default {
    name:'watchers',
    data() {
        return {
            count:0
        }
    },
    watch:{
        count(cur){
            // if(cur > 5 && cur>pre)
            // alert('Value changed')
            if(cur>5 )  this.count=0 
        }
    }
}
</script>