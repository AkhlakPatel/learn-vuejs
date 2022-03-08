<template>
    <div>
        <h2>User Page</h2>
        <h1>USer Id is : {{userId}}</h1>
    </div>
</template>

<script>
export default {
    name:'User',
    data(){
        return { userId : this.$route.params.id}
    }
}
</script>