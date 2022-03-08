<template>
<div class="home">
  <h1>Hello World</h1>
  <!-- // props -->
  <!-- <p>{{name}} {{surname}}</p> -->

  <!-- if else condision -->
  <!-- <button v-on:click="hello('hello Everyonee')" >call function</button> -->
  <!-- <button v-on:mouseover="hello('hello Everyonee')" >call function</button> -->
  <!-- <h2 v-if="show">This is ReactJS</h2>
  <h2 v-else>This is VueJS</h2>
  <button v-on:click="display" >Toggle button</button> -->

<!-- for loopp -->
<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
    </tr>

    <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.gmail}}</td>

    </tr>
</table>
<User/>
</div>

</template>
<script>
import User from './User.vue'
export default {

  name: "Home",
  components:{
      User
  },
  props: {
    name: String,
    surname: String,
  },
    data(){
        return {
            users:[
                {id:1,name:'Akhlak',gmail:'ak@gmail.com'},
                {id:2,name:'wajid',gmail:'wajid@gmail.com'},
                {id:3,name:'ishvar',gmail:'ishvar@gmail.com'},
                {id:4,name:'auwash',gmail:'auwash@gmail.com'},
            ]
        }
    }
};
</script>

<style scoped>
div{
    background-color: aqua;
    width: 900px;
    height: 400px;
}
</style>