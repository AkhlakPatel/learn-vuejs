<template>
    <div>
       <h1>{{name}}</h1>
    </div>
</template>
<script>
export default {
    name:'BeforeDestroyAndDestroyed',
    data(){
        return { name:'ak'}
    },
   
    beforeDestroy(){
        alert('before')
        console.log('BeforeDestroy');
    },
    destroyed(){
        alert('after')
        console.log('Destroyed');
    }
    }
</script>