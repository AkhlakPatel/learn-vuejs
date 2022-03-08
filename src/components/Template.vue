<template>
  <div>
    <p v-html="rowHTML"></p>
    <h2 v-once>{{ name }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{a+b}}</h2>
    <h2>{{ok ? 'yes' : 'No'}}</h2>
    <button v-bind:disabled='disableBTN' v-on:click='changeName()'>Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Template",
  data() {
    return {
      name: "Akhlak",
      a : 12,
      b : 23,
      ok:false,
      rowHTML:'<h1>Your name is</h1',
      disableBTN:false
    };
  },
  methods:{
      changeName(){
          this.name = 'AAwesh'
          this.ok = !this.ok
      }
  },
};
</script>