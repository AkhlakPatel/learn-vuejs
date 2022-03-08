<template>
    <div>
        <h2>Fetch data from axios API</h2>
        <h1>Employee list</h1>
        <table border="1"  class="table">
            <tr>
                <th>Id</th>
                <th>Title</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <th>{{item.id}}</th>
                <th>{{item.title}}</th>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios'
import Axios from 'axios'
Vue.use(VueAxios,Axios)
export default {
    name:'FetchDataFromAxios',
    data(){
        return {
            list:''
        }
    },
    mounted(){
        Axios.get('https://jsonplaceholder.typicode.com/todos').then((resp)=>{
            console.log(resp.data);
            this.list = resp.data;
        })
    }
}
</script>

<style scoped>
.table{
   /* margin-left: 22%; */
}
</style>