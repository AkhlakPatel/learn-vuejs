<template>
    <div>
        <slot name="header"><h1>Vivo</h1></slot>
        <slot name="main">Default</slot>
        <slot name="footer">Default</slot>
    </div>
</template>
<script>
export default {
    name:'Slots'
}
</script>