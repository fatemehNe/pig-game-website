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
      <b-form-group id="exampleInputGroup2"
                    label="Your First Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter first name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup5"
                    label="Your Last Name:"
                    label-for="exampleInpu5">
        <b-form-input id="exampleInput5"
                      type="text"
                      v-model="form.fname"
                      required
                      placeholder="Enter last name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup4"
                    label="Your Email:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter Email">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Gender :">
        <b-form-radio-group id="radios1" v-model="form.gender" :options="options" name="radioOpenions" />
      </b-form-group>
      <div class="form-row">
            <div class="form-group col-md-6">
            <label for="birthday">Birthday</label>
            <input type="date" name="birth" class="form-control" id="birthday" placeholder="birthday" v-model="form.bdate">
            </div>
      </div>
      <b-button type="submit" variant="primary">Submit</b-button>
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
        name: '',
        fname : '',
        email: '',
        gender : '',
        bdate: Date
      },
      selectedDate: new Date(2018, 0, 10),
      selected: null,
      options: [
        { text: 'Male', value: 'first' },
        { text: 'Female', value: 'second' }
      ],
      show: true
    }
  },
  methods: {
    async onSubmit (evt)
    {
        this.pickedText = "your poll has been successfuly added"
        await axios.post('http://localhost:3001/sendpoll', {
          user: this.form
        })
    },
    // {
    //   evt.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.fname = '';
      this.form.gender = '';
      this.form.password = '';
      this.form.username = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<!-- b-form-1.vue -->