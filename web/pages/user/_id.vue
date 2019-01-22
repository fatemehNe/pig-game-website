<template>
    <b-tabs style="margin-left=2%"> 
        <b-tab title="informaton" v-on:click="info">
            <div style="margin-left : 8% ; margin-top : 5% ;width : 50%">
                <h4 style="color :violet">username : {{user.username}}  </h4 >
                <h4 style="color :violet" >name : {{user.name}} {{user.fName}} </h4 >
                <h4 style="color :violet" >email : {{user.email}} </h4 >
                <h4 style="color :violet" >gender : {{user.gender}} </h4 >
                <h4 style="color :violet">user's score :0</h4 >
            </div>
        </b-tab>
        <b-tab title="my Games" v-on:click="mygames" active>
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
t
                <div v-for="game in games" :key="game._id" :value="game._id">

                    <b-carousel-slide img-src="http://uupload.ir/files/pmp5_screenshot_(51).png">
                        <h1 style="color: black " >{{game.name}}</h1>
                        <h3  style="color: black ">the score : {{game.score}}</h3>
                    </b-carousel-slide>
                </div>
            </b-carousel>

        </b-tab>
        <b-tab title="my scores" >
            <b-card-group columns="">
                <div v-for="user in users" :key="user._id" :value="question._id" >
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                </div>
            </b-card-group>
        </b-tab>
        <b-tab title="friends" >
            <b-card-group columns="">
                <div v-for="user in users" :key="user._id" :value="question._id" >
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                        <p class="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                        <div slot="footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </b-card>
                </div>
            </b-card-group>
        </b-tab>
    </b-tabs>
</template>
<script>

import axios from 'axios';
export default {
    data () {
        return {
            show: true,
            id : '',
             user:{
            },
            games:{}
        }
    },
    mounted() {
        this.id =this.$route.params.id
        console.log("mount",this.id)
    },
    methods: {
        async info() {
        // We can return a Promise instead of calling the callback
        
        this.user =(await axios.post('http://localhost:3001/user', {ID : this.id})).data;
    
        },
        async mygames()
        {   
            this.games= (await axios.post('http://localhost:3001/usergames',
            {ID: this.id})).data;
            console.log("ga",this.games)
            
        },
    },
    
}
</script>
