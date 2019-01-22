<template>
  <div style ="margin-top:2% ;width :50% " >
  <h1 style="color :#708090 ">"Make your own GAME !"</h1>
  <div style ="margin-left:20%;margin-top:5% ;width :50% " >
    
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="choose the numbers for clearing the current score:">
        <b-form-checkbox-group id="checkboxes1" name="flavour1" v-model="form.clearcur" :options="clearoptions">
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group id="exampleInputGroup8"
                    label="enter a name for your game:"
                    label-for="exampleInput8">
        <b-form-input id="exampleInput8"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter a name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="enter wining score:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="number"
                      v-model="form.winscore"
                      required
                      placeholder="Enter score">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="enter maximum rounds for a match:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="number"
                      v-model="form.rounds"
                      placeholder="Enter a number">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup5"
                    label="enter number of time for rolling a dice in one round:"
                    label-for="exampleInpu5">
        <b-form-input id="exampleInput5"
                      type="number"
                      v-model="form.dicesinround"
                      placeholder="Enter a number">
        </b-form-input>
      </b-form-group>
      <b-form-group label="choose number of dices :">
        <b-form-radio-group id="radios1" v-model="form.dices" :options="options" name="radioOpenions" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  </div>
</template>

<script>
const ObjectID = require('bson-objectid');
import axios from 'axios';

export default {
  data : function() {
    return {
      form: {
        name : '' ,
        clearcur : [],
        winscore : 100,
        rounds: Infinity,
        dices :2,
        dicesinround: Infinity,
        designer: this.$store.state.authUser._id
      },
      clearoptions: [
        { text: '1', value: 1},
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: '6', value: 6 }
      ],
      options: [
        { text: '1', value: 1},
        { text: '2', value: 2 },
        { text: '4', value: 4 }
      ],
      show: true
    }
  },
  methods: {
    async onSubmit (evt)
    {   evt.preventDefault();
        let game ={}
        this.pickedText = "your game has been successfuly added"
        await axios.post('http://localhost:3001/sendgame', {
          game: this.form
        })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.name = '',
      this.form.clearcur = [];
      this.form.winscore = 100;
      this.form.rounds = Infinity;
      this.form.dices = 2;
      this.form.dicesinround = Infinity;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

