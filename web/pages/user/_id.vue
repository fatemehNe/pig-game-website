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
        <b-tab title="my Games" >
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
                <b-carousel-slide caption="First slide"
                                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                    img-src="http://uupload.ir/files/pmp5_screenshot_(51).png"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                        src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                    ut lacus vel interdum.
                    </p>
                </b-carousel-slide>

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
        <b-tab title="my friends" >
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
            card_text:"ghj"
        }
    },
    mounted() {
        this.$route.parmas.id
    },
    methods: {
        async onSubmit (evt)
        {
            this.pickedText = "your poll has been successfuly added"
            await axios.post('http://localhost:3001/sendpoll', {
            user: this.form
            })
        }, 
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        },
        async asyncData() {
            // We can return a Promise instead of calling the callback
            let returnedusers= (await axios.get('http://localhost:3001/getgozine')).data;
            let users = {};

            Array.prototype.forEach.call(returnedusers, item => {
                users[item._id] = item;
            })

            return {
                users
            }
           
        },
    }
}
</script>
