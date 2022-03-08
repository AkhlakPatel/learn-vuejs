<template>
    <div>
        <h1 v-bind="$attrs">Akhlak</h1>
        <h1>Wajid</h1>
        <h1>Ishvar</h1>
        <h1>{{data}}</h1>
    </div>
</template>

<script>
export default {
    name:'NonProps',
    inheritAttrs:false,
    props:{
        data:String,
    }
}
</script>