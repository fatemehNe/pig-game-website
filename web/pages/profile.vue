<template>
    <b-tabs style="margin-left=2%"> 
        <b-tab title="profile" active>
            <div style="margin-left : 8% ; margin-top : 5% ;width : 50%">
               
            <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="ghj" label="upload a profile picture" label-for="exampleInput8">
                    <br>
                    <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
                    <div class="mt-3">Selected file: {{file && file.name}}</div>
                </b-form-group>
                <b-form-group id="exampleInputGroup1"
                                label="UserName:"
                                label-for="exampleInput1">
                    <b-form-input id="exampleInput1"
                                type="text"
                                v-model="form.username"
                                required
                                placeholder=" username">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup3"
                                label="Your Password:"
                                label-for="exampleInput3">
                    <b-form-input id="exampleInput3"
                                type="text"
                                v-model="form.password"
                                required
                                placeholder=" password">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup2"
                                label="Your First Name:"
                                label-for="exampleInput2">
                    <b-form-input id="exampleInput2"
                                type="text"
                                v-model="form.name"
                                required
                                placeholder=" first name">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup5"
                                label="Your Last Name:"
                                label-for="exampleInpu5">
                    <b-form-input id="exampleInput5"
                                type="text"
                                v-model="form.fname"
                                required
                                placeholder=" last name">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="exampleInputGroup4"
                                label="Your Email:"
                                label-for="exampleInput4">
                    <b-form-input id="exampleInput4"
                                type="email"
                                v-model="form.email"
                                required
                                placeholder=" Email">
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
            </b-form>
            </div>
        </b-tab>
        <b-tab @click="mygames" title="my Games" >
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
                @sliding-end="onSlideEnd">
                <div v-for="game in games" :key="game._id" :value="game._id">

                    <b-carousel-slide img-src="http://uupload.ir/files/pmp5_screenshot_(51).png">
                        <h1 style="color: black " >{{game.name}}</h1>
                        <h3  style="color: black ">the score : {{game.score}}</h3>
                    </b-carousel-slide>
                </div>
            </b-carousel>

        </b-tab>
        <b-tab @click="frie" title="my friends" >
            <b-card-group columns="">
                <div v-for="user in users.friends" :key="user._id" :value="user._id" >
                    <b-card title="Title"
                            img-src="https://picsum.photos/300/300/?image=41"
                            img-alt="Img"
                            img-top>
                            <h1 style="color: black " >{{user._id}}</h1>
                    
                    </b-card>
                </div>
            </b-card-group>
        </b-tab>
        <b-tab title="my scores" >
            
        </b-tab>
    </b-tabs>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            file: null,
            file2: null,
            show: true,
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
            games:{},
            users:{}
            
        }
    },
    mounted() {

    },
    methods: {
        async mygames(evt)
        {   evt.preventDefault();
            this.games= (await axios.post('http://localhost:3001/usergames',
            {ID: this.$store.state.authUser._id})).data;
            console.log("ga",this.games)
            
        },
        async frie(evt)
        {   
            this.users= (await axios.post('http://localhost:3001/user',
            {ID: this.$store.state.authUser._id})).data;
            // for (x in users.friends){

            // } //get the friend name
        },
        
           
    }
}
</script>
