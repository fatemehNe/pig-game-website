<template>
    <div>
        <b-card-group columns="">
            <div v-for="user in users" :key="user._id" :value="user._id" >
                <b-card 
                        img-src="https://picsum.photos/300/300/?image=41"
                        img-alt="Img"
                        img-top>
                    <h3 class="card-text">
                        <nuxt-link :to="`/user/${user._id}`">{{user.name}}</nuxt-link>
                        
                    </h3>
                    <p>score : {{user.score}}</p>
                    <p>num of played games: {{}}</p>S
                    <p>num of designed games : {{}} </p>
                </b-card>
            </div>
        </b-card-group>
</div>

</template>
<script>
import axios from 'axios';
export default {
    data () {
      return {
        card_text:"ghj"
        }
     },
    async asyncData() {
            // We can return a Promise instead of calling the callback
            let returnedusers= (await axios.get('http://localhost:3001/getusers')).data;
            let users = {};
            Array.prototype.forEach.call(returnedusers, item => {
                users[item._id] = item;
            }) 

            return {
                users
            }
           
        },
}

</script>
