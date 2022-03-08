<template>
    <div>
        <h2>This is a Child components</h2>
        <!-- <h2>{{name}}</h2> -->
        <h2 v-for="item in name" :key="item.name" >{{item.name}} - {{item.surname}}</h2>
    </div>
</template>
<script>
export default {
    name:'PropsChild',
    props:["name"]
}
</script>