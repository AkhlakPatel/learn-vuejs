<template>
    <div>
    <h2 class="homeStyle"> class and style bindind</h2>
    <h2 v-bind:style="{color:'blue'}">style binding</h2>
    <h2 v-bind:class="{display:show,displayColor:show}">class binding with object </h2>
    <h2 v-bind:class="[ac]">class binding with array</h2>
    <h2 v-bind:class="[show ? 'YesShow' : 'NoShow']">class binding with array</h2>
    </div>
</template>

<script>
export default {
    name:'ClassStyle',
    data(){
        return{
            show:true,
            ac:'arrayClass'
        }
    }
}
</script>

<style scoped>
.homeStyle{
    color: chocolate;
}
.display{
    background-color:red;
    }
.arrayClass{
    background-color: cyan;
}
</style>
