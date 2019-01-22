<template>
  <div style ="margin-left:20%;margin-top:2% ;width :50% " >

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="UserName:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Your Password:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>
      <div v-if="hide" style="color : red">*username or password is uncorrect</div>
      <br>
      <b-button type="submit" variant="primary">login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function(){
    return {
      form: {
        username : '',
        password : ''
      },
      show: true,
      hide : false
    }
  },
  methods: {
    async onSubmit (evt)
    {  evt.preventDefault();
      try {
        await this.$store.dispatch('login', {
          username: this.form.username,
          password: this.form.password
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
      console.log(this.$store.state.authUser)
      if (this.$store.state.authUser)
        this.$router.push('/')
      else{
          this.hide = true
          this.form.password = '';
          this.form.username = '';
        }
        
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.password = '';
      this.form.username = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.hide = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
