<template>
<div>
    <h2>This is DataBinding</h2>
    <h2 style="white-space:pre-line">{{message}}</h2>
    <textarea type="text" v-model="message" />
</div>
</template>

<script>
export default {
    name:'DataBind',
    data(){
        return {
            message:'hii'
        }
    }
}
</script>