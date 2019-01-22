<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide 
                        img-src="http://uupload.ir/files/pmp5_screenshot_(51).png"
      ><h1 style="color: black " >{{best}}</h1><h3  style="color: black ">the score : {{bestGameScore}}</h3>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="http://uupload.ir/files/pmp5_screenshot_(51).png">
        <h1 style="color: black ">the most played game</h1><h3 style="color: black ">{{mostplayed}} </h3>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="http://uupload.ir/files/pmp5_screenshot_(51).png">
      <h1 style="color: black ">the best new game</h1><h3 style="color: black ">{{bestnew}} </h3>
      </b-carousel-slide>

    </b-carousel>
    <b-card-group columns="">
      <div v-for="user in users" :key="user._id" :value="user._id" >
          <b-card >
              <h3 class="card-text" :href="'/user'+user._id">
                  {{user.name}} {{user.fName}}
              </h3>
              <p>score : {{user.score}}</p>
              <p>num of played games: {{}}</p>
              <p>num of designed games : {{}} </p>
          </b-card>
      </div>
      <!-- <p>{{this.$store.state.authUser.role}} </p> -->
    </b-card-group>
  </div>
</template>
<script src="node_modules/store/store.js"></script>
<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="js/base.js"></script>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      best : "the best game",
      bestGameScore : 0,
      mostplayed : 0,
      bestnew : 0,
      slide: 0,
      sliding: null
    }
  },
  async asyncData() {
            // We can return a Promise instead of calling the callback
            let logedins = (await axios.get('http://localhost:3001/onlines')).data;
            let users = {};
            Array.prototype.forEach.call(logedins, item => {
                users[item._id] = item;
            }) 

            return {
                users
            }
        },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>