<template>
  <div class="main">
    <h2>SignUp Validation</h2>

    <form @submit="handleSubmit">
      <input
        type="text"
        placeholder="Enter first name"
        class="inputField"
        v-model="firstname"
      />
      <p class="err">{{ this.err.firstname }}</p>
      <input
        type="text"
        placeholder="Enter last name"
        class="inputField"
        v-model="lastname"
      />
      <p class="err">{{ this.err.lastname }}</p>
      <input
        type="text"
        placeholder="Enter username"
        class="inputField"
        v-model="username"
      />
      <p class="err">{{ this.err.username }}</p>
      <input
        type="password"
        placeholder="Enter password"
        class="inputField"
        v-model="password"
      />
      <br />
      <p class="err">{{ this.err.password }}</p>
      <input
        type="email"
        placeholder="Enter email    "
        class="inputField"
        v-model="email"
      />
      <br />
      <p class="err">{{ this.err.email }}</p>
      <input
        type="date"
        placeholder="Enter date of birth"
        class="inputField"
        v-model="dob"
      /><br />
      <p class="err">{{ this.err.dob }} <br /></p>
      <label for="" class="inputField">Your Skills : </label><br />
      <input type="checkbox" value="react" v-model="skills" />React
      <input type="checkbox" value="angular" v-model="skills" />Angular
      <input type="checkbox" value="vue" v-model="skills" />Vue <br />
      <p class="err">{{ this.err.skills }} <br /></p>
      <label for="" class="inputField">Gender</label>
      <input type="radio" name="gender" value="male" v-model="gender" />Male
      <input type="radio" name="gender" value="female" v-model="gender" />Female
      <input type="radio" name="gender" value="other" v-model="gender" />Other
      <br />
      <label for="" class="inputField">Select City</label>
      <select name="city" v-model="city" class="inputField">
        <option value="">Choose your city</option>
        <option value="ujn">Ujjain</option>
        <option value="dws">Dewas</option>
        <option value="ind">Indore</option></select
      ><br />
      <p class="err">{{ this.err.city }}<br /></p>
      <label for="" class="inputField">Your Query</label><br />
      <textarea name="" id="" cols="30" rows="2" v-model="textarea"></textarea>
      <button class="btn">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpValidation",
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      skills: [],
      gender: "male",
      city: "",
      dob: "",
      textarea: "",
      err: [],
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.err = [];
      console.log("Skills", this.err.skills);
      // Validation field
      if (!this.firstname) {
        this.err.firstname = "Firstname is required*";
      }
      if (!this.lastname) {
        this.err.lastname = "Lastname is required*";
      }
      if (!this.username) {
        this.err.username = "Username is required*";
      }
      if (!this.password) {
        this.err.password = "Password is required*";
      }
      if (!this.email) {
        this.err.email = "Email is required*";
      }
      if (this.skills.length == 0) {
        this.err.skills = "Select atleast 1 skills*";
      }
      if (!this.gender) {
        this.err.gender = "Gender is required*";
      }
      if (!this.city) {
        this.err.city = "City is required*";
      }
      if (!this.dob) {
        this.err.dob = "Date of birth is required*";
      }
      if (
        this.firstname &&
        this.lastname &&
        this.username &&
        this.password &&
        this.email &&
        this.skills &&
        this.gender &&
        this.city &&
        this.dob
      ) {
        alert(
          `Thank you, ${this.firstname} ${this.lastname} your accound is created`
        );
      }
    },
  },
};
</script>

<style scoped>
.inputField {
  width: 250px;
  height: 25px;
  border-radius: 0px;
  font-weight: bold;
  margin: 5px;
}
.btn {
  display: block;
  width: 70px;
  margin: auto;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
.main {
  background-color: #39bbbb;
  width: 338px;
  display: block;
  margin: auto;
  padding: 1px;
  border-radius: 12px;
  border: 2px solid black;
}
.err {
  color: red;
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  border: 1 px solid red;
}
</style>