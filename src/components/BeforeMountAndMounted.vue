<template>
    <div>
        <h1>Before Mounte and Mounted</h1>
        <p id="demo">{{name}}</p>
    </div>
</template>
<script>
export default {
    name:'BeforeMountAndMounted',
    data(){
        return {
            name:'Akhlak patel'
        }
    },
    beforeMount(){
        console.log('Before Mount',this.$el);
        console.log('get element',document.getElementById('demo'));
    },
    mounted(){
        console.log(' Mounted',this.$el);
        console.log(' Mounted',document.getElementById('demo'));
    }
}
</script>