<template>
  <div>
    <h2>Delete data from api</h2>
    <table border="2">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Profession</th>
        <th>Delete</th>
      </tr>
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.profession}}</td>
        <td><button v-on:click="handleDelete(user.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios)
export default {
  data() {  
    return {
      users: "",
    };
  },
  methods:{
      getUsers(){
           this.axios.get('http://localhost:3000/posts').then((res)=>{
            this.users = res.data
         console.log(this.users);
     })
      },
      handleDelete(index){
          this.axios.delete('http://localhost:3000/posts/'+index).then(()=>{
           this.getUsers();
          })
      }
  },
 
  mounted(){
    this.getUsers()
  }

};
</script>