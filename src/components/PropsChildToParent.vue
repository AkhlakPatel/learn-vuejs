<template>
    <div>
        <h2>Props parent to Child Component</h2>
        <button v-on:click="updateTitle">Click me</button>
    </div>
</template>
<script>
export default {
    name:'PropsChildToParent',
    methods:{
        updateTitle(){
            // console.log('Updated title');
            this.$emit('changeTitle','send data from child component here')
        }
    }
}
</script>