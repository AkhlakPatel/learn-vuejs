<template>
    <div>
        <h2>{{name | Ucase }}</h2>
        <h2>{{surname | Lcase }}</h2>
        <h2>{{price | Cconvert }}</h2>
    </div>
</template>
<script>

export default {
    name:'FilterComponent',
    data(){
        return {
            name:'akhlak',
            surname :'PAtEl',
            price:100
        }
    }
}
</script>