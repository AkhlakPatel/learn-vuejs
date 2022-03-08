<template>
    <div>
        <h1>SignUp Form</h1>
        <label for="username">Username</label>
        <input type="text" placeholder="Enter username" id="username"  v-model='signup.username'><br><br>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter password" id="password" v-model="signup.password" ><br> <br>

        <p>Choose your hobbies</p>
        <label for="cricket">Cricket</label>
        <input type="checkbox" id="cricket" value="cricket" v-model="signup.hobbies" > <br>

        <label for="footbal">Footbal</label>
        <input type="checkbox" id="footbal" value="footbal" v-model="signup.hobbies" > <br>

        <label for="pubg">Pubg</label>
        <input type="checkbox" id="pubg" value="pubg" v-model="signup.hobbies"> <br><br>

        <p>Choose your gender</p>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" v-model="signup.gender" >
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" v-model="signup.gender">
        <label for="other">Other</label>
        <input type="radio" id="other" name="gender" value="other" v-model="signup.gender">
        <br><br>

        <label for="dob">DOB </label>
        <input type="date" v-model="signup.dob"><br><br>

        <label for="city">Select your city</label>
        <select name="city" id="city" v-model="signup.city">
            <option value="Ujjain">Ujjan</option>
            <option value="Indore">Indore</option>
            <option value="Dewas">Dewas</option>
        </select><br><br>
        <label for="textarea">Your query</label><br>
        <textarea name="textaria" id="textaria"  v-model="signup.textarea"></textarea>
        <br><br>
        <button v-on:click="signupForm" >Sign Up</button>
    </div>
</template>
<script>
export default {
    name:'SignUpForm',
    data(){
        return {
            signup:{
                username:'',
                password:null,
                hobbies:[],
                gender:null,
                dob:null,
                city:null,
                textarea:null
            }
        }
    },
    methods:{
        signupForm(){
            console.log(this.signup);
            console.log(this.signup.textarea);
        }
    }
}
</script>