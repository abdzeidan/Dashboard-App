<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <el-card class="box-card">
      <!-- Form Begins Here. -->
      <el-form :model="form" :rules="rules" ref="form">
        <!-- Username is Here. -->
        <el-form-item label="Your Name" prop="yourName" id="userName">
          <el-input placeholder="Your Name (Max. 50 Word Limit.)" v-model="form.yourName"></el-input>
        </el-form-item>

        <!-- E-mail is Here. -->
        <el-form-item label="E-mail" prop="email" id="email">
          <el-input placeholder="Your E-mail" v-model="form.email"></el-input>
        </el-form-item>

        <!-- Password is Here. -->
        <el-form-item label="Password" prop="pass" id="pass">
          <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <!-- Submit Button is Here. -->
      <el-button type="primary" @click="submitForm('form')">Submit</el-button>
    </el-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        yourName: null,
        email: null,
        pass: null
      },

      rules: {
        yourName: [
          {
            required: true,
            message: "Please type your First Name.",
            trigger: "blur"
          }
        ],

        email: [
          {
            required: true,
            message: "Please type your E-mail Address.",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please type your correct E-mail Address.",
            trigger: ["blur", "change"]
          }
        ],

        pass: [
          {
            required: true,
            message: "Please type your Password.",
            trigger: "blur"
          }
        ]
      }
    };
  },

  computed: {
    ...mapState(["users"])
  },

  methods: {
    ...mapActions(["updateUsers"]),
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.updateUsers({
            Name: this.form.yourName,
            Email: this.form.email,
            Password: this.form.pass
          });
          // localStorage.Name = this.form.yourName;
          // localStorage.Email = this.form.email;
          alert("Your information has been submitted.");
        } else {
          console.log("Error: Information has not been submitted.");
          return false;
        }
      });
    }
  }
};
</script>

<style>
.signup h1 {
  text-align: center;
}
.box-card {
  width: 600px;
  height: 480px;
  margin: auto;
}
</style>
