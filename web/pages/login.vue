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
      <b-button type="submit" variant="primary">login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username : '',
        password : '',
        status : false
      },
      show: true
    }
  },
  methods: {
    async onSubmit (evt)
    {   form.status =true ;
        this.pickedText = "your poll has been successfuly added"
        await axios.post('http://localhost:3001/sendpoll', {
          data: this.form
        })
    },
    // {
    //   evt.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.password = '';
      this.form.username = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
