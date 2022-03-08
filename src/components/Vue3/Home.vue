<template>
<div>
<teleport to="#footer"><h2>hii</h2></teleport>
  <Footer/>
</div>
</template>

<script>
import Footer from './Teleport.vue'
export default {
  name: "Home",
  components: {
    Footer

  },
};
</script>