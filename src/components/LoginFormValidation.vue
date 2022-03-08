<template>
<div>
    <!-- <p v-if="err.length"></p>
    <div>
        <h2>Please correct the following error</h2>
    </div>
        -->
     <p v-for="i in err" :key="i" >{{i}}</p>
           
        
    
  <form @submit="handleSubmit">
    <h2>Form Validation</h2>
    <input type="text" placeholder="Enter name" v-model="name" /><br>   
    {{err.name}}<br>
    <input type="password" placeholder="Enter password" v-model="password" /><br>
    {{err.password}}
    <br>
    <input type="password" placeholder="Enter confirm password" v-model="cpassword"><br>
    {{err.cpassword}}<br>
    <button>Login</button>
  </form>
</div>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
      handleSubmit(e){
          e.preventDefault();
          this.err = []
          if(this.name && this.password){
              console.log('No Error');
          }
           if(!this.name){
            //   this.err.push('Name Required* ')
            this.err.name = 'Name is Required*'
          }
          if (!this.password){
            //   this.err.push('Password required*')
            this.err.password  = 'Password is Required*'
          }
          if (!this.cpassword){
              this.err.cpassword = 'Confirm password is required*'
          }
          else if(this.password != this.cpassword){
              this.err.cpassword = 'Password do not match*'
          }
          console.log(this.err);
      }
  },
  data(){
      return {
          name:null,
          password:null,
          cpassword:null,
          err:[]
      }
  }
};
</script>