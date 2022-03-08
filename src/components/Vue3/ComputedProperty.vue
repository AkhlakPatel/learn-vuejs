<template>
    <div>
        <h1>Computed property vs Normal property</h1>
        <h2>Normal Property : {{(dolar * rupeeVal)- discount}}</h2>
        <h2>Computed Property : {{getResultByComputed}}</h2>
        <h2>Methods Property : {{getResultByMethods()}}</h2>

    </div>
</template>
<script>
export default {
    name:'ComputedProperty',
    data(){
        return {
            dolar : 100,
            rupeeVal : 70,
            discount : 20
        }
    },
    computed:{
        getResultByComputed(){
            return this.dolar*this.rupeeVal-this.discount
        }
    },
    methods:{
        getResultByMethods(){
            return this.dolar*this.rupeeVal-this.discount
        }
    }
    
}
</script>