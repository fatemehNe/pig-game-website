<template>
    <div>
        
        <b-card-group columns="">
            <div v-for="game in games" :key="game._id" :value="game._id" >
                <b-card 
                        img-src="https://picsum.photos/300/300/?image=30"
                        img-alt="Img"
                        img-top>
                    <h2 class="card-text">
                        <nuxt-link :to="`/game/${game._id}`">{{game.name}}</nuxt-link>
                    </h2>
                    <p>score : {{game.score}}</p>
                    <p>times played : {{game.runs}}</p>
                    <p>designer : {{game.designer}} </p>
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
            let returnedgames= (await axios.get('http://localhost:3001/getgames')).data;
            let games = {};
            Array.prototype.forEach.call(returnedgames, item => {
                games[item._id] = item;
            }) 

            return {
                games
            }// get the designer

           
        },
}

</script>
