<template>
    <div>
        <h2>Post data from api</h2>
        <form  @submit="handleSubmit" method="post">
            <input type="text" placeholder="Enter name" v-model="posts.name"><br><br>
            <input type="text" placeholder="Enter profession" v-model="posts.profession"> <br><br>
            <button>Submit</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios'
import Axios from 'axios'
Vue.use(VueAxios,Axios)
export default {
    name:'POST',
    data(){
        return {
            posts:{
                name:'',
                profession:''
            }
        }
    },
    methods:{
        handleSubmit(e){
            e.preventDefault();
            Axios.post('http://localhost:3000/posts',this.posts).then((resp)=>{
                console.log(resp)
            })
        }
    }
}
</script>