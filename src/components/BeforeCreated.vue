<template>
    <h2>{{name}}</h2>
    
</template>
<script>
export default {
    name:'BeforeCreated',
    data() {
        return{
        name:'Akhlak'
        }
    },
    created(){
        console.log(' created');
    },
    beforeCreate(){
        this.name='wajid',
        console.log('before Created');
    }
}
</script>